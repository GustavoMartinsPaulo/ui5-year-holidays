sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var oCountriesList = [{
		"name": "Afghanistan",
		"id": "af",
		"regions": [
			"Badakhshan",
			"Badghis",
			"Baghlan",
			"Balkh",
			"Bamian",
			"Daykondi",
			"Farah",
			"Faryab",
			"Ghazni",
			"Ghowr",
			"Helmand",
			"Herat",
			"Jowzjan",
			"Kabul",
			"Kandahar",
			"Kapisa",
			"Khost",
			"Konar",
			"Kondoz",
			"Laghman",
			"Lowgar",
			"Nangarhar",
			"Nimruz",
			"Nurestan",
			"Oruzgan",
			"Paktia",
			"Paktika",
			"Panjshir",
			"Parvan",
			"Samangan",
			"Sar-e Pol",
			"Takhar",
			"Vardak",
			"Zabol"
		]
	}, {
		"name": "Albania",
		"id": "al",
		"regions": [
			"Berat",
			"Dibres",
			"Durres",
			"Elbasan",
			"Fier",
			"Gjirokastre",
			"Korce",
			"Kukes",
			"Lezhe",
			"Shkoder",
			"Tirane",
			"Vlore"
		]
	}, {
		"name": "Algeria",
		"id": "dz",
		"regions": [
			"Adrar",
			"Ain Defla",
			"Ain Temouchent",
			"Alger",
			"Annaba",
			"Batna",
			"Bechar",
			"Bejaia",
			"Biskra",
			"Blida",
			"Bordj Bou Arreridj",
			"Bouira",
			"Boumerdes",
			"Chlef",
			"Constantine",
			"Djelfa",
			"El Bayadh",
			"El Oued",
			"El Tarf",
			"Ghardaia",
			"Guelma",
			"Illizi",
			"Jijel",
			"Khenchela",
			"Laghouat",
			"Muaskar",
			"Medea",
			"Mila",
			"Mostaganem",
			"M'Sila",
			"Naama",
			"Oran",
			"Ouargla",
			"Oum el Bouaghi",
			"Relizane",
			"Saida",
			"Setif",
			"Sidi Bel Abbes",
			"Skikda",
			"Souk Ahras",
			"Tamanghasset",
			"Tebessa",
			"Tiaret",
			"Tindouf",
			"Tipaza",
			"Tissemsilt",
			"Tizi Ouzou",
			"Tlemcen"
		]
	}, {
		"name": "American Samoa",
		"id": "as",
		"regions": [
			""
		]
	}, {
		"name": "Andorra",
		"id": "ad",
		"regions": [
			"Andorra la Vella",
			"Canillo",
			"Encamp",
			"Escaldes-Engordany",
			"La Massana",
			"Ordino",
			"Sant Julia de Loria"
		]
	}, {
		"name": "Angola",
		"id": "ao",
		"regions": [
			"Bengo",
			"Benguela",
			"Bie",
			"Cabinda",
			"Cuando Cubango",
			"Cuanza Norte",
			"Cuanza Sul",
			"Cunene",
			"Huambo",
			"Huila",
			"Luanda",
			"Lunda Norte",
			"Lunda Sul",
			"Malanje",
			"Moxico",
			"Namibe",
			"Uige",
			"Zaire"
		]
	}, {
		"name": "Anguilla",
		"id": "ai",
		"regions": [
			""
		]
	}, {
		"name": "Antigua and Barbuda",
		"id": "ag",
		"regions": [
			"Barbuda",
			"Redonda",
			"Saint George",
			"Saint John",
			"Saint Mary",
			"Saint Paul",
			"Saint Peter",
			"Saint Philip"
		]
	}, {
		"name": "Argentina",
		"id": "ar",
		"regions": [
			"Buenos Aires",
			"Buenos Aires Capital",
			"Catamarca",
			"Chaco",
			"Chubut",
			"Cordoba",
			"Corrientes",
			"Entre Rios",
			"Formosa",
			"Jujuy",
			"La Pampa",
			"La Rioja",
			"Mendoza",
			"Misiones",
			"Neuquen",
			"Rio Negro",
			"Salta",
			"San Juan",
			"San Luis",
			"Santa Cruz",
			"Santa Fe",
			"Santiago del Estero",
			"Tierra del Fuego",
			"Tucuman"
		]
	}, {
		"name": "Armenia",
		"id": "am",
		"regions": [
			"Aragatsotn",
			"Ararat",
			"Armavir",
			"Geghark'unik'",
			"Kotayk'",
			"Lorri",
			"Shirak",
			"Syunik'",
			"Tavush",
			"Vayots' Dzor",
			"Yerevan"
		]
	}, {
		"name": "Aruba",
		"id": "aw",
		"regions": [
			""
		]
	}, {
		"name": "Australia",
		"id": "au",
		"regions": [
			""
		]
	}, {
		"name": "Austria",
		"id": "at",
		"regions": [
			"Burgenland",
			"Kaernten",
			"Niederoesterreich",
			"Oberoesterreich",
			"Salzburg",
			"Steiermark",
			"Tirol",
			"Vorarlberg",
			"Wien"
		]
	}, {
		"name": "Azerbaijan",
		"id": "az",
		"regions": [
			"Abseron Rayonu",
			"Agcabadi Rayonu",
			"Agdam Rayonu",
			"Agdas Rayonu",
			"Agstafa Rayonu",
			"Agsu Rayonu",
			"Astara Rayonu",
			"Balakan Rayonu",
			"Barda Rayonu",
			"Beylaqan Rayonu",
			"Bilasuvar Rayonu",
			"Cabrayil Rayonu",
			"Calilabad Rayonu",
			"Daskasan Rayonu",
			"Davaci Rayonu",
			"Fuzuli Rayonu",
			"Gadabay Rayonu",
			"Goranboy Rayonu",
			"Goycay Rayonu",
			"Haciqabul Rayonu",
			"Imisli Rayonu",
			"Ismayilli Rayonu",
			"Kalbacar Rayonu",
			"Kurdamir Rayonu",
			"Lacin Rayonu",
			"Lankaran Rayonu",
			"Lerik Rayonu",
			"Masalli Rayonu",
			"Neftcala Rayonu",
			"Oguz Rayonu",
			"Qabala Rayonu",
			"Qax Rayonu",
			"Qazax Rayonu",
			"Qobustan Rayonu",
			"Quba Rayonu",
			"Qubadli Rayonu",
			"Qusar Rayonu",
			"Saatli Rayonu",
			"Sabirabad Rayonu",
			"Saki Rayonu",
			"Salyan Rayonu",
			"Samaxi Rayonu",
			"Samkir Rayonu",
			"Samux Rayonu",
			"Siyazan Rayonu",
			"Susa Rayonu",
			"Tartar Rayonu",
			"Tovuz Rayonu",
			"Ucar Rayonu",
			"Xacmaz Rayonu",
			"Xanlar Rayonu",
			"Xizi Rayonu",
			"Xocali Rayonu",
			"Xocavand Rayonu",
			"Yardimli Rayonu",
			"Yevlax Rayonu",
			"Zangilan Rayonu",
			"Zaqatala Rayonu",
			"Zardab Rayonu",
			"Ali Bayramli Sahari",
			"Baki Sahari",
			"Ganca Sahari",
			"Lankaran Sahari",
			"Mingacevir Sahari",
			"Naftalan Sahari",
			"Saki Sahari",
			"Sumqayit Sahari",
			"Susa Sahari",
			"Xankandi Sahari",
			"Yevlax Sahari",
			"Naxcivan Muxtar"
		]
	}, {
		"name": "Bahrain",
		"id": "bh",
		"regions": [
			"Al Hadd",
			"Al Manamah",
			"Al Mintaqah al Gharbiyah",
			"Al Mintaqah al Wusta",
			"Al Mintaqah ash Shamaliyah",
			"Al Muharraq",
			"Ar Rifa' wa al Mintaqah al Janubiyah",
			"Jidd Hafs",
			"Madinat Hamad",
			"Madinat 'Isa",
			"Juzur Hawar",
			"Sitrah"
		]
	}, {
		"name": "Bangladesh",
		"id": "bd",
		"regions": [
			"Barisal",
			"Chittagong",
			"Dhaka",
			"Khulna",
			"Rajshahi",
			"Sylhet"
		]
	}, {
		"name": "Barbados",
		"id": "bb",
		"regions": [
			"Christ Church",
			"Saint Andrew",
			"Saint George",
			"Saint James",
			"Saint John",
			"Saint Joseph",
			"Saint Lucy",
			"Saint Michael",
			"Saint Peter",
			"Saint Philip",
			"Saint Thomas"
		]
	}, {
		"name": "Belarus",
		"id": "by",
		"regions": [
			"Brest",
			"Homyel",
			"Horad Minsk",
			"Hrodna",
			"Mahilyow",
			"Minsk",
			"Vitsyebsk"
		]
	}, {
		"name": "Belgium",
		"id": "be",
		"regions": [
			"Antwerpen",
			"Brabant Wallon",
			"Brussels",
			"Flanders",
			"Hainaut",
			"Liege",
			"Limburg",
			"Luxembourg",
			"Namur",
			"Oost-Vlaanderen",
			"Vlaams-Brabant",
			"Wallonia",
			"West-Vlaanderen"
		]
	}, {
		"name": "Belize",
		"id": "bz",
		"regions": [
			"Belize",
			"Cayo",
			"Corozal",
			"Orange Walk",
			"Stann Creek",
			"Toledo"
		]
	}, {
		"name": "Benin",
		"id": "bj",
		"regions": [
			"Alibori",
			"Atakora",
			"Atlantique",
			"Borgou",
			"Collines",
			"Donga",
			"Kouffo",
			"Littoral",
			"Mono",
			"Oueme",
			"Plateau",
			"Zou"
		]
	}, {
		"name": "Bermuda",
		"id": "bm",
		"regions": [
			"Devonshire",
			"Hamilton",
			"Hamilton",
			"Paget",
			"Pembroke",
			"Saint George",
			"Saint George's",
			"Sandys",
			"Smith's",
			"Southampton",
			"Warwick"
		]
	}, {
		"name": "Bhutan",
		"id": "bt",
		"regions": [
			"Bumthang",
			"Chukha",
			"Dagana",
			"Gasa",
			"Haa",
			"Lhuntse",
			"Mongar",
			"Paro",
			"Pemagatshel",
			"Punakha",
			"Samdrup Jongkhar",
			"Samtse",
			"Sarpang",
			"Thimphu",
			"Trashigang",
			"Trashiyangste",
			"Trongsa",
			"Tsirang",
			"Wangdue Phodrang",
			"Zhemgang"
		]
	}, {
		"name": "Bolivia",
		"id": "bo",
		"regions": [
			"Chuquisaca",
			"Cochabamba",
			"Beni",
			"La Paz",
			"Oruro",
			"Pando",
			"Potosi",
			"Santa Cruz",
			"Tarija"
		]
	}, {
		"name": "Bosnia and Herzegovina",
		"id": "ba",
		"regions": [
			"Una-Sana [Federation]",
			"Posavina [Federation]",
			"Tuzla [Federation]",
			"Zenica-Doboj [Federation]",
			"Bosnian Podrinje [Federation]",
			"Central Bosnia [Federation]",
			"Herzegovina-Neretva [Federation]",
			"West Herzegovina [Federation]",
			"Sarajevo [Federation]",
			"West Bosnia [Federation]",
			"Banja Luka [RS]",
			"Bijeljina [RS]",
			"Doboj [RS]",
			"Fo?a [RS]",
			"Sarajevo-Romanija [RS]",
			"Trebinje [RS]",
			"Vlasenica [RS]"
		]
	}, {
		"name": "Botswana",
		"id": "bw",
		"regions": [
			"Central",
			"Ghanzi",
			"Kgalagadi",
			"Kgatleng",
			"Kweneng",
			"North East",
			"North West",
			"South East",
			"Southern"
		]
	}, {
		"name": "Brazil",
		"id": "br",
		"regions": [
			"Acre",
			"Alagoas",
			"Amapa",
			"Amazonas",
			"Bahia",
			"Ceara",
			"Distrito Federal",
			"Espirito Santo",
			"Goias",
			"Maranhao",
			"Mato Grosso",
			"Mato Grosso do Sul",
			"Minas Gerais",
			"Para",
			"Paraiba",
			"Parana",
			"Pernambuco",
			"Piaui",
			"Rio de Janeiro",
			"Rio Grande do Norte",
			"Rio Grande do Sul",
			"Rondonia",
			"Roraima",
			"Santa Catarina",
			"Sao Paulo",
			"Sergipe",
			"Tocantins"
		]
	}, {
		"name": "British Virgin Islands",
		"id": "vg",
		"regions": [
			""
		]
	}, {
		"name": "Brunei",
		"id": "bn",
		"regions": [
			"Belait",
			"Brunei and Muara",
			"Temburong",
			"Tutong"
		]
	}, {
		"name": "Bulgaria",
		"id": "bg",
		"regions": [
			"Blagoevgrad",
			"Burgas",
			"Dobrich",
			"Gabrovo",
			"Khaskovo",
			"Kurdzhali",
			"Kyustendil",
			"Lovech",
			"Montana",
			"Pazardzhik",
			"Pernik",
			"Pleven",
			"Plovdiv",
			"Razgrad",
			"Ruse",
			"Shumen",
			"Silistra",
			"Sliven",
			"Smolyan",
			"Sofiya",
			"Sofiya-Grad",
			"Stara Zagora",
			"Turgovishte",
			"Varna",
			"Veliko Turnovo",
			"Vidin",
			"Vratsa",
			"Yambol"
		]
	}, {
		"name": "Burkina Faso",
		"id": "bf",
		"regions": [
			"Bale",
			"Bam",
			"Banwa",
			"Bazega",
			"Bougouriba",
			"Boulgou",
			"Boulkiemde",
			"Comoe",
			"Ganzourgou",
			"Gnagna",
			"Gourma",
			"Houet",
			"Ioba",
			"Kadiogo",
			"Kenedougou",
			"Komondjari",
			"Kompienga",
			"Kossi",
			"Koulpelogo",
			"Kouritenga",
			"Kourweogo",
			"Leraba",
			"Loroum",
			"Mouhoun",
			"Namentenga",
			"Nahouri",
			"Nayala",
			"Noumbiel",
			"Oubritenga",
			"Oudalan",
			"Passore",
			"Poni",
			"Sanguie",
			"Sanmatenga",
			"Seno",
			"Sissili",
			"Soum",
			"Sourou",
			"Tapoa",
			"Tuy",
			"Yagha",
			"Yatenga",
			"Ziro",
			"Zondoma",
			"Zoundweogo"
		]
	}, {
		"name": "Burundi",
		"id": "bi",
		"regions": [
			"Bubanza",
			"Bujumbura Mairie",
			"Bujumbura Rural",
			"Bururi",
			"Cankuzo",
			"Cibitoke",
			"Gitega",
			"Karuzi",
			"Kayanza",
			"Kirundo",
			"Makamba",
			"Muramvya",
			"Muyinga",
			"Mwaro",
			"Ngozi",
			"Rutana",
			"Ruyigi"
		]
	}, {
		"name": "Cabo Verde",
		"id": "cv",
		"regions": [
			""
		]
	}, {
		"name": "Cambodia",
		"id": "kh",
		"regions": [
			"Banteay Mean Chey",
			"Batdambang",
			"Kampong Cham",
			"Kampong Chhnang",
			"Kampong Spoe",
			"Kampong Thum",
			"Kampot",
			"Kandal",
			"Koh Kong",
			"Kracheh",
			"Mondol Kiri",
			"Otdar Mean Chey",
			"Pouthisat",
			"Preah Vihear",
			"Prey Veng",
			"Rotanakir",
			"Siem Reab",
			"Stoeng Treng",
			"Svay Rieng",
			"Takao",
			"Keb",
			"Pailin",
			"Phnom Penh",
			"Preah Seihanu"
		]
	}, {
		"name": "Cameroon",
		"id": "cm",
		"regions": [
			"Adamaoua",
			"Centre",
			"Est",
			"Extreme-Nord",
			"Littoral",
			"Nord",
			"Nord-Ouest",
			"Ouest",
			"Sud",
			"Sud-Ouest"
		]
	}, {
		"name": "Canada",
		"id": "ca",
		"regions": [
			"Alberta",
			"British Columbia",
			"Manitoba",
			"New Brunswick",
			"Newfoundland and Labrador",
			"Northwest Territories",
			"Nova Scotia",
			"Nunavut",
			"Ontario",
			"Prince Edward Island",
			"Quebec",
			"Saskatchewan",
			"Yukon Territory"
		]
	}, {
		"name": "Cayman Islands",
		"id": "ky",
		"regions": [
			""
		]
	}, {
		"name": "Central African Republic",
		"id": "cf",
		"regions": [
			"Bamingui-Bangoran",
			"Bangui",
			"Basse-Kotto",
			"Haute-Kotto",
			"Haut-Mbomou",
			"Kemo",
			"Lobaye",
			"Mambere-Kadei",
			"Mbomou",
			"Nana-Grebizi",
			"Nana-Mambere",
			"Ombella-Mpoko",
			"Ouaka",
			"Ouham",
			"Ouham-Pende",
			"Sangha-Mbaere",
			"Vakaga"
		]
	}, {
		"name": "Chad",
		"id": "td",
		"regions": [
			"Batha",
			"Biltine",
			"Borkou-Ennedi-Tibesti",
			"Chari-Baguirmi",
			"Guéra",
			"Kanem",
			"Lac",
			"Logone Occidental",
			"Logone Oriental",
			"Mayo-Kebbi",
			"Moyen-Chari",
			"Ouaddaï",
			"Salamat",
			"Tandjile"
		]
	}, {
		"name": "Chile",
		"id": "cl",
		"regions": [
			"Aysen",
			"Antofagasta",
			"Araucania",
			"Atacama",
			"Bio-Bio",
			"Coquimbo",
			"O'Higgins",
			"Los Lagos",
			"Magallanes y la Antartica Chilena",
			"Maule",
			"Santiago Region Metropolitana",
			"Tarapaca",
			"Valparaiso"
		]
	}, {
		"name": "China",
		"id": "cn",
		"regions": [
			"Anhui",
			"Fujian",
			"Gansu",
			"Guangdong",
			"Guizhou",
			"Hainan",
			"Hebei",
			"Heilongjiang",
			"Henan",
			"Hubei",
			"Hunan",
			"Jiangsu",
			"Jiangxi",
			"Jilin",
			"Liaoning",
			"Qinghai",
			"Shaanxi",
			"Shandong",
			"Shanxi",
			"Sichuan",
			"Yunnan",
			"Zhejiang",
			"Guangxi",
			"Nei Mongol",
			"Ningxia",
			"Xinjiang",
			"Xizang (Tibet)",
			"Beijing",
			"Chongqing",
			"Shanghai",
			"Tianjin"
		]
	}, {
		"name": "Colombia",
		"id": "co",
		"regions": [
			"Amazonas",
			"Antioquia",
			"Arauca",
			"Atlantico",
			"Bogota District Capital",
			"Bolivar",
			"Boyaca",
			"Caldas",
			"Caqueta",
			"Casanare",
			"Cauca",
			"Cesar",
			"Choco",
			"Cordoba",
			"Cundinamarca",
			"Guainia",
			"Guaviare",
			"Huila",
			"La Guajira",
			"Magdalena",
			"Meta",
			"Narino",
			"Norte de Santander",
			"Putumayo",
			"Quindio",
			"Risaralda",
			"San Andres & Providencia",
			"Santander",
			"Sucre",
			"Tolima",
			"Valle del Cauca",
			"Vaupes",
			"Vichada"
		]
	}, {
		"name": "Comoros",
		"id": "km",
		"regions": [
			"Grande Comore (Njazidja)",
			"Anjouan (Nzwani)",
			"Moheli (Mwali)"
		]
	}, {
		"name": "Congo",
		"id": "cg",
		"regions": [
			""
		]
	}, {
		"name": "Congo Democratic Republic",
		"id": "cd",
		"regions": [
			""
		]
	}, {
		"name": "Cook Islands",
		"id": "ck",
		"regions": [
			""
		]
	}, {
		"name": "Costa Rica",
		"id": "cr",
		"regions": [
			"Alajuela",
			"Cartago",
			"Guanacaste",
			"Heredia",
			"Limon",
			"Puntarenas",
			"San Jose"
		]
	}, {
		"name": "Cote d'Ivoire",
		"id": "ci",
		"regions": [
			""
		]
	}, {
		"name": "Croatia",
		"id": "hr",
		"regions": [
			"Bjelovarsko-Bilogorska",
			"Brodsko-Posavska",
			"Dubrovacko-Neretvanska",
			"Istarska",
			"Karlovacka",
			"Koprivnicko-Krizevacka",
			"Krapinsko-Zagorska",
			"Licko-Senjska",
			"Medimurska",
			"Osjecko-Baranjska",
			"Pozesko-Slavonska",
			"Primorsko-Goranska",
			"Sibensko-Kninska",
			"Sisacko-Moslavacka",
			"Splitsko-Dalmatinska",
			"Varazdinska",
			"Viroviticko-Podravska",
			"Vukovarsko-Srijemska",
			"Zadarska",
			"Zagreb",
			"Zagrebacka"
		]
	}, {
		"name": "Cuba",
		"id": "cu",
		"regions": [
			"Camaguey",
			"Ciego de Avila",
			"Cienfuegos",
			"Ciudad de La Habana",
			"Granma",
			"Guantanamo",
			"Holguin",
			"Isla de la Juventud",
			"La Habana",
			"Las Tunas",
			"Matanzas",
			"Pinar del Rio",
			"Sancti Spiritus",
			"Santiago de Cuba",
			"Villa Clara"
		]
	}, {
		"name": "Curaçao",
		"id": "cw",
		"regions": [
			""
		]
	}, {
		"name": "Cyprus",
		"id": "cy",
		"regions": [
			"Famagusta",
			"Kyrenia",
			"Larnaca",
			"Limassol",
			"Nicosia",
			"Paphos"
		]
	}, {
		"name": "Czech Republic",
		"id": "cz",
		"regions": [
			"Jihocesky Kraj",
			"Jihomoravsky Kraj",
			"Karlovarsky Kraj",
			"Kralovehradecky Kraj",
			"Liberecky Kraj",
			"Moravskoslezsky Kraj",
			"Olomoucky Kraj",
			"Pardubicky Kraj",
			"Plzensky Kraj",
			"Praha",
			"Stredocesky Kraj",
			"Ustecky Kraj",
			"Vysocina",
			"Zlinsky Kraj"
		]
	}, {
		"name": "Denmark",
		"id": "dk",
		"regions": [
			"Arhus",
			"Bornholm",
			"Frederiksberg",
			"Frederiksborg",
			"Fyn",
			"Kobenhavn",
			"Kobenhavns",
			"Nordjylland",
			"Ribe",
			"Ringkobing",
			"Roskilde",
			"Sonderjylland",
			"Storstrom",
			"Vejle",
			"Vestsjalland",
			"Viborg"
		]
	}, {
		"name": "Djibouti",
		"id": "dj",
		"regions": [
			"Ali Sabih",
			"Dikhil",
			"Djibouti",
			"Obock",
			"Tadjoura"
		]
	}, {
		"name": "Dominica",
		"id": "dm",
		"regions": [
			"Saint Andrew",
			"Saint David",
			"Saint George",
			"Saint John",
			"Saint Joseph",
			"Saint Luke",
			"Saint Mark",
			"Saint Patrick",
			"Saint Paul",
			"Saint Peter"
		]
	}, {
		"name": "Dominican Republic",
		"id": "do",
		"regions": [
			"Azua",
			"Baoruco",
			"Barahona",
			"Dajabon",
			"Distrito Nacional",
			"Duarte",
			"Elias Pina",
			"El Seibo",
			"Espaillat",
			"Hato Mayor",
			"Independencia",
			"La Altagracia",
			"La Romana",
			"La Vega",
			"Maria Trinidad Sanchez",
			"Monsenor Nouel",
			"Monte Cristi",
			"Monte Plata",
			"Pedernales",
			"Peravia",
			"Puerto Plata",
			"Salcedo",
			"Samana",
			"Sanchez Ramirez",
			"San Cristobal",
			"San Jose de Ocoa",
			"San Juan",
			"San Pedro de Macoris",
			"Santiago",
			"Santiago Rodriguez",
			"Santo Domingo",
			"Valverde"
		]
	}, {
		"name": "East Timor",
		"id": "tl",
		"regions": [
			"Aileu",
			"Ainaro",
			"Baucau",
			"Bobonaro",
			"Cova-Lima",
			"Dili",
			"Ermera",
			"Lautem",
			"Liquica",
			"Manatuto",
			"Manufahi",
			"Oecussi",
			"Viqueque"
		]
	}, {
		"name": "Ecuador",
		"id": "ec",
		"regions": [
			"Azuay",
			"Bolivar",
			"Canar",
			"Carchi",
			"Chimborazo",
			"Cotopaxi",
			"El Oro",
			"Esmeraldas",
			"Galapagos",
			"Guayas",
			"Imbabura",
			"Loja",
			"Los Rios",
			"Manabi",
			"Morona-Santiago",
			"Napo",
			"Orellana",
			"Pastaza",
			"Pichincha",
			"Sucumbios",
			"Tungurahua",
			"Zamora-Chinchipe"
		]
	}, {
		"name": "Egypt",
		"id": "eg",
		"regions": [
			"Ad Daqahliyah",
			"Al Bahr al Ahmar",
			"Al Buhayrah",
			"Al Fayyum",
			"Al Gharbiyah",
			"Al Iskandariyah",
			"Al Isma'iliyah",
			"Al Jizah",
			"Al Minufiyah",
			"Al Minya",
			"Al Qahirah",
			"Al Qalyubiyah",
			"Al Wadi al Jadid",
			"Ash Sharqiyah",
			"As Suways",
			"Aswan",
			"Asyut",
			"Bani Suwayf",
			"Bur Sa'id",
			"Dumyat",
			"Janub Sina'",
			"Kafr ash Shaykh",
			"Matruh",
			"Qina",
			"Shamal Sina'",
			"Suhaj"
		]
	}, {
		"name": "El Salvador",
		"id": "sv",
		"regions": [
			"Ahuachapan",
			"Cabanas",
			"Chalatenango",
			"Cuscatlan",
			"La Libertad",
			"La Paz",
			"La Union",
			"Morazan",
			"San Miguel",
			"San Salvador",
			"Santa Ana",
			"San Vicente",
			"Sonsonate",
			"Usulutan"
		]
	}, {
		"name": "Equatorial Guinea",
		"id": "gq",
		"regions": [
			"Annobon",
			"Bioko Norte",
			"Bioko Sur",
			"Centro Sur",
			"Kie-Ntem",
			"Litoral",
			"Wele-Nzas"
		]
	}, {
		"name": "Eritrea",
		"id": "er",
		"regions": [
			"Anseba",
			"Debub",
			"Debubawi K'eyih Bahri",
			"Gash Barka",
			"Ma'akel",
			"Semenawi Keyih Bahri"
		]
	}, {
		"name": "Estonia",
		"id": "ee",
		"regions": [
			"Harjumaa (Tallinn)",
			"Hiiumaa (Kardla)",
			"Ida-Virumaa (Johvi)",
			"Jarvamaa (Paide)",
			"Jogevamaa (Jogeva)",
			"Laanemaa (Haapsalu)",
			"Laane-Virumaa (Rakvere)",
			"Parnumaa (Parnu)",
			"Polvamaa (Polva)",
			"Raplamaa (Rapla)",
			"Saaremaa (Kuressaare)",
			"Tartumaa (Tartu)",
			"Valgamaa (Valga)",
			"Viljandimaa (Viljandi)",
			"Vorumaa (Voru)"
		]
	}, {
		"name": "Ethiopia",
		"id": "et",
		"regions": [
			"Addis Ababa",
			"Afar",
			"Amhara",
			"Binshangul Gumuz",
			"Dire Dawa",
			"Gambela Hizboch",
			"Harari",
			"Oromia",
			"Somali",
			"Tigray",
			"Southern Nations",
			"Nationalities",
			"and Peoples Region"
		]
	}, {
		"name": "Falkland Islands",
		"id": "fk",
		"regions": [
			""
		]
	}, {
		"name": "Faroe Islands",
		"id": "fo",
		"regions": [
			""
		]
	}, {
		"name": "Fiji",
		"id": "fj",
		"regions": [
			"Central (Suva)",
			"Eastern (Levuka)",
			"Northern (Labasa)",
			"Rotuma",
			"Western (Lautoka)"
		]
	}, {
		"name": "Finland",
		"id": "fi",
		"regions": [
			"Aland",
			"Etela-Suomen Laani",
			"Ita-Suomen Laani",
			"Lansi-Suomen Laani",
			"Lappi",
			"Oulun Laani"
		]
	}, {
		"name": "France",
		"id": "fr",
		"regions": [
			"Alsace",
			"Aquitaine",
			"Auvergne",
			"Basse-Normandie",
			"Bourgogne",
			"Bretagne",
			"Centre",
			"Champagne-Ardenne",
			"Corse",
			"Franche-Comte",
			"Haute-Normandie",
			"Ile-de-France",
			"Languedoc-Roussillon",
			"Limousin",
			"Lorraine",
			"Midi-Pyrenees",
			"Nord-Pas-de-Calais",
			"Pays de la Loire",
			"Picardie",
			"Poitou-Charentes",
			"Provence-Alpes-Cote d'Azur",
			"Rhone-Alpes"
		]
	}, {
		"name": "French Polynesia",
		"id": "pf",
		"regions": [
			""
		]
	}, {
		"name": "Gabon",
		"id": "ga",
		"regions": [
			"Estuaire",
			"Haut-Ogooue",
			"Moyen-Ogooue",
			"Ngounie",
			"Nyanga",
			"Ogooue-Ivindo",
			"Ogooue-Lolo",
			"Ogooue-Maritime",
			"Woleu-Ntem"
		]
	}, {
		"name": "Gambia",
		"id": "gm",
		"regions": [
			"Banjul",
			"Central River",
			"Lower River",
			"North Bank",
			"Upper River",
			"Western"
		]
	}, {
		"name": "Georgia",
		"id": "ge",
		"regions": [
			""
		]
	}, {
		"name": "Germany",
		"id": "de",
		"regions": [
			"Baden-Wuerttemberg",
			"Bayern",
			"Berlin",
			"Brandenburg",
			"Bremen",
			"Hamburg",
			"Hessen",
			"Mecklenburg-Vorpommern",
			"Niedersachsen",
			"Nordrhein-Westfalen",
			"Rheinland-Pfalz",
			"Saarland",
			"Sachsen",
			"Sachsen-Anhalt",
			"Schleswig-Holstein",
			"Thueringen"
		]
	}, {
		"name": "Ghana",
		"id": "gh",
		"regions": [
			"Ashanti",
			"Brong-Ahafo",
			"Central",
			"Eastern",
			"Greater Accra",
			"Northern",
			"Upper East",
			"Upper West",
			"Volta",
			"Western"
		]
	}, {
		"name": "Gibraltar",
		"id": "gi",
		"regions": [
			""
		]
	}, {
		"name": "Greece",
		"id": "gr",
		"regions": [
			"Agion Oros",
			"Achaia",
			"Aitolia kai Akarmania",
			"Argolis",
			"Arkadia",
			"Arta",
			"Attiki",
			"Chalkidiki",
			"Chanion",
			"Chios",
			"Dodekanisos",
			"Drama",
			"Evros",
			"Evrytania",
			"Evvoia",
			"Florina",
			"Fokidos",
			"Fthiotis",
			"Grevena",
			"Ileia",
			"Imathia",
			"Ioannina",
			"Irakleion",
			"Karditsa",
			"Kastoria",
			"Kavala",
			"Kefallinia",
			"Kerkyra",
			"Kilkis",
			"Korinthia",
			"Kozani",
			"Kyklades",
			"Lakonia",
			"Larisa",
			"Lasithi",
			"Lefkas",
			"Lesvos",
			"Magnisia",
			"Messinia",
			"Pella",
			"Pieria",
			"Preveza",
			"Rethynnis",
			"Rodopi",
			"Samos",
			"Serrai",
			"Thesprotia",
			"Thessaloniki",
			"Trikala",
			"Voiotia",
			"Xanthi",
			"Zakynthos"
		]
	}, {
		"name": "Greenland",
		"id": "gl",
		"regions": [
			"Avannaa (Nordgronland)",
			"Tunu (Ostgronland)",
			"Kitaa (Vestgronland)"
		]
	}, {
		"name": "Grenada",
		"id": "gd",
		"regions": [
			"Carriacou and Petit Martinique",
			"Saint Andrew",
			"Saint David",
			"Saint George",
			"Saint John",
			"Saint Mark",
			"Saint Patrick"
		]
	}, {
		"name": "Guam",
		"id": "gu",
		"regions": [
			""
		]
	}, {
		"name": "Guatemala",
		"id": "gt",
		"regions": [
			"Alta Verapaz",
			"Baja Verapaz",
			"Chimaltenango",
			"Chiquimula",
			"El Progreso",
			"Escuintla",
			"Guatemala",
			"Huehuetenango",
			"Izabal",
			"Jalapa",
			"Jutiapa",
			"Peten",
			"Quetzaltenango",
			"Quiche",
			"Retalhuleu",
			"Sacatepequez",
			"San Marcos",
			"Santa Rosa",
			"Solola",
			"Suchitepequez",
			"Totonicapan",
			"Zacapa"
		]
	}, {
		"name": "Guernsey",
		"id": "gg",
		"regions": [
			""
		]
	}, {
		"name": "Guinea",
		"id": "gn",
		"regions": [
			"Beyla",
			"Boffa",
			"Boke",
			"Conakry",
			"Coyah",
			"Dabola",
			"Dalaba",
			"Dinguiraye",
			"Dubreka",
			"Faranah",
			"Forecariah",
			"Fria",
			"Gaoual",
			"Gueckedou",
			"Kankan",
			"Kerouane",
			"Kindia",
			"Kissidougou",
			"Koubia",
			"Koundara",
			"Kouroussa",
			"Labe",
			"Lelouma",
			"Lola",
			"Macenta",
			"Mali",
			"Mamou",
			"Mandiana",
			"Nzerekore",
			"Pita",
			"Siguiri",
			"Telimele",
			"Tougue",
			"Yomou"
		]
	}, {
		"name": "Guinea-Bissau",
		"id": "gw",
		"regions": [
			"Bafata",
			"Biombo",
			"Bissau",
			"Bolama",
			"Cacheu",
			"Gabu",
			"Oio",
			"Quinara",
			"Tombali"
		]
	}, {
		"name": "Guyana",
		"id": "gy",
		"regions": [
			"Barima-Waini",
			"Cuyuni-Mazaruni",
			"Demerara-Mahaica",
			"East Berbice-Corentyne",
			"Essequibo Islands-West Demerara",
			"Mahaica-Berbice",
			"Pomeroon-Supenaam",
			"Potaro-Siparuni",
			"Upper Demerara-Berbice",
			"Upper Takutu-Upper Essequibo"
		]
	}, {
		"name": "Haiti",
		"id": "ht",
		"regions": [
			"Artibonite",
			"Centre",
			"Grand 'Anse",
			"Nord",
			"Nord-Est",
			"Nord-Ouest",
			"Ouest",
			"Sud",
			"Sud-Est"
		]
	}, {
		"name": "Holy See (Vatican City)",
		"id": "va",
		"regions": [
			""
		]
	}, {
		"name": "Honduras",
		"id": "hn",
		"regions": [
			"Atlantida",
			"Choluteca",
			"Colon",
			"Comayagua",
			"Copan",
			"Cortes",
			"El Paraiso",
			"Francisco Morazan",
			"Gracias a Dios",
			"Intibuca",
			"Islas de la Bahia",
			"La Paz",
			"Lempira",
			"Ocotepeque",
			"Olancho",
			"Santa Barbara",
			"Valle",
			"Yoro"
		]
	}, {
		"name": "Hong Kong",
		"id": "hk",
		"regions": [
			""
		]
	}, {
		"name": "Hungary",
		"id": "hu",
		"regions": [
			"Bacs-Kiskun",
			"Baranya",
			"Bekes",
			"Borsod-Abauj-Zemplen",
			"Csongrad",
			"Fejer",
			"Gyor-Moson-Sopron",
			"Hajdu-Bihar",
			"Heves",
			"Jasz-Nagykun-Szolnok",
			"Komarom-Esztergom",
			"Nograd",
			"Pest",
			"Somogy",
			"Szabolcs-Szatmar-Bereg",
			"Tolna",
			"Vas",
			"Veszprem",
			"Zala",
			"Bekescsaba",
			"Debrecen",
			"Dunaujvaros",
			"Eger",
			"Gyor",
			"Hodmezovasarhely",
			"Kaposvar",
			"Kecskemet",
			"Miskolc",
			"Nagykanizsa",
			"Nyiregyhaza",
			"Pecs",
			"Sopron",
			"Szeged",
			"Szekesfehervar",
			"Szolnok",
			"Szombathely",
			"Tatabanya",
			"Veszprem",
			"Zalaegerszeg"
		]
	}, {
		"name": "Iceland",
		"id": "is",
		"regions": [
			"Austurland",
			"Hofudhborgarsvaedhi",
			"Nordhurland Eystra",
			"Nordhurland Vestra",
			"Sudhurland",
			"Sudhurnes",
			"Vestfirdhir",
			"Vesturland"
		]
	}, {
		"name": "India",
		"id": "in",
		"regions": [
			"Andaman and Nicobar Islands",
			"Andhra Pradesh",
			"Arunachal Pradesh",
			"Assam",
			"Bihar",
			"Chandigarh",
			"Chhattisgarh",
			"Dadra and Nagar Haveli",
			"Daman and Diu",
			"Delhi",
			"Goa",
			"Gujarat",
			"Haryana",
			"Himachal Pradesh",
			"Jammu and Kashmir",
			"Jharkhand",
			"Karnataka",
			"Kerala",
			"Lakshadweep",
			"Madhya Pradesh",
			"Maharashtra",
			"Manipur",
			"Meghalaya",
			"Mizoram",
			"Nagaland",
			"Orissa",
			"Pondicherry",
			"Punjab",
			"Rajasthan",
			"Sikkim",
			"Tamil Nadu",
			"Tripura",
			"Uttaranchal",
			"Uttar Pradesh",
			"West Bengal"
		]
	}, {
		"name": "Indonesia",
		"id": "id",
		"regions": [
			"Aceh",
			"Bali",
			"Banten",
			"Bengkulu",
			"Gorontalo",
			"Irian Jaya Barat",
			"Jakarta Raya",
			"Jambi",
			"Jawa Barat",
			"Jawa Tengah",
			"Jawa Timur",
			"Kalimantan Barat",
			"Kalimantan Selatan",
			"Kalimantan Tengah",
			"Kalimantan Timur",
			"Kepulauan Bangka Belitung",
			"Kepulauan Riau",
			"Lampung",
			"Maluku",
			"Maluku Utara",
			"Nusa Tenggara Barat",
			"Nusa Tenggara Timur",
			"Papua",
			"Riau",
			"Sulawesi Barat",
			"Sulawesi Selatan",
			"Sulawesi Tengah",
			"Sulawesi Tenggara",
			"Sulawesi Utara",
			"Sumatera Barat",
			"Sumatera Selatan",
			"Sumatera Utara",
			"Yogyakarta"
		]
	}, {
		"name": "Iran",
		"id": "ir",
		"regions": [
			"Ardabil",
			"Azarbayjan-e Gharbi",
			"Azarbayjan-e Sharqi",
			"Bushehr",
			"Chahar Mahall va Bakhtiari",
			"Esfahan",
			"Fars",
			"Gilan",
			"Golestan",
			"Hamadan",
			"Hormozgan",
			"Ilam",
			"Kerman",
			"Kermanshah",
			"Khorasan-e Janubi",
			"Khorasan-e Razavi",
			"Khorasan-e Shemali",
			"Khuzestan",
			"Kohgiluyeh va Buyer Ahmad",
			"Kordestan",
			"Lorestan",
			"Markazi",
			"Mazandaran",
			"Qazvin",
			"Qom",
			"Semnan",
			"Sistan va Baluchestan",
			"Tehran",
			"Yazd",
			"Zanjan"
		]
	}, {
		"name": "Iraq",
		"id": "iq",
		"regions": [
			"Al Anbar",
			"Al Basrah",
			"Al Muthanna",
			"Al Qadisiyah",
			"An Najaf",
			"Arbil",
			"As Sulaymaniyah",
			"At Ta'mim",
			"Babil",
			"Baghdad",
			"Dahuk",
			"Dhi Qar",
			"Diyala",
			"Karbala'",
			"Maysan",
			"Ninawa",
			"Salah ad Din",
			"Wasit"
		]
	}, {
		"name": "Ireland",
		"id": "ie",
		"regions": [
			"Carlow",
			"Cavan",
			"Clare",
			"Cork",
			"Donegal",
			"Dublin",
			"Galway",
			"Kerry",
			"Kildare",
			"Kilkenny",
			"Laois",
			"Leitrim",
			"Limerick",
			"Longford",
			"Louth",
			"Mayo",
			"Meath",
			"Monaghan",
			"Offaly",
			"Roscommon",
			"Sligo",
			"Tipperary",
			"Waterford",
			"Westmeath",
			"Wexford",
			"Wicklow"
		]
	}, {
		"name": "Isle of Man",
		"id": "im",
		"regions": [
			""
		]
	}, {
		"name": "Israel",
		"id": "il",
		"regions": [
			"Central",
			"Haifa",
			"Jerusalem",
			"Northern",
			"Southern",
			"Tel Aviv"
		]
	}, {
		"name": "Italy",
		"id": "it",
		"regions": [
			"Abruzzo",
			"Basilicata",
			"Calabria",
			"Campania",
			"Emilia-Romagna",
			"Friuli-Venezia Giulia",
			"Lazio",
			"Liguria",
			"Lombardia",
			"Marche",
			"Molise",
			"Piemonte",
			"Puglia",
			"Sardegna",
			"Sicilia",
			"Toscana",
			"Trentino-Alto Adige",
			"Umbria",
			"Valle d'Aosta",
			"Veneto"
		]
	}, {
		"name": "Jamaica",
		"id": "jm",
		"regions": [
			"Clarendon",
			"Hanover",
			"Kingston",
			"Manchester",
			"Portland",
			"Saint Andrew",
			"Saint Ann",
			"Saint Catherine",
			"Saint Elizabeth",
			"Saint James",
			"Saint Mary",
			"Saint Thomas",
			"Trelawny",
			"Westmoreland"
		]
	}, {
		"name": "Japan",
		"id": "jp",
		"regions": [
			"Aichi",
			"Akita",
			"Aomori",
			"Chiba",
			"Ehime",
			"Fukui",
			"Fukuoka",
			"Fukushima",
			"Gifu",
			"Gumma",
			"Hiroshima",
			"Hokkaido",
			"Hyogo",
			"Ibaraki",
			"Ishikawa",
			"Iwate",
			"Kagawa",
			"Kagoshima",
			"Kanagawa",
			"Kochi",
			"Kumamoto",
			"Kyoto",
			"Mie",
			"Miyagi",
			"Miyazaki",
			"Nagano",
			"Nagasaki",
			"Nara",
			"Niigata",
			"Oita",
			"Okayama",
			"Okinawa",
			"Osaka",
			"Saga",
			"Saitama",
			"Shiga",
			"Shimane",
			"Shizuoka",
			"Tochigi",
			"Tokushima",
			"Tokyo",
			"Tottori",
			"Toyama",
			"Wakayama",
			"Yamagata",
			"Yamaguchi",
			"Yamanashi"
		]
	}, {
		"name": "Jersey",
		"id": "je",
		"regions": [
			""
		]
	}, {
		"name": "Jordan",
		"id": "jo",
		"regions": [
			"Ajlun",
			"Al 'Aqabah",
			"Al Balqa'",
			"Al Karak",
			"Al Mafraq",
			"'Amman",
			"At Tafilah",
			"Az Zarqa'",
			"Irbid",
			"Jarash",
			"Ma'an",
			"Madaba"
		]
	}, {
		"name": "Kazakhstan",
		"id": "kz",
		"regions": [
			"Almaty Oblysy",
			"Almaty Qalasy",
			"Aqmola Oblysy",
			"Aqtobe Oblysy",
			"Astana Qalasy",
			"Atyrau Oblysy",
			"Batys Qazaqstan Oblysy",
			"Bayqongyr Qalasy",
			"Mangghystau Oblysy",
			"Ongtustik Qazaqstan Oblysy",
			"Pavlodar Oblysy",
			"Qaraghandy Oblysy",
			"Qostanay Oblysy",
			"Qyzylorda Oblysy",
			"Shyghys Qazaqstan Oblysy",
			"Soltustik Qazaqstan Oblysy",
			"Zhambyl Oblysy"
		]
	}, {
		"name": "Kenya",
		"id": "ke",
		"regions": [
			"Central",
			"Coast",
			"Eastern",
			"Nairobi Area",
			"North Eastern",
			"Nyanza",
			"Rift Valley",
			"Western"
		]
	}, {
		"name": "Kiribati",
		"id": "ki",
		"regions": [
			""
		]
	}, {
		"name": "Kosovo",
		"id": "xk",
		"regions": [
			""
		]
	}, {
		"name": "Kuwait",
		"id": "kw",
		"regions": [
			"Al Ahmadi",
			"Al Farwaniyah",
			"Al Asimah",
			"Al Jahra",
			"Hawalli",
			"Mubarak Al-Kabeer"
		]
	}, {
		"name": "Kyrgyzstan",
		"id": "kg",
		"regions": [
			"Batken Oblasty",
			"Bishkek Shaary",
			"Chuy Oblasty",
			"Jalal-Abad Oblasty",
			"Naryn Oblasty",
			"Osh Oblasty",
			"Talas Oblasty",
			"Ysyk-Kol Oblasty"
		]
	}, {
		"name": "Laos",
		"id": "la",
		"regions": [
			"Attapu",
			"Bokeo",
			"Bolikhamxai",
			"Champasak",
			"Houaphan",
			"Khammouan",
			"Louangnamtha",
			"Louangphrabang",
			"Oudomxai",
			"Phongsali",
			"Salavan",
			"Savannakhet",
			"Viangchan",
			"Viangchan",
			"Xaignabouli",
			"Xaisomboun",
			"Xekong",
			"Xiangkhoang"
		]
	}, {
		"name": "Latvia",
		"id": "lv",
		"regions": [
			"Aizkraukles Rajons",
			"Aluksnes Rajons",
			"Balvu Rajons",
			"Bauskas Rajons",
			"Cesu Rajons",
			"Daugavpils",
			"Daugavpils Rajons",
			"Dobeles Rajons",
			"Gulbenes Rajons",
			"Jekabpils Rajons",
			"Jelgava",
			"Jelgavas Rajons",
			"Jurmala",
			"Kraslavas Rajons",
			"Kuldigas Rajons",
			"Liepaja",
			"Liepajas Rajons",
			"Limbazu Rajons",
			"Ludzas Rajons",
			"Madonas Rajons",
			"Ogres Rajons",
			"Preilu Rajons",
			"Rezekne",
			"Rezeknes Rajons",
			"Riga",
			"Rigas Rajons",
			"Saldus Rajons",
			"Talsu Rajons",
			"Tukuma Rajons",
			"Valkas Rajons",
			"Valmieras Rajons",
			"Ventspils",
			"Ventspils Rajons"
		]
	}, {
		"name": "Lebanon",
		"id": "lb",
		"regions": [
			"Beyrouth",
			"Beqaa",
			"Liban-Nord",
			"Liban-Sud",
			"Mont-Liban",
			"Nabatiye"
		]
	}, {
		"name": "Lesotho",
		"id": "ls",
		"regions": [
			"Berea",
			"Butha-Buthe",
			"Leribe",
			"Mafeteng",
			"Maseru",
			"Mohale's Hoek",
			"Mokhotlong",
			"Qacha's Nek",
			"Quthing",
			"Thaba-Tseka"
		]
	}, {
		"name": "Liberia",
		"id": "lr",
		"regions": [
			"Bomi",
			"Bong",
			"Gbarpolu",
			"Grand Bassa",
			"Grand Cape Mount",
			"Grand Gedeh",
			"Grand Kru",
			"Lofa",
			"Margibi",
			"Maryland",
			"Montserrado",
			"Nimba",
			"River Cess",
			"River Gee",
			"Sinoe"
		]
	}, {
		"name": "Libya",
		"id": "ly",
		"regions": [
			"Ajdabiya",
			"Al 'Aziziyah",
			"Al Fatih",
			"Al Jabal al Akhdar",
			"Al Jufrah",
			"Al Khums",
			"Al Kufrah",
			"An Nuqat al Khams",
			"Ash Shati'",
			"Awbari",
			"Az Zawiyah",
			"Banghazi",
			"Darnah",
			"Ghadamis",
			"Gharyan",
			"Misratah",
			"Murzuq",
			"Sabha",
			"Sawfajjin",
			"Surt",
			"Tarabulus",
			"Tarhunah",
			"Tubruq",
			"Yafran",
			"Zlitan"
		]
	}, {
		"name": "Liechtenstein",
		"id": "li",
		"regions": [
			"Balzers",
			"Eschen",
			"Gamprin",
			"Mauren",
			"Planken",
			"Ruggell",
			"Schaan",
			"Schellenberg",
			"Triesen",
			"Triesenberg",
			"Vaduz"
		]
	}, {
		"name": "Lithuania",
		"id": "lt",
		"regions": [
			"Alytaus",
			"Kauno",
			"Klaipedos",
			"Marijampoles",
			"Panevezio",
			"Siauliu",
			"Taurages",
			"Telsiu",
			"Utenos",
			"Vilniaus"
		]
	}, {
		"name": "Luxembourg",
		"id": "lu",
		"regions": [
			"Diekirch",
			"Grevenmacher",
			"Luxembourg"
		]
	}, {
		"name": "Macau",
		"id": "mo",
		"regions": [
			""
		]
	}, {
		"name": "Madagascar",
		"id": "mg",
		"regions": [
			"Antananarivo",
			"Antsiranana",
			"Fianarantsoa",
			"Mahajanga",
			"Toamasina",
			"Toliara"
		]
	}, {
		"name": "Malawi",
		"id": "mw",
		"regions": [
			"Balaka",
			"Blantyre",
			"Chikwawa",
			"Chiradzulu",
			"Chitipa",
			"Dedza",
			"Dowa",
			"Karonga",
			"Kasungu",
			"Likoma",
			"Lilongwe",
			"Machinga",
			"Mangochi",
			"Mchinji",
			"Mulanje",
			"Mwanza",
			"Mzimba",
			"Ntcheu",
			"Nkhata Bay",
			"Nkhotakota",
			"Nsanje",
			"Ntchisi",
			"Phalombe",
			"Rumphi",
			"Salima",
			"Thyolo",
			"Zomba"
		]
	}, {
		"name": "Malaysia",
		"id": "my",
		"regions": [
			"Johor",
			"Kedah",
			"Kelantan",
			"Kuala Lumpur",
			"Labuan",
			"Malacca",
			"Negeri Sembilan",
			"Pahang",
			"Perak",
			"Perlis",
			"Penang",
			"Sabah",
			"Sarawak",
			"Selangor",
			"Terengganu"
		]
	}, {
		"name": "Maldives",
		"id": "mv",
		"regions": [
			"Alifu",
			"Baa",
			"Dhaalu",
			"Faafu",
			"Gaafu Alifu",
			"Gaafu Dhaalu",
			"Gnaviyani",
			"Haa Alifu",
			"Haa Dhaalu",
			"Kaafu",
			"Laamu",
			"Lhaviyani",
			"Maale",
			"Meemu",
			"Noonu",
			"Raa",
			"Seenu",
			"Shaviyani",
			"Thaa",
			"Vaavu"
		]
	}, {
		"name": "Mali",
		"id": "ml",
		"regions": [
			"Bamako (Capital)",
			"Gao",
			"Kayes",
			"Kidal",
			"Koulikoro",
			"Mopti",
			"Segou",
			"Sikasso",
			"Tombouctou"
		]
	}, {
		"name": "Malta",
		"id": "mt",
		"regions": [
			""
		]
	}, {
		"name": "Marshall Islands",
		"id": "mh",
		"regions": [
			""
		]
	}, {
		"name": "Martinique",
		"id": "mq",
		"regions": [
			""
		]
	}, {
		"name": "Mauritania",
		"id": "mr",
		"regions": [
			"Adrar",
			"Assaba",
			"Brakna",
			"Dakhlet Nouadhibou",
			"Gorgol",
			"Guidimaka",
			"Hodh Ech Chargui",
			"Hodh El Gharbi",
			"Inchiri",
			"Nouakchott",
			"Tagant",
			"Tiris Zemmour",
			"Trarza"
		]
	}, {
		"name": "Mauritius",
		"id": "mu",
		"regions": [
			"Agalega Islands",
			"Black River",
			"Cargados Carajos Shoals",
			"Flacq",
			"Grand Port",
			"Moka",
			"Pamplemousses",
			"Plaines Wilhems",
			"Port Louis",
			"Riviere du Rempart",
			"Rodrigues",
			"Savanne"
		]
	}, {
		"name": "Mayotte",
		"id": "yt",
		"regions": [
			""
		]
	}, {
		"name": "Mexico",
		"id": "mx",
		"regions": [
			"Aguascalientes",
			"Baja California",
			"Baja California Sur",
			"Campeche",
			"Chiapas",
			"Chihuahua",
			"Coahuila de Zaragoza",
			"Colima",
			"Distrito Federal",
			"Durango",
			"Guanajuato",
			"Guerrero",
			"Hidalgo",
			"Jalisco",
			"Mexico",
			"Michoacan de Ocampo",
			"Morelos",
			"Nayarit",
			"Nuevo Leon",
			"Oaxaca",
			"Puebla",
			"Queretaro de Arteaga",
			"Quintana Roo",
			"San Luis Potosi",
			"Sinaloa",
			"Sonora",
			"Tabasco",
			"Tamaulipas",
			"Tlaxcala",
			"Veracruz-Llave",
			"Yucatan",
			"Zacatecas"
		]
	}, {
		"name": "Micronesia",
		"id": "fm",
		"regions": [
			""
		]
	}, {
		"name": "Moldova",
		"id": "md",
		"regions": [
			"Anenii Noi",
			"Basarabeasca",
			"Briceni",
			"Cahul",
			"Cantemir",
			"Calarasi",
			"Causeni",
			"Cimislia",
			"Criuleni",
			"Donduseni",
			"Drochia",
			"Dubasari",
			"Edinet",
			"Falesti",
			"Floresti",
			"Glodeni",
			"Hincesti",
			"Ialoveni",
			"Leova",
			"Nisporeni",
			"Ocnita",
			"Orhei",
			"Rezina",
			"Riscani",
			"Singerei",
			"Soldanesti",
			"Soroca",
			"Stefan-Voda",
			"Straseni",
			"Taraclia",
			"Telenesti",
			"Ungheni",
			"Balti",
			"Bender",
			"Chisinau",
			"Gagauzia",
			"Stinga Nistrului"
		]
	}, {
		"name": "Monaco",
		"id": "mc",
		"regions": [
			""
		]
	}, {
		"name": "Mongolia",
		"id": "mn",
		"regions": [
			"Arhangay",
			"Bayanhongor",
			"Bayan-Olgiy",
			"Bulgan",
			"Darhan Uul",
			"Dornod",
			"Dornogovi",
			"Dundgovi",
			"Dzavhan",
			"Govi-Altay",
			"Govi-Sumber",
			"Hentiy",
			"Hovd",
			"Hovsgol",
			"Omnogovi",
			"Orhon",
			"Ovorhangay",
			"Selenge",
			"Suhbaatar",
			"Tov",
			"Ulaanbaatar",
			"Uvs"
		]
	}, {
		"name": "Montenegro",
		"id": "me",
		"regions": [
			""
		]
	}, {
		"name": "Montserrat",
		"id": "ms",
		"regions": [
			""
		]
	}, {
		"name": "Morocco",
		"id": "ma",
		"regions": [
			"Agadir",
			"Al Hoceima",
			"Azilal",
			"Beni Mellal",
			"Ben Slimane",
			"Boulemane",
			"Casablanca",
			"Chaouen",
			"El Jadida",
			"El Kelaa des Sraghna",
			"Er Rachidia",
			"Essaouira",
			"Fes",
			"Figuig",
			"Guelmim",
			"Ifrane",
			"Kenitra",
			"Khemisset",
			"Khenifra",
			"Khouribga",
			"Laayoune",
			"Larache",
			"Marrakech",
			"Meknes",
			"Nador",
			"Ouarzazate",
			"Oujda",
			"Rabat-Sale",
			"Safi",
			"Settat",
			"Sidi Kacem",
			"Tangier",
			"Tan-Tan",
			"Taounate",
			"Taroudannt",
			"Tata",
			"Taza",
			"Tetouan",
			"Tiznit"
		]
	}, {
		"name": "Mozambique",
		"id": "mz",
		"regions": [
			"Cabo Delgado",
			"Gaza",
			"Inhambane",
			"Manica",
			"Maputo",
			"Cidade de Maputo",
			"Nampula",
			"Niassa",
			"Sofala",
			"Tete",
			"Zambezia"
		]
	}, {
		"name": "Myanmar",
		"id": "mm",
		"regions": [
			""
		]
	}, {
		"name": "Namibia",
		"id": "na",
		"regions": [
			"Caprivi",
			"Erongo",
			"Hardap",
			"Karas",
			"Khomas",
			"Kunene",
			"Ohangwena",
			"Okavango",
			"Omaheke",
			"Omusati",
			"Oshana",
			"Oshikoto",
			"Otjozondjupa"
		]
	}, {
		"name": "Nauru",
		"id": "nr",
		"regions": [
			""
		]
	}, {
		"name": "Nepal",
		"id": "np",
		"regions": [
			"Bagmati",
			"Bheri",
			"Dhawalagiri",
			"Gandaki",
			"Janakpur",
			"Karnali",
			"Kosi",
			"Lumbini",
			"Mahakali",
			"Mechi",
			"Narayani",
			"Rapti",
			"Sagarmatha",
			"Seti"
		]
	}, {
		"name": "Netherlands",
		"id": "nl",
		"regions": [
			"Drenthe",
			"Flevoland",
			"Friesland",
			"Gelderland",
			"Groningen",
			"Limburg",
			"Noord-Brabant",
			"Noord-Holland",
			"Overijssel",
			"Utrecht",
			"Zeeland",
			"Zuid-Holland"
		]
	}, {
		"name": "New Caledonia",
		"id": "nc",
		"regions": [
			""
		]
	}, {
		"name": "New Zealand",
		"id": "nz",
		"regions": [
			"Auckland",
			"Bay of Plenty",
			"Canterbury",
			"Chatham Islands",
			"Gisborne",
			"Hawke's Bay",
			"Manawatu-Wanganui",
			"Marlborough",
			"Nelson",
			"Northland",
			"Otago",
			"Southland",
			"Taranaki",
			"Tasman",
			"Waikato",
			"Wellington",
			"West Coast"
		]
	}, {
		"name": "Nicaragua",
		"id": "ni",
		"regions": [
			"Atlantico Norte",
			"Atlantico Sur",
			"Boaco",
			"Carazo",
			"Chinandega",
			"Chontales",
			"Esteli",
			"Granada",
			"Jinotega",
			"Leon",
			"Madriz",
			"Managua",
			"Masaya",
			"Matagalpa",
			"Nueva Segovia",
			"Rio San Juan",
			"Rivas"
		]
	}, {
		"name": "Niger",
		"id": "ne",
		"regions": [
			"Agadez",
			"Diffa",
			"Dosso",
			"Maradi",
			"Niamey",
			"Tahoua",
			"Tillaberi",
			"Zinder"
		]
	}, {
		"name": "Nigeria",
		"id": "ng",
		"regions": [
			"Abia",
			"Abuja Federal Capital",
			"Adamawa",
			"Akwa Ibom",
			"Anambra",
			"Bauchi",
			"Bayelsa",
			"Benue",
			"Borno",
			"Cross River",
			"Delta",
			"Ebonyi",
			"Edo",
			"Ekiti",
			"Enugu",
			"Gombe",
			"Imo",
			"Jigawa",
			"Kaduna",
			"Kano",
			"Katsina",
			"Kebbi",
			"Kogi",
			"Kwara",
			"Lagos",
			"Nassarawa",
			"Niger",
			"Ogun",
			"Ondo",
			"Osun",
			"Oyo",
			"Plateau",
			"Rivers",
			"Sokoto",
			"Taraba",
			"Yobe",
			"Zamfara"
		]
	}, {
		"name": "North Korea",
		"id": "kp",
		"regions": [
			""
		]
	}, {
		"name": "North Macedonia",
		"id": "mk",
		"regions": [
			""
		]
	}, {
		"name": "Northern Mariana Islands",
		"id": "mp",
		"regions": [
			""
		]
	}, {
		"name": "Norway",
		"id": "no",
		"regions": [
			"Akershus",
			"Aust-Agder",
			"Buskerud",
			"Finnmark",
			"Hedmark",
			"Hordaland",
			"More og Romsdal",
			"Nordland",
			"Nord-Trondelag",
			"Oppland",
			"Oslo",
			"Ostfold",
			"Rogaland",
			"Sogn og Fjordane",
			"Sor-Trondelag",
			"Telemark",
			"Troms",
			"Vest-Agder",
			"Vestfold"
		]
	}, {
		"name": "Oman",
		"id": "om",
		"regions": [
			"Ad Dakhiliyah",
			"Al Batinah",
			"Al Wusta",
			"Ash Sharqiyah",
			"Az Zahirah",
			"Masqat",
			"Musandam",
			"Dhofar"
		]
	}, {
		"name": "Pakistan",
		"id": "pk",
		"regions": [
			"Balochistan",
			"North-West Frontier Province",
			"Punjab",
			"Sindh",
			"Islamabad Capital Territory",
			"Federally Administered Tribal Areas"
		]
	}, {
		"name": "Palau",
		"id": "pw",
		"regions": [
			""
		]
	}, {
		"name": "Panama",
		"id": "pa",
		"regions": [
			"Bocas del Toro",
			"Chiriqui",
			"Cocle",
			"Colon",
			"Darien",
			"Herrera",
			"Los Santos",
			"Panama",
			"San Blas",
			"Veraguas"
		]
	}, {
		"name": "Papua New Guinea",
		"id": "pg",
		"regions": [
			"Bougainville",
			"Central",
			"Chimbu",
			"Eastern Highlands",
			"East New Britain",
			"East Sepik",
			"Enga",
			"Gulf",
			"Madang",
			"Manus",
			"Milne Bay",
			"Morobe",
			"National Capital",
			"New Ireland",
			"Northern",
			"Sandaun",
			"Southern Highlands",
			"Western",
			"Western Highlands",
			"West New Britain"
		]
	}, {
		"name": "Paraguay",
		"id": "py",
		"regions": [
			"Alto Paraguay",
			"Alto Parana",
			"Amambay",
			"Asuncion",
			"Boqueron",
			"Caaguazu",
			"Caazapa",
			"Canindeyu",
			"Central",
			"Concepcion",
			"Cordillera",
			"Guaira",
			"Itapua",
			"Misiones",
			"Neembucu",
			"Paraguari",
			"Presidente Hayes",
			"San Pedro"
		]
	}, {
		"name": "Peru",
		"id": "pe",
		"regions": [
			"Amazonas",
			"Ancash",
			"Apurimac",
			"Arequipa",
			"Ayacucho",
			"Cajamarca",
			"Callao",
			"Cusco",
			"Huancavelica",
			"Huanuco",
			"Ica",
			"Junin",
			"La Libertad",
			"Lambayeque",
			"Lima",
			"Loreto",
			"Madre de Dios",
			"Moquegua",
			"Pasco",
			"Piura",
			"Puno",
			"San Martin",
			"Tacna",
			"Tumbes",
			"Ucayali"
		]
	}, {
		"name": "Philippines",
		"id": "ph",
		"regions": [
			"Abra",
			"Agusan del Norte",
			"Agusan del Sur",
			"Aklan",
			"Albay",
			"Antique",
			"Apayao",
			"Aurora",
			"Basilan",
			"Bataan",
			"Batanes",
			"Batangas",
			"Biliran",
			"Benguet",
			"Bohol",
			"Bukidnon",
			"Bulacan",
			"Cagayan",
			"Camarines Norte",
			"Camarines Sur",
			"Camiguin",
			"Capiz",
			"Catanduanes",
			"Cavite",
			"Cebu",
			"Compostela",
			"Davao del Norte",
			"Davao del Sur",
			"Davao Oriental",
			"Eastern Samar",
			"Guimaras",
			"Ifugao",
			"Ilocos Norte",
			"Ilocos Sur",
			"Iloilo",
			"Isabela",
			"Kalinga",
			"Laguna",
			"Lanao del Norte",
			"Lanao del Sur",
			"La Union",
			"Leyte",
			"Maguindanao",
			"Marinduque",
			"Masbate",
			"Mindoro Occidental",
			"Mindoro Oriental",
			"Misamis Occidental",
			"Misamis Oriental",
			"Mountain Province",
			"Negros Occidental",
			"Negros Oriental",
			"North Cotabato",
			"Northern Samar",
			"Nueva Ecija",
			"Nueva Vizcaya",
			"Palawan",
			"Pampanga",
			"Pangasinan",
			"Quezon",
			"Quirino",
			"Rizal",
			"Romblon",
			"Samar",
			"Sarangani",
			"Siquijor",
			"Sorsogon",
			"South Cotabato",
			"Southern Leyte",
			"Sultan Kudarat",
			"Sulu",
			"Surigao del Norte",
			"Surigao del Sur",
			"Tarlac",
			"Tawi-Tawi",
			"Zambales",
			"Zamboanga del Norte",
			"Zamboanga del Sur",
			"Zamboanga Sibugay"
		]
	}, {
		"name": "Poland",
		"id": "pl",
		"regions": [
			"Greater Poland (Wielkopolskie)",
			"Kuyavian-Pomeranian (Kujawsko-Pomorskie)",
			"Lesser Poland (Malopolskie)",
			"Lodz (Lodzkie)",
			"Lower Silesian (Dolnoslaskie)",
			"Lublin (Lubelskie)",
			"Lubusz (Lubuskie)",
			"Masovian (Mazowieckie)",
			"Opole (Opolskie)",
			"Podlasie (Podlaskie)",
			"Pomeranian (Pomorskie)",
			"Silesian (Slaskie)",
			"Subcarpathian (Podkarpackie)",
			"Swietokrzyskie (Swietokrzyskie)",
			"Warmian-Masurian (Warminsko-Mazurskie)",
			"West Pomeranian (Zachodniopomorskie)"
		]
	}, {
		"name": "Portugal",
		"id": "pt",
		"regions": [
			"Aveiro",
			"Acores",
			"Beja",
			"Braga",
			"Braganca",
			"Castelo Branco",
			"Coimbra",
			"Evora",
			"Faro",
			"Guarda",
			"Leiria",
			"Lisboa",
			"Madeira",
			"Portalegre",
			"Porto",
			"Santarem",
			"Setubal",
			"Viana do Castelo",
			"Vila Real",
			"Viseu"
		]
	}, {
		"name": "Puerto Rico",
		"id": "pr",
		"regions": [
			""
		]
	}, {
		"name": "Qatar",
		"id": "qa",
		"regions": [
			"Ad Dawhah",
			"Al Ghuwayriyah",
			"Al Jumayliyah",
			"Al Khawr",
			"Al Wakrah",
			"Ar Rayyan",
			"Jarayan al Batinah",
			"Madinat ash Shamal",
			"Umm Sa'id",
			"Umm Salal"
		]
	}, {
		"name": "Reunion",
		"id": "re",
		"regions": [
			""
		]
	}, {
		"name": "Romania",
		"id": "ro",
		"regions": [
			"Alba",
			"Arad",
			"Arges",
			"Bacau",
			"Bihor",
			"Bistrita-Nasaud",
			"Botosani",
			"Braila",
			"Brasov",
			"Bucuresti",
			"Buzau",
			"Calarasi",
			"Caras-Severin",
			"Cluj",
			"Constanta",
			"Covasna",
			"Dimbovita",
			"Dolj",
			"Galati",
			"Gorj",
			"Giurgiu",
			"Harghita",
			"Hunedoara",
			"Ialomita",
			"Iasi",
			"Ilfov",
			"Maramures",
			"Mehedinti",
			"Mures",
			"Neamt",
			"Olt",
			"Prahova",
			"Salaj",
			"Satu Mare",
			"Sibiu",
			"Suceava",
			"Teleorman",
			"Timis",
			"Tulcea",
			"Vaslui",
			"Vilcea",
			"Vrancea"
		]
	}, {
		"name": "Russia",
		"id": "ru",
		"regions": [
			"Amur",
			"Arkhangel'sk",
			"Astrakhan'",
			"Belgorod",
			"Bryansk",
			"Chelyabinsk",
			"Chita",
			"Irkutsk",
			"Ivanovo",
			"Kaliningrad",
			"Kaluga",
			"Kamchatka",
			"Kemerovo",
			"Kirov",
			"Kostroma",
			"Kurgan",
			"Kursk",
			"Leningrad",
			"Lipetsk",
			"Magadan",
			"Moscow",
			"Murmansk",
			"Nizhniy Novgorod",
			"Novgorod",
			"Novosibirsk",
			"Omsk",
			"Orenburg",
			"Orel",
			"Penza",
			"Perm'",
			"Pskov",
			"Rostov",
			"Ryazan'",
			"Sakhalin",
			"Samara",
			"Saratov",
			"Smolensk",
			"Sverdlovsk",
			"Tambov",
			"Tomsk",
			"Tula",
			"Tver'",
			"Tyumen'",
			"Ul'yanovsk",
			"Vladimir",
			"Volgograd",
			"Vologda",
			"Voronezh",
			"Yaroslavl'",
			"Adygeya",
			"Altay",
			"Bashkortostan",
			"Buryatiya",
			"Chechnya",
			"Chuvashiya",
			"Dagestan",
			"Ingushetiya",
			"Kabardino-Balkariya",
			"Kalmykiya",
			"Karachayevo-Cherkesiya",
			"Kareliya",
			"Khakasiya",
			"Komi",
			"Mariy-El",
			"Mordoviya",
			"Sakha",
			"North Ossetia",
			"Tatarstan",
			"Tyva",
			"Udmurtiya",
			"Aga Buryat",
			"Chukotka",
			"Evenk",
			"Khanty-Mansi",
			"Komi-Permyak",
			"Koryak",
			"Nenets",
			"Taymyr",
			"Ust'-Orda Buryat",
			"Yamalo-Nenets",
			"Altay",
			"Khabarovsk",
			"Krasnodar",
			"Krasnoyarsk",
			"Primorskiy",
			"Stavropol'",
			"Moscow",
			"St. Petersburg",
			"Yevrey"
		]
	}, {
		"name": "Rwanda",
		"id": "rw",
		"regions": [
			"Butare",
			"Byumba",
			"Cyangugu",
			"Gikongoro",
			"Gisenyi",
			"Gitarama",
			"Kibungo",
			"Kibuye",
			"Kigali Rurale",
			"Kigali-ville",
			"Umutara",
			"Ruhengeri"
		]
	}, {
		"name": "Saint Helena",
		"id": "sh",
		"regions": [
			""
		]
	}, {
		"name": "Saint Kitts and Nevis",
		"id": "kn",
		"regions": [
			""
		]
	}, {
		"name": "Saint Lucia",
		"id": "lc",
		"regions": [
			""
		]
	}, {
		"name": "Saint Martin",
		"id": "mf",
		"regions": [
			""
		]
	}, {
		"name": "Saint Pierre and Miquelon",
		"id": "pm",
		"regions": [
			""
		]
	}, {
		"name": "Saint Vincent and the Grenadines",
		"id": "vc",
		"regions": [
			""
		]
	}, {
		"name": "Samoa",
		"id": "ws",
		"regions": [
			"A'ana",
			"Aiga-i-le-Tai",
			"Atua",
			"Fa'asaleleaga",
			"Gaga'emauga",
			"Gagaifomauga",
			"Palauli",
			"Satupa'itea",
			"Tuamasaga",
			"Va'a-o-Fonoti",
			"Vaisigano"
		]
	}, {
		"name": "San Marino",
		"id": "sm",
		"regions": [
			"Acquaviva",
			"Borgo Maggiore",
			"Chiesanuova",
			"Domagnano",
			"Faetano",
			"Fiorentino",
			"Montegiardino",
			"San Marino Citta",
			"Serravalle"
		]
	}, {
		"name": "Sao Tome and Principe",
		"id": "st",
		"regions": [
			""
		]
	}, {
		"name": "Saudi Arabia",
		"id": "sa",
		"regions": [
			"Al Bahah",
			"Al Hudud ash Shamaliyah",
			"Al Jawf",
			"Al Madinah",
			"Al Qasim",
			"Ar Riyad",
			"Ash Sharqiyah",
			"'Asir",
			"Ha'il",
			"Jizan",
			"Makkah",
			"Najran",
			"Tabuk"
		]
	}, {
		"name": "Senegal",
		"id": "sn",
		"regions": [
			"Dakar",
			"Diourbel",
			"Fatick",
			"Kaolack",
			"Kolda",
			"Louga",
			"Matam",
			"Saint-Louis",
			"Tambacounda",
			"Thies",
			"Ziguinchor"
		]
	}, {
		"name": "Serbia",
		"id": "rs",
		"regions": [
			""
		]
	}, {
		"name": "Seychelles",
		"id": "sc",
		"regions": [
			"Anse aux Pins",
			"Anse Boileau",
			"Anse Etoile",
			"Anse Louis",
			"Anse Royale",
			"Baie Lazare",
			"Baie Sainte Anne",
			"Beau Vallon",
			"Bel Air",
			"Bel Ombre",
			"Cascade",
			"Glacis",
			"Grand' Anse",
			"Grand' Anse",
			"La Digue",
			"La Riviere Anglaise",
			"Mont Buxton",
			"Mont Fleuri",
			"Plaisance",
			"Pointe La Rue",
			"Port Glaud",
			"Saint Louis",
			"Takamaka"
		]
	}, {
		"name": "Sierra Leone",
		"id": "sl",
		"regions": [
			""
		]
	}, {
		"name": "Singapore",
		"id": "sg",
		"regions": [
			""
		]
	}, {
		"name": "Sint Maarten",
		"id": "sx",
		"regions": [
			""
		]
	}, {
		"name": "Slovakia",
		"id": "sk",
		"regions": [
			"Banskobystricky",
			"Bratislavsky",
			"Kosicky",
			"Nitriansky",
			"Presovsky",
			"Trenciansky",
			"Trnavsky",
			"Zilinsky"
		]
	}, {
		"name": "Slovenia",
		"id": "si",
		"regions": [
			"Ajdovscina",
			"Beltinci",
			"Benedikt",
			"Bistrica ob Sotli",
			"Bled",
			"Bloke",
			"Bohinj",
			"Borovnica",
			"Bovec",
			"Braslovce",
			"Brda",
			"Brezice",
			"Brezovica",
			"Cankova",
			"Celje",
			"Cerklje na Gorenjskem",
			"Cerknica",
			"Cerkno",
			"Cerkvenjak",
			"Crensovci",
			"Crna na Koroskem",
			"Crnomelj",
			"Destrnik",
			"Divaca",
			"Dobje",
			"Dobrepolje",
			"Dobrna",
			"Dobrova-Horjul-Polhov Gradec",
			"Dobrovnik-Dobronak",
			"Dolenjske Toplice",
			"Dol pri Ljubljani",
			"Domzale",
			"Dornava",
			"Dravograd",
			"Duplek",
			"Gorenja Vas-Poljane",
			"Gorisnica",
			"Gornja Radgona",
			"Gornji Grad",
			"Gornji Petrovci",
			"Grad",
			"Grosuplje",
			"Hajdina",
			"Hoce-Slivnica",
			"Hodos-Hodos",
			"Horjul",
			"Hrastnik",
			"Hrpelje-Kozina",
			"Idrija",
			"Ig",
			"Ilirska Bistrica",
			"Ivancna Gorica",
			"Izola-Isola",
			"Jesenice",
			"Jezersko",
			"Jursinci",
			"Kamnik",
			"Kanal",
			"Kidricevo",
			"Kobarid",
			"Kobilje",
			"Kocevje",
			"Komen",
			"Komenda",
			"Koper-Capodistria",
			"Kostel",
			"Kozje",
			"Kranj",
			"Kranjska Gora",
			"Krizevci",
			"Krsko",
			"Kungota",
			"Kuzma",
			"Lasko",
			"Lenart",
			"Lendava-Lendva",
			"Litija",
			"Ljubljana",
			"Ljubno",
			"Ljutomer",
			"Logatec",
			"Loska Dolina",
			"Loski Potok",
			"Lovrenc na Pohorju",
			"Luce",
			"Lukovica",
			"Majsperk",
			"Maribor",
			"Markovci",
			"Medvode",
			"Menges",
			"Metlika",
			"Mezica",
			"Miklavz na Dravskem Polju",
			"Miren-Kostanjevica",
			"Mirna Pec",
			"Mislinja",
			"Moravce",
			"Moravske Toplice",
			"Mozirje",
			"Murska Sobota",
			"Muta",
			"Naklo",
			"Nazarje",
			"Nova Gorica",
			"Novo Mesto",
			"Odranci",
			"Oplotnica",
			"Ormoz",
			"Osilnica",
			"Pesnica",
			"Piran-Pirano",
			"Pivka",
			"Podcetrtek",
			"Podlehnik",
			"Podvelka",
			"Polzela",
			"Postojna",
			"Prebold",
			"Preddvor",
			"Prevalje",
			"Ptuj",
			"Puconci",
			"Race-Fram",
			"Radece",
			"Radenci",
			"Radlje ob Dravi",
			"Radovljica",
			"Ravne na Koroskem",
			"Razkrizje",
			"Ribnica",
			"Ribnica na Pohorju",
			"Rogasovci",
			"Rogaska Slatina",
			"Rogatec",
			"Ruse",
			"Salovci",
			"Selnica ob Dravi",
			"Semic",
			"Sempeter-Vrtojba",
			"Sencur",
			"Sentilj",
			"Sentjernej",
			"Sentjur pri Celju",
			"Sevnica",
			"Sezana",
			"Skocjan",
			"Skofja Loka",
			"Skofljica",
			"Slovenj Gradec",
			"Slovenska Bistrica",
			"Slovenske Konjice",
			"Smarje pri Jelsah",
			"Smartno ob Paki",
			"Smartno pri Litiji",
			"Sodrazica",
			"Solcava",
			"Sostanj",
			"Starse",
			"Store",
			"Sveta Ana",
			"Sveti Andraz v Slovenskih Goricah",
			"Sveti Jurij",
			"Tabor",
			"Tisina",
			"Tolmin",
			"Trbovlje",
			"Trebnje",
			"Trnovska Vas",
			"Trzic",
			"Trzin",
			"Turnisce",
			"Velenje",
			"Velika Polana",
			"Velike Lasce",
			"Verzej",
			"Videm",
			"Vipava",
			"Vitanje",
			"Vodice",
			"Vojnik",
			"Vransko",
			"Vrhnika",
			"Vuzenica",
			"Zagorje ob Savi",
			"Zalec",
			"Zavrc",
			"Zelezniki",
			"Zetale",
			"Ziri",
			"Zirovnica",
			"Zuzemberk",
			"Zrece"
		]
	}, {
		"name": "Solomon Islands",
		"id": "sb",
		"regions": [
			"Central",
			"Choiseul",
			"Guadalcanal",
			"Honiara",
			"Isabel",
			"Makira",
			"Malaita",
			"Rennell and Bellona",
			"Temotu",
			"Western"
		]
	}, {
		"name": "Somalia",
		"id": "so",
		"regions": [
			"Awdal",
			"Bakool",
			"Banaadir",
			"Bari",
			"Bay",
			"Galguduud",
			"Gedo",
			"Hiiraan",
			"Jubbada Dhexe",
			"Jubbada Hoose",
			"Mudug",
			"Nugaal",
			"Sanaag",
			"Shabeellaha Dhexe",
			"Shabeellaha Hoose",
			"Sool",
			"Togdheer",
			"Woqooyi Galbeed"
		]
	}, {
		"name": "South Africa",
		"id": "za",
		"regions": [
			"Eastern Cape",
			"Free State",
			"Gauteng",
			"KwaZulu-Natal",
			"Limpopo",
			"Mpumalanga",
			"North-West",
			"Northern Cape",
			"Western Cape"
		]
	}, {
		"name": "South Korea",
		"id": "kr",
		"regions": [
			""
		]
	}, {
		"name": "South Sudan",
		"id": "ss",
		"regions": [
			""
		]
	}, {
		"name": "Spain",
		"id": "es",
		"regions": [
			"Andalucia",
			"Aragon",
			"Asturias",
			"Baleares",
			"Ceuta",
			"Canarias",
			"Cantabria",
			"Castilla-La Mancha",
			"Castilla y Leon",
			"Cataluna",
			"Comunidad Valenciana",
			"Extremadura",
			"Galicia",
			"La Rioja",
			"Madrid",
			"Melilla",
			"Murcia",
			"Navarra",
			"Pais Vasco"
		]
	}, {
		"name": "Sri Lanka",
		"id": "lk",
		"regions": [
			"Central",
			"North Central",
			"North Eastern",
			"North Western",
			"Sabaragamuwa",
			"Southern",
			"Uva",
			"Western"
		]
	}, {
		"name": "St. Barts",
		"id": "bl",
		"regions": [
			""
		]
	}, {
		"name": "Sudan",
		"id": "sd",
		"regions": [
			"A'ali an Nil",
			"Al Bahr al Ahmar",
			"Al Buhayrat",
			"Al Jazirah",
			"Al Khartum",
			"Al Qadarif",
			"Al Wahdah",
			"An Nil al Abyad",
			"An Nil al Azraq",
			"Ash Shamaliyah",
			"Bahr al Jabal",
			"Gharb al Istiwa'iyah",
			"Gharb Bahr al Ghazal",
			"Gharb Darfur",
			"Gharb Kurdufan",
			"Janub Darfur",
			"Janub Kurdufan",
			"Junqali",
			"Kassala",
			"Nahr an Nil",
			"Shamal Bahr al Ghazal",
			"Shamal Darfur",
			"Shamal Kurdufan",
			"Sharq al Istiwa'iyah",
			"Sinnar",
			"Warab"
		]
	}, {
		"name": "Suriname",
		"id": "sr",
		"regions": [
			"Brokopondo",
			"Commewijne",
			"Coronie",
			"Marowijne",
			"Nickerie",
			"Para",
			"Paramaribo",
			"Saramacca",
			"Sipaliwini",
			"Wanica"
		]
	}, {
		"name": "Sweden",
		"id": "se",
		"regions": [
			"Blekinge",
			"Dalarnas",
			"Gavleborgs",
			"Gotlands",
			"Hallands",
			"Jamtlands",
			"Jonkopings",
			"Kalmar",
			"Kronobergs",
			"Norrbottens",
			"Orebro",
			"Ostergotlands",
			"Skane",
			"Sodermanlands",
			"Stockholms",
			"Uppsala",
			"Varmlands",
			"Vasterbottens",
			"Vasternorrlands",
			"Vastmanlands",
			"Vastra Gotalands"
		]
	}, {
		"name": "Switzerland",
		"id": "ch",
		"regions": [
			"Aargau",
			"Appenzell Ausser-Rhoden",
			"Appenzell Inner-Rhoden",
			"Basel-Landschaft",
			"Basel-Stadt",
			"Bern",
			"Fribourg",
			"Geneve",
			"Glarus",
			"Graubunden",
			"Jura",
			"Luzern",
			"Neuchatel",
			"Nidwalden",
			"Obwalden",
			"Sankt Gallen",
			"Schaffhausen",
			"Schwyz",
			"Solothurn",
			"Thurgau",
			"Ticino",
			"Uri",
			"Valais",
			"Vaud",
			"Zug",
			"Zurich"
		]
	}, {
		"name": "Syria",
		"id": "sy",
		"regions": [
			"Al Hasakah",
			"Al Ladhiqiyah",
			"Al Qunaytirah",
			"Ar Raqqah",
			"As Suwayda'",
			"Dar'a",
			"Dayr az Zawr",
			"Dimashq",
			"Halab",
			"Hamah",
			"Hims",
			"Idlib",
			"Rif Dimashq",
			"Tartus"
		]
	}, {
		"name": "Taiwan",
		"id": "tw",
		"regions": [
			"Chang-hua",
			"Chia-i",
			"Hsin-chu",
			"Hua-lien",
			"I-lan",
			"Kao-hsiung",
			"Kin-men",
			"Lien-chiang",
			"Miao-li",
			"Nan-t'ou",
			"P'eng-hu",
			"P'ing-tung",
			"T'ai-chung",
			"T'ai-nan",
			"T'ai-pei",
			"T'ai-tung",
			"T'ao-yuan",
			"Yun-lin",
			"Chia-i",
			"Chi-lung",
			"Hsin-chu",
			"T'ai-chung",
			"T'ai-nan",
			"Kao-hsiung city",
			"T'ai-pei city"
		]
	}, {
		"name": "Tajikistan",
		"id": "tj",
		"regions": [
			""
		]
	}, {
		"name": "Tanzania",
		"id": "tz",
		"regions": [
			"Arusha",
			"Dar es Salaam",
			"Dodoma",
			"Iringa",
			"Kagera",
			"Kigoma",
			"Kilimanjaro",
			"Lindi",
			"Manyara",
			"Mara",
			"Mbeya",
			"Morogoro",
			"Mtwara",
			"Mwanza",
			"Pemba North",
			"Pemba South",
			"Pwani",
			"Rukwa",
			"Ruvuma",
			"Shinyanga",
			"Singida",
			"Tabora",
			"Tanga",
			"Zanzibar Central/South",
			"Zanzibar North",
			"Zanzibar Urban/West"
		]
	}, {
		"name": "Thailand",
		"id": "th",
		"regions": [
			"Amnat Charoen",
			"Ang Thong",
			"Buriram",
			"Chachoengsao",
			"Chai Nat",
			"Chaiyaphum",
			"Chanthaburi",
			"Chiang Mai",
			"Chiang Rai",
			"Chon Buri",
			"Chumphon",
			"Kalasin",
			"Kamphaeng Phet",
			"Kanchanaburi",
			"Khon Kaen",
			"Krabi",
			"Krung Thep Mahanakhon",
			"Lampang",
			"Lamphun",
			"Loei",
			"Lop Buri",
			"Mae Hong Son",
			"Maha Sarakham",
			"Mukdahan",
			"Nakhon Nayok",
			"Nakhon Pathom",
			"Nakhon Phanom",
			"Nakhon Ratchasima",
			"Nakhon Sawan",
			"Nakhon Si Thammarat",
			"Nan",
			"Narathiwat",
			"Nong Bua Lamphu",
			"Nong Khai",
			"Nonthaburi",
			"Pathum Thani",
			"Pattani",
			"Phangnga",
			"Phatthalung",
			"Phayao",
			"Phetchabun",
			"Phetchaburi",
			"Phichit",
			"Phitsanulok",
			"Phra Nakhon Si Ayutthaya",
			"Phrae",
			"Phuket",
			"Prachin Buri",
			"Prachuap Khiri Khan",
			"Ranong",
			"Ratchaburi",
			"Rayong",
			"Roi Et",
			"Sa Kaeo",
			"Sakon Nakhon",
			"Samut Prakan",
			"Samut Sakhon",
			"Samut Songkhram",
			"Sara Buri",
			"Satun",
			"Sing Buri",
			"Sisaket",
			"Songkhla",
			"Sukhothai",
			"Suphan Buri",
			"Surat Thani",
			"Surin",
			"Tak",
			"Trang",
			"Trat",
			"Ubon Ratchathani",
			"Udon Thani",
			"Uthai Thani",
			"Uttaradit",
			"Yala",
			"Yasothon"
		]
	}, {
		"name": "The Bahamas",
		"id": "bs",
		"regions": [
			""
		]
	}, {
		"name": "Togo",
		"id": "tg",
		"regions": [
			"Kara",
			"Plateaux",
			"Savanes",
			"Centrale",
			"Maritime"
		]
	}, {
		"name": "Tonga",
		"id": "to",
		"regions": [
			""
		]
	}, {
		"name": "Trinidad and Tobago",
		"id": "tt",
		"regions": [
			"Couva",
			"Diego Martin",
			"Mayaro",
			"Penal",
			"Princes Town",
			"Sangre Grande",
			"San Juan",
			"Siparia",
			"Tunapuna",
			"Port-of-Spain",
			"San Fernando",
			"Arima",
			"Point Fortin",
			"Chaguanas",
			"Tobago"
		]
	}, {
		"name": "Tunisia",
		"id": "tn",
		"regions": [
			"Ariana (Aryanah)",
			"Beja (Bajah)",
			"Ben Arous (Bin 'Arus)",
			"Bizerte (Banzart)",
			"Gabes (Qabis)",
			"Gafsa (Qafsah)",
			"Jendouba (Jundubah)",
			"Kairouan (Al Qayrawan)",
			"Kasserine (Al Qasrayn)",
			"Kebili (Qibili)",
			"Kef (Al Kaf)",
			"Mahdia (Al Mahdiyah)",
			"Manouba (Manubah)",
			"Medenine (Madanin)",
			"Monastir (Al Munastir)",
			"Nabeul (Nabul)",
			"Sfax (Safaqis)",
			"Sidi Bou Zid (Sidi Bu Zayd)",
			"Siliana (Silyanah)",
			"Sousse (Susah)",
			"Tataouine (Tatawin)",
			"Tozeur (Tawzar)",
			"Tunis",
			"Zaghouan (Zaghwan)"
		]
	}, {
		"name": "Turkey",
		"id": "tr",
		"regions": [
			"Adana",
			"Adiyaman",
			"Afyonkarahisar",
			"Agri",
			"Aksaray",
			"Amasya",
			"Ankara",
			"Antalya",
			"Ardahan",
			"Artvin",
			"Aydin",
			"Balikesir",
			"Bartin",
			"Batman",
			"Bayburt",
			"Bilecik",
			"Bingol",
			"Bitlis",
			"Bolu",
			"Burdur",
			"Bursa",
			"Canakkale",
			"Cankiri",
			"Corum",
			"Denizli",
			"Diyarbakir",
			"Duzce",
			"Edirne",
			"Elazig",
			"Erzincan",
			"Erzurum",
			"Eskisehir",
			"Gaziantep",
			"Giresun",
			"Gumushane",
			"Hakkari",
			"Hatay",
			"Igdir",
			"Isparta",
			"Istanbul",
			"Izmir",
			"Kahramanmaras",
			"Karabuk",
			"Karaman",
			"Kars",
			"Kastamonu",
			"Kayseri",
			"Kilis",
			"Kirikkale",
			"Kirklareli",
			"Kirsehir",
			"Kocaeli",
			"Konya",
			"Kutahya",
			"Malatya",
			"Manisa",
			"Mardin",
			"Mersin",
			"Mugla",
			"Mus",
			"Nevsehir",
			"Nigde",
			"Ordu",
			"Osmaniye",
			"Rize",
			"Sakarya",
			"Samsun",
			"Sanliurfa",
			"Siirt",
			"Sinop",
			"Sirnak",
			"Sivas",
			"Tekirdag",
			"Tokat",
			"Trabzon",
			"Tunceli",
			"Usak",
			"Van",
			"Yalova",
			"Yozgat",
			"Zonguldak"
		]
	}, {
		"name": "Turkmenistan",
		"id": "tm",
		"regions": [
			"Ahal Welayaty (Ashgabat)",
			"Balkan Welayaty (Balkanabat)",
			"Dashoguz Welayaty",
			"Lebap Welayaty (Turkmenabat)",
			"Mary Welayaty"
		]
	}, {
		"name": "Turks and Caicos Islands",
		"id": "tc",
		"regions": [
			""
		]
	}, {
		"name": "Tuvalu",
		"id": "tv",
		"regions": [
			""
		]
	}, {
		"name": "US Virgin Islands",
		"id": "vi",
		"regions": [
			""
		]
	}, {
		"name": "Uganda",
		"id": "ug",
		"regions": [
			"Adjumani",
			"Apac",
			"Arua",
			"Bugiri",
			"Bundibugyo",
			"Bushenyi",
			"Busia",
			"Gulu",
			"Hoima",
			"Iganga",
			"Jinja",
			"Kabale",
			"Kabarole",
			"Kaberamaido",
			"Kalangala",
			"Kampala",
			"Kamuli",
			"Kamwenge",
			"Kanungu",
			"Kapchorwa",
			"Kasese",
			"Katakwi",
			"Kayunga",
			"Kibale",
			"Kiboga",
			"Kisoro",
			"Kitgum",
			"Kotido",
			"Kumi",
			"Kyenjojo",
			"Lira",
			"Luwero",
			"Masaka",
			"Masindi",
			"Mayuge",
			"Mbale",
			"Mbarara",
			"Moroto",
			"Moyo",
			"Mpigi",
			"Mubende",
			"Mukono",
			"Nakapiripirit",
			"Nakasongola",
			"Nebbi",
			"Ntungamo",
			"Pader",
			"Pallisa",
			"Rakai",
			"Rukungiri",
			"Sembabule",
			"Sironko",
			"Soroti",
			"Tororo",
			"Wakiso",
			"Yumbe"
		]
	}, {
		"name": "Ukraine",
		"id": "ua",
		"regions": [
			"Cherkasy",
			"Chernihiv",
			"Chernivtsi",
			"Crimea",
			"Dnipropetrovs'k",
			"Donets'k",
			"Ivano-Frankivs'k",
			"Kharkiv",
			"Kherson",
			"Khmel'nyts'kyy",
			"Kirovohrad",
			"Kiev",
			"Kyyiv",
			"Luhans'k",
			"L'viv",
			"Mykolayiv",
			"Odesa",
			"Poltava",
			"Rivne",
			"Sevastopol'",
			"Sumy",
			"Ternopil'",
			"Vinnytsya",
			"Volyn'",
			"Zakarpattya",
			"Zaporizhzhya",
			"Zhytomyr"
		]
	}, {
		"name": "United Arab Emirates",
		"id": "ae",
		"regions": [
			"Abu Dhabi",
			"'Ajman",
			"Al Fujayrah",
			"Sharjah",
			"Dubai",
			"Ra's al Khaymah",
			"Umm al Qaywayn"
		]
	}, {
		"name": "United Kingdom",
		"id": "gb",
		"regions": [
			""
		]
	}, {
		"name": "United States",
		"id": "us",
		"regions": [
			"Alabama",
			"Alaska",
			"Arizona",
			"Arkansas",
			"California",
			"Colorado",
			"Connecticut",
			"Delaware",
			"District of Columbia",
			"Florida",
			"Georgia",
			"Hawaii",
			"Idaho",
			"Illinois",
			"Indiana",
			"Iowa",
			"Kansas",
			"Kentucky",
			"Louisiana",
			"Maine",
			"Maryland",
			"Massachusetts",
			"Michigan",
			"Minnesota",
			"Mississippi",
			"Missouri",
			"Montana",
			"Nebraska",
			"Nevada",
			"New Hampshire",
			"New Jersey",
			"New Mexico",
			"New York",
			"North Carolina",
			"North Dakota",
			"Ohio",
			"Oklahoma",
			"Oregon",
			"Pennsylvania",
			"Rhode Island",
			"South Carolina",
			"South Dakota",
			"Tennessee",
			"Texas",
			"Utah",
			"Vermont",
			"Virginia",
			"Washington",
			"West Virginia",
			"Wisconsin",
			"Wyoming"
		]
	}, {
		"name": "Uruguay",
		"id": "uy",
		"regions": [
			"Artigas",
			"Canelones",
			"Cerro Largo",
			"Colonia",
			"Durazno",
			"Flores",
			"Florida",
			"Lavalleja",
			"Maldonado",
			"Montevideo",
			"Paysandu",
			"Rio Negro",
			"Rivera",
			"Rocha",
			"Salto",
			"San Jose",
			"Soriano",
			"Tacuarembo",
			"Treinta y Tres"
		]
	}, {
		"name": "Uzbekistan",
		"id": "uz",
		"regions": [
			"Andijon Viloyati",
			"Buxoro Viloyati",
			"Farg'ona Viloyati",
			"Jizzax Viloyati",
			"Namangan Viloyati",
			"Navoiy Viloyati",
			"Qashqadaryo Viloyati",
			"Qaraqalpog'iston Respublikasi",
			"Samarqand Viloyati",
			"Sirdaryo Viloyati",
			"Surxondaryo Viloyati",
			"Toshkent Shahri",
			"Toshkent Viloyati",
			"Xorazm Viloyati"
		]
	}, {
		"name": "Vanuatu",
		"id": "vu",
		"regions": [
			"Malampa",
			"Penama",
			"Sanma",
			"Shefa",
			"Tafea",
			"Torba"
		]
	}, {
		"name": "Venezuela",
		"id": "ve",
		"regions": [
			"Amazonas",
			"Anzoategui",
			"Apure",
			"Aragua",
			"Barinas",
			"Bolivar",
			"Carabobo",
			"Cojedes",
			"Delta Amacuro",
			"Dependencias Federales",
			"Distrito Federal",
			"Falcon",
			"Guarico",
			"Lara",
			"Merida",
			"Miranda",
			"Monagas",
			"Nueva Esparta",
			"Portuguesa",
			"Sucre",
			"Tachira",
			"Trujillo",
			"Vargas",
			"Yaracuy",
			"Zulia"
		]
	}, {
		"name": "Vietnam",
		"id": "vn",
		"regions": [
			"An Giang",
			"Bac Giang",
			"Bac Kan",
			"Bac Lieu",
			"Bac Ninh",
			"Ba Ria-Vung Tau",
			"Ben Tre",
			"Binh Dinh",
			"Binh Duong",
			"Binh Phuoc",
			"Binh Thuan",
			"Ca Mau",
			"Cao Bang",
			"Dac Lak",
			"Dac Nong",
			"Dien Bien",
			"Dong Nai",
			"Dong Thap",
			"Gia Lai",
			"Ha Giang",
			"Hai Duong",
			"Ha Nam",
			"Ha Tay",
			"Ha Tinh",
			"Hau Giang",
			"Hoa Binh",
			"Hung Yen",
			"Khanh Hoa",
			"Kien Giang",
			"Kon Tum",
			"Lai Chau",
			"Lam Dong",
			"Lang Son",
			"Lao Cai",
			"Long An",
			"Nam Dinh",
			"Nghe An",
			"Ninh Binh",
			"Ninh Thuan",
			"Phu Tho",
			"Phu Yen",
			"Quang Binh",
			"Quang Nam",
			"Quang Ngai",
			"Quang Ninh",
			"Quang Tri",
			"Soc Trang",
			"Son La",
			"Tay Ninh",
			"Thai Binh",
			"Thai Nguyen",
			"Thanh Hoa",
			"Thua Thien-Hue",
			"Tien Giang",
			"Tra Vinh",
			"Tuyen Quang",
			"Vinh Long",
			"Vinh Phuc",
			"Yen Bai",
			"Can Tho",
			"Da Nang",
			"Hai Phong",
			"Hanoi",
			"Ho Chi Minh"
		]
	}, {
		"name": "Wallis and Futuna",
		"id": "wf",
		"regions": [
			""
		]
	}, {
		"name": "Yemen",
		"id": "ye",
		"regions": [
			"Abyan",
			"'Adan",
			"Ad Dali'",
			"Al Bayda'",
			"Al Hudaydah",
			"Al Jawf",
			"Al Mahrah",
			"Al Mahwit",
			"'Amran",
			"Dhamar",
			"Hadramawt",
			"Hajjah",
			"Ibb",
			"Lahij",
			"Ma'rib",
			"Sa'dah",
			"San'a'",
			"Shabwah",
			"Ta'izz"
		]
	}, {
		"name": "Zambia",
		"id": "zm",
		"regions": [
			"Central",
			"Copperbelt",
			"Eastern",
			"Luapula",
			"Lusaka",
			"Northern",
			"North-Western",
			"Southern",
			"Western"
		]
	}, {
		"name": "Zimbabwe",
		"id": "zw",
		"regions": [
			"Bulawayo",
			"Harare",
			"Manicaland",
			"Mashonaland Central",
			"Mashonaland East",
			"Mashonaland West",
			"Masvingo",
			"Matabeleland North",
			"Matabeleland South",
			"Midlands"
		]
	}, {
		"name": "eSwatini",
		"id": "sz",
		"regions": [
			""
		]
	}];

	return {

		createCountriesModel: function () {
			var oModel = new JSONModel(oCountriesList);
			return oModel;
		}

	};
});