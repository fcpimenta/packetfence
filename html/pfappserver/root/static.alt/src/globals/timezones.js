const timezones = {
  'Africa': {
    'Abidjan': 'Abidjan',
    'Accra': 'Accra',
    'Algiers': 'Algiers',
    'Bissau': 'Bissau',
    'Cairo': 'Cairo',
    'Casablanca': 'Casablanca',
    'Ceuta': 'Ceuta',
    'El_Aaiun': 'El_Aaiun',
    'Johannesburg': 'Johannesburg',
    'Khartoum': 'Khartoum',
    'Lagos': 'Lagos',
    'Maputo': 'Maputo',
    'Monrovia': 'Monrovia',
    'Nairobi': 'Nairobi',
    'Ndjamena': 'Ndjamena',
    'Tripoli': 'Tripoli',
    'Tunis': 'Tunis',
    'Windhoek': 'Windhoek'
  },
  'America': {
    'Adak': 'Adak',
    'Anchorage': 'Anchorage',
    'Araguaina': 'Araguaina',
    'Argentina/Buenos_Aires': 'Argentina/Buenos_Aires',
    'Argentina/Catamarca': 'Argentina/Catamarca',
    'Argentina/Cordoba': 'Argentina/Cordoba',
    'Argentina/Jujuy': 'Argentina/Jujuy',
    'Argentina/La_Rioja': 'Argentina/La_Rioja',
    'Argentina/Mendoza': 'Argentina/Mendoza',
    'Argentina/Rio_Gallegos': 'Argentina/Rio_Gallegos',
    'Argentina/Salta': 'Argentina/Salta',
    'Argentina/San_Juan': 'Argentina/San_Juan',
    'Argentina/San_Luis': 'Argentina/San_Luis',
    'Argentina/Tucuman': 'Argentina/Tucuman',
    'Argentina/Ushuaia': 'Argentina/Ushuaia',
    'Asuncion': 'Asuncion',
    'Atikokan': 'Atikokan',
    'Bahia': 'Bahia',
    'Bahia_Banderas': 'Bahia_Banderas',
    'Barbados': 'Barbados',
    'Belem': 'Belem',
    'Belize': 'Belize',
    'Blanc-Sablon': 'Blanc-Sablon',
    'Boa_Vista': 'Boa_Vista',
    'Bogota': 'Bogota',
    'Boise': 'Boise',
    'Cambridge_Bay': 'Cambridge_Bay',
    'Campo_Grande': 'Campo_Grande',
    'Cancun': 'Cancun',
    'Caracas': 'Caracas',
    'Cayenne': 'Cayenne',
    'Chicago': 'Chicago',
    'Chihuahua': 'Chihuahua',
    'Costa_Rica': 'Costa_Rica',
    'Creston': 'Creston',
    'Cuiaba': 'Cuiaba',
    'Curacao': 'Curacao',
    'Danmarkshavn': 'Danmarkshavn',
    'Dawson': 'Dawson',
    'Dawson_Creek': 'Dawson_Creek',
    'Denver': 'Denver',
    'Detroit': 'Detroit',
    'Edmonton': 'Edmonton',
    'Eirunepe': 'Eirunepe',
    'El_Salvador': 'El_Salvador',
    'Fort_Nelson': 'Fort_Nelson',
    'Fortaleza': 'Fortaleza',
    'Glace_Bay': 'Glace_Bay',
    'Godthab': 'Godthab',
    'Goose_Bay': 'Goose_Bay',
    'Grand_Turk': 'Grand_Turk',
    'Guatemala': 'Guatemala',
    'Guayaquil': 'Guayaquil',
    'Guyana': 'Guyana',
    'Halifax': 'Halifax',
    'Havana': 'Havana',
    'Hermosillo': 'Hermosillo',
    'Indiana/Indianapolis': 'Indiana/Indianapolis',
    'Indiana/Knox': 'Indiana/Knox',
    'Indiana/Marengo': 'Indiana/Marengo',
    'Indiana/Petersburg': 'Indiana/Petersburg',
    'Indiana/Tell_City': 'Indiana/Tell_City',
    'Indiana/Vevay': 'Indiana/Vevay',
    'Indiana/Vincennes': 'Indiana/Vincennes',
    'Indiana/Winamac': 'Indiana/Winamac',
    'Inuvik': 'Inuvik',
    'Iqaluit': 'Iqaluit',
    'Jamaica': 'Jamaica',
    'Juneau': 'Juneau',
    'Kentucky/Louisville': 'Kentucky/Louisville',
    'Kentucky/Monticello': 'Kentucky/Monticello',
    'La_Paz': 'La_Paz',
    'Lima': 'Lima',
    'Los_Angeles': 'Los_Angeles',
    'Maceio': 'Maceio',
    'Managua': 'Managua',
    'Manaus': 'Manaus',
    'Martinique': 'Martinique',
    'Matamoros': 'Matamoros',
    'Mazatlan': 'Mazatlan',
    'Menominee': 'Menominee',
    'Merida': 'Merida',
    'Metlakatla': 'Metlakatla',
    'Mexico_City': 'Mexico_City',
    'Miquelon': 'Miquelon',
    'Moncton': 'Moncton',
    'Monterrey': 'Monterrey',
    'Montevideo': 'Montevideo',
    'Nassau': 'Nassau',
    'New_York': 'New_York',
    'Nipigon': 'Nipigon',
    'Nome': 'Nome',
    'Noronha': 'Noronha',
    'North_Dakota/Beulah': 'North_Dakota/Beulah',
    'North_Dakota/Center': 'North_Dakota/Center',
    'North_Dakota/New_Salem': 'North_Dakota/New_Salem',
    'Ojinaga': 'Ojinaga',
    'Panama': 'Panama',
    'Pangnirtung': 'Pangnirtung',
    'Paramaribo': 'Paramaribo',
    'Phoenix': 'Phoenix',
    'Port-au-Prince': 'Port-au-Prince',
    'Port_of_Spain': 'Port_of_Spain',
    'Porto_Velho': 'Porto_Velho',
    'Puerto_Rico': 'Puerto_Rico',
    'Punta_Arenas': 'Punta_Arenas',
    'Rainy_River': 'Rainy_River',
    'Rankin_Inlet': 'Rankin_Inlet',
    'Recife': 'Recife',
    'Regina': 'Regina',
    'Resolute': 'Resolute',
    'Rio_Branco': 'Rio_Branco',
    'Santarem': 'Santarem',
    'Santiago': 'Santiago',
    'Santo_Domingo': 'Santo_Domingo',
    'Sao_Paulo': 'Sao_Paulo',
    'Scoresbysund': 'Scoresbysund',
    'Sitka': 'Sitka',
    'St_Johns': 'St_Johns',
    'Swift_Current': 'Swift_Current',
    'Tegucigalpa': 'Tegucigalpa',
    'Thule': 'Thule',
    'Thunder_Bay': 'Thunder_Bay',
    'Tijuana': 'Tijuana',
    'Toronto': 'Toronto',
    'Vancouver': 'Vancouver',
    'Whitehorse': 'Whitehorse',
    'Winnipeg': 'Winnipeg',
    'Yakutat': 'Yakutat',
    'Yellowknife': 'Yellowknife'
  },
  'Antarctica': {
    'Casey': 'Casey',
    'Davis': 'Davis',
    'DumontDUrville': 'DumontDUrville',
    'Macquarie': 'Macquarie',
    'Mawson': 'Mawson',
    'Palmer': 'Palmer',
    'Rothera': 'Rothera',
    'Syowa': 'Syowa',
    'Troll': 'Troll',
    'Vostok': 'Vostok'
  },
  'Asia': {
    'Almaty': 'Almaty',
    'Amman': 'Amman',
    'Anadyr': 'Anadyr',
    'Aqtau': 'Aqtau',
    'Aqtobe': 'Aqtobe',
    'Ashgabat': 'Ashgabat',
    'Atyrau': 'Atyrau',
    'Baghdad': 'Baghdad',
    'Baku': 'Baku',
    'Bangkok': 'Bangkok',
    'Barnaul': 'Barnaul',
    'Beirut': 'Beirut',
    'Bishkek': 'Bishkek',
    'Brunei': 'Brunei',
    'Chita': 'Chita',
    'Choibalsan': 'Choibalsan',
    'Colombo': 'Colombo',
    'Damascus': 'Damascus',
    'Dhaka': 'Dhaka',
    'Dili': 'Dili',
    'Dubai': 'Dubai',
    'Dushanbe': 'Dushanbe',
    'Famagusta': 'Famagusta',
    'Gaza': 'Gaza',
    'Hebron': 'Hebron',
    'Ho_Chi_Minh': 'Ho_Chi_Minh',
    'Hong_Kong': 'Hong_Kong',
    'Hovd': 'Hovd',
    'Irkutsk': 'Irkutsk',
    'Jakarta': 'Jakarta',
    'Jayapura': 'Jayapura',
    'Jerusalem': 'Jerusalem',
    'Kabul': 'Kabul',
    'Kamchatka': 'Kamchatka',
    'Karachi': 'Karachi',
    'Kathmandu': 'Kathmandu',
    'Khandyga': 'Khandyga',
    'Kolkata': 'Kolkata',
    'Krasnoyarsk': 'Krasnoyarsk',
    'Kuala_Lumpur': 'Kuala_Lumpur',
    'Kuching': 'Kuching',
    'Macau': 'Macau',
    'Magadan': 'Magadan',
    'Makassar': 'Makassar',
    'Manila': 'Manila',
    'Nicosia': 'Nicosia',
    'Novokuznetsk': 'Novokuznetsk',
    'Novosibirsk': 'Novosibirsk',
    'Omsk': 'Omsk',
    'Oral': 'Oral',
    'Pontianak': 'Pontianak',
    'Pyongyang': 'Pyongyang',
    'Qatar': 'Qatar',
    'Qyzylorda': 'Qyzylorda',
    'Riyadh': 'Riyadh',
    'Sakhalin': 'Sakhalin',
    'Samarkand': 'Samarkand',
    'Seoul': 'Seoul',
    'Shanghai': 'Shanghai',
    'Singapore': 'Singapore',
    'Srednekolymsk': 'Srednekolymsk',
    'Taipei': 'Taipei',
    'Tashkent': 'Tashkent',
    'Tbilisi': 'Tbilisi',
    'Tehran': 'Tehran',
    'Thimphu': 'Thimphu',
    'Tokyo': 'Tokyo',
    'Tomsk': 'Tomsk',
    'Ulaanbaatar': 'Ulaanbaatar',
    'Urumqi': 'Urumqi',
    'Ust-Nera': 'Ust-Nera',
    'Vladivostok': 'Vladivostok',
    'Yakutsk': 'Yakutsk',
    'Yangon': 'Yangon',
    'Yekaterinburg': 'Yekaterinburg',
    'Yerevan': 'Yerevan'
  },
  'Atlantic': {
    'Azores': 'Azores',
    'Bermuda': 'Bermuda',
    'Canary': 'Canary',
    'Cape_Verde': 'Cape_Verde',
    'Faroe': 'Faroe',
    'Madeira': 'Madeira',
    'Reykjavik': 'Reykjavik',
    'South_Georgia': 'South_Georgia',
    'Stanley': 'Stanley'
  },
  'Australia': {
    'Adelaide': 'Adelaide',
    'Brisbane': 'Brisbane',
    'Broken_Hill': 'Broken_Hill',
    'Currie': 'Currie',
    'Darwin': 'Darwin',
    'Eucla': 'Eucla',
    'Hobart': 'Hobart',
    'Lindeman': 'Lindeman',
    'Lord_Howe': 'Lord_Howe',
    'Melbourne': 'Melbourne',
    'Perth': 'Perth',
    'Sydney': 'Sydney'
  },
  'Europe': {
    'Amsterdam': 'Amsterdam',
    'Andorra': 'Andorra',
    'Astrakhan': 'Astrakhan',
    'Athens': 'Athens',
    'Belgrade': 'Belgrade',
    'Berlin': 'Berlin',
    'Brussels': 'Brussels',
    'Bucharest': 'Bucharest',
    'Budapest': 'Budapest',
    'Chisinau': 'Chisinau',
    'Copenhagen': 'Copenhagen',
    'Dublin': 'Dublin',
    'Gibraltar': 'Gibraltar',
    'Helsinki': 'Helsinki',
    'Istanbul': 'Istanbul',
    'Kaliningrad': 'Kaliningrad',
    'Kiev': 'Kiev',
    'Kirov': 'Kirov',
    'Lisbon': 'Lisbon',
    'London': 'London',
    'Luxembourg': 'Luxembourg',
    'Madrid': 'Madrid',
    'Malta': 'Malta',
    'Minsk': 'Minsk',
    'Monaco': 'Monaco',
    'Moscow': 'Moscow',
    'Oslo': 'Oslo',
    'Paris': 'Paris',
    'Prague': 'Prague',
    'Riga': 'Riga',
    'Rome': 'Rome',
    'Samara': 'Samara',
    'Saratov': 'Saratov',
    'Simferopol': 'Simferopol',
    'Sofia': 'Sofia',
    'Stockholm': 'Stockholm',
    'Tallinn': 'Tallinn',
    'Tirane': 'Tirane',
    'Ulyanovsk': 'Ulyanovsk',
    'Uzhgorod': 'Uzhgorod',
    'Vienna': 'Vienna',
    'Vilnius': 'Vilnius',
    'Volgograd': 'Volgograd',
    'Warsaw': 'Warsaw',
    'Zaporozhye': 'Zaporozhye',
    'Zurich': 'Zurich'
  },
  'Indian': {
    'Chagos': 'Chagos',
    'Christmas': 'Christmas',
    'Cocos': 'Cocos',
    'Kerguelen': 'Kerguelen',
    'Mahe': 'Mahe',
    'Maldives': 'Maldives',
    'Mauritius': 'Mauritius',
    'Reunion': 'Reunion'
  },
  'Pacific': {
    'Apia': 'Apia',
    'Auckland': 'Auckland',
    'Bougainville': 'Bougainville',
    'Chatham': 'Chatham',
    'Chuuk': 'Chuuk',
    'Easter': 'Easter',
    'Efate': 'Efate',
    'Enderbury': 'Enderbury',
    'Fakaofo': 'Fakaofo',
    'Fiji': 'Fiji',
    'Funafuti': 'Funafuti',
    'Galapagos': 'Galapagos',
    'Gambier': 'Gambier',
    'Guadalcanal': 'Guadalcanal',
    'Guam': 'Guam',
    'Honolulu': 'Honolulu',
    'Kiritimati': 'Kiritimati',
    'Kosrae': 'Kosrae',
    'Kwajalein': 'Kwajalein',
    'Majuro': 'Majuro',
    'Marquesas': 'Marquesas',
    'Nauru': 'Nauru',
    'Niue': 'Niue',
    'Norfolk': 'Norfolk',
    'Noumea': 'Noumea',
    'Pago_Pago': 'Pago_Pago',
    'Palau': 'Palau',
    'Pitcairn': 'Pitcairn',
    'Pohnpei': 'Pohnpei',
    'Port_Moresby': 'Port_Moresby',
    'Rarotonga': 'Rarotonga',
    'Tahiti': 'Tahiti',
    'Tarawa': 'Tarawa',
    'Tongatapu': 'Tongatapu',
    'Wake': 'Wake',
    'Wallis': 'Wallis'
  }
}

export default timezones
