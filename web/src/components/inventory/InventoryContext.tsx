import { onUse } from '../../dnd/onUse';
import { onGive } from '../../dnd/onGive';
import { onDrop } from '../../dnd/onDrop';
import { Items } from '../../store/items';
import { Locale } from '../../store/locale';
import { isSlotWithItem } from '../../helpers';
import { setClipboard } from '../../utils/setClipboard';
import { useAppDispatch, useAppSelector } from '../../store';
import React from 'react';
import { InventoryType } from '../../typings';
import { setItemAmount, setShiftPressed } from '../../store/inventory';
import { fetchNui } from '../../utils/fetchNui';
import { Menu } from '../utils/menu/Menu';

interface DataProps {
  action: string;
  component?: string;
  slot?: number;
  serial?: string;
  id?: number;
}

interface Button {
  label: string;
  index: number;
  group?: string;
}

interface Group {
  groupName: string | null;
  buttons: ButtonWithIndex[];
}

interface ButtonWithIndex extends Button {
  index: number;
}

interface GroupedButtons extends Array<Group> {}

const InventoryContext: React.FC = () => {
  const contextMenu = useAppSelector((state) => state.contextMenu);
  const item = contextMenu.item;
  const leftInventory = useAppSelector((state) => state.inventory.leftInventory);
  const dispatch = useAppDispatch();

  const [splitOpen, setSplitOpen] = React.useState(false);
  const [splitValue, setSplitValue] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Reset split UI when right-click focus changes or closes
    setSplitOpen(false);
    setSplitValue(null);
  }, [item && isSlotWithItem(item) ? `${item.name}-${item.slot}` : null]);

  const handleClick = (data: DataProps) => {
    if (!item) return;

    switch (data && data.action) {
      case 'use':
        onUse({ name: item.name, slot: item.slot });
        break;
      case 'give':
        onGive({ name: item.name, slot: item.slot });
        break;
      case 'drop':
        isSlotWithItem(item) && onDrop({ item: item, inventory: 'player' });
        break;
      case 'remove':
        fetchNui('removeComponent', { component: data?.component, slot: data?.slot });
        break;
      case 'removeAmmo':
        fetchNui('removeAmmo', item.slot);
        break;
      case 'copy':
        setClipboard(data.serial || '');
        break;
      case 'custom':
        fetchNui('useButton', { id: (data?.id || 0) + 1, slot: item.slot });
        break;
    }
  };

  const groupButtons = (buttons: any): GroupedButtons => {
    return buttons.reduce((groups: Group[], button: Button, index: number) => {
      if (button.group) {
        const groupIndex = groups.findIndex((group) => group.groupName === button.group);
        if (groupIndex !== -1) {
          groups[groupIndex].buttons.push({ ...button, index });
        } else {
          groups.push({
            groupName: button.group,
            buttons: [{ ...button, index }],
          });
        }
      } else {
        groups.push({
          groupName: null,
          buttons: [{ ...button, index }],
        });
      }
      return groups;
    }, []);
  };

  const renderCard = () => {
    if (!item || !isSlotWithItem(item)) return null;

    const definition = Items[item.name];
    const label = item.metadata?.label || definition?.label || item.name;
    const rarity = (item.metadata as any)?.rarity || (definition as any)?.rarity || 'Common';
    const type = (item.metadata as any)?.type || (definition as any)?.type || '';

    const units = item.count ?? 1;
    const totalWeightGrams = item.weight ?? 0;
    const totalWeightKg = totalWeightGrams >= 1000 ? totalWeightGrams / 1000 : totalWeightGrams / 1000;

    const handleSplitToggle = () => {
      if (!item.count || item.count <= 1) return;

      if (!splitOpen) {
        setSplitOpen(true);
        setSplitValue(Math.floor(item.count / 2));
      } else {
        setSplitOpen(false);
      }
    };

    const handleSplitConfirm = () => {
      if (!splitOpen || !item.count || item.count <= 1) return;
      if (splitValue === null) return;
      if (splitValue <= 0 || splitValue >= item.count) return;

      // Reuse existing amount-based split logic but target next pocket slot
      dispatch(setShiftPressed(false));
      dispatch(setItemAmount(splitValue));

      // Find next empty pocket slot after current slot (within player inventory)
      let targetSlotNumber: number | null = null;

      for (let s = item.slot + 1; s <= leftInventory.slots; s++) {
        const existing = leftInventory.items.find((slot) => slot.slot === s && (slot as any).name);
        if (!existing) {
          targetSlotNumber = s;
          break;
        }
      }

      if (!targetSlotNumber) {
        // No free slot, abort split
        return;
      }

      onDrop(
        {
          inventory: InventoryType.PLAYER,
          item: { name: item.name, slot: item.slot },
        },
        {
          inventory: InventoryType.PLAYER,
          item: { slot: targetSlotNumber },
        }
      );
      setSplitOpen(false);
    };

    return (
      <div className="ctx-card">
        <div className="ctx-card-header">
          <div className="ctx-card-units">
            {units} {Locale.ui_units || 'UNITS'} / {totalWeightKg.toFixed(1)} KG
          </div>
          <div className="ctx-card-name">{label}</div>
          <div className="ctx-card-rarity">{rarity}</div>
          {type && <div className="ctx-card-type">{type}</div>}
        </div>

        {splitOpen && item.count && item.count > 1 && (
          <div className="ctx-card-split">
            <input
              className="ctx-card-split-range"
              type="range"
              min={1}
              max={item.count - 1}
              value={splitValue ?? 1}
              onChange={(e) => setSplitValue(Number(e.target.value))}
            />
            <div className="ctx-card-split-values">
              {splitValue ?? 1} / {item.count - (splitValue ?? 1)}
            </div>
          </div>
        )}
        <div className="ctx-card-actions">
          <button className="ctx-card-btn" onClick={() => handleClick({ action: 'use' })}>
            <span className="ctx-card-btn-icon">
              <i className="fa-solid fa-hand-pointer" />
            </span>
            <span className="ctx-card-btn-label">{Locale.ui_use || 'USE'}</span>
          </button>
          <button className="ctx-card-btn" onClick={handleSplitToggle}>
            <span className="ctx-card-btn-icon">
              <i className="fa-solid fa-clone" />
            </span>
            <span className="ctx-card-btn-label">{Locale.ui_split || 'SPLIT'}</span>
          </button>
          {splitOpen && (
            <button className="ctx-card-btn" onClick={handleSplitConfirm}>
              <span className="ctx-card-btn-icon">
                <i className="fa-solid fa-check" />
              </span>
              <span className="ctx-card-btn-label">SLIP</span>
            </button>
          )}
          <button className="ctx-card-btn" onClick={() => handleClick({ action: 'give' })}>
            <span className="ctx-card-btn-icon">
              <i className="fa-solid fa-arrows-left-right" />
            </span>
            <span className="ctx-card-btn-label">{Locale.ui_give || 'DIVIDE'}</span>
          </button>
          <button className="ctx-card-btn" onClick={() => handleClick({ action: 'drop' })}>
            <span className="ctx-card-btn-icon">
              <i className="fa-solid fa-hand-holding" />
            </span>
            <span className="ctx-card-btn-label">{Locale.ui_drop || 'DROP'}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Menu>{renderCard()}</Menu>
    </>
  );
};

export default InventoryContext;
