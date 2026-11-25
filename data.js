const universities = [
  // PUBLIC UNIVERSITIES
  {
    name: "University of Nairobi",
    courses: [],
    location: "Nairobi",
    population: 41174,
    type: "public",
    isFavourite: false
  },
  {
    name: "Moi University",
    courses: [],
    location: "Eldoret, Uasin Gishu",
    population: 17067,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kenyatta University",
    courses: [],
    location: "Kahawa, Nairobi",
    population: 36013,
    type: "public",
    isFavourite: false
  },
  {
    name: "Egerton University",
    courses: [],
    location: "Njoro, Nakuru",
    population: 20620,
    type: "public",
    isFavourite: false
  },
  {
    name: "Jomo Kenyatta University of Agriculture and Technology",
    courses: [],
    location: "Juja, Kiambu",
    population: 44112,
    type: "public",
    isFavourite: false
  },
  {
    name: "Maseno University",
    courses: [],
    location: "Maseno, Kisumu",
    population: 27025,
    type: "public",
    isFavourite: false
  },
  {
    name: "Masinde Muliro University of Science and Technology",
    courses: [],
    location: "Kakamega",
    population: 24277,
    type: "public",
    isFavourite: false
  },
  {
    name: "Dedan Kimathi University of Technology",
    courses: [],
    location: "Nyeri",
    population: 9254,
    type: "public",
    isFavourite: false
  },
  {
    name: "Chuka University",
    courses: [],
    location: "Chuka, Tharaka-Nithi",
    population: 16775,
    type: "public",
    isFavourite: true
  },
  {
    name: "Technical University of Kenya",
    courses: [],
    location: "Nairobi",
    population: 13670,
    type: "public",
    isFavourite: false
  },
  {
    name: "Technical University of Mombasa",
    courses: [],
    location: "Mombasa",
    population: 8564,
    type: "public",
    isFavourite: false
  },
  {
    name: "Pwani University",
    courses: [],
    location: "Kilifi",
    population: 7183,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kisii University",
    courses: [],
    location: "Kisii",
    population: 16905,
    type: "public",
    isFavourite: false
  },
  {
    name: "University of Eldoret",
    courses: [],
    location: "Eldoret, Uasin Gishu",
    population: 17805,
    type: "public",
    isFavourite: false
  },
  {
    name: "Maasai Mara University",
    courses: [],
    location: "Narok",
    population: 9089,
    type: "public",
    isFavourite: false
  },
  {
    name: "Jaramogi Oginga Odinga University of Science and Technology",
    courses: [],
    location: "Bondo, Siaya",
    population: 11523,
    type: "public",
    isFavourite: false
  },
  {
    name: "Laikipia University",
    courses: [],
    location: "Nyahururu, Laikipia",
    population: 7652,
    type: "public",
    isFavourite: false
  },
  {
    name: "South Eastern Kenya University",
    courses: [],
    location: "Kitui",
    population: 9188,
    type: "public",
    isFavourite: false
  },
  {
    name: "Meru University of Science and Technology",
    courses: [],
    location: "Meru",
    population: 9521,
    type: "public",
    isFavourite: false
  },
  {
    name: "Multimedia University of Kenya",
    courses: [],
    location: "Nairobi",
    population: 9196,
    type: "public",
    isFavourite: false
  },
  {
    name: "University of Kabianga",
    courses: [],
    location: "Kericho",
    population: 11136,
    type: "public",
    isFavourite: false
  },
  {
    name: "Karatina University",
    courses: [],
    location: "Karatina, Nyeri",
    population: 11902,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kibabii University",
    courses: [],
    location: "Bungoma",
    population: 8549,
    type: "public",
    isFavourite: false
  },
  {
    name: "Rongo University",
    courses: [],
    location: "Rongo, Migori",
    population: 11078,
    type: "public",
    isFavourite: false
  },
  {
    name: "The Co-operative University of Kenya",
    courses: [],
    location: "Karen, Nairobi",
    population: 3437,
    type: "public",
    isFavourite: false
  },
  {
    name: "Taita Taveta University",
    courses: [],
    location: "Voi, Taita-Taveta",
    population: 2625,
    type: "public",
    isFavourite: false
  },
  {
    name: "Murang'a University of Technology",
    courses: [],
    location: "Murang'a",
    population: 9713,
    type: "public",
    isFavourite: false
  },
  {
    name: "University of Embu",
    courses: [],
    location: "Embu",
    population: 3460,
    type: "public",
    isFavourite: false
  },
  {
    name: "Machakos University",
    courses: [],
    location: "Machakos",
    population: 9931,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kirinyaga University",
    courses: [],
    location: "Kerugoya, Kirinyaga",
    population: 11730,
    type: "public",
    isFavourite: false
  },
  {
    name: "Garissa University",
    courses: [],
    location: "Garissa",
    population: 2765,
    type: "public",
    isFavourite: false
  },
  {
    name: "Alupe University",
    courses: [],
    location: "Busia",
    population: 2619,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kaimosi Friends University",
    courses: [],
    location: "Kaimosi, Vihiga",
    population: 5752,
    type: "public",
    isFavourite: false
  },
  {
    name: "Tom Mboya University",
    courses: [],
    location: "Homa Bay",
    population: 7721,
    type: "public",
    isFavourite: false
  },
  {
    name: "Tharaka University",
    courses: [],
    location: "Marimanti, Tharaka-Nithi",
    population: 7434,
    type: "public",
    isFavourite: false
  },
  {
    name: "Bomet University",
    courses: [],
    location: "Bomet",
    population: 4908,
    type: "public",
    isFavourite: false
  },

  // PRIVATE UNIVERSITIES
  {
    name: "University of Eastern Africa, Baraton",
    courses: [],
    location: "Baraton, Nandi",
    population: 4021,
    type: "private",
    isFavourite: false
  },
  {
    name: "Catholic University of Eastern Africa",
    courses: [],
    location: "Lang'ata, Nairobi",
    population: 9769,
    type: "private",
    isFavourite: false
  },
  {
    name: "Daystar University",
    courses: [],
    location: "Athi River, Machakos",
    population: 6307,
    type: "private",
    isFavourite: false
  },
  {
    name: "Scott Christian University",
    courses: [],
    location: "Machakos",
    population: 405,
    type: "private",
    isFavourite: false
  },
  {
    name: "United States International University",
    courses: [],
    location: "Nairobi",
    population: 16771,
    type: "private",
    isFavourite: false
  },
  {
    name: "Africa Nazarene University",
    courses: [],
    location: "Ongata Rongai, Kajiado",
    population: 3046,
    type: "private",
    isFavourite: false
  },
  {
    name: "Kenya Methodist University",
    courses: [],
    location: "Meru",
    population: 7619,
    type: "private",
    isFavourite: false
  },
  {
    name: "St. Paul's University",
    courses: [],
    location: "Limuru, Kiambu",
    population: 6133,
    type: "private",
    isFavourite: false
  },
  {
    name: "Pan Africa Christian University",
    courses: [],
    location: "Nairobi",
    population: 1502,
    type: "private",
    isFavourite: false
  },
  {
    name: "Strathmore University",
    courses: [],
    location: "Madaraka, Nairobi",
    population: 8585,
    type: "private",
    isFavourite: false
  },
  {
    name: "Kabarak University",
    courses: [],
    location: "Kabarak, Nakuru",
    population: 13379,
    type: "private",
    isFavourite: false
  },
  {
    name: "Mount Kenya University",
    courses: [],
    location: "Thika, Kiambu",
    population: 30448,
    type: "private",
    isFavourite: false
  },
  {
    name: "Africa International University",
    courses: [],
    location: "Karen, Nairobi",
    population: 1378,
    type: "private",
    isFavourite: false
  },
  {
    name: "Kenya Highlands Evangelical University",
    courses: [],
    location: "Kericho",
    population: 1387,
    type: "private",
    isFavourite: false
  },
  {
    name: "Great Lakes University of Kisumu",
    courses: [],
    location: "Kisumu",
    population: 2156,
    type: "private",
    isFavourite: false
  },
  {
    name: "KCA University",
    courses: [],
    location: "Ruaraka, Nairobi",
    population: 12527,
    type: "private",
    isFavourite: false
  },
  {
    name: "Adventist University of Africa",
    courses: [],
    location: "Ongata Rongai, Kajiado",
    population: 539,
    type: "private",
    isFavourite: false
  },
  {
    name: "KAG EAST University",
    courses: [],
    location: "Nairobi",
    population: 369,
    type: "private",
    isFavourite: false
  },
  {
    name: "Umma University",
    courses: [],
    location: "Kajiado",
    population: 968,
    type: "private",
    isFavourite: false
  },
  {
    name: "Presbyterian University of East Africa",
    courses: [],
    location: "Kikuyu, Kiambu",
    population: 2394,
    type: "private",
    isFavourite: false
  },
  {
    name: "Aga Khan University",
    courses: [],
    location: "Nairobi",
    population: 789,
    type: "private",
    isFavourite: false
  },
  {
    name: "Kiriri Women's University of Science and Technology",
    courses: [],
    location: "Nairobi",
    population: 2831,
    type: "private",
    isFavourite: false
  },
  {
    name: "The East African University",
    courses: [],
    location: "Kitengela, Kajiado",
    population: 593,
    type: "private",
    isFavourite: false
  },
  {
    name: "Zetech University",
    courses: [],
    location: "Ruiru, Kiambu",
    population: 4343,
    type: "private",
    isFavourite: false
  },
  {
    name: "Lukenya University",
    courses: [],
    location: "Athi River, Machakos",
    population: 2847,
    type: "private",
    isFavourite: false
  },
  {
    name: "Management University of Africa",
    courses: [],
    location: "Nairobi",
    population: 1061,
    type: "private",
    isFavourite: false
  },
  {
    name: "Tangaza University",
    courses: [],
    location: "Karen, Nairobi",
    population: 1337,
    type: "private",
    isFavourite: false
  },
  {
    name: "Islamic University of Kenya",
    courses: [],
    location: "Nairobi",
    population: 503,
    type: "private",
    isFavourite: false
  },
  {
    name: "Riara University",
    courses: [],
    location: "Mbagathi Way, Nairobi",
    population: 1551,
    type: "private",
    isFavourite: false
  },
  {
    name: "Uzima University",
    courses: [],
    location: "Kisumu",
    population: 366,
    type: "private",
    isFavourite: false
  },
  {
    name: "Gretsa University",
    courses: [],
    location: "Thika, Kiambu",
    population: 1057,
    type: "private",
    isFavourite: false
  },
  {
    name: "Amref International University",
    courses: [],
    location: "Nairobi",
    population: 1703,
    type: "private",
    isFavourite: false
  },
  {
    name: "International Leadership University",
    courses: [],
    location: "Nairobi",
    population: 240,
    type: "private",
    isFavourite: false
  },

  // SPECIALISED PUBLIC DEGREE-AWARDING INSTITUTIONS
  {
    name: "National Defence University-Kenya",
    courses: [],
    location: "Lanet, Nakuru",
    population: 806,
    type: "public",
    isFavourite: false
  },
  {
    name: "Open University of Kenya",
    courses: [],
    location: "Konza Technopolis, Machakos",
    population: 866,
    type: "public",
    isFavourite: false
  },
  {
    name: "National Intelligence Research University",
    courses: [],
    location: "Kenya",
    population: null,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kenya Advanced Institute of Science and Technology",
    courses: [],
    location: "Konza Technopolis, Machakos",
    population: null,
    type: "public",
    isFavourite: false
  },
  {
    name: "Kenya Medical Research Institute",
    courses: [],
    location: "Nairobi",
    population: null,
    type: "public",
    isFavourite: false
  }
];

