const Images = [
    { image: {uri: "https://happymonday.ua/wp-content/uploads/2021/05/DSC04255-Edit.jpg"}},
    { image: {uri: "https://gwaramedia.com/wp-content/uploads/2022/12/nestlie-.jpeg"} },
    { image: {uri: "https://focus.ua/static/storage/thumbs/920x465/d/55/5387377d-daf4f9a849c416997a78d5375f44a55d.jpg?v=5749_1"} },
    { image: {uri: "https://scontent.fiev7-4.fna.fbcdn.net/v/t39.30808-6/328246412_574243704752290_1177847666518691568_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=fv4peOMi2boAX_KCZeO&_nc_oc=AQld-WTZc1FHhm2o_GOQT41GbQLPL--TS4rEB0XvZfXJ4xKEoKsM1sNd989D27QHafU&_nc_ht=scontent.fiev7-4.fna&oh=00_AfAMUpx0UHEbPFSJmVK0lALLVQZyJRpLuPZEq7Ekzwtv6Q&oe=6599CC46"} },
    { image: {uri: "https://static.ukrinform.com/photos/2023_09/thumb_files/630_360_1694616473-773.jpg"} },
  ];

  export const markers = [
    {
      coordinate: {
        latitude: 50.41046902698176,
        longitude:  30.53453126756788,
      },
      id: 1,
      title: "Україна без сміття",
      image: Images[0].image,
      name: "Конкурс зі збору PET-пляшок",
      description: "вже закінчився, але можна розмістити: Конкурс зі збору PET-пляшок. Винагороджуємо топовими подарунками сортобоженьок, які сортують пластик! Приносьте пляшки на станцію самостійно, передавайте УБС Кур’єром чи в межах послуги «Пластик Поштою» і вигравайте класний приз від партнерів PUMA. Подробиці http://surl.li/novzz"
    },
    {
      coordinate: {
        latitude: 50.473067702840254,
        longitude: 30.522541169320125,
      },
      id: 2,
      title: "Nestlé в Україні",
      image: Images[1].image,
      name: "Екологічні ініціативи Nestlé в Україні",
      description: "Інвестиції в перехід на «зелену» електроенергію – 16,3 млн грн. Сонячні електростанції встановили на фабриці у Торчині та в дистрибуційному центрі в Смолигові та Малехові. Компанія розпочала перехід на гібридні автомобілі для сприяння нульового рівня викидів СО2 до 2050 р."
    },
    {
      coordinate: {
        latitude: 50.13693732484886,
        longitude: 30.668212944743203,
      },
      id: 3,
      title: "Київський картонно-паперовий комбінат",
      image: Images[2].image,
      name: "Підхід ресайклінгу на Київському картонно-паперовому комбінаті",
      description: "Підприємство здатне переробляти до 1500 т макулатури на добу. А це щодоби зберігає близько 15 тисяч дерев. Підприємство уже тривалий час використовує екологічно-відповідальні технології на всіх етапах виробництва і продовжує вдосконалюватися в цьому. Зокрема, йдеться як про виробничі технологічні процеси, так і про відповідальний добір сировини та матеріалів, а також про інвестиції в надсучасне устаткування, яке відповідає усім сучасним екологічним вимогам.  Загалом за період з 2000 по 2021 роки компанія інвестувала в розвиток більш ніж 360 млн євро, з яких понад 103,5 млн євро тільки за останні п’ять років.  Так, 99% використаної у виробництві води підприємство ретельно очищує і повертає до Дніпра (1% — циркулює у замкнених циклах). Цей обсяг дорівнює еквіваленту 3200 олімпійських плавальних басейнів.  Так, підприємство щороку знижує показник забору технічної води. Лише торік об’єми технічної води забраної з Дніпра та використаної на виробництво продукції були зменшені від 2 до 6,3%, порівняно з відповідним періодом минулого року. Це стало можливо завдяки модернізації виробничих процесів, впровадженню замкнутих циклів водоспоживання, проведенню заміни та ремонтів насосного обладнання та трубопроводів технічної води.  Комбінат на постійній основі модернізує і оновлює обладнання на більше енергоефективне та сучасне."
    },
    {
      coordinate: {
        latitude: 50.374197464819005,
        longitude: 30.44639699446838,
      },
      id: 4,
      title: "Enjoy The Wood",
      image: Images[3].image,
      name: "Ліс Enjoy The Wood",
      description: "Ліс Enjoy The Wood. Для захисту та відновлення Землі компанія з виробництва дерев`яних виробів Enjoy The Wood розпочала висаджувати дерева за підтримки некомерційної організації Tree-Nation. Завдяки їхній платформі Enjoy The Wood відслідковує кількість саджанців, об’єм переробленого вуглекислого газу та планує збільшення насаджень.Подробиці https://enjoythewood.ua/blog/dereva-enjoy-the-wood-2023/"
    },
    {
      coordinate: {
        latitude: 50.4231146725248,
        longitude: 30.55317193658083,
      },
      id: 5,
      title: "IDS Ukraine (Моршинська)",
      image: Images[4].image,
      name: "Моршинська",
      description: 'розширює соціально-екологічну ініціативу "Зелена торба" й пропонує кожному приєднатися до допомоги нашим захисникам. Разом з українським технологічним партнером компанія розпочинає унікальний проєкт. Відтепер зібрані пластикові пляшки з маркуванням PET-1 стають цінним ресурсом — їх перероблятимуть на деталі для навчальних дронів, які використовуються для тренування військових. Компанія закриватиме потребу однієї з найбільших організацій, що навчає ЗСУ керувати дронами. Подробиці за покликанням https://zapryrodu.morshynska.ua/recycle/'
    },
  ];
  
  export const mapDarkStyle = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ];
  
    export const mapStandardStyle = [
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
    ];