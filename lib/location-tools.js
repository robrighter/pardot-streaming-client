

  var stateLookupMap = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District of Columbia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hamspire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode island',
    'SC': 'South carolina',
    'SD': 'South dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming',
    'AS': 'American Samoa',
    'GU': 'Guam',
    'MP': 'Northern Mariana Islands',
    'VI': 'Virgin Islands',
    'FM': 'Federated States of Micronesia',
    'PW': 'Palau',
    'AA': 'Armed Forces America',
    'AE': 'Armed Forces',
    'AP': 'Armed Forces Pacific',
    // Canada
    'AB': 'Alberta',
    'BC': 'British Columbia',
    'MB': 'Manitoba',
    'NB': 'New Brunswick',
    'NL': 'Newfoundland and Labrador',
    'NS': 'Nova Scotia',
    'NT': 'Northwest Territories',
    'NU': 'Nunavut',
    'ON': 'Ontario',
    'PE': 'Prince edward island',
    'QC': 'Quebec',
    'SK': 'Saskatchewan',
    'YT': 'Yukon'
  };

  var countryGroupLookup = {
    'European Union' : [
      'Austria', 'Belgium', 'Bulgaria', 'Cyprus', 
      'Czech Republic', 'Denmark', 'Estonia', 'Finland',
      'France', 'Germany', 'Greece', 'Hungary', 'Ireland',
      'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
      'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 
      'Slovenia', 'Spain', 'Sweden', 'United Kingdom'
    ],      
    'African Union': [
      'Algeria', 'Angola', 'Benin', 'Botswana', 
      'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde',
      'Central African Republic', 'Chad', 'Comoros', 
      'Congo, The Democratic Republic of the', 'Congo',
      'Djibouti', 'Egypt', 'Equatorial Guinea', 'Ethiopia',
      'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 
      'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Malawi', 
      'Mali', 'Mauritania', 'Mauritius', 'Mozambique', 'Namibia', 
      'Niger', 'Nigeria', 'Rwanda', 'Western Sahara', 
      'Sao Tome and Principe', 'Senegal', 'Seychelles', 
      'Sierra Leone', 'Somalia', 'South Africa', 'Sudan', 
      'Swaziland', 'Tanzania, United Republic of', 'Togo', 
      'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
    ],
    'Caribbean Community': [
      'Antigua and Barbuda', 'Bahamas', 'Barbados', 
      'Belize', 'Dominica', 'Grenada', 'Guyana', 'Haiti',
      'Jamaica', 'Montserrat', 'Saint Kitts and Nevis', 
      'Saint Lucia', 'Saint Vincent and the Grenadines',
      'Suriname', 'Trinidad and Tobago', 'Anguilla', 
      'Bermuda', 'Virgin Islands, British', 'Cayman Islands', 
      'Turks and Caicos Islands'
    ],
    'Union of South American Nations': [
      'Argentina', 'Bolivia', 'Brazil', 'Chile', 
      'Colombia', 'Ecuador', 'Guyana', 'Paraguay',
      'Peru', 'Suriname', 'Uruguay', 'Venezuela'
    ] 
  };

var countries = [
  {
    "name": "Bangladesh",
    "alts": [
      "BANGLADESH",
      "BD",
      "BAN",
      "BGD"
    ]
  },
  {
    "name": "Belgium",
    "alts": [
      "BELGIUM",
      "BE",
      "BEL",
      "BELGIQUE"
    ]
  },
  {
    "name": "Burkina Faso",
    "alts": [
      "BURKINA FASO",
      "BF",
      "BFA"
    ]
  },
  {
    "name": "Bulgaria",
    "alts": [
      "BULGARIA",
      "BG",
      "BUL",
      "BGR",
      "BULGARIE"
    ]
  },
  {
    "name": "Bosnia and Herzegovina",
    "alts": [
      "BOSNIA AND HERZEGOVINA",
      "BA",
      "BIH",
      "BOSNIE-HERZÉGOVINE"
    ]
  },
  {
    "name": "Barbados",
    "alts": [
      "BARBADOS",
      "BB",
      "BRB",
      "BARBADE"
    ]
  },
  {
    "name": "Wallis and Futuna Islands",
    "alts": [
      "WALLIS AND FUTUNA ISLANDS",
      "WF",
      "WLF",
      "WALLIS AND FUTUNA",
      "WALLIS ET FUTUNA"
    ]
  },
  {
    "name": "Saint Barthélemy",
    "alts": [
      "SAINT BARTHÉLEMY",
      "BL",
      "BLM",
      "SAINT-BARTHÉLEMY"
    ]
  },
  {
    "name": "Bermuda",
    "alts": [
      "BERMUDA",
      "BM",
      "BER",
      "BMU",
      "BERMUDES"
    ]
  },
  {
    "name": "Brunei Darussalam",
    "alts": [
      "BRUNEI DARUSSALAM",
      "BN",
      "BRU",
      "BRN"
    ]
  },
  {
    "name": "Bolivia",
    "alts": [
      "BOLIVIA",
      "BO",
      "BOL",
      "BOLIVIA, PLURINATIONAL STATE OF",
      "BOLIVIE, L'ÉTAT PLURINATIONAL DE"
    ]
  },
  {
    "name": "Bahrain",
    "alts": [
      "BAHRAIN",
      "BH",
      "BHR",
      "BAHREÏN"
    ]
  },
  {
    "name": "Burundi",
    "alts": [
      "BURUNDI",
      "BI",
      "BDI"
    ]
  },
  {
    "name": "Benin",
    "alts": [
      "BENIN",
      "BJ",
      "BEN",
      "BÉNIN"
    ]
  },
  {
    "name": "Bhutan",
    "alts": [
      "BHUTAN",
      "BT",
      "BHU",
      "BTN",
      "BHOUTAN"
    ]
  },
  {
    "name": "Jamaica",
    "alts": [
      "JAMAICA",
      "JM",
      "JAM",
      "JAMAÏQUE"
    ]
  },
  {
    "name": "Bouvet Island",
    "alts": [
      "BOUVET ISLAND",
      "BV",
      "BVT",
      "BOUVET, ÎLE"
    ]
  },
  {
    "name": "Botswana",
    "alts": [
      "BOTSWANA",
      "BW",
      "BOT",
      "BWA"
    ]
  },
  {
    "name": "Samoa",
    "alts": [
      "SAMOA",
      "WS",
      "SAM",
      "WSM"
    ]
  },
  {
    "name": "Bonaire, Sint Eustatiusand Saba",
    "alts": [
      "BONAIRE, SINT EUSTATIUSAND SABA",
      "BQ",
      "ANT",
      "BES",
      "BONAIRE, SINT EUSTATIUS AND SABA",
      "BONAIRE, SAINT-EUSTACHE ET SABA"
    ]
  },
  {
    "name": "Brazil",
    "alts": [
      "BRAZIL",
      "BR",
      "BRA",
      "BRÉSIL"
    ]
  },
  {
    "name": "Bahamas",
    "alts": [
      "BAHAMAS",
      "BS",
      "BAH",
      "BHS"
    ]
  },
  {
    "name": "Jersey",
    "alts": [
      "JERSEY",
      "JE",
      "GBJ",
      "JEY"
    ]
  },
  {
    "name": "Belarus",
    "alts": [
      "BELARUS",
      "BY",
      "BLR",
      "BÉLARUS"
    ]
  },
  {
    "name": "Belize",
    "alts": [
      "BELIZE",
      "BZ",
      "BLZ"
    ]
  },
  {
    "name": "Russian Federation",
    "alts": [
      "RUSSIAN FEDERATION",
      "RU",
      "RUS",
      "RUSSIE, FÉDÉRATION DE"
    ]
  },
  {
    "name": "Rwanda",
    "alts": [
      "RWANDA",
      "RW",
      "RWA"
    ]
  },
  {
    "name": "Serbia",
    "alts": [
      "SERBIA",
      "RS",
      "SRB",
      "SERBIE"
    ]
  },
  {
    "name": "Lithuania",
    "alts": [
      "LITHUANIA",
      "LT",
      "LTU",
      "LITUANIE"
    ]
  },
  {
    "name": "Reunion",
    "alts": [
      "REUNION",
      "RE",
      "REU",
      "RÉUNION"
    ]
  },
  {
    "name": "Turkmenistan",
    "alts": [
      "TURKMENISTAN",
      "TM",
      "TKM",
      "TURKMÉNISTAN"
    ]
  },
  {
    "name": "Tajikistan",
    "alts": [
      "TAJIKISTAN",
      "TJ",
      "TJK",
      "TADJIKISTAN"
    ]
  },
  {
    "name": "Romania",
    "alts": [
      "ROMANIA",
      "RO",
      "ROU",
      "ROUMANIE"
    ]
  },
  {
    "name": "Lesotho",
    "alts": [
      "LESOTHO",
      "LS",
      "LES",
      "LSO"
    ]
  },
  {
    "name": "Guinea-Bissau",
    "alts": [
      "GUINEA-BISSAU",
      "GW",
      "GNB",
      "GUINÉE-BISSAU"
    ]
  },
  {
    "name": "Guam",
    "alts": [
      "GUAM",
      "GU",
      "GUM"
    ]
  },
  {
    "name": "Guatemala",
    "alts": [
      "GUATEMALA",
      "GT",
      "GUA",
      "GTM"
    ]
  },
  {
    "name": "South Georgia and SouthSandwich Islands",
    "alts": [
      "SOUTH GEORGIA AND SOUTHSANDWICH ISLANDS",
      "GS",
      "SGS",
      "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
      "GÉORGIE DU SUD-ET-LES ÎLES SANDWICH DU SUD"
    ]
  },
  {
    "name": "Greece",
    "alts": [
      "GREECE",
      "GR",
      "GRE",
      "GRC",
      "GRÈCE"
    ]
  },
  {
    "name": "Equatorial Guinea",
    "alts": [
      "EQUATORIAL GUINEA",
      "GQ",
      "EQG",
      "GNQ",
      "GUINÉE ÉQUATORIALE"
    ]
  },
  {
    "name": "Guadeloupe",
    "alts": [
      "GUADELOUPE",
      "GP",
      "GLP"
    ]
  },
  {
    "name": "Japan",
    "alts": [
      "JAPAN",
      "JP",
      "JPN",
      "JAPON"
    ]
  },
  {
    "name": "Guyana",
    "alts": [
      "GUYANA",
      "GY",
      "GUY"
    ]
  },
  {
    "name": "Guernsey",
    "alts": [
      "GUERNSEY",
      "GG",
      "GBG",
      "GGY",
      "GUERNESEY"
    ]
  },
  {
    "name": "French Guiana",
    "alts": [
      "FRENCH GUIANA",
      "GF",
      "GUF",
      "GUYANE FRANÇAISE"
    ]
  },
  {
    "name": "Georgia",
    "alts": [
      "GEORGIA",
      "GE",
      "GEO",
      "GÉORGIE"
    ]
  },
  {
    "name": "Grenada",
    "alts": [
      "GRENADA",
      "GD",
      "GRN",
      "GRD",
      "GRENADE"
    ]
  },
  {
    "name": "United Kingdom",
    "alts": [
      "UNITED KINGDOM",
      "GB",
      "1",
      "GBR",
      "ROYAUME-UNI"
    ]
  },
  {
    "name": "Gabon",
    "alts": [
      "GABON",
      "GA",
      "GAB"
    ]
  },
  {
    "name": "El Salvador",
    "alts": [
      "EL SALVADOR",
      "SV",
      "SLV"
    ]
  },
  {
    "name": "Guinea",
    "alts": [
      "GUINEA",
      "GN",
      "GUI",
      "GIN",
      "GUINÉE"
    ]
  },
  {
    "name": "Gambia",
    "alts": [
      "GAMBIA",
      "GM",
      "GAM",
      "GMB",
      "GAMBIE"
    ]
  },
  {
    "name": "Greenland",
    "alts": [
      "GREENLAND",
      "GL",
      "GRL",
      "GROENLAND"
    ]
  },
  {
    "name": "Gibraltar",
    "alts": [
      "GIBRALTAR",
      "GI",
      "GBZ",
      "GIB"
    ]
  },
  {
    "name": "Ghana",
    "alts": [
      "GHANA",
      "GH",
      "GHA"
    ]
  },
  {
    "name": "Oman",
    "alts": [
      "OMAN",
      "OM",
      "OMA",
      "OMN"
    ]
  },
  {
    "name": "Tunisia",
    "alts": [
      "TUNISIA",
      "TN",
      "TUN",
      "TUNISIE"
    ]
  },
  {
    "name": "Israel",
    "alts": [
      "ISRAEL",
      "IL",
      "ISR",
      "ISRAËL"
    ]
  },
  {
    "name": "Jordan",
    "alts": [
      "JORDAN",
      "JO",
      "JOR",
      "JORDANIE"
    ]
  },
  {
    "name": "Croatia",
    "alts": [
      "CROATIA",
      "HR",
      "CRO",
      "HRV",
      "CROATIE"
    ]
  },
  {
    "name": "Haiti",
    "alts": [
      "HAITI",
      "HT",
      "HAI",
      "HTI",
      "HAÏTI"
    ]
  },
  {
    "name": "Hungary",
    "alts": [
      "HUNGARY",
      "HU",
      "HUN",
      "HONGRIE"
    ]
  },
  {
    "name": "Hong Kong",
    "alts": [
      "HONG KONG",
      "HK",
      "HKG"
    ]
  },
  {
    "name": "Honduras",
    "alts": [
      "HONDURAS",
      "HN",
      "HON",
      "HND"
    ]
  },
  {
    "name": "Heard and McDonald Islands",
    "alts": [
      "HEARD AND MCDONALD ISLANDS",
      "HM",
      "HMD",
      "HEARD ISLAND AND MCDONALD ISLANDS",
      "HEARD-ET-ÎLES MACDONALD, ÎLE"
    ]
  },
  {
    "name": "Andorra",
    "alts": [
      "ANDORRA",
      "AD",
      "AND",
      "ANDORRE"
    ]
  },
  {
    "name": "Puerto Rico",
    "alts": [
      "PUERTO RICO",
      "PR",
      "PUR",
      "PRI",
      "PORTO RICO"
    ]
  },
  {
    "name": "Palestine",
    "alts": [
      "PALESTINE",
      "PS",
      "PLE",
      "PSE",
      "PALESTINIAN TERRITORY, OCCUPIED",
      "PALESTINIEN OCCUPÉ, TERRITOIRE"
    ]
  },
  {
    "name": "Palau",
    "alts": [
      "PALAU",
      "PW",
      "PLW",
      "PALAOS"
    ]
  },
  {
    "name": "Portugal",
    "alts": [
      "PORTUGAL",
      "PT",
      "POR",
      "PRT"
    ]
  },
  {
    "name": "Korea, South",
    "alts": [
      "KOREA, SOUTH",
      "KR",
      "KOR",
      "KOREA, REPUBLIC OF",
      "CORÉE, RÉPUBLIQUE DE"
    ]
  },
  {
    "name": "Paraguay",
    "alts": [
      "PARAGUAY",
      "PY",
      "PAR",
      "PRY"
    ]
  },
  {
    "name": "Anguilla",
    "alts": [
      "ANGUILLA",
      "AI",
      "AIA"
    ]
  },
  {
    "name": "Panama",
    "alts": [
      "PANAMA",
      "PA",
      "PAN"
    ]
  },
  {
    "name": "French Polynesia",
    "alts": [
      "FRENCH POLYNESIA",
      "PF",
      "TAH2",
      "PYF",
      "POLYNÉSIE FRANÇAISE"
    ]
  },
  {
    "name": "Papua New Guinea",
    "alts": [
      "PAPUA NEW GUINEA",
      "PG",
      "PNG",
      "PAPOUASIE-NOUVELLE-GUINÉE"
    ]
  },
  {
    "name": "Peru",
    "alts": [
      "PERU",
      "PE",
      "PER",
      "PÉROU"
    ]
  },
  {
    "name": "Pakistan",
    "alts": [
      "PAKISTAN",
      "PK",
      "PAK"
    ]
  },
  {
    "name": "Philippines",
    "alts": [
      "PHILIPPINES",
      "PH",
      "PHI",
      "PHL"
    ]
  },
  {
    "name": "Pitcairn",
    "alts": [
      "PITCAIRN",
      "PN",
      "PCN"
    ]
  },
  {
    "name": "Poland",
    "alts": [
      "POLAND",
      "PL",
      "POL",
      "POLOGNE"
    ]
  },
  {
    "name": "Saint Pierre and Miquelon",
    "alts": [
      "SAINT PIERRE AND MIQUELON",
      "PM",
      "SPM",
      "SAINT-PIERRE-ET-MIQUELON"
    ]
  },
  {
    "name": "Zambia",
    "alts": [
      "ZAMBIA",
      "ZM",
      "ZAM",
      "ZMB",
      "ZAMBIE"
    ]
  },
  {
    "name": "Western Sahara",
    "alts": [
      "WESTERN SAHARA",
      "EH",
      "SAH",
      "ESH",
      "SAHARA OCCIDENTAL"
    ]
  },
  {
    "name": "Estonia",
    "alts": [
      "ESTONIA",
      "EE",
      "EST",
      "ESTONIE"
    ]
  },
  {
    "name": "Egypt",
    "alts": [
      "EGYPT",
      "EG",
      "EGY",
      "ÉGYPTE"
    ]
  },
  {
    "name": "South Africa",
    "alts": [
      "SOUTH AFRICA",
      "ZA",
      "RSA",
      "ZAF",
      "AFRIQUE DU SUD"
    ]
  },
  {
    "name": "Ecuador",
    "alts": [
      "ECUADOR",
      "EC",
      "ECU",
      "ÉQUATEUR"
    ]
  },
  {
    "name": "Albania",
    "alts": [
      "ALBANIA",
      "AL",
      "ALB",
      "ALBANIE"
    ]
  },
  {
    "name": "Angola",
    "alts": [
      "ANGOLA",
      "AO",
      "ANG",
      "AGO"
    ]
  },
  {
    "name": "Kazakhstan",
    "alts": [
      "KAZAKHSTAN",
      "KZ",
      "KAZ"
    ]
  },
  {
    "name": "Ethiopia",
    "alts": [
      "ETHIOPIA",
      "ET",
      "ETH",
      "ÉTHIOPIE"
    ]
  },
  {
    "name": "Somalia",
    "alts": [
      "SOMALIA",
      "SO",
      "SOM",
      "SOMALIE"
    ]
  },
  {
    "name": "Zimbabwe",
    "alts": [
      "ZIMBABWE",
      "ZW",
      "ZIM",
      "ZWE"
    ]
  },
  {
    "name": "Cayman Islands",
    "alts": [
      "CAYMAN ISLANDS",
      "KY",
      "CAY",
      "CYM",
      "CAÏMANS, ÎLES"
    ]
  },
  {
    "name": "Spain",
    "alts": [
      "SPAIN",
      "ES",
      "ESP",
      "ESPAGNE"
    ]
  },
  {
    "name": "Eritrea",
    "alts": [
      "ERITREA",
      "ER",
      "ERI",
      "ÉRYTHRÉE"
    ]
  },
  {
    "name": "Montenegro",
    "alts": [
      "MONTENEGRO",
      "ME",
      "MNE",
      "MONTÉNÉGRO"
    ]
  },
  {
    "name": "Moldova",
    "alts": [
      "MOLDOVA",
      "MD",
      "MDA",
      "MOLDOVA, REPUBLIC OF",
      "MOLDOVA, RÉPUBLIQUE DE"
    ]
  },
  {
    "name": "Madagascar",
    "alts": [
      "MADAGASCAR",
      "MG",
      "MAD",
      "MDG"
    ]
  },
  {
    "name": "Saint Martin (French part)",
    "alts": [
      "SAINT MARTIN (FRENCH PART)",
      "MF",
      "MAF",
      "SAINT-MARTIN(PARTIE FRANÇAISE)"
    ]
  },
  {
    "name": "Morocco",
    "alts": [
      "MOROCCO",
      "MA",
      "MAR",
      "MAROC"
    ]
  },
  {
    "name": "Monaco",
    "alts": [
      "MONACO",
      "MC",
      "MON",
      "MCO"
    ]
  },
  {
    "name": "Uzbekistan",
    "alts": [
      "UZBEKISTAN",
      "UZ",
      "UZB",
      "OUZBÉKISTAN"
    ]
  },
  {
    "name": "Myanmar",
    "alts": [
      "MYANMAR",
      "MM",
      "MYA",
      "MMR"
    ]
  },
  {
    "name": "Mali",
    "alts": [
      "MALI",
      "ML",
      "MLI"
    ]
  },
  {
    "name": "Macau",
    "alts": [
      "MACAU",
      "MO",
      "MAC",
      "MACAO"
    ]
  },
  {
    "name": "Mongolia",
    "alts": [
      "MONGOLIA",
      "MN",
      "MNG",
      "MONGOLIE"
    ]
  },
  {
    "name": "Marshall Islands",
    "alts": [
      "MARSHALL ISLANDS",
      "MH",
      "MHL",
      "MARSHALL, ÎLES"
    ]
  },
  {
    "name": "United States",
    "alts": [
      "UNITED STATES OF AMERICA",
      "US",
      "USA",
      "UNITED STATES",
      "ÉTATS-UNIS"
    ]
  },
  {
    "name": "Mauritius",
    "alts": [
      "MAURITIUS",
      "MU",
      "MRI",
      "MUS",
      "MAURICE"
    ]
  },
  {
    "name": "Malta",
    "alts": [
      "MALTA",
      "MT",
      "MLT",
      "MALTE"
    ]
  },
  {
    "name": "Malawi",
    "alts": [
      "MALAWI",
      "MW",
      "MWI"
    ]
  },
  {
    "name": "Maldives",
    "alts": [
      "MALDIVES",
      "MV",
      "MDV"
    ]
  },
  {
    "name": "Martinique",
    "alts": [
      "MARTINIQUE",
      "MQ",
      "MTQ"
    ]
  },
  {
    "name": "Northern Mariana Islands",
    "alts": [
      "NORTHERN MARIANA ISLANDS",
      "MP",
      "NMI",
      "MNP",
      "MARIANNES DU NORD, ÎLES"
    ]
  },
  {
    "name": "Montserrat",
    "alts": [
      "MONTSERRAT",
      "MS",
      "MSR"
    ]
  },
  {
    "name": "Mauritania",
    "alts": [
      "MAURITANIA",
      "MR",
      "MTN",
      "MRT",
      "MAURITANIE"
    ]
  },
  {
    "name": "Australia",
    "alts": [
      "AUSTRALIA",
      "AU",
      "AUS",
      "AUSTRALIE"
    ]
  },
  {
    "name": "Uganda",
    "alts": [
      "UGANDA",
      "UG",
      "UGA",
      "OUGANDA"
    ]
  },
  {
    "name": "Ukraine",
    "alts": [
      "UKRAINE",
      "UA",
      "UKR"
    ]
  },
  {
    "name": "Mexico",
    "alts": [
      "MEXICO",
      "MX",
      "MEX",
      "MEXIQUE"
    ]
  },
  {
    "name": "Austria",
    "alts": [
      "AUSTRIA",
      "AT",
      "AUT",
      "AUTRICHE"
    ]
  },
  {
    "name": "France",
    "alts": [
      "FRANCE",
      "FR",
      "FRA"
    ]
  },
  {
    "name": "British Indian OceanTerritory",
    "alts": [
      "BRITISH INDIAN OCEANTERRITORY",
      "IO",
      "IOT",
      "BRITISH INDIAN OCEAN TERRITORY",
      "OCÉAN INDIEN, TERRITOIRE BRITANNIQUE DE L'"
    ]
  },
  {
    "name": "Afghanistan",
    "alts": [
      "AFGHANISTAN",
      "AF",
      "AFG"
    ]
  },
  {
    "name": "Åland",
    "alts": [
      "ÅLAND",
      "AX",
      "ALD",
      "ALA",
      "ÅLAND ISLANDS",
      "ÅLAND, ÎLES"
    ]
  },
  {
    "name": "Finland",
    "alts": [
      "FINLAND",
      "FI",
      "FIN",
      "FINLANDE"
    ]
  },
  {
    "name": "Fiji",
    "alts": [
      "FIJI",
      "FJ",
      "FIJ",
      "FJI",
      "FIDJI"
    ]
  },
  {
    "name": "Falkland Islands",
    "alts": [
      "FALKLAND ISLANDS",
      "FK",
      "FLK",
      "FALKLAND ISLANDS (MALVINAS)",
      "FALKLAND, ÎLES (MALVINAS)"
    ]
  },
  {
    "name": "Micronesia",
    "alts": [
      "MICRONESIA",
      "FM",
      "FSM",
      "MICRONESIA, FEDERATED STATES OF",
      "MICRONÉSIE, ÉTATS FÉDÉRÉS DE"
    ]
  },
  {
    "name": "Faroe Islands",
    "alts": [
      "FAROE ISLANDS",
      "FO",
      "FRO",
      "FÉROÉ, ÎLES"
    ]
  },
  {
    "name": "Nicaragua",
    "alts": [
      "NICARAGUA",
      "NI",
      "NCA",
      "NIC"
    ]
  },
  {
    "name": "Netherlands",
    "alts": [
      "NETHERLANDS",
      "NL",
      "NED",
      "NLD",
      "PAYS-BAS"
    ]
  },
  {
    "name": "Norway",
    "alts": [
      "NORWAY",
      "NO",
      "NOR",
      "NORVÈGE"
    ]
  },
  {
    "name": "Namibia",
    "alts": [
      "NAMIBIA",
      "NA",
      "NAM",
      "NAMIBIE"
    ]
  },
  {
    "name": "New Caledonia",
    "alts": [
      "NEW CALEDONIA",
      "NC",
      "NCL",
      "NOUVELLE-CALÉDONIE"
    ]
  },
  {
    "name": "Niger",
    "alts": [
      "NIGER",
      "NE",
      "NIG",
      "NER"
    ]
  },
  {
    "name": "Norfolk Island",
    "alts": [
      "NORFOLK ISLAND",
      "NF",
      "NFK",
      "NORFOLK, ÎLE"
    ]
  },
  {
    "name": "Nigeria",
    "alts": [
      "NIGERIA",
      "NG",
      "NGA",
      "NIGÉRIA"
    ]
  },
  {
    "name": "New Zealand",
    "alts": [
      "NEW ZEALAND",
      "NZ",
      "NZL",
      "NOUVELLE-ZÉLANDE"
    ]
  },
  {
    "name": "Nepal",
    "alts": [
      "NEPAL",
      "NP",
      "NEP",
      "NPL",
      "NÉPAL"
    ]
  },
  {
    "name": "Nauru",
    "alts": [
      "NAURU",
      "NR",
      "NRU"
    ]
  },
  {
    "name": "Niue",
    "alts": [
      "NIUE",
      "NU",
      "NIU",
      "NIUÉ"
    ]
  },
  {
    "name": "Cook Islands",
    "alts": [
      "COOK ISLANDS",
      "CK",
      "COK",
      "COOK, ÎLES"
    ]
  },
  {
    "name": "Côte d'Ivoire",
    "alts": [
      "CÔTE D'IVOIRE",
      "CI",
      "CIV"
    ]
  },
  {
    "name": "Switzerland",
    "alts": [
      "SWITZERLAND",
      "CH",
      "SUI",
      "CHE",
      "SUISSE"
    ]
  },
  {
    "name": "Colombia",
    "alts": [
      "COLOMBIA",
      "CO",
      "COL",
      "COLOMBIE"
    ]
  },
  {
    "name": "China",
    "alts": [
      "CHINA",
      "CN",
      "CHN",
      "CHINE"
    ]
  },
  {
    "name": "Cameroon",
    "alts": [
      "CAMEROON",
      "CM",
      "CMR",
      "CAMEROUN"
    ]
  },
  {
    "name": "Chile",
    "alts": [
      "CHILE",
      "CL",
      "CHI",
      "CHL",
      "CHILI"
    ]
  },
  {
    "name": "Cocos (Keeling) Islands",
    "alts": [
      "COCOS (KEELING) ISLANDS",
      "CC",
      "CCK",
      "COCOS (KEELING), ÎLES"
    ]
  },
  {
    "name": "Canada",
    "alts": [
      "CANADA",
      "CA",
      "CAN"
    ]
  },
  {
    "name": "Congo (Brazzaville)",
    "alts": [
      "CONGO (BRAZZAVILLE)",
      "CG",
      "CGO",
      "COG",
      "CONGO"
    ]
  },
  {
    "name": "Central African Republic",
    "alts": [
      "CENTRAL AFRICAN REPUBLIC",
      "CF",
      "CTA",
      "CAF",
      "CENTRAFRICAINE, RÉPUBLIQUE"
    ]
  },
  {
    "name": "Congo (Kinshasa)",
    "alts": [
      "CONGO (KINSHASA)",
      "CD",
      "COD",
      "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
      "CONGO, LA RÉPUBLIQUE DÉMOCRATIQUE DU"
    ]
  },
  {
    "name": "Czech Republic",
    "alts": [
      "CZECH REPUBLIC",
      "CZ",
      "CZE",
      "TCHÈQUE, RÉPUBLIQUE"
    ]
  },
  {
    "name": "Cyprus",
    "alts": [
      "CYPRUS",
      "CY",
      "CYP",
      "CHYPRE"
    ]
  },
  {
    "name": "Christmas Island",
    "alts": [
      "CHRISTMAS ISLAND",
      "CX",
      "CXR",
      "CHRISTMAS, ÎLE"
    ]
  },
  {
    "name": "Costa Rica",
    "alts": [
      "COSTA RICA",
      "CR",
      "CRC",
      "CRI"
    ]
  },
  {
    "name": "Korea, North",
    "alts": [
      "KOREA, NORTH",
      "KP",
      "PRK",
      "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
      "CORÉE, RÉPUBLIQUE POPULAIRE DÉMOCRATIQUE DE"
    ]
  },
  {
    "name": "Curaçao",
    "alts": [
      "CURAÇAO",
      "CW",
      "CUW"
    ]
  },
  {
    "name": "Cape Verde",
    "alts": [
      "CAPE VERDE",
      "CV",
      "CPV",
      "CAP-VERT"
    ]
  },
  {
    "name": "Cuba",
    "alts": [
      "CUBA",
      "CU",
      "CUB"
    ]
  },
  {
    "name": "Swaziland",
    "alts": [
      "SWAZILAND",
      "SZ",
      "SWZ"
    ]
  },
  {
    "name": "Syria",
    "alts": [
      "SYRIA",
      "SY",
      "SYR",
      "SYRIAN ARAB REPUBLIC",
      "SYRIENNE, RÉPUBLIQUE ARABE"
    ]
  },
  {
    "name": "Sint Maarten",
    "alts": [
      "SINT MAARTEN",
      "SX",
      "SXM",
      "SINT MAARTEN (DUTCH PART)",
      "SAINT-MARTIN (PARTIE NÉERLANDAISE)"
    ]
  },
  {
    "name": "Kyrgyzstan",
    "alts": [
      "KYRGYZSTAN",
      "KG",
      "KGZ",
      "KIRGHIZISTAN"
    ]
  },
  {
    "name": "Kenya",
    "alts": [
      "KENYA",
      "KE",
      "KEN"
    ]
  },
  {
    "name": "South Sudan",
    "alts": [
      "SOUTH SUDAN",
      "SS",
      "SSD",
      "SOUDAN DU SUD"
    ]
  },
  {
    "name": "Suriname",
    "alts": [
      "SURINAME",
      "SR",
      "SUR"
    ]
  },
  {
    "name": "Kiribati",
    "alts": [
      "KIRIBATI",
      "KI",
      "KIR"
    ]
  },
  {
    "name": "Cambodia",
    "alts": [
      "CAMBODIA",
      "KH",
      "CAM",
      "KHM",
      "CAMBODGE"
    ]
  },
  {
    "name": "Saint Kitts and Nevis",
    "alts": [
      "SAINT KITTS AND NEVIS",
      "KN",
      "SKN",
      "KNA",
      "SAINT-KITTS-ET-NEVIS"
    ]
  },
  {
    "name": "Comoros",
    "alts": [
      "COMOROS",
      "KM",
      "COM",
      "COMORES"
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "alts": [
      "SAO TOME AND PRINCIPE",
      "ST",
      "STP",
      "SAO TOMÉ-ET-PRINCIPE"
    ]
  },
  {
    "name": "Slovakia",
    "alts": [
      "SLOVAKIA",
      "SK",
      "SVK",
      "SLOVAQUIE"
    ]
  },
  {
    "name": "Svalbard and Jan MayenIslands",
    "alts": [
      "SVALBARD AND JAN MAYENISLANDS",
      "SJ",
      "SJM",
      "SVALBARD AND JAN MAYEN",
      "SVALBARD ET ÎLE JAN MAYEN"
    ]
  },
  {
    "name": "Slovenia",
    "alts": [
      "SLOVENIA",
      "SI",
      "SVN",
      "SLOVÉNIE"
    ]
  },
  {
    "name": "Saint Helena",
    "alts": [
      "SAINT HELENA",
      "SH",
      "SHN",
      "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
      "SAINTE-HÉLÈNE, ASCENSION ET TRISTAN DA CUNHA"
    ]
  },
  {
    "name": "Kuwait",
    "alts": [
      "KUWAIT",
      "KW",
      "KUW",
      "KWT",
      "KOWEÏT"
    ]
  },
  {
    "name": "Senegal",
    "alts": [
      "SENEGAL",
      "SN",
      "SEN",
      "SÉNÉGAL"
    ]
  },
  {
    "name": "San Marino",
    "alts": [
      "SAN MARINO",
      "SM",
      "SMR",
      "SAINT-MARIN"
    ]
  },
  {
    "name": "Sierra Leone",
    "alts": [
      "SIERRA LEONE",
      "SL",
      "SLE"
    ]
  },
  {
    "name": "Seychelles",
    "alts": [
      "SEYCHELLES",
      "SC",
      "SEY",
      "SYC"
    ]
  },
  {
    "name": "Solomon Islands",
    "alts": [
      "SOLOMON ISLANDS",
      "SB",
      "SOL",
      "SLB",
      "SALOMON, ÎLES"
    ]
  },
  {
    "name": "Saudi Arabia",
    "alts": [
      "SAUDI ARABIA",
      "SA",
      "KSA",
      "SAU",
      "ARABIE SAOUDITE"
    ]
  },
  {
    "name": "Singapore",
    "alts": [
      "SINGAPORE",
      "SG",
      "SIN",
      "SGP",
      "SINGAPOUR"
    ]
  },
  {
    "name": "Sweden",
    "alts": [
      "SWEDEN",
      "SE",
      "SWE",
      "SUÈDE"
    ]
  },
  {
    "name": "Sudan",
    "alts": [
      "SUDAN",
      "SD",
      "SUD",
      "SDN",
      "SOUDAN"
    ]
  },
  {
    "name": "Dominican Republic",
    "alts": [
      "DOMINICAN REPUBLIC",
      "DO",
      "DOM",
      "DOMINICAINE, RÉPUBLIQUE"
    ]
  },
  {
    "name": "Dominica",
    "alts": [
      "DOMINICA",
      "DM",
      "DMA",
      "DOMINIQUE"
    ]
  },
  {
    "name": "Djibouti",
    "alts": [
      "DJIBOUTI",
      "DJ",
      "DJI"
    ]
  },
  {
    "name": "Denmark",
    "alts": [
      "DENMARK",
      "DK",
      "DEN",
      "DNK",
      "DANEMARK"
    ]
  },
  {
    "name": "Germany",
    "alts": [
      "GERMANY",
      "DE",
      "GER",
      "DEU",
      "ALLEMAGNE"
    ]
  },
  {
    "name": "Yemen",
    "alts": [
      "YEMEN",
      "YE",
      "YEM",
      "YÉMEN"
    ]
  },
  {
    "name": "Algeria",
    "alts": [
      "ALGERIA",
      "DZ",
      "ALG",
      "DZA",
      "ALGÉRIE"
    ]
  },
  {
    "name": "Macedonia",
    "alts": [
      "MACEDONIA",
      "MK",
      "MKD",
      "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
      "MACÉDOINE, L'EX-RÉPUBLIQUE YOUGOSLAVE DE"
    ]
  },
  {
    "name": "Uruguay",
    "alts": [
      "URUGUAY",
      "UY",
      "URU",
      "URY"
    ]
  },
  {
    "name": "Mayotte",
    "alts": [
      "MAYOTTE",
      "YT",
      "MYT"
    ]
  },
  {
    "name": "United States MinorOutlying Islands",
    "alts": [
      "UNITED STATES MINOROUTLYING ISLANDS",
      "UM",
      "UMI",
      "UNITED STATES MINOR OUTLYING ISLANDS",
      "ÎLES MINEURES ÉLOIGNÉES DES ÉTATS-UNIS"
    ]
  },
  {
    "name": "Tanzania",
    "alts": [
      "TANZANIA",
      "TZ",
      "TAN",
      "TZA",
      "TANZANIA, UNITED REPUBLIC OF",
      "TANZANIE, RÉPUBLIQUE-UNIE DE"
    ]
  },
  {
    "name": "Saint Lucia",
    "alts": [
      "SAINT LUCIA",
      "LC",
      "LCA",
      "SAINTE-LUCIE"
    ]
  },
  {
    "name": "Laos",
    "alts": [
      "LAOS",
      "LA",
      "LAO",
      "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      "LAO, RÉPUBLIQUE DÉMOCRATIQUE POPULAIRE"
    ]
  },
  {
    "name": "Tuvalu",
    "alts": [
      "TUVALU",
      "TV",
      "TUV"
    ]
  },
  {
    "name": "Taiwan",
    "alts": [
      "TAIWAN",
      "TW",
      "TPE",
      "TWN",
      "TAIWAN, PROVINCE OF CHINA",
      "TAÏWAN, PROVINCE DE CHINE"
    ]
  },
  {
    "name": "Trinidad and Tobago",
    "alts": [
      "TRINIDAD AND TOBAGO",
      "TT",
      "TRI",
      "TTO",
      "TRINITÉ-ET-TOBAGO"
    ]
  },
  {
    "name": "Turkey",
    "alts": [
      "TURKEY",
      "TR",
      "TUR",
      "TURQUIE"
    ]
  },
  {
    "name": "Sri Lanka",
    "alts": [
      "SRI LANKA",
      "LK",
      "SRI",
      "LKA"
    ]
  },
  {
    "name": "Liechtenstein",
    "alts": [
      "LIECHTENSTEIN",
      "LI",
      "LIE"
    ]
  },
  {
    "name": "Latvia",
    "alts": [
      "LATVIA",
      "LV",
      "LVA",
      "LETTONIE"
    ]
  },
  {
    "name": "Tonga",
    "alts": [
      "TONGA",
      "TO",
      "TGA",
      "TON"
    ]
  },
  {
    "name": "Timor-Leste",
    "alts": [
      "TIMOR-LESTE",
      "TL",
      "TLS"
    ]
  },
  {
    "name": "Luxembourg",
    "alts": [
      "LUXEMBOURG",
      "LU",
      "LUX"
    ]
  },
  {
    "name": "Liberia",
    "alts": [
      "LIBERIA",
      "LR",
      "LBR",
      "LIBÉRIA"
    ]
  },
  {
    "name": "Tokelau",
    "alts": [
      "TOKELAU",
      "TK",
      "TKL"
    ]
  },
  {
    "name": "Thailand",
    "alts": [
      "THAILAND",
      "TH",
      "THA",
      "THAÏLANDE"
    ]
  },
  {
    "name": "French Southern Lands",
    "alts": [
      "FRENCH SOUTHERN LANDS",
      "TF",
      "ATF",
      "FRENCH SOUTHERN TERRITORIES",
      "TERRES AUSTRALES FRANÇAISES"
    ]
  },
  {
    "name": "Togo",
    "alts": [
      "TOGO",
      "TG",
      "TOG",
      "TGO"
    ]
  },
  {
    "name": "Chad",
    "alts": [
      "CHAD",
      "TD",
      "CHA",
      "TCD",
      "TCHAD"
    ]
  },
  {
    "name": "Turks and Caicos Islands",
    "alts": [
      "TURKS AND CAICOS ISLANDS",
      "TC",
      "TCA",
      "TURKS-ET-CAÏCOS, ÎLES"
    ]
  },
  {
    "name": "Libya",
    "alts": [
      "LIBYA",
      "LY",
      "LBY",
      "LIBYE"
    ]
  },
  {
    "name": "Vatican City",
    "alts": [
      "VATICAN CITY",
      "VA",
      "VAT",
      "HOLY SEE (VATICAN CITY STATE)",
      "SAINT-SIÈGE (ÉTAT DE LA CITÉ DU VATICAN)"
    ]
  },
  {
    "name": "Saint Vincent and theGrenadines",
    "alts": [
      "SAINT VINCENT AND THEGRENADINES",
      "VC",
      "VIN",
      "VCT",
      "SAINT VINCENT AND THE GRENADINES",
      "SAINT-VINCENT-ET-LES GRENADINES"
    ]
  },
  {
    "name": "United Arab Emirates",
    "alts": [
      "UNITED ARAB EMIRATES",
      "AE",
      "UAE",
      "ARE",
      "ÉMIRATS ARABES UNIS"
    ]
  },
  {
    "name": "Venezuela",
    "alts": [
      "VENEZUELA",
      "VE",
      "VEN",
      "VENEZUELA, BOLIVARIAN REPUBLIC OF",
      "VENEZUELA, RÉPUBLIQUE BOLIVARIENNE DU"
    ]
  },
  {
    "name": "Antigua and Barbuda",
    "alts": [
      "ANTIGUA AND BARBUDA",
      "AG",
      "ATG",
      "ANTIGUA-ET-BARBUDA"
    ]
  },
  {
    "name": "Virgin Islands, British",
    "alts": [
      "VIRGIN ISLANDS, BRITISH",
      "VG",
      "VGB",
      "ÎLES VIERGES BRITANNIQUES"
    ]
  },
  {
    "name": "Iraq",
    "alts": [
      "IRAQ",
      "IQ",
      "IRQ"
    ]
  },
  {
    "name": "Virgin Islands, U.S.",
    "alts": [
      "VIRGIN ISLANDS, U.S.",
      "VI",
      "VIR",
      "ÎLES VIERGES DES ÉTATS-UNIS"
    ]
  },
  {
    "name": "Iceland",
    "alts": [
      "ICELAND",
      "IS",
      "ISL",
      "ISLANDE"
    ]
  },
  {
    "name": "Iran",
    "alts": [
      "IRAN",
      "IR",
      "IRN",
      "IRAN, ISLAMIC REPUBLIC OF",
      "IRAN, RÉPUBLIQUE ISLAMIQUE D'"
    ]
  },
  {
    "name": "Armenia",
    "alts": [
      "ARMENIA",
      "AM",
      "ARM",
      "ARMÉNIE"
    ]
  },
  {
    "name": "Italy",
    "alts": [
      "ITALY",
      "IT",
      "ITA",
      "ITALIE"
    ]
  },
  {
    "name": "Vietnam",
    "alts": [
      "VIETNAM",
      "VN",
      "VIE",
      "VNM",
      "VIET NAM"
    ]
  },
  {
    "name": "Antarctica",
    "alts": [
      "ANTARCTICA",
      "AQ",
      "ROS3",
      "ATA",
      "ANTARCTIQUE"
    ]
  },
  {
    "name": "American Samoa",
    "alts": [
      "AMERICAN SAMOA",
      "AS",
      "ASA",
      "ASM",
      "SAMOA AMÉRICAINES"
    ]
  },
  {
    "name": "Argentina",
    "alts": [
      "ARGENTINA",
      "AR",
      "ARG",
      "ARGENTINE"
    ]
  },
  {
    "name": "Isle of Man",
    "alts": [
      "ISLE OF MAN",
      "IM",
      "GBM",
      "IMN",
      "ÎLE DE MAN"
    ]
  },
  {
    "name": "Vanuatu",
    "alts": [
      "VANUATU",
      "VU",
      "VAN",
      "VUT"
    ]
  },
  {
    "name": "Aruba",
    "alts": [
      "ARUBA",
      "AW",
      "ARU",
      "ABW"
    ]
  },
  {
    "name": "India",
    "alts": [
      "INDIA",
      "IN",
      "IND",
      "INDE"
    ]
  },
  {
    "name": "Lebanon",
    "alts": [
      "LEBANON",
      "LB",
      "LIB",
      "LBN",
      "LIBAN"
    ]
  },
  {
    "name": "Azerbaijan",
    "alts": [
      "AZERBAIJAN",
      "AZ",
      "AZE",
      "AZERBAÏDJAN"
    ]
  },
  {
    "name": "Ireland",
    "alts": [
      "IRELAND",
      "IE",
      "IRL",
      "IRLANDE"
    ]
  },
  {
    "name": "Indonesia",
    "alts": [
      "INDONESIA",
      "ID",
      "IDN",
      "INDONÉSIE"
    ]
  },
  {
    "name": "Malaysia",
    "alts": [
      "MALAYSIA",
      "MY",
      "MAS",
      "MYS",
      "MALAISIE"
    ]
  },
  {
    "name": "Qatar",
    "alts": [
      "QATAR",
      "QA",
      "QAT"
    ]
  },
  {
    "name": "Mozambique",
    "alts": [
      "MOZAMBIQUE",
      "MZ",
      "MOZ"
    ]
  }
];

function lookupCannonicalCountry(country){
	if(!country){
		return false;
	}
	if(country === ''){
		return false;
	}
	return getMatchingCountry(normalizeLocationString(country), countries);
}

function lookupCannonicalState(state){
  state = normalizeLocationString(state);
  var key;
  for(key in stateLookupMap){
    if( (state === key) || (state === normalizeLocationString(stateLookupMap[key])) ){
      return stateLookupMap[key];
    }
  }
  return false;
}

function getMatchingCountry(alt, list){
	var i;
	for(i=0;i<list.length;i++){
		if(inArray(alt,list[i].alts)){
			return list[i].name;
		}
	}
	return false;
}

function inArray(needle, haystack) {
	var length = haystack.length;
	for(var i = 0; i < length; i++) {
		if(haystack[i] === needle) return true;
	}
	return false;
}

function getCountryList(countryGroup){
    if(countryGroupLookup.hasOwnProperty(countryGroup)){
      return countryGroupLookup[countryGroup];
    }
    else{
      return [];
    }
}

function lookUpStateByShortName(shortName){
    if(stateLookupMap.hasOwnProperty(shortName)){
      return stateLookupMap[shortName];
    }
    else{
      return '';
    }
}

function normalizeLocationString(str){
  return str.trim().replace(/\./g,"").toUpperCase();
}

module.exports = {
	lookupCannonicalCountry: lookupCannonicalCountry,
  stateLookupMap: stateLookupMap,
  countryGroupLookup: countryGroupLookup,
  getCountryList: getCountryList,
  lookUpStateByShortName: lookUpStateByShortName,
  lookupCannonicalState: lookupCannonicalState
};

