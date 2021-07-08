import countries from "./countryList.js";

console.log(countries);

const cleanText = (str) => {
	return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};

const getClientLocation = () => {
	const country = cleanText(geoplugin_countryName());
	console.log(country);

	document.addEventListener("DOMContentLoaded", () => {
		if (countries.includes(country)) {
			console.log("The country is..." + " " + country + "!");
			// window.open("http://127.0.0.1:5500/es/index.html");
		}
	});
};

export default getClientLocation;
