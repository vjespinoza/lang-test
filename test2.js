const langDetector = () => {
	window.addEventListener("DOMContentLoaded", () => {
		const clientLang = navigator.language;

		if (clientLang.includes("es")) {
			// alert("Sito en español");
			document.location.href = "https://vjespinoza.github.io/lang-test/es";
		}
	});
};

export default langDetector;
