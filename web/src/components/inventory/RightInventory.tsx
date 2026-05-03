import InventoryGrid from './InventoryGrid';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';
import { isSlotWithItem } from '../../helpers';

const RightInventory: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);

  // Only show the right-side inventory when it has at least one real item
  // (e.g. when you're near a dropped/secondary inventory). Otherwise hide it.
  const hasRealItem =
    rightInventory &&
    Array.isArray(rightInventory.items) &&
    rightInventory.items.some((slot) => isSlotWithItem(slot));

  if (!hasRealItem) {
    return null;
  }

  return <InventoryGrid inventory={rightInventory} />;
};

export default RightInventory;
