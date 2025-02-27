ServerEvents.recipes(neofastftl => {
  neofastftl.remove({ output: 'actuallyadditions:atomic_reconstructor' })
  neofastftl.remove({ output: 'industrialforegoing:machine_frame_pity' })
  neofastftl.remove({ output: 'mysticalagriculture:machine_frame' })
  neofastftl.remove({ output: 'rftoolsbase:machine_frame' })
  neofastftl.remove({ output: 'actuallyadditions:iron_casing' })
  neofastftl.remove({ output: 'actuallyadditions:iron_casing', type: 'minecraft:trading' })
    neofastftl.shaped(
        Item.of('actuallyadditions:atomic_reconstructor', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          L: 'minecraft:iron_ingot',
          S: 'minecraft:redstone',
          C: 'minecraft:dragon_egg'
        }
    )
  })