import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Inventory, InventoryType } from '../../typings';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import { useAppSelector } from '../../store';
import { useIntersection } from '../../hooks/useIntersection';

const PAGE_SIZE = 30;

const InventoryGrid: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isBusy = useAppSelector((state) => state.inventory.isBusy);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage((prev) => ++prev);
    }
  }, [entry]);

  // Player inventory: split into pockets (hotbar-style) and backpack like in custom UI
  if (inventory.type === InventoryType.PLAYER) {
    const pocketsLimit = 6;

    // Bag levels based on our new slot system (total slots = pockets + backpack)
    // Default: 12 slots (6 pockets + 6 backpack = 1 row)
    // bag1: 18 slots (6 pockets + 12 backpack = 2 rows)
    // bag2: 24 slots (6 pockets + 18 backpack = 3 rows)
    // bag3: 30 slots (6 pockets + 24 backpack = 4 rows)
    // bag4: 36 slots (6 pockets + 30 backpack = 5 rows)
    // bag5: 42 slots (6 pockets + 36 backpack = 6 rows)
    const COLS = 6;
    const MAX_ROWS = 6;
    const MAX_BACKPACK_SLOTS = MAX_ROWS * COLS; // 36

    // How many backpack rows are currently unlocked based on server slot count
    const unlockedBackpackSlots = Math.max(0, inventory.slots - pocketsLimit);
    const unlockedRows = Math.ceil(unlockedBackpackSlots / COLS);

    // Next bag level for the locked overlay message
    const nextBagLevel =
      inventory.slots <= 12 ? 1 :
      inventory.slots <= 18 ? 2 :
      inventory.slots <= 24 ? 3 :
      inventory.slots <= 30 ? 4 :
      inventory.slots <= 36 ? 5 : null;

    const pocketItems = inventory.items.filter((item) => item.slot && item.slot <= pocketsLimit);
    const backpackItems = inventory.items.filter((item) => item.slot && item.slot > pocketsLimit);

    const pocketWeight = useMemo(() => getTotalWeight(pocketItems), [pocketItems]);
    const backpackWeight = useMemo(() => getTotalWeight(backpackItems), [backpackItems]);

    const pocketSlots = Array.from({ length: pocketsLimit }, (_, index) => {
      const slotNumber = index + 1;
      const existing = pocketItems.find((it) => it.slot === slotNumber);
      return existing || ({ slot: slotNumber } as typeof inventory.items[number]);
    });

    // Only render up to MAX_BACKPACK_SLOTS visual slots total
    const visualBackpackSlots = Array.from({ length: MAX_BACKPACK_SLOTS }, (_, index) => {
      const slotNumber = pocketsLimit + index + 1;
      const existing = backpackItems.find((it) => it.slot === slotNumber);
      return existing || ({ slot: slotNumber } as typeof inventory.items[0]);
    });

    const pocketSlotsVertical = Array.from({ length: pocketsLimit }, (_, index) => ({
      slot: index + 1,
    })) as typeof inventory.items;

    return (
      <div className="player-inventory-column" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
        <div className="pockets-vertical">
          {pocketSlotsVertical.map((slot) => (
            <InventorySlot
              key={`${inventory.type}-${inventory.id}-pocket-${slot.slot}`}
              item={slot}
              inventoryType={inventory.type}
              inventoryGroups={inventory.groups}
              inventoryId={inventory.id}
              maxSlots={inventory.slots}
            />
          ))}
        </div>

        <div className="player-inventory-main">
          <div className="header">
            <div className="esc-back">
              <strong>ESC</strong> BACK
            </div>
            <h1>INVENTORY <i className="fa-solid fa-bag-shopping" style={{ color: 'rgb(255, 0, 0)' }}></i></h1>
            <p className="subtitle">
              Your personal belongings.
              <br />
              Drag items to rearrange.
            </p>
          </div>

          <div className="section">
            <div className="section-header">
              <h2>Your pockets</h2>
              <div className="weight-badge">
                <span>{(pocketWeight / 1000).toFixed(1)}</span>
                {inventory.maxWeight ? `/${(inventory.maxWeight / 1000).toFixed(0)} KG` : ' KG'}
              </div>
            </div>
            <div className="grid pockets-grid">
              {pocketSlots.map((slot) => (
                <InventorySlot
                  key={`${inventory.type}-${inventory.id}-pocket-row-${slot.slot}`}
                  item={slot}
                  inventoryType={inventory.type}
                  inventoryGroups={inventory.groups}
                  inventoryId={inventory.id}
                  maxSlots={inventory.slots}
                />
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <h2>Your backpack</h2>
              <div className="weight-badge">
                <span>{(backpackWeight / 1000).toFixed(1)}</span>
                {inventory.maxWeight ? `/${(inventory.maxWeight / 1000).toFixed(0)} KG` : ' KG'}
              </div>
            </div>
            <p className="subtitle backpack-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="backpack-locked-area-scroller">
              <div className="backpack-locked-area">
                <div className="grid backpack-grid">
                  {visualBackpackSlots.map((item) => (
                    <InventorySlot
                      key={`${inventory.type}-${inventory.id}-${item.slot}`}
                      item={item}
                      inventoryType={inventory.type}
                      inventoryGroups={inventory.groups}
                      inventoryId={inventory.id}
                      maxSlots={inventory.slots}
                    />
                  ))}
                </div>
                {nextBagLevel !== null && (
                  <div
                    className="backpack-footer"
                    style={{
                      top: `${((unlockedRows + (MAX_ROWS - unlockedRows) / 2) / MAX_ROWS) * 100}%`
                    }}
                  >
                    <h3>BACKPACK</h3>
                    <p>
                      To unlock more space in your inventory,
                      <br />
                      purchase a <span className="highlight">level {nextBagLevel} backpack</span>. It is sold in{' '}
                      <span className="highlight">stores 24/7</span>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default grid for non-player inventories (shops, stashes, etc.)
  const weight = useMemo(
    () => (inventory.maxWeight !== undefined ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0),
    [inventory.maxWeight, inventory.items]
  );

  return (
    <div className="inventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
      <div className="section-header">
        <h2>{inventory.label}</h2>
        <div className="weight-badge">
          <span>{(weight / 1000).toFixed(1)}</span>
          {inventory.maxWeight ? `/${(inventory.maxWeight / 1000).toFixed(0)} KG` : ' KG'}
        </div>
      </div>
      <div className="inventory-grid-container" ref={containerRef}>
        {inventory.items.slice(0, (page + 1) * PAGE_SIZE).map((item, index) => (
          <InventorySlot
            key={`${inventory.type}-${inventory.id}-${item.slot}`}
            item={item}
            ref={index === (page + 1) * PAGE_SIZE - 1 ? ref : null}
            inventoryType={inventory.type}
            inventoryGroups={inventory.groups}
            inventoryId={inventory.id}
          />
        ))}
      </div>
    </div>
  );
};

export default InventoryGrid;
