return {
	['testburger'] = {
		label = 'Test Burger',
		weight = 220,
		degrade = 60,
		client = {
			image = 'burger_chicken.png',
			status = { hunger = 200000 },
			anim = 'eating',
			prop = 'burger',
			usetime = 2500,
			export = 'ox_inventory_examples.testburger'
		},
		server = {
			export = 'ox_inventory_examples.testburger',
			test = 'what an amazingly delicious burger, amirite?'
		},
		buttons = {
			{
				label = 'Lick it',
				action = function(slot)
					print('You licked the burger')
				end
			},
			{
				label = 'Squeeze it',
				action = function(slot)
					print('You squeezed the burger :(')
				end
			},
			{
				label = 'What do you call a vegan burger?',
				group = 'Hamburger Puns',
				action = function(slot)
					print('A misteak.')
				end
			},
			{
				label = 'What do frogs like to eat with their hamburgers?',
				group = 'Hamburger Puns',
				action = function(slot)
					print('French flies.')
				end
			},
			{
				label = 'Why were the burger and fries running?',
				group = 'Hamburger Puns',
				action = function(slot)
					print('Because they\'re fast food.')
				end
			}
		},
		consume = 0.3
	},

	['bandage'] = {
		label = 'Bandage',
		weight = 115,
		client = {
			anim = { dict = 'missheistdockssetup1clipboard@idle_a', clip = 'idle_a', flag = 49 },
			prop = { model = `prop_rolled_sock_02`, pos = vec3(-0.14, -0.14, -0.08), rot = vec3(-50.0, -50.0, 0.0) },
			disable = { move = true, car = true, combat = true },
			usetime = 2500,
		}
	},

	['black_money'] = {
		label = 'Dirty Money',
	},

	['burger'] = {
		label = 'Burger',
		weight = 220,
		client = {
			status = { hunger = 200000 },
			anim = 'eating',
			prop = 'burger',
			usetime = 2500,
			notification = 'You ate a delicious burger'
		},
	},

	['sprunk'] = {
		label = 'Sprunk',
		weight = 350,
		client = {
			status = { thirst = 200000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_ld_can_01`, pos = vec3(0.01, 0.01, 0.06), rot = vec3(5.0, 5.0, -180.5) },
			usetime = 2500,
			notification = 'You quenched your thirst with a sprunk'
		}
	},

	['parachute'] = {
		label = 'Parachute',
		weight = 8000,
		stack = false,
		client = {
			anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
			usetime = 1500
		}
	},

	['garbage'] = {
		label = 'Garbage',
	},

	['paperbag'] = {
		label = 'Paper Bag',
		weight = 1,
		stack = false,
		close = false,
		consume = 0
	},

	['identification'] = {
		label = 'Identification',
		client = {
			image = 'card_id.png'
		}
	},

	['panties'] = {
		label = 'Knickers',
		weight = 10,
		consume = 0,
		client = {
			status = { thirst = -100000, stress = -25000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_cs_panties_02`, pos = vec3(0.03, 0.0, 0.02), rot = vec3(0.0, -13.5, -1.5) },
			usetime = 2500,
		}
	},

	['lockpick'] = {
		label = 'Lockpick',
		weight = 160,
	},

	['phone'] = {
		label = 'Phone',
		weight = 190,
		stack = false,
		consume = 0,
		client = {
			add = function(total)
				if total > 0 then
					pcall(function() return exports.npwd:setPhoneDisabled(false) end)
				end
			end,

			remove = function(total)
				if total < 1 then
					pcall(function() return exports.npwd:setPhoneDisabled(true) end)
				end
			end
		}
	},

	['money'] = {
		label = 'Money',
	},

	['mustard'] = {
		label = 'Mustard',
		weight = 500,
		client = {
			status = { hunger = 25000, thirst = 25000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_food_mustard`, pos = vec3(0.01, 0.0, -0.07), rot = vec3(1.0, 1.0, -1.5) },
			usetime = 2500,
			notification = 'You.. drank mustard'
		}
	},

	['water'] = {
		label = 'Water',
		weight = 500,
		client = {
			status = { thirst = 200000 },
			anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
			prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
			usetime = 2500,
			cancel = true,
			notification = 'You drank some refreshing water'
		}
	},

	['radio'] = {
		label = 'Radio',
		weight = 1000,
		stack = false,
		allowArmed = true
	},

	['armour'] = {
		label = 'Bulletproof Vest',
		weight = 3000,
		stack = false,
		client = {
			anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
			usetime = 3500
		}
	},

	['clothing'] = {
		label = 'Clothing',
		consume = 0,
	},

	['mastercard'] = {
		label = 'Fleeca Card',
		stack = false,
		weight = 10,
		client = {
			image = 'card_bank.png'
		}
	},

	['scrapmetal'] = {
		label = 'Scrap Metal',
		weight = 80,
	},

	['bag1'] = {
		label = 'Backpack Level 1',
		weight = 100,
		stack = false,
		consume = 0,
		description = 'Unlocks 2 rows (12 slots). Must be kept in inventory.',
		server = { export = 'ox_inventory.bag1' },
	},

	['bag2'] = {
		label = 'Backpack Level 2',
		weight = 100,
		stack = false,
		consume = 0,
		description = 'Unlocks 3 rows (18 slots). Must be kept in inventory.',
		server = { export = 'ox_inventory.bag2' },
	},

	['bag3'] = {
		label = 'Backpack Level 3',
		weight = 100,
		stack = false,
		consume = 0,
		description = 'Unlocks 4 rows (24 slots). Must be kept in inventory.',
		server = { export = 'ox_inventory.bag3' },
	},

	['bag4'] = {
		label = 'Backpack Level 4',
		weight = 100,
		stack = false,
		consume = 0,
		description = 'Unlocks 5 rows (30 slots). Must be kept in inventory.',
		server = { export = 'ox_inventory.bag4' },
	},

	['bag5'] = {
		label = 'Backpack Level 5',
		weight = 100,
		stack = false,
		consume = 0,
		description = 'Unlocks 6 rows (36 slots). Must be kept in inventory.',
		server = { export = 'ox_inventory.bag5' },
	},





	-- Housing Items
	['house_key'] = {
    label = 'Housing Key',
    weight = 10,
    stack = false,
    close = true,
	},
	['lockpick'] = {
		label = 'Lockpick',
		weight = 800,
		stack = true,
		close = true,
	},
	['police_barrier'] = {
		label = 'Police Barrier',
		weight = 300,
		stack = true,
		close = true,
	},
	['police_stormram'] = {
		label = 'Police Storm Ram',
		weight = 5000,
		stack = true,
		close = true,
	},
	['pliers'] = {
		label = 'Pliers',
		weight = 500,
		stack = true,
		close = true,
	},
	['insulating_tape'] = {
		label = 'Insulating Tape',
		weight = 200,
		stack = true,
		close = true,
	},
	['beer'] = {
		label = 'Beer',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['beer_bottle'] = {
		label = 'Beer Bottle',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['cash'] = {
		label = 'Cash',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['cocaine_bag'] = {
		label = 'Cocaine Bag',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['coke_package'] = {
		label = 'Coke Package',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['copper'] = {
		label = 'Copper',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['cryptostick'] = {
		label = 'Cryptostick',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['diamond'] = {
		label = 'Diamond',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['diamond_ring'] = {
		label = 'Diamond Ring',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['electronics'] = {
		label = 'Electronics',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['energy_drink'] = {
		label = 'Energy Drink',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gasmask'] = {
		label = 'Gasmask',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold'] = {
		label = 'Gold',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_bar'] = {
		label = 'Gold Bar',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_bracelet'] = {
		label = 'Gold Bracelet',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_chain'] = {
		label = 'Gold Chain',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_necklace'] = {
		label = 'Gold Necklace',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_ring'] = {
		label = 'Gold Ring',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['gold_watch'] = {
		label = 'Gold Watch',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['goldchain'] = {
		label = 'Goldchain',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['goldwatch'] = {
		label = 'Goldwatch',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heavy_rope'] = {
		label = 'Heavy Rope',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heist_paint_1'] = {
		label = 'Heist Paint 1',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heist_paint_2'] = {
		label = 'Heist Paint 2',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heist_paint_3'] = {
		label = 'Heist Paint 3',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heist_paint_4'] = {
		label = 'Heist Paint 4',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heistpack_anchor'] = {
		label = 'Heistpack Anchor',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heistpack_drill'] = {
		label = 'Heistpack Drill',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heistpack_drone'] = {
		label = 'Heistpack Drone',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heistpack_grinder'] = {
		label = 'Heistpack Grinder',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['heistpack_tablet'] = {
		label = 'Heistpack Tablet',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['laptop'] = {
		label = 'Laptop',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['luxury_watch'] = {
		label = 'Luxury Watch',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['luxury_whiskey'] = {
		label = 'Luxury Whiskey',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['meth_bag'] = {
		label = 'Meth Bag',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['meth_pack'] = {
		label = 'Meth Pack',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['meth_package'] = {
		label = 'Meth Package',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['plastic'] = {
		label = 'Plastic',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['rolex'] = {
		label = 'Rolex',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['sandwich'] = {
		label = 'Sandwich',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['silver_ring'] = {
		label = 'Silver Ring',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['smartphone'] = {
		label = 'Smartphone',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['soda_can'] = {
		label = 'Soda Can',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['steel'] = {
		label = 'Steel',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['tablet'] = {
		label = 'Tablet',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['tosti'] = {
		label = 'Tosti',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['vodka'] = {
		label = 'Vodka',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['vodka_bottle'] = {
		label = 'Vodka Bottle',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['water_bottle'] = {
		label = 'Water Bottle',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_ammo'] = {
		label = 'Weapon Ammo',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_assaultrifle'] = {
		label = 'Weapon Assaultrifle',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_carbinerifle'] = {
		label = 'Weapon Carbinerifle',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_hackingdevice'] = {
		label = 'Weapon Hackingdevice',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_pistol'] = {
		label = 'Weapon Pistol',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_pumpshotgun'] = {
		label = 'Weapon Pumpshotgun',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_smg'] = {
		label = 'Weapon Smg',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weapon_stickybomb'] = {
		label = 'Weapon Stickybomb',
		weight = 1000,
		stack = false,
		close = true,
		description = '0r-heistpack item',
	},

	['weed_bag'] = {
		label = 'Weed Bag',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['weed_package'] = {
		label = 'Weed Package',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['whiskey'] = {
		label = 'Whiskey',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	['whiskey_bottle'] = {
		label = 'Whiskey Bottle',
		weight = 1000,
		stack = true,
		close = true,
		description = '0r-heistpack item',
	},

	-- drugs_creator items
	['cannabis'] = {
		label = 'Cannabis',
		weight = 100,
		stack = true,
		close = true,
	},

	['green_gelato_cannabis'] = {
		label = 'Green Gelato Cannabis',
		weight = 100,
		stack = true,
		close = true,
	},

	['opium'] = {
		label = 'Opium',
		weight = 100,
		stack = true,
		close = true,
	},

	['cocaine'] = {
		label = 'Cocaine',
		weight = 100,
		stack = true,
		close = true,
	},

	['codeine'] = {
		label = 'Codeine',
		weight = 100,
		stack = true,
		close = true,
	},

	['liquid_sulfur'] = {
		label = 'Liquid Sulfur',
		weight = 100,
		stack = true,
		close = true,
	},

	['ammonium_nitrate'] = {
		label = 'Ammonium Nitrate',
		weight = 100,
		stack = true,
		close = true,
	},

	['sodium_hydroxide'] = {
		label = 'Sodium Hydroxide',
		weight = 100,
		stack = true,
		close = true,
	},

	['pseudoefedrine'] = {
		label = 'Pseudoefedrine',
		weight = 100,
		stack = true,
		close = true,
	},

	['carbon'] = {
		label = 'Carbon',
		weight = 100,
		stack = true,
		close = true,
	},

	['hydrogen'] = {
		label = 'Hydrogen',
		weight = 100,
		stack = true,
		close = true,
	},

	['nitrogen'] = {
		label = 'Nitrogen',
		weight = 100,
		stack = true,
		close = true,
	},

	['oxygen'] = {
		label = 'Oxygen',
		weight = 100,
		stack = true,
		close = true,
	},

	['drink_sprite'] = {
		label = 'Sprite',
		weight = 100,
		stack = true,
		close = true,
	},

	['jolly_ranchers'] = {
		label = 'Jolly Ranchers',
		weight = 100,
		stack = true,
		close = true,
	},

	['ice'] = {
		label = 'Ice',
		weight = 100,
		stack = true,
		close = true,
	},

	['muriatic_acid'] = {
		label = 'Muriatic Acid',
		weight = 100,
		stack = true,
		close = true,
	},

	['red_sulfur'] = {
		label = 'Red Sulfur',
		weight = 100,
		stack = true,
		close = true,
	},

	['meth_raw'] = {
		label = 'Raw Meth Mix',
		weight = 100,
		stack = true,
		close = true,
	},

	['meth_processed'] = {
		label = 'Processed Meth Mix',
		weight = 100,
		stack = true,
		close = true,
	},

	['meth'] = {
		label = 'Meth',
		weight = 100,
		stack = true,
		close = true,
	},

	['cocaine_raw'] = {
		label = 'Raw Cocaine',
		weight = 100,
		stack = true,
		close = true,
	},

	['cocaine_packaged'] = {
		label = 'Packaged Cocaine',
		weight = 100,
		stack = true,
		close = true,
	},

	['drug_lean'] = {
		label = 'Lean',
		weight = 100,
		stack = true,
		close = true,
	},

	['drug_meth'] = {
		label = 'Drug Meth',
		weight = 100,
		stack = true,
		close = true,
	},

	['drug_ecstasy'] = {
		label = 'Ecstasy',
		weight = 100,
		stack = true,
		close = true,
	},

	['drug_lsd'] = {
		label = 'LSD',
		weight = 100,
		stack = true,
		close = true,
	},

-- xmmx_letscookplus auto-added items
	['advancedlockpick'] = {
		label = 'Advancedlockpick',
		weight = 100,
		stack = true,
		close = true,
	},

	['baking_soda'] = {
		label = 'Baking Soda',
		weight = 100,
		stack = true,
		close = true,
	},

	['coke'] = {
		label = 'Coke',
		weight = 100,
		stack = true,
		close = true,
	},

	['cokebaggy'] = {
		label = 'Cokebaggy',
		weight = 100,
		stack = true,
		close = true,
	},

	['grocerya'] = {
		label = 'Grocerya',
		weight = 100,
		stack = true,
		close = true,
	},

	['groceryb'] = {
		label = 'Groceryb',
		weight = 100,
		stack = true,
		close = true,
	},

	['groceryc'] = {
		label = 'Groceryc',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_boombox'] = {
		label = 'Lc Boombox',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_chair'] = {
		label = 'Lc Chair',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_coffee'] = {
		label = 'Lc Coffee',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_craftbench'] = {
		label = 'Lc Craftbench',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_drugtable'] = {
		label = 'Lc Drugtable',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_fryer'] = {
		label = 'Lc Fryer',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_gazebo'] = {
		label = 'Lc Gazebo',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_griddle'] = {
		label = 'Lc Griddle',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_grill'] = {
		label = 'Lc Grill',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_hobostove'] = {
		label = 'Lc Hobostove',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_juicer'] = {
		label = 'Lc Juicer',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_microwave'] = {
		label = 'Lc Microwave',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_partybox'] = {
		label = 'Lc Partybox',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_printer'] = {
		label = 'Lc Printer',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_processor'] = {
		label = 'Lc Processor',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_still'] = {
		label = 'Lc Still',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_stove'] = {
		label = 'Lc Stove',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_table'] = {
		label = 'Lc Table',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_television'] = {
		label = 'Lc Television',
		weight = 100,
		stack = true,
		close = true,
	},

	['lc_toaster'] = {
		label = 'Lc Toaster',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcaluminum'] = {
		label = 'Lcaluminum',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcapple'] = {
		label = 'Lcapple',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcapplejuice'] = {
		label = 'Lcapplejuice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcapplepie_shine'] = {
		label = 'Lcapplepie Shine',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcapplesauce'] = {
		label = 'Lcapplesauce',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbakedbeans'] = {
		label = 'Lcbakedbeans',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbanana'] = {
		label = 'Lcbanana',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbbqsauce'] = {
		label = 'Lcbbqsauce',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbeefpatty'] = {
		label = 'Lcbeefpatty',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbeefstrips'] = {
		label = 'Lcbeefstrips',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcberrycream'] = {
		label = 'Lcberrycream',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcberrysmoothie'] = {
		label = 'Lcberrysmoothie',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbffriedrice'] = {
		label = 'Lcbffriedrice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcblkberry_shine'] = {
		label = 'Lcblkberry Shine',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbpudding'] = {
		label = 'Lcbpudding',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbread'] = {
		label = 'Lcbread',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbstirfry'] = {
		label = 'Lcbstirfry',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbuckeye_shine'] = {
		label = 'Lcbuckeye Shine',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbuckeyes'] = {
		label = 'Lcbuckeyes',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcburgerbun'] = {
		label = 'Lcburgerbun',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcbutter'] = {
		label = 'Lcbutter',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccanbeans'] = {
		label = 'Lccanbeans',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccanpeas'] = {
		label = 'Lccanpeas',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccansoup'] = {
		label = 'Lccansoup',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccappucino'] = {
		label = 'Lccappucino',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccheese'] = {
		label = 'Lccheese',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccheeseburger'] = {
		label = 'Lccheeseburger',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccheesesticks'] = {
		label = 'Lccheesesticks',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccheestkpk'] = {
		label = 'Lccheestkpk',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcchickensand'] = {
		label = 'Lcchickensand',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcchoccream'] = {
		label = 'Lcchoccream',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcckfriedrice'] = {
		label = 'Lcckfriedrice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccocoapod'] = {
		label = 'Lccocoapod',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccoffeepod'] = {
		label = 'Lccoffeepod',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccorncob'] = {
		label = 'Lccorncob',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccreamer'] = {
		label = 'Lccreamer',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccupcoffee'] = {
		label = 'Lccupcoffee',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccuptea'] = {
		label = 'Lccuptea',
		weight = 100,
		stack = true,
		close = true,
	},

	['lccurrgoat'] = {
		label = 'Lccurrgoat',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcdryrice'] = {
		label = 'Lcdryrice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcegg'] = {
		label = 'Lcegg',
		weight = 100,
		stack = true,
		close = true,
	},

	['lceggsandwich'] = {
		label = 'Lceggsandwich',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcflour'] = {
		label = 'Lcflour',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcfrenchfries'] = {
		label = 'Lcfrenchfries',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcfriedchicken'] = {
		label = 'Lcfriedchicken',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcfriedfish'] = {
		label = 'Lcfriedfish',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcfrozenpizza'] = {
		label = 'Lcfrozenpizza',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcfrozewaff'] = {
		label = 'Lcfrozewaff',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcglassjar'] = {
		label = 'Lcglassjar',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgrapejuice'] = {
		label = 'Lcgrapejuice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgrapes'] = {
		label = 'Lcgrapes',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgreentea'] = {
		label = 'Lcgreentea',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgrillcorn'] = {
		label = 'Lcgrillcorn',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgrillveggies'] = {
		label = 'Lcgrillveggies',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgteapod'] = {
		label = 'Lcgteapod',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcgumbo'] = {
		label = 'Lcgumbo',
		weight = 100,
		stack = true,
		close = true,
	},

	['lchamslice'] = {
		label = 'Lchamslice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lchamtoastie'] = {
		label = 'Lchamtoastie',
		weight = 100,
		stack = true,
		close = true,
	},

	['lchotcakes'] = {
		label = 'Lchotcakes',
		weight = 100,
		stack = true,
		close = true,
	},

	['lchotcocoa'] = {
		label = 'Lchotcocoa',
		weight = 100,
		stack = true,
		close = true,
	},

	['lchp_lightnin'] = {
		label = 'Lchp Lightnin',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcicecubes'] = {
		label = 'Lcicecubes',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcicing'] = {
		label = 'Lcicing',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcjelly'] = {
		label = 'Lcjelly',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclambchops'] = {
		label = 'Lclambchops',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclegquarter'] = {
		label = 'Lclegquarter',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclemon'] = {
		label = 'Lclemon',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclemonlobster'] = {
		label = 'Lclemonlobster',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclime'] = {
		label = 'Lclime',
		weight = 100,
		stack = true,
		close = true,
	},

	['lclobstertails'] = {
		label = 'Lclobstertails',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmaccheese'] = {
		label = 'Lcmaccheese',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmaccheesy'] = {
		label = 'Lcmaccheesy',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmargarita_shine'] = {
		label = 'Lcmargarita Shine',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmarinara'] = {
		label = 'Lcmarinara',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmilk'] = {
		label = 'Lcmilk',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmountain_java'] = {
		label = 'Lcmountain Java',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_blkberry'] = {
		label = 'Lcmshine Blkberry',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_coffebean'] = {
		label = 'Lcmshine Coffebean',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_corn'] = {
		label = 'Lcmshine Corn',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_mash'] = {
		label = 'Lcmshine Mash',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_melon'] = {
		label = 'Lcmshine Melon',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_strawberry'] = {
		label = 'Lcmshine Strawberry',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcmshine_yeast'] = {
		label = 'Lcmshine Yeast',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcnanacream'] = {
		label = 'Lcnanacream',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcnanasmoothie'] = {
		label = 'Lcnanasmoothie',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcorange'] = {
		label = 'Lcorange',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcorangejuice'] = {
		label = 'Lcorangejuice',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcoxtails'] = {
		label = 'Lcoxtails',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpancakes'] = {
		label = 'Lcpancakes',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpbutter'] = {
		label = 'Lcpbutter',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpecans'] = {
		label = 'Lcpecans',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpeppers'] = {
		label = 'Lcpeppers',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpepshrimp'] = {
		label = 'Lcpepshrimp',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcplantain'] = {
		label = 'Lcplantain',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpoptart'] = {
		label = 'Lcpoptart',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpotato'] = {
		label = 'Lcpotato',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcptartpk'] = {
		label = 'Lcptartpk',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcpudding'] = {
		label = 'Lcpudding',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcquickpizza'] = {
		label = 'Lcquickpizza',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcramennoodle'] = {
		label = 'Lcramennoodle',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcramenpack'] = {
		label = 'Lcramenpack',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawbeef'] = {
		label = 'Lcrawbeef',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawbreast'] = {
		label = 'Lcrawbreast',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawchicken'] = {
		label = 'Lcrawchicken',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawchops'] = {
		label = 'Lcrawchops',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawfish'] = {
		label = 'Lcrawfish',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawgoat'] = {
		label = 'Lcrawgoat',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawoxtail'] = {
		label = 'Lcrawoxtail',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawribs'] = {
		label = 'Lcrawribs',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawsalmon'] = {
		label = 'Lcrawsalmon',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcrawshrimp'] = {
		label = 'Lcrawshrimp',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcribs'] = {
		label = 'Lcribs',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcricebowl'] = {
		label = 'Lcricebowl',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcricepeas'] = {
		label = 'Lcricepeas',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsalmon'] = {
		label = 'Lcsalmon',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsausage'] = {
		label = 'Lcsausage',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsausagedog'] = {
		label = 'Lcsausagedog',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcseasoning'] = {
		label = 'Lcseasoning',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsoupbowl'] = {
		label = 'Lcsoupbowl',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsour_watermelon'] = {
		label = 'Lcsour Watermelon',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsteak'] = {
		label = 'Lcsteak',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsteelcan'] = {
		label = 'Lcsteelcan',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcstrawberry'] = {
		label = 'Lcstrawberry',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcstrawberry_shine'] = {
		label = 'Lcstrawberry Shine',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcstyrofoam'] = {
		label = 'Lcstyrofoam',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsugar'] = {
		label = 'Lcsugar',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcsyrup'] = {
		label = 'Lcsyrup',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcteabag'] = {
		label = 'Lcteabag',
		weight = 100,
		stack = true,
		close = true,
	},

	['lctoast'] = {
		label = 'Lctoast',
		weight = 100,
		stack = true,
		close = true,
	},

	['lctoasti'] = {
		label = 'Lctoasti',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcvaniwafers'] = {
		label = 'Lcvaniwafers',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcveggiepack'] = {
		label = 'Lcveggiepack',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcvegoil'] = {
		label = 'Lcvegoil',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcwaffle'] = {
		label = 'Lcwaffle',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcwhite_lighting'] = {
		label = 'Lcwhite Lighting',
		weight = 100,
		stack = true,
		close = true,
	},

	['lcyellrice'] = {
		label = 'Lcyellrice',
		weight = 100,
		stack = true,
		close = true,
	},

	['ls_empty_baggy'] = {
		label = 'Ls Empty Baggy',
		weight = 100,
		stack = true,
		close = true,
	},

	['metalscrap'] = {
		label = 'Metalscrap',
		weight = 100,
		stack = true,
		close = true,
	},

	['printerdocument'] = {
		label = 'Printerdocument',
		weight = 50,
		stack = false,
		close = true,
		consume = 0,
	},

	['rubber'] = {
		label = 'Rubber',
		weight = 100,
		stack = true,
		close = true,
	},

	['shinekit'] = {
		label = 'Shinekit',
		weight = 100,
		stack = true,
		close = true,
	},

}