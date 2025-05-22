  const crafts = [
    // Крафты Applied Energistics (ae)
    //{
    //  id: 'ae_cable',
    //  name: 'ME Cable',
    //  img: 'https://minecraft.mix-servers.com/assets/main/img/items/me_cable.png',
    //  category: 'ae',
    //  outputQuantity: 8,
    //  components: [
    //    { id: 'ae_fluix_dust', count: 2 },
    //    { id: 'ae_silicon', count: 1 }
    //  ],
    //  recipe: [
    //    [null, 'ae_fluix_dust', null],
    //    ['ae_fluix_dust', 'ae_silicon', 'ae_fluix_dust'],
    //    [null, 'ae_fluix_dust', null]
    //  ]
    //},
    // Крафты Ресурсы
    {
      id: 'Wood_Boards',
      name: 'Доски',
      img: 'https://mixicons.zrefio.com/api/items/4579/64/',
      category: 'resurses',
      outputQuantity: 4,
      components: [
        { id: 'Log', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Log', null],
        [null, null, null]
      ]
    },
    {
      id: 'Cobblestone',
      name: 'Булыжник',
      img: 'https://mixicons.zrefio.com/api/items/4405/64/',
      category: 'resurses',
      outputQuantity: 1,
      components: [
        { id: 'Stone', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Stone', null],
        [null, null, null]
      ]
    },
    {
      id: 'Furnace',
      name: 'Печка',
      img: 'https://mixicons.zrefio.com/api/items/4584/64/',
      category: 'resurses',
      outputQuantity: 1,
      components: [
        { id: 'Cobblestone', count: 8 },
      ],
      recipe: [
        ['Cobblestone', 'Cobblestone', 'Cobblestone'],
        ['Cobblestone', null, 'Cobblestone'],
        ['Cobblestone', 'Cobblestone', 'Cobblestone']
      ]
    },
    {
      id: 'Iron',
      name: 'Железо',
      img: 'https://mixicons.zrefio.com/api/items/3631/64/',
      category: 'resurses',
      outputQuantity: 2,
      components: [
        { id: 'Iron_Ore', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Iron_Ore', null],
        [null, null, null]
      ]
    },
    {
      id: 'Gold',
      name: 'Золото',
      img: 'https://mixicons.zrefio.com/api/items/3632/64/',
      category: 'resurses',
      outputQuantity: 2,
      components: [
        { id: 'Gold_Ore', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Gold_Ore', null],
        [null, null, null]
      ]
    },
    
    // Крафты из Industrial Craft (ic)
    {
      id: 'Windmill_CBH',
      name: 'Ветряк СВН',
      img: 'https://mixicons.zrefio.com/api/items/3653/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Windmill_BH', count: 4 },
        { id: 'Transformer_upgrade', count: 1 }
      ],
      recipe: [
        [null, 'Windmill_BH', null],
        ['Windmill_BH', 'Transformer_upgrade', 'Windmill_BH'],
        [null, 'Windmill_BH', null]
      ]
    },
    {
      id: 'Windmill_BH',
      name: 'Ветряк ВН',
      img: 'https://mixicons.zrefio.com/api/items/3652/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Windmill_CH', count: 4 },
        { id: 'Transformer_upgrade', count: 1 }
      ],
      recipe: [
        [null, 'Windmill_CH', null],
        ['Windmill_CH', 'Transformer_upgrade', 'Windmill_CH'],
        [null, 'Windmill_CH', null]
      ]
    },
    {
      id: 'Windmill_CH',
      name: 'Ветряк СН',
      img: 'https://mixicons.zrefio.com/api/items/3651/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Windmill_HH', count: 4 },
        { id: 'Transformer_upgrade', count: 1 }
      ],
      recipe: [
        [null, 'Windmill_HH', null],
        ['Windmill_HH', 'Transformer_upgrade', 'Windmill_HH'],
        [null, 'Windmill_HH', null]
      ]
    },
    {
      id: 'Windmill_HH',
      name: 'Ветряк НН',
      img: 'https://mixicons.zrefio.com/api/items/3650/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Windmill_CHH', count: 4 },
        { id: 'Transformer_upgrade', count: 1 }
      ],
      recipe: [
        [null, 'Windmill_CHH', null],
        ['Windmill_CHH', 'Transformer_upgrade', 'Windmill_CHH'],
        [null, 'Windmill_CHH', null]
      ]
    },
    {
      id: 'Transformer_upgrade',
      name: 'Апгрейд трансформатора',
      img: 'https://mixicons.zrefio.com/api/items/3773/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Glass', count: 5 },
        { id: 'Gold_Cable', count: 2 },
        { id: 'Electrical_circuit', count: 1 },
        { id: 'CH', count: 1 }
      ],
      recipe: [
        ['Glass', 'Glass', 'Glass'],
        ['Gold_Cable', 'CH', 'Gold_Cable'],
        ['Glass', 'Electrical_circuit', 'Glass']
      ]
    },
    {
      id: 'CH',
      name: 'Трансформатор СН',
      img: 'https://mixicons.zrefio.com/api/items/3575/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Gold_Cable', count: 2 },
        { id: 'Mechanism', count: 1 }
      ],
      recipe: [
        [null, 'Gold_Cable', null],
        [null, 'Mechanism', null],
        [null, 'Gold_Cable', null]
      ]
    },
    {
      id: 'Gold_Cable',
      name: 'Золотой провод с двойной изоляцией',
      img: 'https://mixicons.zrefio.com/api/items/3874/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Gold', count: 3 }
      ],
      recipe: [
        ['Rubber', 'Rubber', null],
        ['The_Golden_Wire', null, null],
        [null, null, null]
      ]
    },
    {
      id: 'The_Golden_Wire',
      name: 'Золотой провод',
      img: 'https://mixicons.zrefio.com/api/items/3872/64/',
      category: 'ic',
      outputQuantity: 12,
      components: [
        { id: 'Gold', count: 3 }
      ],
      recipe: [
        [null, null, null],
        ['Gold', 'Gold', 'Gold'],
        [null, null, null]
      ]
    },
    {
      id: 'Electrical_circuit',
      name: 'Электросхема',
      img: 'https://mixicons.zrefio.com/api/items/3886/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Insulated_Copper_Cable', count: 6 },
        { id: 'Redstone', count: 2 },
        { id: 'Steel_Ingot', count: 1 }
      ],
      recipe: [
        ['Insulated_Copper_Cable', 'Insulated_Copper_Cable', 'Insulated_Copper_Cable'],
        ['Redstone', 'Steel_Ingot', 'Redstone'],
        ['Insulated_Copper_Cable', 'Insulated_Copper_Cable', 'Insulated_Copper_Cable']
      ]
    },
    {
      id: 'Windmill_CHH',
      name: 'Ветряк СНН',
      img: 'https://mixicons.zrefio.com/api/items/3649/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Wind_Mill', count: 4 },
        { id: 'HH', count: 1 }
      ],
      recipe: [
        [null, 'Wind_Mill', null],
        ['Wind_Mill', 'HH', 'Wind_Mill'],
        [null, 'Wind_Mill', null]
      ]
    },
    {
      id: 'HH',
      name: 'Трансформатор НН',
      img: 'https://mixicons.zrefio.com/api/items/3574/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Wood_Boards', count: 4 },
        { id: 'Insulated_Copper_Cable', count: 2 },
        { id: 'Copper_Ingot', count: 3 }
      ],
      recipe: [
        ['Wood_Boards', 'Insulated_Copper_Cable', 'Wood_Boards'],
        ['Copper_Ingot', 'Copper_Ingot', 'Copper_Ingot'],
        ['Wood_Boards', 'Insulated_Copper_Cable', 'Wood_Boards']
      ]
    },
    {
      id: 'Wind_Mill',
      name: 'Ветряк',
      img: 'https://mixicons.zrefio.com/api/items/3596/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Iron', count: 4 },
        { id: 'Generator', count: 1 }
      ],
      recipe: [
        ['Iron', null, 'Iron'],
        [null, 'Generator', null],
        ['Iron', null, 'Iron']
      ]
    },
    {
      id: 'Generator',
      name: 'Генератор',
      img: 'https://mixicons.zrefio.com/api/items/3592/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Battery', count: 1 },
        { id: 'Mechanism', count: 1 },
        { id: 'Furnace', count: 1 },
      ],
      recipe: [
        [null, 'Battery', null],
        [null, 'Mechanism', null],
        [null, 'Furnace', null]
      ]
    },
    {
      id: 'Battery',
      name: 'Аккумулятор',
      img: 'https://mixicons.zrefio.com/api/items/3947/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Redstone', count: 2 },
        { id: 'Tin_Ingot', count: 4 },
        { id: 'Insulated_Copper_Cable', count: 1 },
      ],
      recipe: [
        [null, 'Insulated_Copper_Cable', null],
        ['Tin_Ingot', 'Redstone', 'Tin_Ingot'],
        ['Tin_Ingot', 'Redstone', 'Tin_Ingot']
      ]
    },
    {
      id: 'Insulated_Copper_Cable',
      name: 'Изолированный медный провод',
      img: 'https://mixicons.zrefio.com/api/items/3867/64/',
      category: 'ic',
      outputQuantity: 6,
      components: [
        { id: 'Copper_Ingot', count: 3 },
        { id: 'Rubber', count: 6 }
      ],
      recipe: [
        ['Rubber', 'Rubber', 'Rubber'],
        ['Copper_Ingot', 'Copper_Ingot', 'Copper_Ingot'],
        ['Rubber', 'Rubber', 'Rubber']
      ]
    },
    {
      id: 'Rubber',
      name: 'Резина',
      img: 'https://mixicons.zrefio.com/api/items/3914/64/',
      category: 'ic',
      outputQuantity: 3,
      components: [
        { id: 'Sticky_Resin', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Sticky_Resin', null],
        [null, null, null]
      ]
    },
    {
      id: 'Steel_Ingot',
      name: 'Слиток закаленного железа',
      img: 'https://mixicons.zrefio.com/api/items/3954/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Iron', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Iron', null],
        [null, null, null]
      ]
    },
    {
      id: 'Tin_Ingot',
      name: 'Оловянный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3952/64/',
      category: 'ic',
      outputQuantity: 2,
      components: [
        { id: 'Tin_ore', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Tin_ore', null],
        [null, null, null]
      ]
    },
    {
      id: 'Copper_Ingot',
      name: 'Медный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3953/64/',
      category: 'ic',
      outputQuantity: 2,
      components: [
        { id: 'Copper_ore', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'Copper_ore', null],
        [null, null, null]
      ]
    },
    {
      id: 'Mechanism',
      name: 'Механизм',
      img: 'https://mixicons.zrefio.com/api/items/3604/64/',
      category: 'ic',
      outputQuantity: 1,
      components: [
        { id: 'Steel_Ingot', count: 8 }
      ],
      recipe: [
        ['Steel_Ingot', 'Steel_Ingot', 'Steel_Ingot'],
        ['Steel_Ingot', null, 'Steel_Ingot'],
        ['Steel_Ingot', 'Steel_Ingot', 'Steel_Ingot']
      ]
    },
    // Крафты из материи (matter)
    {
      id: 'matter',
      name: 'Материя',
      img: 'https://mixicons.zrefio.com/api/items/3883/64/',
      category: 'matter',
      outputQuantity: 1,
      components: [],
      recipe: null,
      hidden: true  // <- этот флаг для скрытия из списка выбора
    },
    {
      id: 'Log',
      name: 'Древесина',
      img: 'https://mixicons.zrefio.com/api/items/3311/64/',
      category: 'matter',
      outputQuantity: 8,
      components: [
        { id: 'matter', count: 1 }
      ],
      recipe: [
        [null, 'matter', null], 
        [null, null, null],
        [null, null, null]
      ]
    },
    {
      id: 'Stone',
      name: 'Камень',
      img: 'https://mixicons.zrefio.com/api/items/3527/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, 'matter', null],
        [null, null, null]
      ]
    },
    {
      id: 'Snow',
      name: 'Стег (Блок)',
      img: 'https://mixicons.zrefio.com/api/items/4600/64/',
      category: 'matter',
      outputQuantity: 4,
      components: [
        { id: 'matter', count: 2 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        [null, null, null],
        [null, null, null]
      ]
    },
    {
      id: 'Grass',
      name: 'Трава',
      img: 'https://mixicons.zrefio.com/api/items/3713/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 2 }
      ],
      recipe: [
        [null, null, null],
        ['matter', null, null],
        ['matter', null, null]
      ]
    },
    {
      id: 'Sandstone',
      name: 'Песчаник',
      img: 'https://mixicons.zrefio.com/api/items/3601/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 2 }
      ],
      recipe: [
        [null, null, null],
        [null, null, 'matter'],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Water',
      name: 'Вода',
      img: 'https://ru.minecraft.wiki/images/thumb/%D0%92%D0%BE%D0%B4%D0%B0.png/160px-%D0%92%D0%BE%D0%B4%D0%B0.png?be87b',
      category: 'matter',
      outputQuantity: 1,
      components: [
        { id: 'matter', count: 2 }
      ],
      recipe: [
        [null, null, null],
        [null, 'matter', null],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Lava',
      name: 'Лава',
      img: 'https://ru.minecraft.wiki/images/thumb/%D0%9B%D0%B0%D0%B2%D0%B0_JE14.png/160px-%D0%9B%D0%B0%D0%B2%D0%B0_JE14.png?1c545',
      category: 'matter',
      outputQuantity: 1,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, 'matter', null],
        [null, 'matter', null],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Mossy_cobblestone',
      name: 'Замшелый булыжник',
      img: 'https://mixicons.zrefio.com/api/items/4403/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, null],
        [null, 'matter', null],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Copper_ore',
      name: 'Медная руда',
      img: 'https://mixicons.zrefio.com/api/items/3600/64/',
      category: 'matter',
      outputQuantity: 5,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, 'matter'],
        ['matter', null, 'matter'],
        [null, null, null]
      ]
    },
    {
      id: 'Tin_ore',
      name: 'Оловянная руда',
      img: 'https://mixicons.zrefio.com/api/items/3599/64/',
      category: 'matter',
      outputQuantity: 5,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, null],
        ['matter', null, 'matter'],
        [null, null, 'matter']
      ]
    },
    {
      id: 'Netherrack',
      name: 'Адский камень',
      img: 'https://mixicons.zrefio.com/api/items/4606/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, 'matter'],
        [null, 'matter', null],
        ['matter', null, null]
      ]
    },
    {
      id: 'Snowball',
      name: 'Снежок',
      img: 'https://mixicons.zrefio.com/api/items/4120/64/',
      category: 'matter',
      outputQuantity: 16,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, null],
        [null, null, null],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Coal',
      name: 'Уголь',
      img: 'https://mixicons.zrefio.com/api/items/3628/64/',
      category: 'matter',
      outputQuantity: 8,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        [null, null, 'matter'],
        ['matter', null, null],
        [null, null, 'matter']
      ]
    },
    {
      id: 'White_wool',
      name: 'Белая Шерсть',
      img: 'https://mixicons.zrefio.com/api/items/4164/64/',
      category: 'matter',
      outputQuantity: 12,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        [null, null, null],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Vines',
      name: 'Лианы',
      img: 'https://mixicons.zrefio.com/api/items/2596/64/',
      category: 'matter',
      outputQuantity: 24,
      components: [
        { id: 'matter', count: 3 }
      ],
      recipe: [
        ['matter', null, null],
        ['matter', null, null],
        ['matter', null, null]
      ]
    },
    {
      id: 'Lapis_Lazuli',
      name: 'Лазурит',
      img: 'https://mixicons.zrefio.com/api/items/4150/64/',
      category: 'matter',
      outputQuantity: 9,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        ['matter', null, null],
        ['matter', null, null],
        ['matter', 'matter', null]
      ]
    },
    {
      id: 'Bone',
      name: 'Кость',
      img: 'https://mixicons.zrefio.com/api/items/4156/64/',
      category: 'matter',
      outputQuantity: 32,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        ['matter', null, null],
        ['matter', 'matter', null],
        ['matter', null, null]
      ]
    },
    {
      id: 'Obsidian',
      name: 'Обсидиан',
      img: 'https://mixicons.zrefio.com/api/items/4404/64/',
      category: 'matter',
      outputQuantity: 12,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        ['matter', null, 'matter'],
        [null, null, null]
      ]
    },
    {
      id: 'Feather',
      name: 'Перо',
      img: 'https://mixicons.zrefio.com/api/items/3665/64/',
      category: 'matter',
      outputQuantity: 32,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        [null, 'matter', null],
        [null, 'matter', null],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Redstone',
      name: 'Редстоун',
      img: 'https://mixicons.zrefio.com/api/items/4119/64/',
      category: 'matter',
      outputQuantity: 24,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        [null, null, null],
        [null, 'matter', null],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Glass',
      name: 'Стекло',
      img: 'https://mixicons.zrefio.com/api/items/3541/64/',
      category: 'matter',
      outputQuantity: 32,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        [null, 'matter', null],
        ['matter', null, 'matter'],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Sticky_Resin',
      name: 'Латекс',
      img: 'https://mixicons.zrefio.com/api/items/3915/64/',
      category: 'matter',
      outputQuantity: 21,
      components: [
        { id: 'matter', count: 4 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        [null, null, null],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Clay',
      name: 'Глина',
      img: 'https://mixicons.zrefio.com/api/items/4125/64/',
      category: 'matter',
      outputQuantity: 48,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        ['matter', 'matter', null],
        ['matter', null, null],
        ['matter', 'matter', null]
      ]
    },
    {
      id: 'Mycelium',
      name: 'Мицелий',
      img: 'https://mixicons.zrefio.com/api/items/2601/64/',
      category: 'matter',
      outputQuantity: 24,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        [null, null, null],
        ['matter', null, 'matter'],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Iron_Ore',
      name: 'Железная руда',
      img: 'https://mixicons.zrefio.com/api/items/3309/64/',
      category: 'matter',
      outputQuantity: 2,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        [null, 'matter', null],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Gold_Ore',
      name: 'Золотая руда',
      img: 'https://mixicons.zrefio.com/api/items/3274/64/',
      category: 'matter',
      outputQuantity: 2,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        [null, 'matter', null],
        ['matter', 'matter', 'matter'],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Ink_Sac',
      name: 'Чернильный мешок',
      img: 'https://mixicons.zrefio.com/api/items/4140/64/',
      category: 'matter',
      outputQuantity: 48,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        [null, 'matter', 'matter'],
        [null, 'matter', 'matter'],
        [null, 'matter', null]
      ]
    },
    {
      id: 'Cocoa_Beans',
      name: 'Какао-бобы',
      img: 'https://mixicons.zrefio.com/api/items/4149/64/',
      category: 'matter',
      outputQuantity: 32,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        ['matter', 'matter', null],
        [null, null, 'matter'],
        ['matter', 'matter', null]
      ]
    },
    {
      id: 'Flint',
      name: 'Кремень',
      img: 'https://mixicons.zrefio.com/api/items/4103/64/',
      category: 'matter',
      outputQuantity: 32,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        [null, 'matter', null],
        ['matter', 'matter', null],
        ['matter', 'matter', null]
      ]
    },
    {
      id: 'Stone_brick',
      name: 'Каменный кирпич',
      img: 'https://mixicons.zrefio.com/api/items/4662/64/',
      category: 'matter',
      outputQuantity: 48,
      components: [
        { id: 'matter', count: 5 }
      ],
      recipe: [
        ['matter', 'matter', null],
        ['matter', 'matter', null],
        ['matter', null, null]
      ]
    },
    {
      id: 'Glowstone',
      name: 'Светокамень',
      img: 'https://mixicons.zrefio.com/api/items/4608/64/',
      category: 'matter',
      outputQuantity: 8,
      components: [
        { id: 'matter', count: 6 }
      ],
      recipe: [
        [null, 'matter', null],
        ['matter', null, 'matter'],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Cactus',
      name: 'Кактус',
      img: 'https://mixicons.zrefio.com/api/items/4601/64/',
      category: 'matter',
      outputQuantity: 48,
      components: [
        { id: 'matter', count: 6 }
      ],
      recipe: [
        [null, 'matter', null],
        ['matter', 'matter', 'matter'],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Sugar_Canes',
      name: 'Сахарный тростник',
      img: 'https://mixicons.zrefio.com/api/items/4126/64/',
      category: 'matter',
      outputQuantity: 48,
      components: [
        { id: 'matter', count: 6 }
      ],
      recipe: [
        ['matter', null, 'matter'],
        ['matter', null, 'matter'],
        ['matter', null, 'matter']
      ]
    },
    {
      id: 'Gunpowder',
      name: 'Порох',
      img: 'https://mixicons.zrefio.com/api/items/3666/64/',
      category: 'matter',
      outputQuantity: 15,
      components: [
        { id: 'matter', count: 7 }
      ],
      recipe: [
        ['matter', 'matter', 'matter'],
        ['matter', null, null],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Iridium_Ore',
      name: 'Иридий',
      img: 'https://mixicons.zrefio.com/api/items/3800/64/',
      category: 'matter',
      outputQuantity: 1,
      components: [
        { id: 'matter', count: 7 }
      ],
      recipe: [
        ['matter', 'matter', 'matter'],
        [null, 'matter', null],
        ['matter', 'matter', 'matter']
      ]
    },
    {
      id: 'Diamond',
      name: 'Алмаз',
      img: 'https://mixicons.zrefio.com/api/items/3630/64/',
      category: 'matter',
      outputQuantity: 1,
      components: [
        { id: 'matter', count: 9 }
      ],
      recipe: [
        ['matter', 'matter', 'matter'],
        ['matter', 'matter', 'matter'],
        ['matter', 'matter', 'matter']
      ]
    }
  //  {
  //    id: 'Snow',
  //    name: '1',
  //    img: '',
  //    category: 'matter',
  //    outputQuantity: 1,
  //    components: [
  //      { id: 'matter', count: 5 }
  //   ],
  //    recipe: [
  //      [null, null, null],
  //      [null, null, null],
  //      [null, null, null]
  //    ]
  //  },
  ];
