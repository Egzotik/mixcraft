  const crafts = [
    {
      id: '30241',
      name: 'Энергокристалл',
      img: 'https://mixicons.zrefio.com/api/items/4579/64/',
      outputQuantity: 4,
      components: [
        { id: '17', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '17', null],
        [null, null, null]
      ]
    },
    {
      id: '5',
      name: 'Доски',
      img: 'https://mixicons.zrefio.com/api/items/4579/64/',
      outputQuantity: 4,
      components: [
        { id: '17', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '17', null],
        [null, null, null]
      ]
    },
    {
      id: '4',
      name: 'Булыжник',
      img: 'https://mixicons.zrefio.com/api/items/4405/64/',
      outputQuantity: 1,
      components: [
        { id: '1', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '1', null],
        [null, null, null]
      ]
    },
    {
      id: '61',
      name: 'Печка',
      img: 'https://mixicons.zrefio.com/api/items/4584/64/',
      outputQuantity: 1,
      components: [
        { id: '4', count: 8 },
      ],
      recipe: [
        ['4', '4', '4'],
        ['4', null, '4'],
        ['4', '4', '4']
      ]
    },
    {
      id: '265',
      name: 'Железо',
      img: 'https://mixicons.zrefio.com/api/items/3631/64/',
      outputQuantity: 2,
      components: [
        { id: '15', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '15', null],
        [null, null, null]
      ]
    },
    {
      id: '266',
      name: 'Золото',
      img: 'https://mixicons.zrefio.com/api/items/3632/64/',
      outputQuantity: 2,
      components: [
        { id: '14', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '14', null],
        [null, null, null]
      ]
    },
    
    // Крафты из Industrial Craft (ic)
    {
      id: '2790:4',
      name: 'Ветряк СВН',
      img: 'https://mixicons.zrefio.com/api/items/3653/64/',
      outputQuantity: 1,
      components: [
        { id: '2790:3', count: 4 },
        { id: '30125:1', count: 1 }
      ],
      recipe: [
        [null, '2790:3', null],
        ['2790:3', '30125:1', '2790:3'],
        [null, '2790:3', null]
      ]
    },
    {
      id: '2790:3',
      name: 'Ветряк ВН',
      img: 'https://mixicons.zrefio.com/api/items/3652/64/',
      outputQuantity: 1,
      components: [
        { id: '2790:2', count: 4 },
        { id: '30125:1', count: 1 }
      ],
      recipe: [
        [null, '2790:2', null],
        ['2790:2', '30125:1', '2790:2'],
        [null, '2790:2', null]
      ]
    },
    {
      id: '2790:2',
      name: 'Ветряк СН',
      img: 'https://mixicons.zrefio.com/api/items/3651/64/',
      outputQuantity: 1,
      components: [
        { id: '2790:1', count: 4 },
        { id: '30125:1', count: 1 }
      ],
      recipe: [
        [null, '2790:1', null],
        ['2790:1', '30125:1', '2790:1'],
        [null, '2790:1', null]
      ]
    },
    {
      id: '2790:1',
      name: 'Ветряк НН',
      img: 'https://mixicons.zrefio.com/api/items/3650/64/',
      outputQuantity: 1,
      components: [
        { id: '2790', count: 4 },
        { id: '30125:1', count: 1 }
      ],
      recipe: [
        [null, '2790', null],
        ['2790', '30125:1', '2790'],
        [null, '2790', null]
      ]
    },
    {
      id: '30125:1',
      name: 'Апгрейд трансформатора',
      img: 'https://mixicons.zrefio.com/api/items/3773/64/',
      outputQuantity: 1,
      components: [
        { id: '20', count: 5 },
        { id: '30184:4', count: 2 },
        { id: '30191', count: 1 },
        { id: '227:4', count: 1 }
      ],
      recipe: [
        ['20', '20', '20'],
        ['30184:4', '227:4', '30184:4'],
        ['20', '30191', '20']
      ]
    },
    {
      id: '227:4',
      name: 'Трансформатор СН',
      img: 'https://mixicons.zrefio.com/api/items/3575/64/',
      outputQuantity: 1,
      components: [
        { id: '30184:4', count: 2 },
        { id: '250', count: 1 }
      ],
      recipe: [
        [null, '30184:4', null],
        [null, '250', null],
        [null, '30184:4', null]
      ]
    },
    {
      id: '30184:4',
      name: 'Золотой провод с двойной изоляцией',
      img: 'https://mixicons.zrefio.com/api/items/3874/64/',
      outputQuantity: 1,
      components: [
        { id: '266', count: 3 }
      ],
      recipe: [
        ['30216', '30216', null],
        ['30184:2', null, null],
        [null, null, null]
      ]
    },
    {
      id: '30184:2',
      name: 'Золотой провод',
      img: 'https://mixicons.zrefio.com/api/items/3872/64/',
      outputQuantity: 12,
      components: [
        { id: '266', count: 3 }
      ],
      recipe: [
        [null, null, null],
        ['266', '266', '266'],
        [null, null, null]
      ]
    },
    {
      id: '30191',
      name: 'Электросхема',
      img: 'https://mixicons.zrefio.com/api/items/3886/64/',
      outputQuantity: 1,
      components: [
        { id: '30184', count: 6 },
        { id: '331', count: 2 },
        { id: '30249', count: 1 }
      ],
      recipe: [
        ['30184', '30184', '30184'],
        ['331', '30249', '331'],
        ['30184', '30184', '30184']
      ]
    },
    {
      id: '2790',
      name: 'Ветряк СНН',
      img: 'https://mixicons.zrefio.com/api/items/3649/64/',
      outputQuantity: 1,
      components: [
        { id: '246:4', count: 4 },
        { id: '227:3', count: 1 }
      ],
      recipe: [
        [null, '246:4', null],
        ['246:4', '227:3', '246:4'],
        [null, '246:4', null]
      ]
    },
    {
      id: '227:3',
      name: 'Трансформатор НН',
      img: 'https://mixicons.zrefio.com/api/items/3574/64/',
      outputQuantity: 1,
      components: [
        { id: '5', count: 4 },
        { id: '30184', count: 2 },
        { id: '30248', count: 3 }
      ],
      recipe: [
        ['5', '30184', '5'],
        ['30248', '30248', '30248'],
        ['5', '30184', '5']
      ]
    },
    {
      id: '246:4',
      name: 'Ветряк',
      img: 'https://mixicons.zrefio.com/api/items/3596/64/',
      outputQuantity: 1,
      components: [
        { id: '265', count: 4 },
        { id: '246', count: 1 }
      ],
      recipe: [
        ['265', null, '265'],
        [null, '246', null],
        ['265', null, '265']
      ]
    },
    {
      id: '246',
      name: 'Генератор',
      img: 'https://mixicons.zrefio.com/api/items/3592/64/',
      outputQuantity: 1,
      components: [
        { id: '30239', count: 1 },
        { id: '250', count: 1 },
        { id: '61', count: 1 },
      ],
      recipe: [
        [null, '30239', null],
        [null, '250', null],
        [null, '61', null]
      ]
    },
    {
      id: '30239',
      name: 'Аккумулятор',
      img: 'https://mixicons.zrefio.com/api/items/3947/64/',
      outputQuantity: 1,
      components: [
        { id: '331', count: 2 },
        { id: '30247', count: 4 },
        { id: '30184', count: 1 },
      ],
      recipe: [
        [null, '30184', null],
        ['30247', '331', '30247'],
        ['30247', '331', '30247']
      ]
    },
    {
      id: '30184',
      name: 'Изолированный медный провод',
      img: 'https://mixicons.zrefio.com/api/items/3867/64/',
      outputQuantity: 6,
      components: [
        { id: '30248', count: 3 },
        { id: '30216', count: 6 }
      ],
      recipe: [
        ['30216', '30216', '30216'],
        ['30248', '30248', '30248'],
        ['30216', '30216', '30216']
      ]
    },
    {
      id: '30216',
      name: 'Резина',
      img: 'https://mixicons.zrefio.com/api/items/3914/64/',
      outputQuantity: 3,
      components: [
        { id: '30217', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '30217', null],
        [null, null, null]
      ]
    },
    {
      id: '30249',
      name: 'Слиток закаленного железа',
      img: 'https://mixicons.zrefio.com/api/items/3954/64/',
      outputQuantity: 1,
      components: [
        { id: '265', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '265', null],
        [null, null, null]
      ]
    },
    {
      id: '30247',
      name: 'Оловянный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3952/64/',
      outputQuantity: 2,
      components: [
        { id: '248', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '248', null],
        [null, null, null]
      ]
    },
    {
      id: '30248',
      name: 'Медный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3953/64/',
      outputQuantity: 2,
      components: [
        { id: '249', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '249', null],
        [null, null, null]
      ]
    },
    {
      id: '250',
      name: 'Механизм',
      img: 'https://mixicons.zrefio.com/api/items/3604/64/',
      outputQuantity: 1,
      components: [
        { id: '30249', count: 8 }
      ],
      recipe: [
        ['30249', '30249', '30249'],
        ['30249', null, '30249'],
        ['30249', '30249', '30249']
      ]
    },
    // Крафты из материи (30188)
    {
      id: '30188',
      name: 'Материя',
      img: 'https://mixicons.zrefio.com/api/items/3883/64/',
      outputQuantity: 1,
      components: [],
      recipe: null,
      hidden: true  // <- этот флаг для скрытия из списка выбора
    },
    {
      id: '17',
      name: 'Древесина',
      img: 'https://mixicons.zrefio.com/api/items/3311/64/',
      outputQuantity: 8,
      components: [
        { id: '30188', count: 1 }
      ],
      recipe: [
        [null, '30188', null], 
        [null, null, null],
        [null, null, null]
      ]
    },
    {
      id: '1',
      name: 'Камень',
      img: 'https://mixicons.zrefio.com/api/items/3527/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 1 }
      ],
      recipe: [
        [null, null, null],
        [null, '30188', null],
        [null, null, null]
      ]
    },
    {
      id: '80',
      name: 'Стег (Блок)',
      img: 'https://mixicons.zrefio.com/api/items/4600/64/',
      outputQuantity: 4,
      components: [
        { id: '30188', count: 2 }
      ],
      recipe: [
        ['30188', null, '30188'],
        [null, null, null],
        [null, null, null]
      ]
    },
    {
      id: 'Grass',
      name: 'Трава',
      img: 'https://mixicons.zrefio.com/api/items/3713/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 2 }
      ],
      recipe: [
        [null, null, null],
        ['30188', null, null],
        ['30188', null, null]
      ]
    },
    {
      id: 'Sandstone',
      name: 'Песчаник',
      img: 'https://mixicons.zrefio.com/api/items/3601/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 2 }
      ],
      recipe: [
        [null, null, null],
        [null, null, '30188'],
        [null, '30188', null]
      ]
    },
    {
      id: 'Water',
      name: 'Вода',
      img: 'https://ru.minecraft.wiki/images/thumb/%D0%92%D0%BE%D0%B4%D0%B0.png/160px-%D0%92%D0%BE%D0%B4%D0%B0.png?be87b',
      outputQuantity: 1,
      components: [
        { id: '30188', count: 2 }
      ],
      recipe: [
        [null, null, null],
        [null, '30188', null],
        [null, '30188', null]
      ]
    },
    {
      id: 'Lava',
      name: 'Лава',
      img: 'https://ru.minecraft.wiki/images/thumb/%D0%9B%D0%B0%D0%B2%D0%B0_JE14.png/160px-%D0%9B%D0%B0%D0%B2%D0%B0_JE14.png?1c545',
      outputQuantity: 1,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, '30188', null],
        [null, '30188', null],
        [null, '30188', null]
      ]
    },
    {
      id: 'Mossy_4',
      name: 'Замшелый булыжник',
      img: 'https://mixicons.zrefio.com/api/items/4403/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, null],
        [null, '30188', null],
        ['30188', null, '30188']
      ]
    },
    {
      id: '249',
      name: 'Медная руда',
      img: 'https://mixicons.zrefio.com/api/items/3600/64/',
      outputQuantity: 5,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, '30188'],
        ['30188', null, '30188'],
        [null, null, null]
      ]
    },
    {
      id: '248',
      name: 'Оловянная руда',
      img: 'https://mixicons.zrefio.com/api/items/3599/64/',
      outputQuantity: 5,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, null],
        ['30188', null, '30188'],
        [null, null, '30188']
      ]
    },
    {
      id: '87',
      name: 'Адский камень',
      img: 'https://mixicons.zrefio.com/api/items/4606/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, '30188'],
        [null, '30188', null],
        ['30188', null, null]
      ]
    },
    {
      id: '332',
      name: 'Снежок',
      img: 'https://mixicons.zrefio.com/api/items/4120/64/',
      outputQuantity: 16,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, null],
        [null, null, null],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '263',
      name: 'Уголь',
      img: 'https://mixicons.zrefio.com/api/items/3628/64/',
      outputQuantity: 8,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        [null, null, '30188'],
        ['30188', null, null],
        [null, null, '30188']
      ]
    },
    {
      id: '35',
      name: 'Белая Шерсть',
      img: 'https://mixicons.zrefio.com/api/items/4164/64/',
      outputQuantity: 12,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        ['30188', null, '30188'],
        [null, null, null],
        [null, '30188', null]
      ]
    },
    {
      id: '106',
      name: 'Лианы',
      img: 'https://mixicons.zrefio.com/api/items/2596/64/',
      outputQuantity: 24,
      components: [
        { id: '30188', count: 3 }
      ],
      recipe: [
        ['30188', null, null],
        ['30188', null, null],
        ['30188', null, null]
      ]
    },
    {
      id: '351:4',
      name: 'Лазурит',
      img: 'https://mixicons.zrefio.com/api/items/4150/64/',
      outputQuantity: 9,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        ['30188', null, null],
        ['30188', null, null],
        ['30188', '30188', null]
      ]
    },
    {
      id: '352',
      name: 'Кость',
      img: 'https://mixicons.zrefio.com/api/items/4156/64/',
      outputQuantity: 32,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        ['30188', null, null],
        ['30188', '30188', null],
        ['30188', null, null]
      ]
    },
    {
      id: '49',
      name: 'Обсидиан',
      img: 'https://mixicons.zrefio.com/api/items/4404/64/',
      outputQuantity: 12,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        ['30188', null, '30188'],
        ['30188', null, '30188'],
        [null, null, null]
      ]
    },
    {
      id: '288',
      name: 'Перо',
      img: 'https://mixicons.zrefio.com/api/items/3665/64/',
      outputQuantity: 32,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        [null, '30188', null],
        [null, '30188', null],
        ['30188', null, '30188']
      ]
    },
    {
      id: '331',
      name: 'Редстоун',
      img: 'https://mixicons.zrefio.com/api/items/4119/64/',
      outputQuantity: 24,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        [null, null, null],
        [null, '30188', null],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '20',
      name: 'Стекло',
      img: 'https://mixicons.zrefio.com/api/items/3541/64/',
      outputQuantity: 32,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        [null, '30188', null],
        ['30188', null, '30188'],
        [null, '30188', null]
      ]
    },
    {
      id: '30217',
      name: 'Латекс',
      img: 'https://mixicons.zrefio.com/api/items/3915/64/',
      outputQuantity: 21,
      components: [
        { id: '30188', count: 4 }
      ],
      recipe: [
        ['30188', null, '30188'],
        [null, null, null],
        ['30188', null, '30188']
      ]
    },
    {
      id: '337',
      name: 'Глина',
      img: 'https://mixicons.zrefio.com/api/items/4125/64/',
      outputQuantity: 48,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        ['30188', '30188', null],
        ['30188', null, null],
        ['30188', '30188', null]
      ]
    },
    {
      id: '110',
      name: 'Мицелий',
      img: 'https://mixicons.zrefio.com/api/items/2601/64/',
      outputQuantity: 24,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        [null, null, null],
        ['30188', null, '30188'],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '15',
      name: 'Железная руда',
      img: 'https://mixicons.zrefio.com/api/items/3309/64/',
      outputQuantity: 2,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        ['30188', null, '30188'],
        [null, '30188', null],
        ['30188', null, '30188']
      ]
    },
    {
      id: '14',
      name: 'Золотая руда',
      img: 'https://mixicons.zrefio.com/api/items/3274/64/',
      outputQuantity: 2,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        [null, '30188', null],
        ['30188', '30188', '30188'],
        [null, '30188', null]
      ]
    },
    {
      id: '351',
      name: 'Чернильный мешок',
      img: 'https://mixicons.zrefio.com/api/items/4140/64/',
      outputQuantity: 48,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        [null, '30188', '30188'],
        [null, '30188', '30188'],
        [null, '30188', null]
      ]
    },
    {
      id: '351:3',
      name: 'Какао-бобы',
      img: 'https://mixicons.zrefio.com/api/items/4149/64/',
      outputQuantity: 32,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        ['30188', '30188', null],
        [null, null, '30188'],
        ['30188', '30188', null]
      ]
    },
    {
      id: '318',
      name: 'Кремень',
      img: 'https://mixicons.zrefio.com/api/items/4103/64/',
      outputQuantity: 32,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        [null, '30188', null],
        ['30188', '30188', null],
        ['30188', '30188', null]
      ]
    },
    {
      id: '98',
      name: 'Каменный кирпич',
      img: 'https://mixicons.zrefio.com/api/items/4662/64/',
      outputQuantity: 48,
      components: [
        { id: '30188', count: 5 }
      ],
      recipe: [
        ['30188', '30188', null],
        ['30188', '30188', null],
        ['30188', null, null]
      ]
    },
    {
      id: '89',
      name: 'Светокамень',
      img: 'https://mixicons.zrefio.com/api/items/4608/64/',
      outputQuantity: 8,
      components: [
        { id: '30188', count: 6 }
      ],
      recipe: [
        [null, '30188', null],
        ['30188', null, '30188'],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '81',
      name: 'Кактус',
      img: 'https://mixicons.zrefio.com/api/items/4601/64/',
      outputQuantity: 48,
      components: [
        { id: '30188', count: 6 }
      ],
      recipe: [
        [null, '30188', null],
        ['30188', '30188', '30188'],
        ['30188', null, '30188']
      ]
    },
    {
      id: '338',
      name: 'Сахарный тростник',
      img: 'https://mixicons.zrefio.com/api/items/4126/64/',
      outputQuantity: 48,
      components: [
        { id: '30188', count: 6 }
      ],
      recipe: [
        ['30188', null, '30188'],
        ['30188', null, '30188'],
        ['30188', null, '30188']
      ]
    },
    {
      id: '289',
      name: 'Порох',
      img: 'https://mixicons.zrefio.com/api/items/3666/64/',
      outputQuantity: 15,
      components: [
        { id: '30188', count: 7 }
      ],
      recipe: [
        ['30188', '30188', '30188'],
        ['30188', null, null],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '30128',
      name: 'Иридий',
      img: 'https://mixicons.zrefio.com/api/items/3800/64/',
      outputQuantity: 1,
      components: [
        { id: '30188', count: 7 }
      ],
      recipe: [
        ['30188', '30188', '30188'],
        [null, '30188', null],
        ['30188', '30188', '30188']
      ]
    },
    {
      id: '264',
      name: 'Алмаз',
      img: 'https://mixicons.zrefio.com/api/items/3630/64/',
      outputQuantity: 1,
      components: [
        { id: '30188', count: 9 }
      ],
      recipe: [
        ['30188', '30188', '30188'],
        ['30188', '30188', '30188'],
        ['30188', '30188', '30188']
      ]
    }
  //  {
  //    id: '80',
  //    name: '1',
  //    img: '',
  //    outputQuantity: 1,
  //    components: [
  //      { id: '30188', count: 5 }
  //   ],
  //    recipe: [
  //      [null, null, null],
  //      [null, null, null],
  //      [null, null, null]
  //    ]
  //  },
  ];
