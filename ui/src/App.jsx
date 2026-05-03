import React, { useState, useEffect } from 'react';
import './index.css';

const Icons = {
  Trash:       "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  Mask:        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-9c.83 0 1.5-.67 1.5-1.5S10.33 8 9.5 8 8 8.67 8 9.5 8.67 11 9.5 11zm5 0c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5 13.67 11 14.5 11zm-5 4c1.33 0 2.5-.67 3.32-1.68l-3.32-3.32L9.18 13.32C10 14.33 11.17 15 12.5 15z",
  Weapon:      "M21 11.5v-1c0-.83-.67-1.5-1.5-1.5H16v-2c0-.55-.45-1-1-1h-2.5C11.67 6 11 6.67 11 7.5v1H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h3.5v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2h2.5c.55 0 1-.45 1-1v-2h4c.28 0 .5-.22.5-.5z",
  Ammo:        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  Jacket:      "M20.57 4.16l-3.21-1.61c-.53-.26-1.16-.16-1.59.27L12 6.5l-3.77-3.68c-.43-.43-1.06-.53-1.59-.27L3.43 4.16C2.55 4.6 2 5.51 2 6.5V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5c0-.99-.55-1.9-1.43-2.34z",
  Armor:       "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
  Shirt:       "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8h-.01z",
  Shoes:       "M19 19h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H9v-2h2v2zm-4 0H5v-2h2v2z",
  Hat:         "M12 2a5 5 0 00-5 5H4c-1.1 0-2 .9-2 2v2h20V9c0-1.1-.9-2-2-2h-3a5 5 0 00-5-5z",
  Glasses:     "M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",
  Watch:       "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23-6-3.6Z",
  Bag:         "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z",
  Pants:       "M20 4H4c-1.1 0-2 .9-2 2v14h7v-9h6v9h7V6c0-1.1-.9-2-2-2z",
  Earrings:    "M12 2C10.34 2 9 3.34 9 5c0 1.31.84 2.42 2 2.83V11h2V7.83c1.16-.41 2-1.52 2-2.83 0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1 9h2v7h-2z",
  Necklace:    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  Accessories: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
  Gloves:      "M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z",
  Pickup:      "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5C3.9 3 3 3.9 3 5v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
};

const SvgIcon = ({ name }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d={Icons[name] || ''} />
  </svg>
);

function App() {
  const [visible, setVisible] = useState(false);
  const [inventory, setInventory] = useState({});
  const [itemsData, setItemsData] = useState({});
  const [config, setConfig] = useState({});
  const [stats, setStats] = useState({ health: 60, stamina: 80, thirst: 40 });
  const [groundItems, setGroundItems] = useState([]);
  const [hasNearbyGroundItems, setHasNearbyGroundItems] = useState(false);
  const [visualOutfitting, setVisualOutfitting] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [splitMenu, setSplitMenu] = useState(null);

  // ── Dev/mock data ──────────────────────────────────────────
  useEffect(() => {
    if (!window.invokeNative) {
      setVisible(true);
      setConfig({
        PocketsSlots: 6,
        BackpackSlots: 24,
        BackpackUnlockedRows: 1,
        MaxPocketsWeight: 10,
        MaxBackpackWeight: 20
      });
      const mockItems = {
        nail:    { label: 'Nail',    image: 'nail',    weight: 0.1, rarity: 'Common', description: 'A simple iron nail.', useable: false },
        diamond: { label: 'Diamond', image: 'diamond', weight: 0.5, rarity: 'Rare',   description: 'A precious gemstone.', useable: false },
        water:   { label: 'Water',   image: 'water',   weight: 0.2, rarity: 'Common', description: 'Purified spring water.', useable: true },
      };
      setItemsData(mockItems);
      setInventory({
        "1": { name: "nail",    count: 9 },
        "2": { name: "diamond", count: 3 },
      });
      // Dev: no nearby drops by default → shows outfit panel
      setHasNearbyGroundItems(false);
      setGroundItems([]);
    }
  }, []);

  // ── NUI message handler ───────────────────────────────────
  useEffect(() => {
    const handleMessage = (event) => {
      const { type, action, status, inventory: inv, itemsData: items, config: cfg,
              stats: st, groundItems: gi, hasNearbyGroundItems: hasNearby, data } = event.data;

      // Handle 'action' messages from ox_inventory
      if (action === 'refreshSlots') {
        // Slot count was updated - need to refresh the UI
        if (data && data.slotsData) {
          console.log('[Bag System UI] Received refreshSlots:');
          console.log('  - inventoryId:', data.slotsData.inventoryId);
          console.log('  - New total slots:', data.slotsData.slots);
          console.log('  - Current config.BackpackSlots:', config.BackpackSlots);
          console.log('  - Current config.PocketsSlots:', config.PocketsSlots);
          
          // Update config with new TOTAL slot count
          setConfig(prev => {
            const newConfig = {
              ...prev,
              BackpackSlots: data.slotsData.slots
            };
            console.log('  - Updated config:', newConfig);
            return newConfig;
          });
        }
        return;
      }

      if (type === 'ui') {
        console.log('[Bag System UI] Received ui message:');
        console.log('  - status:', status);
        console.log('  - config:', cfg);
        
        setVisible(status);
        if (status) {
          setInventory(inv || {});
          setItemsData(items || {});
          setConfig(cfg || {});
          if (st) setStats(st);
          setGroundItems(gi || []);
          setHasNearbyGroundItems(!!hasNearby);
        } else {
          setGroundItems([]);
          setHasNearbyGroundItems(false);
        }
      } else if (type === 'updateInventory') {
        setInventory(inv || {});
        setItemsData(items || {});
        setConfig(cfg || {});
      } else if (type === 'updateStats') {
        if (st) setStats(st);
      } else if (type === 'updateGroundItems') {
        setGroundItems(gi || []);
        setHasNearbyGroundItems(!!hasNearby);
      }
    };

    window.addEventListener('message', handleMessage);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        fetch(`https://${window.GetParentResourceName ? window.GetParentResourceName() : 'grandinv'}/hide`, {
          method: 'POST', body: JSON.stringify({}),
        }).catch(() => {});
        setVisible(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  if (!visible) return null;

  const pocketsCols = config.PocketsSlots || 6;
  const backpackCols = 6;
  
  // Total slots includes pockets + backpack
  // BackpackSlots in config is actually TOTAL slots from server
  const totalSlots = config.BackpackSlots || 18; // Default to 18 (6 pockets + 12 backpack)
  const pocketsSlots = config.PocketsSlots || 6;
  
  // Calculate actual backpack slots
  const actualBackpackSlots = totalSlots - pocketsSlots;
  const backpackRows = Math.ceil(actualBackpackSlots / backpackCols);
  const backpackTotal = actualBackpackSlots;
  
  // All backpack rows are unlocked (server controls this)
  const unlockedRows = backpackRows;
  
  // Get the current bag name for display based on total slots
  const getCurrentBagName = () => {
    const slotsToBagName = {
      42: 'Level 5 Backpack', // 6 pockets + 36 backpack
      36: 'Level 4 Backpack', // 6 pockets + 30 backpack
      30: 'Level 3 Backpack', // 6 pockets + 24 backpack
      24: 'Level 2 Backpack', // 6 pockets + 18 backpack
      18: 'Level 1 Backpack', // 6 pockets + 12 backpack
      12: 'Level 0 (Default)', // 6 pockets + 6 backpack (but we use 2 rows = 12)
    };
    
    return slotsToBagName[totalSlots] || `Level 0 (Default)`;
  };

  // ── Context menu ──────────────────────────────────────────
  const handleContextMenu = (e, slotId, isGround = false, groundId = null) => {
    e.preventDefault();
    e.stopPropagation();

    if (isGround) {
      const g = groundItems.find(x => x.id === groundId);
      if (!g) return;
      const meta = itemsData[g.name];
      if (!meta) return;
      setContextMenu({ x: e.clientX, y: e.clientY, slotId: null, item: { name: g.name, count: g.count }, meta, isGround: true, groundId });
    } else {
      const item = inventory[slotId];
      if (!item) return;
      const meta = itemsData[item.name];
      if (!meta) return;
      setContextMenu({ x: e.clientX, y: e.clientY, slotId, item, meta, isGround: false, groundId: null });
    }
    setSplitMenu(null);
  };

  const closeMenus = () => { setContextMenu(null); setSplitMenu(null); };

  // ── NUI fetch helper ──────────────────────────────────────
  const nuiFetch = (endpoint, data) => {
    if (window.invokeNative) {
      fetch(`https://${window.GetParentResourceName()}/` + endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {});
    }
  };

  // ── Actions ───────────────────────────────────────────────
  const handleUse = () => {
    nuiFetch('useItem', { slot: contextMenu.slotId });
    closeMenus();
  };

  const handleDrop = () => {
    nuiFetch('dropItem', {
      slot: contextMenu.slotId,
      itemName: contextMenu.item.name,
      itemLabel: contextMenu.meta.label,
    });
    if (!window.invokeNative) {
      setInventory(prev => { const n = { ...prev }; delete n[contextMenu.slotId]; return n; });
    }
    closeMenus();
  };

  const handlePickup = (groundId) => {
    nuiFetch('pickupGroundItem', { groundId });
    if (!window.invokeNative) {
      setGroundItems(prev => prev.filter(g => g.id !== groundId));
    }
    closeMenus();
  };

  const handleSplitConfirm = () => {
    if (!splitMenu) return;
    nuiFetch('splitItem', { slot: splitMenu.slotId, amount: splitMenu.value });
    if (!window.invokeNative) {
      setInventory(prev => {
        const n = { ...prev };
        if (n[splitMenu.slotId]) {
          n[splitMenu.slotId] = { ...n[splitMenu.slotId], count: n[splitMenu.slotId].count - splitMenu.value };
        }
        return n;
      });
    }
    closeMenus();
  };

  // ── Drag & Drop ───────────────────────────────────────────
  const handleDragStart = (e, slotId) => {
    e.dataTransfer.setData('text/plain', slotId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragDrop = (e, toSlot) => {
    e.preventDefault();
    const fromSlot = e.dataTransfer.getData('text/plain');
    if (!fromSlot || fromSlot === toSlot) return;

    // Check if target slot is locked based on server's slot count
    const pocketsSlots = config.PocketsSlots || 6;
    const totalSlots = config.BackpackSlots || 24;
    const toSlotNum = parseInt(toSlot, 10);
    
    if (!isNaN(toSlotNum) && toSlotNum > totalSlots) {
      // Trying to drop into a slot that doesn't exist according to server
      if (window.invokeNative) {
        console.warn('Cannot move item to locked slot - slot number exceeds total slots');
      }
      return;
    }

    if (window.invokeNative) {
      fetch(`https://${window.GetParentResourceName ? window.GetParentResourceName() : 'grandinv'}/moveItem`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromSlot, toSlot }),
      }).catch(() => {});
    } else {
      setInventory(prev => {
        const next = { ...prev };
        const temp = next[toSlot];
        if (next[fromSlot]) {
          next[toSlot] = next[fromSlot];
          if (temp) {
            next[fromSlot] = temp;
          } else {
            delete next[fromSlot];
          }
        }
        return next;
      });
    }
  };

  // ── Slot renderers ────────────────────────────────────────
  const getImgUrl = (image) =>
    window.invokeNative
      ? `nui://${window.GetParentResourceName()}/shared/icons/${image}`
      : `../shared/icons/${image}`;

  const renderSlot = (slotIndex, isBackpack = false) => {
    const stringId = String(isBackpack ? config.PocketsSlots + slotIndex + 1 : slotIndex + 1);
    const itemInfo = inventory[stringId];

    if (!itemInfo) {
      return (
        <div key={stringId} className="slot empty"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, stringId)} />
      );
    }

    const metadata = itemsData[itemInfo.name];
    if (!metadata) return <div key={stringId} className="slot empty" />;

    return (
      <div
        key={stringId}
        className="slot"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, stringId)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDragDrop(e, stringId)}
        onContextMenu={(e) => handleContextMenu(e, stringId)}
      >
        <div className="item-content">
          <span className="item-count">{itemInfo.count}x</span>
          <img src={getImgUrl(metadata.image)} className="real-img" alt={metadata.label} />
          <span className="item-name">{metadata.label}</span>
        </div>
      </div>
    );
  };

  const renderHotbarSlot = (num) => {
    const stringId = `hotbar-${num}`;
    const itemInfo = inventory[stringId];

    if (!itemInfo) {
      return (
        <div key={stringId} className="slot empty"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, stringId)}>
          <div className="hotbar-num">{num}</div>
        </div>
      );
    }

    const metadata = itemsData[itemInfo.name];
    if (!metadata) {
      return (
        <div key={stringId} className="slot empty"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, stringId)}>
          <div className="hotbar-num">{num}</div>
        </div>
      );
    }

    return (
      <div
        key={stringId}
        className="slot"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, stringId)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDragDrop(e, stringId)}
        onContextMenu={(e) => handleContextMenu(e, stringId)}
      >
        <div className="hotbar-num">{num}</div>
        <div className="item-content">
          <span className="item-count">{itemInfo.count}x</span>
          <img src={getImgUrl(metadata.image)} className="real-img" alt={metadata.label} />
          <span className="item-name">{metadata.label}</span>
        </div>
      </div>
    );
  };

  // Ground item slot — click to pick up, right-click for context
  const renderGroundSlot = (groundItem) => {
    const metadata = itemsData[groundItem.name];
    if (!metadata) return null;
    return (
      <div
        key={`ground-${groundItem.id}`}
        className="slot ground-slot"
        onContextMenu={(e) => handleContextMenu(e, null, true, groundItem.id)}
        onClick={() => handlePickup(groundItem.id)}
        title={`Click to pick up • Dropped by ${groundItem.droppedBy}`}
      >
        <div className="item-content">
          <span className="item-count">{groundItem.count}x</span>
          <img src={getImgUrl(metadata.image)} className="real-img" alt={metadata.label} />
          <span className="item-name">{metadata.label}</span>
        </div>
        <div className="ground-pickup-hint">
          <SvgIcon name="Pickup" />
        </div>
      </div>
    );
  };

  // Ground panel constants
  const groundCols = 6;
  const groundRows = 5;
  const groundTotal = groundCols * groundRows;

  const getWeight = (isBackpack) => {
    let w = 0;
    Object.keys(inventory).forEach(key => {
      if (key.startsWith('hotbar-')) {
        if (!isBackpack) {
          const item = inventory[key];
          const data = itemsData[item.name];
          if (data) w += data.weight * item.count;
        }
        return;
      }
      const id = parseInt(key, 10);
      if (isNaN(id)) return;
      const inBackpack = id > config.PocketsSlots;
      if ((isBackpack && inBackpack) || (!isBackpack && !inBackpack)) {
        const item = inventory[key];
        const data = itemsData[item.name];
        if (data) w += data.weight * item.count;
      }
    });
    return w.toFixed(1);
  };

  return (
    <div className="app-container" onClick={closeMenus} onContextMenu={closeMenus}>

      {/* Far Left Column: Vertical Hotbar */}
      <div className="vertical-hotbar" onClick={e => e.stopPropagation()}>
        {[1, 2, 3, 4, 5].map(num => renderHotbarSlot(num))}
      </div>

      {/* LEFT COLUMN: Player Inventory */}
      <div className="left-panel" onClick={e => e.stopPropagation()}>
        <div className="header">
          <div className="esc-back"><strong>ESC</strong> BACK</div>
          <h1>INVENTORY <i className="fa-solid fa-bag-shopping" style={{color: 'rgb(255, 0, 0)'}}></i></h1>
          <p className="subtitle">
            Your personal belongings.<br />
            Drag items to rearrange.
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Your pockets</h2>
            <div className="weight-badge"><span>{getWeight(false)}</span>/{config.MaxPocketsWeight} KG</div>
          </div>
          <div className="grid pockets-grid" style={{ gridTemplateColumns: `repeat(${pocketsCols}, 1fr)` }}>
            {Array.from({ length: pocketsCols }).map((_, i) => renderSlot(i, false))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Your backpack ({getCurrentBagName()})</h2>
            <div className="weight-badge"><span>{getWeight(true)}</span>/{config.MaxBackpackWeight} KG</div>
          </div>
          <p className="subtitle backpack-subtitle">
            {unlockedRows} of {backpackRows} rows unlocked • {unlockedRows * backpackCols} of {backpackTotal} slots available
          </p>

          <div className="grid backpack-grid" style={{ gridTemplateColumns: `repeat(${backpackCols}, 1fr)` }}>
            {Array.from({ length: unlockedRows * backpackCols }).map((_, i) => renderSlot(i, true))}

            <div className="locked-area" style={{ gridColumn: `span ${backpackCols}`, gridRow: `span ${backpackRows - unlockedRows}` }}>
              <div className="grid locked-slots-bg" style={{ gridTemplateColumns: `repeat(${backpackCols}, 1fr)`, gridTemplateRows: `repeat(${backpackRows - unlockedRows}, 1fr)` }}>
                {Array.from({ length: (backpackRows - unlockedRows) * backpackCols }).map((_, i) => (
                  <div key={`locked-bg-${i}`} className="slot locked"></div>
                ))}
              </div>
              <div className="locked-overlay">
                <h3>BACKPACK LOCKED</h3>
                <p>
                  To unlock more space in your inventory,<br />
                  you need a <span className="highlight">higher level backpack</span> in your inventory.<br />
                  Backpacks are sold in <span className="highlight">stores 24/7</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-trash">
          <SvgIcon name="Trash" />
        </div>
      </div>

      {/* Center Spacer */}
      <div className="center-spacer"></div>

      {/* RIGHT COLUMN: conditional — outfit panel OR ground items */}
      <div className="right-panel" onClick={e => e.stopPropagation()}>
        {hasNearbyGroundItems ? (
          /* ── Ground items view ───────────────────────────── */
          <>
            <div className="header">
              <div className="esc-back"><strong>NEARBY</strong> GROUND</div>
              <h1>GROUND 📦</h1>
              <p className="subtitle">
                Items dropped nearby.<br />
                Click or right-click to pick up.
              </p>
            </div>
            <div className="section">
              <div className="section-header">
                <h2>Items on ground</h2>
                <div className="weight-badge ground-count-badge">
                  <span>{groundItems.length}</span> item{groundItems.length !== 1 ? 's' : ''}
                </div>
              </div>
              <div className="grid" style={{ gridTemplateColumns: `repeat(${groundCols}, 1fr)` }}>
                {groundItems.slice(0, groundTotal).map(g => renderGroundSlot(g))}
                {Array.from({ length: Math.max(0, groundTotal - groundItems.length) }).map((_, i) => (
                  <div key={`ground-empty-${i}`} className="slot empty ground-empty" />
                ))}
              </div>
            </div>
          </>
        ) : (
          /* ── Outfit / clothing view ──────────────────────── */
          <>
            {visualOutfitting ? (
              <div className="outfit-grid-panel">
                <h2 className="outfit-grid-title">PUT ON YOU</h2>
                <div className="outfit-grid">
                  {/* Row 1: Head / Face */}
                  <div className="outfit-grid-slot"><SvgIcon name="Mask" /><span className="lbl">Mask</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Hat" /><span className="lbl">Hat</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Glasses" /><span className="lbl">Glasses</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Earrings" /><span className="lbl">Earrings</span></div>

                  {/* Row 2: Upper Body */}
                  <div className="outfit-grid-slot"><SvgIcon name="Jacket" /><span className="lbl">Jacket</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Shirt" /><span className="lbl">T-Shirt</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Armor" /><span className="lbl">Armour</span></div>
                  <div className="outfit-grid-slot empty"></div>

                  {/* Row 3: Accessories */}
                  <div className="outfit-grid-slot"><SvgIcon name="Necklace" /><span className="lbl">Necklace</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Accessories" /><span className="lbl">Accessory</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Watch" /><span className="lbl">Watch</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Gloves" /><span className="lbl">Gloves</span></div>

                  {/* Row 4: Weapon */}
                  <div className="outfit-grid-slot"><SvgIcon name="Weapon" /><span className="lbl">Weapon</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Ammo" /><span className="lbl">Ammo</span></div>
                  <div className="outfit-grid-slot empty"></div>
                  <div className="outfit-grid-slot empty"></div>

                  {/* Row 5: Lower Body */}
                  <div className="outfit-grid-slot"><SvgIcon name="Bag" /><span className="lbl">Bag</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Pants" /><span className="lbl">Pants</span></div>
                  <div className="outfit-grid-slot"><SvgIcon name="Shoes" /><span className="lbl">Shoes</span></div>
                  <div className="outfit-grid-slot empty"></div>
                </div>
              </div>
            ) : (
              <>
                <img src={getImgUrl('ped.png')} className="character-model" alt="character" />
                <div className="equip-layout">
                  {/* LEFT SIDE */}
                  <div className="equip-col col-l">
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Mask" /></div>
                      <div className="connector-line left mask-line"></div>
                    </div>
                    
                    <div className="equip-row">
                      <div className="equip-slot-container">
                        <div className="equip-slot small"><SvgIcon name="Weapon" /></div>
                        <div className="connector-line left weapon-line"></div>
                      </div>
                      <div className="equip-slot-container">
                        <div className="equip-slot"><SvgIcon name="Jacket" /></div>
                        <div className="connector-line left jacket-line"></div>
                      </div>
                    </div>
                    
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Armor" /></div>
                      <div className="connector-line left armor-line"></div>
                    </div>
                    
                    <div className="equip-spacer box"></div>
                    
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Shirt" /></div>
                      <div className="connector-line left shirt-line"></div>
                    </div>
                    
                    <div className="equip-spacer big"></div>
                    
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Shoes" /></div>
                      <div className="connector-line left shoes-line"></div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="equip-col col-r">
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Hat" /></div>
                      <div className="connector-line right hat-line"></div>
                    </div>
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Glasses" /></div>
                      <div className="connector-line right glasses-line"></div>
                    </div>
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Watch" /></div>
                      <div className="connector-line right watch-line"></div>
                    </div>
                    
                    <div className="equip-spacer box"></div>
                    
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Bag" /></div>
                      <div className="connector-line right bag-line"></div>
                    </div>
                    
                    <div className="equip-spacer box"></div>
                    
                    <div className="equip-slot-container">
                      <div className="equip-slot"><SvgIcon name="Pants" /></div>
                      <div className="connector-line right pants-line"></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* View Mode Toggle */}
            <div className="visual-toggle-container">
              <span className="visual-toggle-desc">Visual Outfitting</span>
              <button 
                className={`visual-toggle-btn ${visualOutfitting ? 'on' : 'off'}`}
                onClick={() => setVisualOutfitting(!visualOutfitting)}
              >
                {visualOutfitting ? 'ON' : 'OFF'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right-Click Context Menu */}
      {contextMenu && (
        <div className="ctx-overlay" onClick={closeMenus} onContextMenu={closeMenus}>
          <div
            className="ctx-menu"
            style={{ left: contextMenu.x, top: contextMenu.y }}
            onClick={e => e.stopPropagation()}
          >
            <div className="ctx-header">
              <div className="ctx-item-name">{contextMenu.meta.label}</div>
              <div className={`ctx-rarity rarity-${(contextMenu.meta.rarity || 'Common').toLowerCase()}`}>
                ● {contextMenu.meta.rarity || 'Common'}
              </div>
              <div className="ctx-info">
                {contextMenu.item.count} units / {((contextMenu.meta.weight || 0) * contextMenu.item.count).toFixed(1)} kg
              </div>
              {contextMenu.meta.description && (
                <div className="ctx-desc">{contextMenu.meta.description}</div>
              )}
            </div>
            <div className="ctx-actions">
              {/* Player inventory actions */}
              {!contextMenu.isGround && contextMenu.meta.useable && (
                <button className="ctx-btn ctx-use" onClick={handleUse}>
                  <span className="ctx-btn-icon">✋</span> USE
                </button>
              )}
              {!contextMenu.isGround && contextMenu.item.count > 1 && (
                <button className="ctx-btn ctx-split" onClick={() => {
                  setSplitMenu({ slotId: contextMenu.slotId, max: contextMenu.item.count - 1, value: 1 });
                }}>
                  <span className="ctx-btn-icon">⊞</span> SPLIT
                </button>
              )}
              {!contextMenu.isGround && (
                <button className="ctx-btn ctx-drop" onClick={handleDrop}>
                  <span className="ctx-btn-icon">↓</span> DROP
                </button>
              )}
              {/* Ground item action */}
              {contextMenu.isGround && (
                <button className="ctx-btn ctx-use" onClick={() => handlePickup(contextMenu.groundId)}>
                  <span className="ctx-btn-icon">📥</span> PICK UP
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Split Sub-Menu */}
      {splitMenu && contextMenu && (
        <div className="ctx-overlay" onClick={closeMenus} onContextMenu={closeMenus}>
          <div
            className="ctx-menu split-menu"
            style={{ left: contextMenu.x, top: contextMenu.y }}
            onClick={e => e.stopPropagation()}
          >
            <div className="ctx-header">
              <div className="ctx-item-name">Split Stack</div>
              <div className="ctx-info">Choose amount to split off</div>
            </div>
            <div className="split-body">
              <input
                type="range"
                min={1}
                max={splitMenu.max}
                value={splitMenu.value}
                onChange={e => setSplitMenu(prev => ({ ...prev, value: parseInt(e.target.value) }))}
                className="split-slider"
              />
              <div className="split-value">{splitMenu.value} / {splitMenu.max}</div>
            </div>
            <div className="ctx-actions">
              <button className="ctx-btn ctx-use" onClick={handleSplitConfirm}>CONFIRM</button>
              <button className="ctx-btn ctx-drop" onClick={closeMenus}>CANCEL</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
