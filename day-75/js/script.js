const appForm = document.querySelector('#app-form');
const lastName = document.querySelector('#last-name');
const response = document.querySelector('#response');
const countries = {
    "AF": "Afganistán",
    "AL": "Albania",
    "DZ": "Argelia",
    "AS": "Samoa Americana",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguila",
    "AQ": "Antártida",
    "AG": "Antigua y Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaiyán",
    "BS": "Bahamas",
    "BH": "Baréin",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Bielorrusia",
    "BE": "Bélgica",
    "BZ": "Belice",
    "BJ": "Benín",
    "BM": "Bermudas",
    "BT": "Bután",
    "BO": "Bolivia",
    "BQ": "Bonaire, San Eustaquio y Saba",
    "BA": "Bosnia y Herzegovina",
    "BW": "Botsuana",
    "BV": "Isla Bouvet",
    "BR": "Brasil",
    "IO": "Territorio Británico del Océano Índico",
    "BN": "Brunéi",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Camboya",
    "CM": "Camerún",
    "CA": "Canadá",
    "KY": "Islas Caimán",
    "CF": "República Centroafricana",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Isla de Navidad",
    "CC": "Islas Cocos (Keeling)",
    "CO": "Colombia",
    "KM": "Comoras",
    "CG": "Congo",
    "CD": "Congo (República Democrática)",
    "CK": "Islas Cook",
    "CR": "Costa Rica",
    "HR": "Croacia",
    "CU": "Cuba",
    "CW": "Curazao",
    "CY": "Chipre",
    "CZ": "República Checa",
    "DK": "Dinamarca",
    "DJ": "Yibuti",
    "DM": "Dominica",
    "DO": "República Dominicana",
    "EC": "Ecuador",
    "EG": "Egipto",
    "SV": "El Salvador",
    "GQ": "Guinea Ecuatorial",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Esuatini",
    "ET": "Etiopía",
    "FK": "Islas Malvinas",
    "FO": "Islas Feroe",
    "FJ": "Fiyi",
    "FI": "Finlandia",
    "FR": "Francia",
    "GF": "Guayana Francesa",
    "PF": "Polinesia Francesa",
    "TF": "Territorios Australes Franceses",
    "GA": "Gabón",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Alemania",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Grecia",
    "GL": "Groenlandia",
    "GD": "Granada",
    "GP": "Guadalupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bisáu",
    "GY": "Guyana",
    "HT": "Haití",
    "HM": "Islas Heard y McDonald",
    "VA": "Ciudad del Vaticano",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungría",
    "IS": "Islandia",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Irán",
    "IQ": "Irak",
    "IE": "Irlanda",
    "IM": "Isla de Man",
    "IL": "Israel",
    "IT": "Italia",
    "JM": "Jamaica",
    "JP": "Japón",
    "JE": "Jersey",
    "JO": "Jordania",
    "KZ": "Kazajistán",
    "KE": "Kenia",
    "KI": "Kiribati",
    "KP": "Corea del Norte",
    "KR": "Corea del Sur",
    "KW": "Kuwait",
    "KG": "Kirguistán",
    "LA": "Laos",
    "LV": "Letonia",
    "LB": "Líbano",
    "LS": "Lesoto",
    "LR": "Liberia",
    "LY": "Libia",
    "LI": "Liechtenstein",
    "LT": "Lituania",
    "LU": "Luxemburgo",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malaui",
    "MY": "Malasia",
    "MV": "Maldivas",
    "ML": "Malí",
    "MT": "Malta",
    "MH": "Islas Marshall",
    "MQ": "Martinica",
    "MR": "Mauritania",
    "MU": "Mauricio",
    "YT": "Mayotte",
    "MX": "México",
    "FM": "Micronesia",
    "MD": "Moldavia",
    "MC": "Mónaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Marruecos",
    "MZ": "Mozambique",
    "MM": "Birmania",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Países Bajos",
    "NC": "Nueva Caledonia",
    "NZ": "Nueva Zelanda",
    "NI": "Nicaragua",
    "NE": "Níger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Isla Norfolk",
    "MK": "Macedonia del Norte",
    "MP": "Islas Marianas del Norte",
    "NO": "Noruega",
    "OM": "Omán",
    "PK": "Pakistán",
    "PW": "Palaos",
    "PS": "Palestina",
    "PA": "Panamá",
    "PG": "Papúa Nueva Guinea",
    "PY": "Paraguay",
    "PE": "Perú",
    "PH": "Filipinas",
    "PN": "Islas Pitcairn",
    "PL": "Polonia",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Catar",
    "RE": "Reunión",
    "RO": "Rumania",
    "RU": "Rusia",
    "RW": "Ruanda",
    "BL": "San Bartolomé",
    "SH": "Santa Elena, Ascensión y Tristán de Acuña",
    "KN": "San Cristóbal y Nieves",
    "LC": "Santa Lucía",
    "MF": "San Martín (parte francesa)",
    "PM": "San Pedro y Miquelón",
    "VC": "San Vicente y las Granadinas",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Santo Tomé y Príncipe",
    "SA": "Arabia Saudita",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leona",
    "SG": "Singapur",
    "SX": "San Martín (parte holandesa)",
    "SK": "Eslovaquia",
    "SI": "Eslovenia",
    "SB": "Islas Salomón",
    "SO": "Somalia",
    "ZA": "Sudáfrica",
    "GS": "Islas Georgia del Sur y Sandwich del Sur",
    "SS": "Sudán del Sur",
    "ES": "España",
    "LK": "Sri Lanka",
    "SD": "Sudán",
    "SR": "Surinam",
    "SJ": "Islas Svalbard y Jan Mayen",
    "SE": "Suecia",
    "CH": "Suiza",
    "SY": "Siria",
    "TW": "Taiwán",
    "TJ": "Tayikistán",
    "TZ": "Tanzania",
    "TH": "Tailandia",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad y Tobago",
    "TN": "Túnez",
    "TR": "Turquía",
    "TM": "Turkmenistán",
    "TC": "Islas Turcas y Caicos",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ucrania",
    "AE": "Emiratos Árabes Unidos",
    "GB": "Reino Unido",
    "UM": "Islas menores alejadas de los Estados Unidos",
    "US": "Estados Unidos",
    "UY": "Uruguay",
    "UZ": "Uzbekistán",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Islas Vírgenes Británicas",
    "VI": "Islas Vírgenes de los Estados Unidos",
    "WF": "Wallis y Futuna",
    "EH": "Sahara Occidental",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabue"
};

const findNationality = async () => {
    const lastNameValue = lastName.value;
    const url = `https://api.nationalize.io/?name=${lastNameValue}`;
    try {
        const responseData = await fetch(url);
        const data = await responseData.json();

        response.innerHTML = `
        <span class="highlight capit">${data.name}</span> is from <span class="highlight">${countries[data.country[0].country_id]}</span> with <span class="highlight">${(data.country[0].probability * 100).toFixed(2)}%</span> certainty.`;    
    } catch (error) {
        console.log(error);
        response.textContent = 'Sorry, something happened wrong, please try later.';
    }
}

appForm.addEventListener('submit', (e) => {
    e.preventDefault();
    findNationality();
});