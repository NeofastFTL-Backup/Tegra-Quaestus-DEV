ServerEvents.recipes(neofastftl => {
    neofastftl.shaped(
        Item.of('industrialforegoing:machine_frame_pity', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          L: 'allthecompressed:oak_log_4x',
          S: 'mysticalagriculture:supremium_ingot_block',
          C: 'minecraft:conduit'
        }
      ),
      neofastftl.shaped(
        Item.of('mysticalagriculture:machine_frame', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'enderio:redstone_alloy_block',
          L: '#c:storage_blocks/steel',
          C: 'industrialforegoing:machine_frame_pity'
        }
      ),
      neofastftl.shaped(
        Item.of('rftoolsbase:machine_frame', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'rftoolsbase:infused_enderpearl',
          L: 'rftoolsbase:infused_diamond',
          C: 'mysticalagriculture:machine_frame'
        }
      ),
      neofastftl.shaped(
        Item.of('actuallyadditions:iron_casing', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'actuallyadditions:diamatine_crystal_block',
          L: 'actuallyadditions:restonia_crystal_block',
          C: 'rftoolsbase:machine_frame'
        }
      )
  })