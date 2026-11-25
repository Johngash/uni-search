const courseCatalog = [
  {
    name: "Bachelor of Computer Science",
    code: "BCS",
    description: "A programme covering programming, software development, and computer systems.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Business Administration",
    code: "BBA",
    description: "A programme covering management, entrepreneurship, finance, and marketing.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Education",
    code: "BED",
    description: "A programme preparing students for careers in teaching and education management.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Arts",
    code: "BA",
    description: "A broad humanities programme covering communication, culture, and society.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Architectural Studies/Bachelor of Architecture",
    code: "BARCH",
    description: "A programme in architectural design, construction, and the built environment.",
    duration: "5 years"
  },
  {
    name: "Bachelor of Quantity Surveying",
    code: "BQS",
    description: "A programme covering construction costs, measurement, and project management.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Arts (Design)",
    code: "BAD",
    description: "A programme developing creative, visual communication, and design skills.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Arts in Anthropology",
    code: "BAA",
    description: "A programme exploring human cultures, communities, and social development.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Actuarial Science",
    code: "BAS",
    description: "A programme applying mathematics and statistics to risk and financial decisions.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Industrial Chemistry)",
    code: "BSC-IC",
    description: "A programme in chemical science, laboratory practice, and industrial applications.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Mathematical Sciences)",
    code: "BSC-MS",
    description: "A programme covering mathematics, statistics, modelling, and problem-solving.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Meteorology)",
    code: "BSC-MET",
    description: "A programme covering weather systems, climate, and atmospheric science.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Biology)",
    code: "BSC-BIO",
    description: "A programme covering living systems, ecology, genetics, and laboratory science.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Biochemistry)",
    code: "BSC-BCH",
    description: "A programme studying the chemical processes of living organisms.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Geology)",
    code: "BSC-GEO",
    description: "A programme covering earth materials, geological processes, and resources.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science (Analytical Chemistry)",
    code: "BSC-AC",
    description: "A programme in chemical analysis, instrumentation, and laboratory methods.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Information Technology",
    code: "BSC-IT",
    description: "A programme covering information systems, networks, databases, and technology services.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Computer Science",
    code: "BSC-CS",
    description: "A programme in algorithms, software engineering, systems, and computing theory.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Mathematics",
    code: "BSC-MATH",
    description: "A programme developing advanced mathematical reasoning and modelling skills.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Nursing",
    code: "BSC-N",
    description: "A health sciences programme in nursing practice, care, and patient management.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Pharmacy",
    code: "BPHARM",
    description: "A programme covering medicines, pharmaceutical science, and patient care.",
    duration: "5 years"
  },
  {
    name: "Bachelor of Medicine and Bachelor of Surgery",
    code: "MBCHB",
    description: "A medical programme covering clinical science, diagnosis, and patient treatment.",
    duration: "6 years"
  },
  {
    name: "Bachelor of Laws",
    code: "LLB",
    description: "A programme covering legal theory, practice, governance, and justice.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Commerce",
    code: "BCOM",
    description: "A programme covering accounting, finance, business, and commercial practice.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Economics",
    code: "BECON",
    description: "A programme covering economic theory, policy, markets, and data analysis.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Agriculture",
    code: "BSC-AG",
    description: "A programme covering crop production, agricultural technology, and food systems.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Environmental Science",
    code: "BSC-ENV",
    description: "A programme covering ecosystems, conservation, climate, and environmental management.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Journalism and Mass Communication",
    code: "BJMC",
    description: "A programme in journalism, digital media, broadcasting, and communication.",
    duration: "4 years"
  },
  {
    name: "Bachelor of Science in Mechanical Engineering",
    code: "BSC-ME",
    description: "A programme covering machine design, manufacturing, mechanics, and energy systems.",
    duration: "5 years"
  },
  {
    name: "Bachelor of Science in Civil Engineering",
    code: "BSC-CE",
    description: "A programme covering structures, construction, transport, and water infrastructure.",
    duration: "5 years"
  }
];

const createDummyCourses = (universityName = "") => {
  let seed = [...universityName].reduce((total, character) => total + character.charCodeAt(0), 0);
  const shuffledCourses = [...courseCatalog].sort(() => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280 - 0.5;
  });

  return shuffledCourses.slice(0, 8);
};

const universities = [
  // PUBLIC UNIVERSITIES
  {
    name: "University of Nairobi",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 41174,
    type: "public",
    isFavourite: false,
    imageUrl: ""

  },
  {
    name: "Moi University",
    courses: createDummyCourses(),
    location: "Eldoret, Uasin Gishu",
    population: 17067,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kenyatta University",
    courses: createDummyCourses(),
    location: "Kahawa, Nairobi",
    population: 36013,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Egerton University",
    courses: createDummyCourses(),
    location: "Njoro, Nakuru",
    population: 20620,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Jomo Kenyatta University of Agriculture and Technology",
    courses: createDummyCourses(),
    location: "Juja, Kiambu",
    population: 44112,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Maseno University",
    courses: createDummyCourses(),
    location: "Maseno, Kisumu",
    population: 27025,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Masinde Muliro University of Science and Technology",
    courses: createDummyCourses(),
    location: "Kakamega",
    population: 24277,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Dedan Kimathi University of Technology",
    courses: createDummyCourses(),
    location: "Nyeri",
    population: 9254,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Chuka University",
    courses: createDummyCourses(),
    location: "Chuka, Tharaka-Nithi",
    population: 16775,
    type: "public",
    isFavourite: true,
    imageUrl: ""
  },
  {
    name: "Technical University of Kenya",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 13670,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Technical University of Mombasa",
    courses: createDummyCourses(),
    location: "Mombasa",
    population: 8564,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Pwani University",
    courses: createDummyCourses(),
    location: "Kilifi",
    population: 7183,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kisii University",
    courses: createDummyCourses(),
    location: "Kisii",
    population: 16905,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "University of Eldoret",
    courses: createDummyCourses(),
    location: "Eldoret, Uasin Gishu",
    population: 17805,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Maasai Mara University",
    courses: createDummyCourses(),
    location: "Narok",
    population: 9089,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Jaramogi Oginga Odinga University of Science and Technology",
    courses: createDummyCourses(),
    location: "Bondo, Siaya",
    population: 11523,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Laikipia University",
    courses: createDummyCourses(),
    location: "Nyahururu, Laikipia",
    population: 7652,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "South Eastern Kenya University",
    courses: createDummyCourses(),
    location: "Kitui",
    population: 9188,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Meru University of Science and Technology",
    courses: createDummyCourses(),
    location: "Meru",
    population: 9521,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Multimedia University of Kenya",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 9196,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "University of Kabianga",
    courses: createDummyCourses(),
    location: "Kericho",
    population: 11136,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Karatina University",
    courses: createDummyCourses(),
    location: "Karatina, Nyeri",
    population: 11902,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kibabii University",
    courses: createDummyCourses(),
    location: "Bungoma",
    population: 8549,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Rongo University",
    courses: createDummyCourses(),
    location: "Rongo, Migori",
    population: 11078,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "The Co-operative University of Kenya",
    courses: createDummyCourses(),
    location: "Karen, Nairobi",
    population: 3437,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Taita Taveta University",
    courses: createDummyCourses(),
    location: "Voi, Taita-Taveta",
    population: 2625,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Murang'a University of Technology",
    courses: createDummyCourses(),
    location: "Murang'a",
    population: 9713,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "University of Embu",
    courses: createDummyCourses(),
    location: "Embu",
    population: 3460,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Machakos University",
    courses: createDummyCourses(),
    location: "Machakos",
    population: 9931,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kirinyaga University",
    courses: createDummyCourses(),
    location: "Kerugoya, Kirinyaga",
    population: 11730,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Garissa University",
    courses: createDummyCourses(),
    location: "Garissa",
    population: 2765,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Alupe University",
    courses: createDummyCourses(),
    location: "Busia",
    population: 2619,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kaimosi Friends University",
    courses: createDummyCourses(),
    location: "Kaimosi, Vihiga",
    population: 5752,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Tom Mboya University",
    courses: createDummyCourses(),
    location: "Homa Bay",
    population: 7721,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Tharaka University",
    courses: createDummyCourses(),
    location: "Marimanti, Tharaka-Nithi",
    population: 7434,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Bomet University",
    courses: createDummyCourses(),
    location: "Bomet",
    population: 4908,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },

  // PRIVATE UNIVERSITIES
  {
    name: "University of Eastern Africa, Baraton",
    courses: createDummyCourses(),
    location: "Baraton, Nandi",
    population: 4021,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Catholic University of Eastern Africa",
    courses: createDummyCourses(),
    location: "Lang'ata, Nairobi",
    population: 9769,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Daystar University",
    courses: createDummyCourses(),
    location: "Athi River, Machakos",
    population: 6307,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Scott Christian University",
    courses: createDummyCourses(),
    location: "Machakos",
    population: 405,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "United States International University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 16771,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Africa Nazarene University",
    courses: createDummyCourses(),
    location: "Ongata Rongai, Kajiado",
    population: 3046,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kenya Methodist University",
    courses: createDummyCourses(),
    location: "Meru",
    population: 7619,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "St. Paul's University",
    courses: createDummyCourses(),
    location: "Limuru, Kiambu",
    population: 6133,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Pan Africa Christian University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 1502,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Strathmore University",
    courses: createDummyCourses(),
    location: "Madaraka, Nairobi",
    population: 8585,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kabarak University",
    courses: createDummyCourses(),
    location: "Kabarak, Nakuru",
    population: 13379,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Mount Kenya University",
    courses: createDummyCourses(),
    location: "Thika, Kiambu",
    population: 30448,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Africa International University",
    courses: createDummyCourses(),
    location: "Karen, Nairobi",
    population: 1378,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kenya Highlands Evangelical University",
    courses: createDummyCourses(),
    location: "Kericho",
    population: 1387,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Great Lakes University of Kisumu",
    courses: createDummyCourses(),
    location: "Kisumu",
    population: 2156,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "KCA University",
    courses: createDummyCourses(),
    location: "Ruaraka, Nairobi",
    population: 12527,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Adventist University of Africa",
    courses: createDummyCourses(),
    location: "Ongata Rongai, Kajiado",
    population: 539,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "KAG EAST University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 369,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Umma University",
    courses: createDummyCourses(),
    location: "Kajiado",
    population: 968,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Presbyterian University of East Africa",
    courses: createDummyCourses(),
    location: "Kikuyu, Kiambu",
    population: 2394,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Aga Khan University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 789,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kiriri Women's University of Science and Technology",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 2831,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "The East African University",
    courses: createDummyCourses(),
    location: "Kitengela, Kajiado",
    population: 593,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Zetech University",
    courses: createDummyCourses(),
    location: "Ruiru, Kiambu",
    population: 4343,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Lukenya University",
    courses: createDummyCourses(),
    location: "Athi River, Machakos",
    population: 2847,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Management University of Africa",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 1061,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Tangaza University",
    courses: createDummyCourses(),
    location: "Karen, Nairobi",
    population: 1337,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Islamic University of Kenya",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 503,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Riara University",
    courses: createDummyCourses(),
    location: "Mbagathi Way, Nairobi",
    population: 1551,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Uzima University",
    courses: createDummyCourses(),
    location: "Kisumu",
    population: 366,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Gretsa University",
    courses: createDummyCourses(),
    location: "Thika, Kiambu",
    population: 1057,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Amref International University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 1703,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "International Leadership University",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: 240,
    type: "private",
    isFavourite: false,
    imageUrl: ""
  },

  // SPECIALISED PUBLIC DEGREE-AWARDING INSTITUTIONS
  {
    name: "National Defence University-Kenya",
    courses: createDummyCourses(),
    location: "Lanet, Nakuru",
    population: 806,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Open University of Kenya",
    courses: createDummyCourses(),
    location: "Konza Technopolis, Machakos",
    population: 866,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "National Intelligence Research University",
    courses: createDummyCourses(),
    location: "Kenya",
    population: null,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kenya Advanced Institute of Science and Technology",
    courses: createDummyCourses(),
    location: "Konza Technopolis, Machakos",
    population: null,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  },
  {
    name: "Kenya Medical Research Institute",
    courses: createDummyCourses(),
    location: "Nairobi",
    population: null,
    type: "public",
    isFavourite: false,
    imageUrl: ""
  }
];

universities.forEach((university) => {
  university.courses = createDummyCourses(university.name);
});
