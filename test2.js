const langDetector = () => {
	const clientLang = navigator.language;

	console.log(clientLang);

	if (clientLang.includes("es")) {
		document.location.href = "https://vjespinoza.github.io/lang-test/es";
	}
};

export default langDetector;
