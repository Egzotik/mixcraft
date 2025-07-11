  const crafts = [
    {
      id: '3099:3',
      name: 'Fission Charge Pad',
      img: 'https://mixicons.zrefio.com/api/items/4092/64/',
      outputQuantity: 1,
      recipe: [
        ['30147', '3099:2', '30147'],
        ['30143', '246:5', '30143'],
        [null, null, null],
      ]
    },
    {
      id: '3099:2',
      name: 'Lapotronic Charge Pad',
      img: 'https://mixicons.zrefio.com/api/items/4091/64/',
      outputQuantity: 1,
      recipe: [
        ['30150', '70', '30150'],
        ['30190', '227:2', '30190'],
        [null, null, null],
      ]
    },
    {
      id: '70',
      name: 'Нажимная плита',
      img: 'https://mixicons.zrefio.com/api/items/4593/64/',
      outputQuantity: 1,
      recipe: [
        ['1', '1', null],
        [null, null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30143',
      name: 'Чип Охлаждение',
      img: 'https://mixicons.zrefio.com/api/items/3816/64/',
      outputQuantity: 1,
      recipe: [
        [null, '332', null],
        ['332', '30146', '332'],
        [null, '332', null],
      ],
      hidden: true
    },
    {
      id: '4362:5',
      name: 'Усилитель сигнала',
      img: 'https://mixicons.zrefio.com/api/items/4363/64/',
      outputQuantity: 1,
      recipe: [
        ['4362:6', '331', null],
        ['265', '265', null],
        [null, null, null],
      ]
    },
    {
      id: '4362:16',
      name: 'МЭ шаблон крафта',
      img: 'https://mixicons.zrefio.com/api/items/4350/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '348', '20'],
        ['348', '4362:6', '348'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '4361:8',
      name: 'МЭ 512k Хранилище материи',
      img: 'https://mixicons.zrefio.com/api/items/4343/64/',
      outputQuantity: 1,
      recipe: [
        ['4361:2', '331', '4361:2'],
        ['331', '30188', '331'],
        ['4361:2', '331', '4361:2'],
      ]
    },
    {
      id: '4361:7',
      name: 'МЭ 4k хранилище',
      img: 'https://mixicons.zrefio.com/api/items/4342/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '331', '20'],
        ['331', '4362:17', '331'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '4361:5',
      name: 'МЭ Беспроводная точка доступа',
      img: 'https://mixicons.zrefio.com/api/items/4341/64/',
      outputQuantity: 1,
      recipe: [
        [null, '4362:4', null],
        [null, '900:6', null],
        [null, null, null],
      ]
    },
    {
      id: '4361:2',
      name: 'МЭ 64k хранилище',
      img: 'https://mixicons.zrefio.com/api/items/4339/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '331', '20'],
        ['331', '4362:3', '331'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '4362:3',
      name: 'Кластер памяти',
      img: 'https://mixicons.zrefio.com/api/items/4361/64/',
      outputQuantity: 1,
      recipe: [
        ['348', '4362:19', '348'],
        ['4362:2', '20', '4362:2'],
        ['348', '4362:2', '348'],
      ],
      hidden: true
    },
    {
      id: '4361',
      name: 'МЭ 16k хранилище',
      img: 'https://mixicons.zrefio.com/api/items/4338/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '331', '20'],
        ['331', '4362:2', '331'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '4362:2',
      name: 'Блок памяти',
      img: 'https://mixicons.zrefio.com/api/items/4360/64/',
      outputQuantity: 1,
      recipe: [
        ['348', '4362:19', '348'],
        ['4362:17', '20', '4362:17'],
        ['348', '4362:17', '348'],
      ],
      hidden: true
    },
    {
      id: '4362:17',
      name: 'Сегмент памяти',
      img: 'https://mixicons.zrefio.com/api/items/4351/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '4362:18', '331'],
        ['4362:1', '20', '4362:1'],
        ['331', '4362:1', '331'],
      ],
      hidden: true
    },
    {
      id: '4361',
      name: 'МЭ 1k хранилище',
      img: 'https://mixicons.zrefio.com/api/items/4337/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '331', '20'],
        ['331', '4362:1', '331'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '903:1',
      name: 'МЭ интерактивная импортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4644/64/',
      outputQuantity: 1,
      recipe: [
        ['903:3', '4362:19', null],
        [null, null, null],
        [null, null, null],
      ]
    },
    {
      id: '903',
      name: 'МЭ интерактивная экспортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4643/64/',
      outputQuantity: 1,
      recipe: [
        ['903:2', '4362:19', null],
        [null, null, null],
        [null, null, null],
      ]
    },
    {
      id: '901:15',
      name: 'МЭ интерактивная шина взаимодействия',
      img: 'https://mixicons.zrefio.com/api/items/4632/64/',
      outputQuantity: 1,
      recipe: [
        [null, '35', null],
        ['35', '901:9', '35'],
        [null, '35', null],
      ]
    },
    {
      id: '901:13',
      name: 'МЭ замаскированный кабель',
      img: 'https://mixicons.zrefio.com/api/items/4630/64/',
      outputQuantity: 1,
      recipe: [
        ['901:14', '35', null],
        [null, null, null],
        [null, null, null],
      ]
    },
    {
      id: '901:12',
      name: 'МЭ монитор',
      img: 'https://mixicons.zrefio.com/api/items/4629/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '265', '20'],
        ['901:14', '901:4', '20'],
        ['265', '265', '20'],
      ]
    },
    {
      id: '901:11',
      name: 'МЭ сборочный монитор',
      img: 'https://mixicons.zrefio.com/api/items/4628/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '265', '20'],
        ['901:14', '4362:18', '20'],
        ['265', '265', '20'],
      ]
    },
    {
      id: '901:10',
      name: 'МЭ IO порт',
      img: 'https://mixicons.zrefio.com/api/items/4627/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '20', '20'],
        ['900:3', '901:14', '900:3'],
        ['265', '4362:18', '265'],
      ]
    },
    {
      id: '901:9',
      name: 'МЭ шина взаимодействия',
      img: 'https://mixicons.zrefio.com/api/items/4640/64/',
      outputQuantity: 1,
      recipe: [
        [null, '901:14', null],
        [null, '900:8', null],
        ['265', '265', '265'],
      ]
    },
    {
      id: '901:7',
      name: 'МЭ корпус сборочного цеха',
      img: 'https://mixicons.zrefio.com/api/items/4638/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '266', '265'],
        ['266', '4362:6', '266'],
        ['265', '266', '265'],
      ]
    },
    {
      id: '901:6',
      name: 'МЭ тепловыводящий элемент',
      img: 'https://mixicons.zrefio.com/api/items/4637/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '101', '265'],
        ['101', '901:14', '101'],
        ['265', '101', '265'],
      ]
    },
    {
      id: '101',
      name: 'Железный забор',
      img: 'https://mixicons.zrefio.com/api/items/2593/64/',
      outputQuantity: 16,
      recipe: [
        ['265', '265', '265'],
        ['265', '265', '265'],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '901:15',
      name: 'МЭ сборочный процессор',
      img: 'https://mixicons.zrefio.com/api/items/4636/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '4362:6', '265'],
        ['348', '4362:19', '348'],
        ['265', '4362:6', '265'],
      ]
    },
    {
      id: '76',
      name: 'Красный факел',
      img: 'https://mixicons.zrefio.com/api/items/4596/64/',
      outputQuantity: 1,
      recipe: [
        ['331', null, null],
        ['280', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '901:4',
      name: 'МЭ излучатель сигнала',
      img: 'https://mixicons.zrefio.com/api/items/4635/64/',
      outputQuantity: 1,
      recipe: [
        [null, '265', null],
        ['901:14', '4362:18', '76'],
        [null, '265', null],
      ]
    },
    {
      id: '901:3',
      name: 'МЭ сборочный терминал',
      img: 'https://mixicons.zrefio.com/api/items/4634/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '265', '20'],
        ['58', '4362:1', '900:6'],
        ['265', '265', '20'],
      ]
    },
    {
      id: '901:1',
      name: 'МЭ точная импортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4633/64/',
      outputQuantity: 1,
      recipe: [
        ['903:3', '4362:18', null],
        [null, null, null],
        [null, null, null],
      ]
    },
    {
      id: '903:3',
      name: 'МЭ импортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4646/64/',
      outputQuantity: 1,
      recipe: [
        [null, '901:14', null],
        ['265', '900:8', '265'],
        [null, '29', null],
      ]
    },
    {
      id: '901',
      name: 'МЭ точная экспортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4626/64/',
      outputQuantity: 1,
      recipe: [
        ['903:2', '4362:18', null],
        [null, null, null],
        [null, null, null],
      ]
    },
    {
      id: '903:2',
      name: 'МЭ основная экспортирующая шина',
      img: 'https://mixicons.zrefio.com/api/items/4645/64/',
      outputQuantity: 1,
      recipe: [
        [null, '901:14', null],
        ['265', '900:8', '265'],
        [null, '33', null],
      ]
    },
    {
      id: '29',
      name: 'Липкий поршень',
      img: 'https://mixicons.zrefio.com/api/items/3712/64/',
      outputQuantity: 1,
      recipe: [
        ['30217', null, null],
        ['33', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '33',
      name: 'Поршень',
      img: 'https://mixicons.zrefio.com/api/items/4128/64/',
      outputQuantity: 1,
      recipe: [
        ['5', '5', '5'],
        ['4', '265', '4'],
        ['4', '331', '4'],
      ],
      hidden: true
    },
    {
      id: '900:9',
      name: 'МЭ сундук',
      img: 'https://mixicons.zrefio.com/api/items/4625/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '4362', '20'],
        ['265', '58', '265'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '900:8',
      name: 'МЭ интерфейс',
      img: 'https://mixicons.zrefio.com/api/items/4624/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '20', '265'],
        ['901:14', '4362', '20'],
        ['265', '20', '265'],
      ]
    },
    {
      id: '900:7',
      name: 'МЭ сундук',
      img: 'https://mixicons.zrefio.com/api/items/4623/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '4362', '20'],
        ['265', '54', '265'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '900:6',
      name: 'МЭ терминал доступа',
      img: 'https://mixicons.zrefio.com/api/items/4622/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '265', '20'],
        ['901:14', '4362', '20'],
        ['265', '265', '20'],
      ]
    },
    {
      id: '900:5',
      name: 'МЭ точка беспроводного доступа',
      img: 'https://mixicons.zrefio.com/api/items/4621/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '20', '265'],
        ['901:14', '4362:4', '20'],
        ['265', '20', '265'],
      ]
    },
    {
      id: '4362:4',
      name: 'Беспроводной приёмник',
      img: 'https://mixicons.zrefio.com/api/items/4362/64/',
      outputQuantity: 1,
      recipe: [
        [null, '4362:24', null],
        ['265', '280', '265'],
        [null, '265', null],
      ],
      hidden: true
    },
    {
      id: '4362:24',
      name: 'Аметистовая жемчужина',
      img: 'https://mixicons.zrefio.com/api/items/4359/64/',
      outputQuantity: 1,
      recipe: [
        ['4362:14', '4362:23', '4362:14'],
        ['4362:23', '368', '4362:23'],
        ['4362:14', '4362:23', '4362:14'],
      ],
      hidden: true
    },
    {
      id: '368',
      name: 'Жемчужина Эндермана',
      img: 'https://mixicons.zrefio.com/api/items/4188/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true
    },
    {
      id: '900:4',
      name: 'МЭ кодировщик шаблонов',
      img: 'https://mixicons.zrefio.com/api/items/4620/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '4362', '265'],
        ['265', '58', '265'],
        ['265', '265', '265'],
      ]
    },
    {
      id: '900:3',
      name: 'МЭ привод',
      img: 'https://mixicons.zrefio.com/api/items/4619/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '4362:18', '265'],
        ['20', '54', '20'],
        ['265', '4362:18', '265'],
      ]
    },
    {
      id: '900:2',
      name: 'МЭ контроллер',
      img: 'https://mixicons.zrefio.com/api/items/4618/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '4362:23', '265'],
        ['4362:23', '4362:19', '4362:23'],
        ['265', '4362:23', '265'],
      ]
    },
    {
      id: '4362:23',
      name: 'Аметистовый кристалл',
      img: 'https://mixicons.zrefio.com/api/items/4358/64/',
      outputQuantity: 1,
      recipe: [
        ['4362:6', '406', null],
        ['331', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '900:1',
      name: 'МЭ поставщик шаблонов',
      img: 'https://mixicons.zrefio.com/api/items/4617/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '58', '265'],
        ['4362', '4362:19', '4362'],
        ['265', '4362:1', '265'],
      ]
    },
    {
      id: '4362:1',
      name: 'Ячейка памяти',
      img: 'https://mixicons.zrefio.com/api/items/4354/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '4362:6', '331'],
        ['4362:6', '4362:18', '4362:6'],
        ['331', '4362:6', '331'],
      ],
      hidden: true
    },
    {
      id: '58',
      name: 'Верстак',
      img: 'https://mixicons.zrefio.com/api/items/4578/64/',
      outputQuantity: 1,
      recipe: [
        ['5', '5', null],
        ['5', '5', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362',
      name: 'Конвертирующая матрица',
      img: 'https://mixicons.zrefio.com/api/items/4344/64/',
      outputQuantity: 1,
      recipe: [
        ['265', '406', '265'],
        ['4362:14', '4362:18', '4362:14'],
        ['265', '4362:6', '265'],
      ],
      hidden: true
    },
    {
      id: '4362:19',
      name: 'МЭ улучшенный процессор',
      img: 'https://mixicons.zrefio.com/api/items/4353/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '4362:21', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362:18',
      name: 'МЭ стандартный процессор',
      img: 'https://mixicons.zrefio.com/api/items/4352/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '4362:20', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362:21',
      name: 'Незаконченный улучшенный процессор',
      img: 'https://mixicons.zrefio.com/api/items/4356/64/',
      outputQuantity: 1,
      recipe: [
        [null, '4371', null],
        ['331', '264', '331'],
        [null, '4362:13', null],
      ],
      hidden: true
    },
    {
      id: '4362:20',
      name: 'Незаконченный стандартный процессор',
      img: 'https://mixicons.zrefio.com/api/items/4355/64/',
      outputQuantity: 1,
      recipe: [
        [null, '4371', null],
        ['331', '266', '331'],
        [null, '4362:13', null],
      ],
      hidden: true
    },
    {
      id: '4371',
      name: 'Кварцевый резец',
      img: 'https://mixicons.zrefio.com/api/items/4376/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, '280'],
        ['265', '280', null],
        ['4362:6', '4362:6', null],
      ],
      hidden: true
    },
    {
      id: '4362:13',
      name: 'Кремний',
      img: 'https://mixicons.zrefio.com/api/items/4347/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '4362:7', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '901:14',
      name: 'МЭ кабель',
      img: 'https://mixicons.zrefio.com/api/items/4631/64/',
      outputQuantity: 3,
      recipe: [
        ['20', '20', '20'],
        ['4362:14', '4362:14', '4362:14'],
        ['20', '20', '20'],
      ]
    },
    {
      id: '4362:14',
      name: 'Аметистовая пыль',
      img: 'https://mixicons.zrefio.com/api/items/4348/64/',
      outputQuantity: 2,
      recipe: [
        ['4362:7', '4362:22', null],
        ['331', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362:22',
      name: 'Адская кварцеввая пыль',
      img: 'https://mixicons.zrefio.com/api/items/4357/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '406', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362:7',
      name: 'Кварцевая пыль',
      img: 'https://mixicons.zrefio.com/api/items/4365/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '4362:6', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '4362:6',
      name: 'Кристалл кварца',
      img: 'https://mixicons.zrefio.com/api/items/4364/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true
    },
    {
      id: '406',
      name: 'Кварц',
      img: 'https://mixicons.zrefio.com/api/items/4315/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true
    },
    {
      id: '250:15',
      name: 'Терраформер',
      img: 'https://mixicons.zrefio.com/api/items/3610/64/',
      outputQuantity: 1,
      recipe: [
        ['348', '30146', '348'],
        ['3', '250:12', '3'],
        ['348', '3', '348'],
      ]
    },
    {
      id: '30146',
      name: 'Чип',
      img: 'https://mixicons.zrefio.com/api/items/3819/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30191', null],
        [null, '30190', null],
        ['331', null, '331'],
      ],
      hidden: true
    },
    {
      id: '250:14',
      name: 'Генератор материи',
      img: 'https://mixicons.zrefio.com/api/items/3609/64/',
      outputQuantity: 1,
      recipe: [
        ['348', '30190', '348'],
        ['250:12', '30240', '250:12'],
        ['348', '30190', '348'],
      ]
    },
    {
      id: '250:13',
      name: 'Индукционная печь',
      img: 'https://mixicons.zrefio.com/api/items/3608/64/',
      outputQuantity: 1,
      recipe: [
        ['30248', '30248', '30248'],
        ['30248', '250:2', '30248'],
        ['30248', '250:12', '30248'],
      ]
    },
    {
      id: '250:11',
      name: 'Утилизатор',
      img: 'https://mixicons.zrefio.com/api/items/3606/64/',
      outputQuantity: 1,
      recipe: [
        [null, '348', null],
        ['3', '250:5', '3'],
        ['30249', '3', '30249'],
      ]
    },
    {
      id: '3',
      name: 'Земля',
      img: 'https://mixicons.zrefio.com/api/items/4307/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '30224', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30224',
      name: 'Биомасса',
      img: 'https://mixicons.zrefio.com/api/items/3924/64/',
      outputQuantity: 1,
      recipe: [
        ['338', '338', '338'],
        ['338', null, '338'],
        ['338', '338', '338'],
      ],
      hidden: true
    },
    {
      id: '250:10',
      name: 'Электролизёр',
      img: 'https://mixicons.zrefio.com/api/items/3605/64/',
      outputQuantity: 1,
      recipe: [
        ['30184', null, '30184'],
        ['30184', '30191', '30184'],
        ['30237', '250', '30237'],
      ]
    },
    {
      id: '250:9',
      name: 'Намагничиватель',
      img: 'https://mixicons.zrefio.com/api/items/3619/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '232', '331'],
        ['331', '250', '331'],
        ['331', '232', '331'],
      ]
    },
    {
      id: '232',
      name: 'Железный забор',
      img: 'https://mixicons.zrefio.com/api/items/3580/64/',
      outputQuantity: 12,
      recipe: [
        ['30249', '30249', '30249'],
        ['30249', '30249', '30249'],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '250:8',
      name: 'Помпа',
      img: 'https://mixicons.zrefio.com/api/items/3618/64/',
      outputQuantity: 1,
      recipe: [
        ['30237', '30191', '30237'],
        ['30237', '250', '30237'],
        ['245', '30212', '245'],
      ]
    },
    {
      id: '250:7',
      name: 'Автошахтёр',
      img: 'https://mixicons.zrefio.com/api/items/3617/64/',
      outputQuantity: 1,
      recipe: [
        ['30191', '250', '30191'],
        [null, '245', null],
        [null, '245', null],
      ]
    },
    {
      id: '245',
      name: 'Буровая труба',
      img: 'https://mixicons.zrefio.com/api/items/3591/64/',
      outputQuantity: 8,
      recipe: [
        ['30249', null, '30249'],
        ['30249', null, '30249'],
        ['30249', '30212', '30249'],
      ],
      hidden: true
    },
    {
      id: '250:5',
      name: 'Наполнитель',
      img: 'https://mixicons.zrefio.com/api/items/3616/64/',
      outputQuantity: 1,
      recipe: [
        ['30247', '30191', '30247'],
        ['30247', '250', '30247'],
        ['30247', '30247', '30247'],
      ]
    },
    {
      id: '250:5',
      name: 'Компрессор',
      img: 'https://mixicons.zrefio.com/api/items/3615/64/',
      outputQuantity: 1,
      recipe: [
        ['1', null, '1'],
        ['1', '250', '1'],
        ['1', '30191', '1'],
      ]
    },
    {
      id: '250:4',
      name: 'Экстрактор',
      img: 'https://mixicons.zrefio.com/api/items/3614/64/',
      outputQuantity: 1,
      recipe: [
        ['30212', '250', '30212'],
        ['30212', '30191', '30212'],
        [null, null, null],
      ]
    },
    {
      id: '30212',
      name: 'Краник',
      img: 'https://mixicons.zrefio.com/api/items/3910/64/',
      outputQuantity: 1,
      recipe: [
        [null, '5', null],
        ['5', '5', '5'],
        ['5', null, null],
      ],
      hidden: true
    },
    {
      id: '250:3',
      name: 'Дробитель',
      img: 'https://mixicons.zrefio.com/api/items/3613/64/',
      outputQuantity: 1,
      recipe: [
        ['318', '318', '318'],
        ['4', '250', '4'],
        [null, '30191', null],
      ]
    },
    {
      id: '250:2',
      name: 'Электропечь',
      img: 'https://mixicons.zrefio.com/api/items/3612/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30191', null],
        ['331', '250:1', '331'],
        [null, null, null],
      ]
    },
    {
      id: '250:1',
      name: 'Железная печь',
      img: 'https://mixicons.zrefio.com/api/items/3611/64/',
      outputQuantity: 1,
      recipe: [
        [null, '265', null],
        ['265', null, '265'],
        ['265', '61', '265'],
      ]
    },
    {
      id: '246:5',
      name: 'Ядерный реактор',
      img: 'https://mixicons.zrefio.com/api/items/3597/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30190', null],
        ['233', '233', '233'],
        [null, '246', null],
      ]
    },
    {
      id: '246:2',
      name: 'Водяная мельница',
      img: 'https://mixicons.zrefio.com/api/items/3594/64/',
      outputQuantity: 2,
      recipe: [
        ['280', '5', '280'],
        ['5', '246', '5'],
        ['280', '5', '280'],
      ]
    },
    {
      id: '246:1',
      name: 'Геотермальный генератор',
      img: 'https://mixicons.zrefio.com/api/items/3593/64/',
      outputQuantity: 1,
      recipe: [
        ['20', '30237', '20'],
        ['20', '30237', '20'],
        ['30249', '246', '30249'],
      ]
    },
    {
      id: '233',
      name: 'Блок реактора',
      img: 'https://mixicons.zrefio.com/api/items/3581/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30084', null],
        ['30084', '250', '30084'],
        [null, '30084', null],
      ]
    },
    {
      id: '227:2',
      name: 'ЭХО',
      img: 'https://mixicons.zrefio.com/api/items/3573/64/',
      outputQuantity: 1,
      recipe: [
        ['30240', '30190', '30240'],
        ['30240', '227:1', '30240'],
        ['30240', '250:12', '30240'],
      ]
    },
    {
      id: '30240',
      name: 'Мультикристалл',
      img: 'https://mixicons.zrefio.com/api/items/3943/64/',
      outputQuantity: 1,
      recipe: [
        ['351:4', '30191', '351:4'],
        ['351:4', '30241', '351:4'],
        ['351:4', '30191', '351:4'],
      ],
      hidden: true
    },
    {
      id: '250:12',
      name: 'Улучшенный механизм',
      img: 'https://mixicons.zrefio.com/api/items/3607/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30187', null],
        ['30150', '250', '30150'],
        [null, '30187', null],
      ],
      hidden: true
    },
    {
      id: '227:1',
      name: 'МФЭ',
      img: 'https://mixicons.zrefio.com/api/items/3572/64/',
      outputQuantity: 1,
      recipe: [
        ['30184:4', '30241', '30184:4'],
        ['30241', '250', '30241'],
        ['30184:4', '30241', '30184:4'],
      ]
    },
    {
      id: '227',
      name: 'Бат-Бокс',
      img: 'https://mixicons.zrefio.com/api/items/3571/64/',
      outputQuantity: 1,
      recipe: [
        ['5', '30184', '5'],
        ['30239', '30239', '30239'],
        ['5', '5', '5'],
      ]
    },
    {
      id: '225:1',
      name: 'Торговый автомат',
      img: 'https://mixicons.zrefio.com/api/items/3561/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '331', '331'],
        ['54', '250', '54'],
        [null, null, null],
      ]
    },
    {
      id: '225',
      name: 'Сейф',
      img: 'https://mixicons.zrefio.com/api/items/3560/64/',
      outputQuantity: 1,
      recipe: [
        ['30191', null, null],
        ['250', null, null],
        ['54', null, null],
      ]
    },
    {
      id: '224:4',
      name: 'Концентрированный Урановый блок',
      img: 'https://mixicons.zrefio.com/api/items/3555/64/',
      outputQuantity: 1,
      recipe: [
        ['224:3', '224:3', '224:3'],
        ['224:3', '224:3', '224:3'],
        ['224:3', '224:3', '224:3'],
      ]
    },
    {
      id: '224:3',
      name: 'Урановый блок',
      img: 'https://mixicons.zrefio.com/api/items/3554/64/',
      outputQuantity: 1,
      recipe: [
        ['30244', '30244', '30244'],
        ['30244', '30244', '30244'],
        ['30244', '30244', '30244'],
      ]
    },
    {
      id: '223:2',
      name: 'Автосадовник',
      img: 'https://mixicons.zrefio.com/api/items/3550/64/',
      outputQuantity: 1,
      recipe: [
        ['30191', '54', '30191'],
        ['218', '250', '218'],
        ['218', '218', '218'],
      ]
    },
    {
      id: '218',
      name: 'Жёрдочки',
      img: 'https://mixicons.zrefio.com/api/items/3543/64/',
      outputQuantity: 2,
      recipe: [
        ['280', null, '280'],
        ['280', null, '280'],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '280',
      name: 'Палки',
      img: 'https://mixicons.zrefio.com/api/items/3657/64/',
      outputQuantity: 4,
      recipe: [
        ['5', null, null],
        ['5', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '54',
      name: 'Сундук',
      img: 'https://mixicons.zrefio.com/api/items/4575/64/',
      outputQuantity: 1,
      recipe: [
        ['5', '5', '5'],
        ['5', null, '5'],
        ['5', '5', '5'],
      ],
      hidden: true
    },
    {
      id: '5',
      name: 'Дубовые доски',
      img: 'https://mixicons.zrefio.com/api/items/4579/64/',
      outputQuantity: 4,
      recipe: [
        ['17', null, null],
        [null, null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '194:7',
      name: 'Eclipse Solar Panel',
      img: 'https://mixicons.zrefio.com/api/items/3513/64/',
      outputQuantity: 1,
      recipe: [
        ['194:6', '30831:17', '194:6'],
        ['30831:15', '194:6', '30831:15'],
        ['30831:14', '194:6', '30831:14'],
      ]
    },
    {
      id: '30831:17',
      name: 'Moonlight Filter',
      img: 'https://mixicons.zrefio.com/api/items/4072/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:12', '30831:13', '30831:12'],
        ['30831:13', '30831:16', '30831:13'],
        ['30831:12', '30831:13', '30831:12'],
      ],
      hidden: true
    },
    {
      id: '30831:16',
      name: 'Photon Buffer',
      img: 'https://mixicons.zrefio.com/api/items/4071/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:11', '30475:2', '30831:11'],
        ['30475:2', '264', '30475:2'],
        ['30831:11', '30475:2', '30831:11'],
      ],
      hidden: true
    },
    {
      id: '194:6',
      name: 'Solaris Titan Panel',
      img: 'https://mixicons.zrefio.com/api/items/3512/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:13', '30831:16', '30831:13'],
        ['194:4', '30831:15', '194:4'],
        ['194:4', '30831:14', '194:4'],
      ]
    },
    {
      id: '30831:15',
      name: 'Quantum Processor Cooling',
      img: 'https://mixicons.zrefio.com/api/items/4070/64/',
      outputQuantity: 1,
      recipe: [
        ['30094', '30475:2', '30094'],
        ['30475:2', null, '30475:2'],
        ['30094', '30475:2', '30094'],
      ],
      hidden: true
    },
    {
      id: '30475:2',
      name: 'Охлаждающий элемент',
      img: 'https://mixicons.zrefio.com/api/items/3970/64/',
      outputQuantity: 1,
      recipe: [
        ['30099', '30094', '30099'],
        ['30098', '30147', '30098'],
        ['30099', '30094', '30099'],
      ],
      hidden: true
    },
    {
      id: '30098',
      name: 'Теплоёмкая реакторная пластина',
      img: 'https://mixicons.zrefio.com/api/items/3741/64/',
      outputQuantity: 1,
      recipe: [
        ['30205', '30084', null],
        ['30084', null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30205',
      name: 'Реакторная пластина',
      img: 'https://mixicons.zrefio.com/api/items/3901/64/',
      outputQuantity: 1,
      recipe: [
        ['30084', '30187', null],
        [null, null, null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30094',
      name: 'Продвинутый теплообменник',
      img: 'https://mixicons.zrefio.com/api/items/3737/64/',
      outputQuantity: 1,
      recipe: [
        ['30184:9', '30191', '30184:9'],
        ['30204', '30084', '30204'],
        ['30184:9', '30191', '30184:9'],
      ],
      hidden: true
    },
    {
      id: '30204',
      name: 'Теплообменник',
      img: 'https://mixicons.zrefio.com/api/items/3900/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30191', null],
        ['30247', '30084', '30247'],
        [null, '30247', null],
      ],
      hidden: true
    },
    {
      id: '30084',
      name: 'Плотная медная пластина',
      img: 'https://mixicons.zrefio.com/api/items/3727/64/',
      outputQuantity: 1,
      recipe: [
        ['30248', '30248', '30248'],
        ['30248', '30248', '30248'],
        ['30248', '30248', null],
      ],
      hidden: true
    },
    {
      id: '30100',
      name: 'Охлаждающий стержень 30к',
      img: 'https://mixicons.zrefio.com/api/items/3744/64/',
      outputQuantity: 1,
      recipe: [
        ['30247', '30247', '30247'],
        ['30206', '30206', '30206'],
        ['30247', '30247', '30247'],
      ],
      hidden: true
    },
    {
      id: '30100',
      name: 'Охлаждающий стержень 30к',
      img: 'https://mixicons.zrefio.com/api/items/3744/64/',
      outputQuantity: 1,
      recipe: [
        ['30247', '30247', '30247'],
        ['30206', '30206', '30206'],
        ['30247', '30247', '30247'],
      ],
      hidden: true
    },
    {
      id: '30206',
      name: 'Охлаждающий стержень 10к',
      img: 'https://mixicons.zrefio.com/api/items/3902/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30247', null],
        ['30247', '30218', '30247'],
        [null, '30247', null],
      ],
      hidden: true
    },
    {
      id: '30237',
      name: 'Пустая капсула',
      img: 'https://mixicons.zrefio.com/api/items/3940/64/',
      outputQuantity: 16,
      recipe: [
        [null, '30247', null],
        ['30247', null, '30247'],
        [null, '30247', null],
      ],
      hidden: true
    },
    {
      id: '30218',
      name: 'Капсула с водой',
      img: 'https://mixicons.zrefio.com/api/items/3916/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '30237', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30831:14',
      name: 'Quantum Processor',
      img: 'https://mixicons.zrefio.com/api/items/4069/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:12', '30475:1', '30831:12'],
        ['30475:1', '30254', '30475:1'],
        ['30831:12', '30475:1', '30831:12']
      ],
      hidden: true
    },
    {
      id: '4362:9',
      name: 'Золотая пыль',
      img: 'https://mixicons.zrefio.com/api/items/3959/64/',
      outputQuantity: 2,
      recipe: [
        [null, null, null],
        [null, '14', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30831:12',
      name: 'Titanium Plate',
      img: 'https://mixicons.zrefio.com/api/items/4067/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30831:11', null],
        ['30831:11', null, '30831:11'],
        [null, '30831:11', null]
      ],
      hidden: true
    },
    {
      id: '30831:13',
      name: 'Titanium Lense',
      img: 'https://mixicons.zrefio.com/api/items/4068/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:5', '30831:5', '30831:5'],
        ['30831:11', null, '30831:11'],
        ['30831:5', '30831:5', '30831:5']
      ],
      hidden: true
    },
    {
      id: '194:4',
      name: 'Quantum Solar Panel',
      img: 'https://mixicons.zrefio.com/api/items/3510/64/',
      outputQuantity: 1,
      recipe: [
        ['194:2', '194:2', '194:2'],
        ['194:2', '30475:1', '194:2'],
        ['194:2', '194:2', '194:2'],
      ]
    },
    {
      id: '194:2',
      name: 'Ultimate Solar Panel',
      img: 'https://mixicons.zrefio.com/api/items/3508/64/',
      outputQuantity: 1,
      recipe: [
        [null, '22', null],
        ['30136', '194', '30136'],
        ['30831:4', '30136', '30831:4'],
      ]
    },
    {
      id: '30136',
      name: 'Куб сжатого угля',
      img: 'https://mixicons.zrefio.com/api/items/3808/64/',
      outputQuantity: 1,
      recipe: [
        ['30137', '30137', '30137'],
        ['30137', '49', '30137'],
        ['30137', '30137', '30137'],
      ],
      hidden: true
    },
    {
      id: '30137',
      name: 'Выжатая угольная смесь',
      img: 'https://mixicons.zrefio.com/api/items/3809/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '30138', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30138',
      name: 'Угольный шарик',
      img: 'https://mixicons.zrefio.com/api/items/3810/64/',
      outputQuantity: 1,
      recipe: [
        ['30256', '30256', '30256'],
        ['30256', '318', '30256'],
        ['30256', '30256', '30256'],
      ],
      hidden: true
    },
    {
      id: '30831:4',
      name: 'Enriched Sunnarium Alloy',
      img: 'https://mixicons.zrefio.com/api/items/4076/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30831:3', null],
        ['30831:3', '30831:1', '30831:3'],
        [null, '30831:3', null],
      ],
      hidden: true
    },
    {
      id: '30831:1',
      name: 'Sunnarium Alloy',
      img: 'https://mixicons.zrefio.com/api/items/4073/64/',
      outputQuantity: 1,
      recipe: [
        ['30147', '30147', '30147'],
        ['30147', '30831', '30147'],
        ['30147', '30147', '30147'],
      ],
      hidden: true
    },
    {
      id: '194:1',
      name: 'Hybrid Solar Panel',
      img: 'https://mixicons.zrefio.com/api/items/3507/64/',
      outputQuantity: 1,
      recipe: [
        ['30150', '22', '30150'],
        ['30147', '194', '30147'],
        ['30190', '30831:3', '30190'],
      ]
    },
    {
      id: '22',
      name: 'Лазуритовый блок',
      img: 'https://mixicons.zrefio.com/api/items/3577/64/',
      outputQuantity: 1,
      recipe: [
        ['351:4', '351:4', '351:4'],
        ['351:4', '351:4', '351:4'],
        ['351:4', '351:4', '351:4'],
      ],
      hidden: true
    },
    {
      id: '30831:3',
      name: 'Enriched Sunnarium',
      img: 'https://mixicons.zrefio.com/api/items/4075/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:2', '30831:2', '30831:2'],
        ['30831:2', '30831', '30831:2'],
        ['30831:2', '30831:2', '30831:2'],
      ],
      hidden: true
    },
    {
      id: '30831',
      name: 'Sunnarium',
      img: 'https://mixicons.zrefio.com/api/items/4064/64/',
      outputQuantity: 1,
      recipe: [
        ['30188', '30188', '30188'],
        ['348', '348', '348'],
        ['30188', '30188', '30188'],
      ],
      hidden: true
    },
    {
      id: '194',
      name: 'Advanced Solar Panel',
      img: 'https://mixicons.zrefio.com/api/items/3506/64/',
      outputQuantity: 1,
      recipe: [
        ['30831:5', '30831:5', '30831:5'],
        ['30187', '246:3', '30187'],
        ['30190', '30831:8', '30190'],
      ]
    },
    {
      id: '30831:8',
      name: 'Irradiant Reinforced Plate',
      img: 'https://mixicons.zrefio.com/api/items/4080/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '30831:9', '331'],
        ['351:4', '30831:7', '351:4'],
        ['331', '264', '331'],
      ],
      hidden: true
    },
    {
      id: '30831:9',
      name: 'Sunnarium part',
      img: 'https://mixicons.zrefio.com/api/items/4081/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30188', null],
        [null, '348', null],
        [null, '30188', null],
      ],
      hidden: true
    },
    {
      id: '30831:7',
      name: 'Reinforced Iridium Iron Plate',
      img: 'https://mixicons.zrefio.com/api/items/4079/64/',
      outputQuantity: 1,
      recipe: [
        ['30187', '30150', '30187'],
        ['30150', '30831:6', '30150'],
        ['30187', '30150', '30187'],
      ],
      hidden: true
    },
    {
      id: '30831:6',
      name: 'Iridium Iron Plate',
      img: 'https://mixicons.zrefio.com/api/items/4078/64/',
      outputQuantity: 1,
      recipe: [
        ['30249', '30249', '30249'],
        ['30249', '30831:10', '30249'],
        ['30249', '30249', '30249'],
      ],
      hidden: true
    },
    {
      id: '30831:10',
      name: 'Iridium Ingot',
      img: 'https://mixicons.zrefio.com/api/items/4065/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '30128', null],
        [null, null, null],
      ],
      hidden: true
    },
    {
      id: '30190',
      name: 'Улучшенная электросхема',
      img: 'https://mixicons.zrefio.com/api/items/3885/64/',
      outputQuantity: 6,
      recipe: [
        ['331', '348', '331'],
        ['351:4', '30191', '351:4'],
        ['331', '348', '331']
      ],
      hidden: true
    },
    {
      id: '30831:5',
      name: 'Irradiant Glass Pane',
      img: 'https://mixicons.zrefio.com/api/items/4077/64/',
      outputQuantity: 6,
      recipe: [
        ['230', '230', '230'],
        ['30831:2', '348', '30831:2'],
        ['230', '230', '230']
      ],
      hidden: true
    },
    {
      id: '230',
      name: 'Укреплённое стекло',
      img: 'https://mixicons.zrefio.com/api/items/3578/64/',
      outputQuantity: 7,
      recipe: [
        ['20', '30187', '20'],
        ['20', '20', '20'],
        ['20', '30187', '20']
      ],
      hidden: true
    },
    {
      id: '30831:2',
      name: 'Irradiant Uranium',
      img: 'https://mixicons.zrefio.com/api/items/4074/64/',
      outputQuantity: 1,
      recipe: [
        [null, '348', null],
        ['348', '30244', '348'],
        [null, '348', null]
      ],
      hidden: true
    },
    {
      id: '348',
      name: 'Свето-пыль',
      img: 'https://mixicons.zrefio.com/api/items/4137/64/',
      outputQuantity: 4,
      recipe: [
        [null, null, null],
        [null, '89', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30244',
      name: 'Обогащённый уран',
      img: 'https://mixicons.zrefio.com/api/items/3949/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true
    },
    {
      id: '246:3',
      name: 'Солнечная панель',
      img: 'https://mixicons.zrefio.com/api/items/3595/64/',
      outputQuantity: 1,
      recipe: [
        ['30256', '20', '30256'],
        ['20', '30256', '20'],
        ['30191', '246', '30191']
      ]
    },
    {
      id: '2790:5',
      name: 'Ветряк КН',
      img: 'https://mixicons.zrefio.com/api/items/3654/64/',
      outputQuantity: 1,
      recipe: [
        ['30475:1', '2790:4', '30475:1'],
        ['2790:4', '227:5', '2790:4'],
        ['30475:1', '2790:4', '30475:1']
      ]
    },
    {
      id: '30475:1',
      name: 'Сверхпроводник',
      img: 'https://mixicons.zrefio.com/api/items/3969/64/',
      outputQuantity: 3,
      recipe: [
        ['30475', '30475', '30475'],
        ['30184:9', '266', '30184:9'],
        ['30475', '30475', '30475']
      ],
      hidden: true
    },
    {
      id: '30150',
      name: 'Углепластик',
      img: 'https://mixicons.zrefio.com/api/items/3824/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '30151', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30151',
      name: 'Углеткань',
      img: 'https://mixicons.zrefio.com/api/items/3825/64/',
      outputQuantity: 1,
      recipe: [
        ['30152', '30152', null],
        [null, null, null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30152',
      name: 'Углеволокно',
      img: 'https://mixicons.zrefio.com/api/items/3826/64/',
      outputQuantity: 1,
      recipe: [
        ['30256', '30256', null],
        ['30256', '30256', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30256',
      name: 'Угольная пыль',
      img: 'https://mixicons.zrefio.com/api/items/3961/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '263', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30475',
      name: 'Изоляция сверхпроводника',
      img: 'https://mixicons.zrefio.com/api/items/3968/64/',
      outputQuantity: 2,
      recipe: [
        ['30187', '30147', '30187'],
        ['30150', '30150', '30150'],
        ['30187', '30147', '30187']
      ],
      hidden: true
    },
    {
      id: '30147',
      name: 'Иридиевая плата',
      img: 'https://mixicons.zrefio.com/api/items/3820/64/',
      outputQuantity: 1,
      recipe: [
        ['30128', '30187', '30128'],
        ['30187', '264', '30187'],
        ['30128', '30187', '30128']
      ],
      hidden: true
    },
    {
      id: '30187',
      name: 'Композит',
      img: 'https://mixicons.zrefio.com/api/items/3882/64/',
      outputQuantity: 2,
      recipe: [
        ['30249', '30249', '30249'],
        ['5261', '5261', '5261'],
        ['30248', '30248', '30248']
      ],
      hidden: true
    },
    {
      id: '5261',
      name: 'Бронзовый слиток',
      img: 'https://mixicons.zrefio.com/api/items/4526/64/',
      outputQuantity: 4,
      recipe: [
        ['30249', '30249', '30249'],
        ['30247', null, null],
        ['30248', '30248', '30248']
      ],
      hidden: true
    },
    {
      id: '30184:9',
      name: 'Стекловолокно',
      img: 'https://mixicons.zrefio.com/api/items/3879/64/',
      outputQuantity: 4,
      recipe: [
        ['20', '20', '20'],
        ['331', '264', '331'],
        ['20', '20', '20']
      ],
      hidden: true
    },
    {
      id: '227:5',
      name: 'Трансформатор ВН',
      img: 'https://mixicons.zrefio.com/api/items/3576/64/',
      outputQuantity: 1,
      recipe: [
        [null, '30184:8', null],
        ['30191', '227:4', '30241'],
        [null, '30184:8', null]
      ]
    },
    {
      id: '30184:8',
      name: 'Высоковольтный провод тройной изоляции',
      img: 'https://mixicons.zrefio.com/api/items/3878/64/',
      outputQuantity: 1,
      recipe: [
        ['30249', '30249', '30249'],
        [null, null, null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30184:5',
      name: 'Высоковольтный провод',
      img: 'https://mixicons.zrefio.com/api/items/3875/64/',
      outputQuantity: 1,
      recipe: [
        ['30249', '30249', '30249'],
        [null, null, null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30241',
      name: 'Энергокристалл',
      img: 'https://mixicons.zrefio.com/api/items/3945/64/',
      outputQuantity: 1,
      recipe: [
        ['331', '331', '331'],
        ['331', '264', '331'],
        ['331', '331', '331']
      ],
      hidden: true
    },
    {
      id: '5',
      name: 'Доски',
      img: 'https://mixicons.zrefio.com/api/items/4579/64/',
      outputQuantity: 4,
      recipe: [
        [null, null, null],
        [null, '17', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '4',
      name: 'Булыжник',
      img: 'https://mixicons.zrefio.com/api/items/4405/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '1', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '61',
      name: 'Печка',
      img: 'https://mixicons.zrefio.com/api/items/4584/64/',
      outputQuantity: 1,
      recipe: [
        ['4', '4', '4'],
        ['4', null, '4'],
        ['4', '4', '4']
      ],
      hidden: true
    },
    {
      id: '265',
      name: 'Железо',
      img: 'https://mixicons.zrefio.com/api/items/3631/64/',
      outputQuantity: 2,
      recipe: [
        [null, null, null],
        [null, '15', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '266',
      name: 'Золото',
      img: 'https://mixicons.zrefio.com/api/items/3632/64/',
      outputQuantity: 2,
      recipe: [
        [null, null, null],
        [null, '14', null],
        [null, null, null]
      ],
      hidden: true
    },
    
    // Крафты из Industrial Craft (ic)
    {
      id: '2790:4',
      name: 'Ветряк СВН',
      img: 'https://mixicons.zrefio.com/api/items/3653/64/',
      outputQuantity: 1,
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
      recipe: [
        ['20', '20', '20'],
        ['30184:4', '227:4', '30184:4'],
        ['20', '30191', '20']
      ],
      hidden: true
    },
    {
      id: '227:4',
      name: 'Трансформатор СН',
      img: 'https://mixicons.zrefio.com/api/items/3575/64/',
      outputQuantity: 1,
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
      recipe: [
        ['30216', '30216', null],
        ['30184:2', null, null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30184:2',
      name: 'Золотой провод',
      img: 'https://mixicons.zrefio.com/api/items/3872/64/',
      outputQuantity: 12,
      recipe: [
        [null, null, null],
        ['266', '266', '266'],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30191',
      name: 'Электросхема',
      img: 'https://mixicons.zrefio.com/api/items/3886/64/',
      outputQuantity: 1,
      recipe: [
        ['30184', '30184', '30184'],
        ['331', '30249', '331'],
        ['30184', '30184', '30184']
      ],
      hidden: true
    },
    {
      id: '2790',
      name: 'Ветряк СНН',
      img: 'https://mixicons.zrefio.com/api/items/3649/64/',
      outputQuantity: 1,
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
      recipe: [
        ['30216', '30216', '30216'],
        ['30248', '30248', '30248'],
        ['30216', '30216', '30216']
      ],
      hidden: true
    },
    {
      id: '30216',
      name: 'Резина',
      img: 'https://mixicons.zrefio.com/api/items/3914/64/',
      outputQuantity: 3,
      recipe: [
        [null, null, null],
        [null, '30217', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30249',
      name: 'Слиток закаленного железа',
      img: 'https://mixicons.zrefio.com/api/items/3954/64/',
      outputQuantity: 1,
      recipe: [
        [null, null, null],
        [null, '265', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30247',
      name: 'Оловянный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3952/64/',
      outputQuantity: 2,
      recipe: [
        [null, null, null],
        [null, '248', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '30248',
      name: 'Медный слиток',
      img: 'https://mixicons.zrefio.com/api/items/3953/64/',
      outputQuantity: 2,
      recipe: [
        [null, null, null],
        [null, '249', null],
        [null, null, null]
      ],
      hidden: true
    },
    {
      id: '250',
      name: 'Механизм',
      img: 'https://mixicons.zrefio.com/api/items/3604/64/',
      outputQuantity: 1,
      recipe: [
        ['30249', '30249', '30249'],
        ['30249', null, '30249'],
        ['30249', '30249', '30249']
      ],
      hidden: true
    },
    // Крафты из материи (30188)
    {
      id: '30831:11',
      name: 'Слиток титана',
      img: 'https://mixicons.zrefio.com/api/items/4066/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true  // <- этот флаг для скрытия из списка выбора
    },
    {
      id: '30188',
      name: 'Материя',
      img: 'https://mixicons.zrefio.com/api/items/3883/64/',
      outputQuantity: 1,
      recipe: null,
      hidden: true  // <- этот флаг для скрытия из списка выбора
    },
    {
      id: '17',
      name: 'Древесина',
      img: 'https://mixicons.zrefio.com/api/items/3311/64/',
      outputQuantity: 8,
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
      recipe: [
        ['30188', null, '30188'],
        [null, null, null],
        [null, null, null]
      ]
    },
    {
      id: '2',
      name: 'Трава',
      img: 'https://mixicons.zrefio.com/api/items/3713/64/',
      outputQuantity: 16,
      recipe: [
        [null, null, null],
        ['30188', null, null],
        ['30188', null, null]
      ]
    },
    {
      id: '24',
      name: 'Песчаник',
      img: 'https://mixicons.zrefio.com/api/items/3601/64/',
      outputQuantity: 16,
      recipe: [
        [null, null, null],
        [null, null, '30188'],
        [null, '30188', null]
      ]
    },
    {
      id: '13',
      name: 'Гравий',
      img: 'https://mixicons.zrefio.com/api/items/3207/64/',
      outputQuantity: 32,
      recipe: [
        ['30188', '30188', null],
        ['30188', null, '30188'],
        [null, '30188', '30188']
      ]
    },
    {
      id: '48',
      name: 'Булыжник с мхом',
      img: 'https://mixicons.zrefio.com/api/items/4403/64/',
      outputQuantity: 16,
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
      outputQuantity: 20,
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
      recipe: [
        ['30188', '30188', '30188'],
        ['30188', '30188', '30188'],
        ['30188', '30188', '30188']
      ]
    }
  ];
