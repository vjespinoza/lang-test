const langDetector = () => {
	window.addEventListener("DOMContentLoaded", () => {
		const clientLang = navigator.language;

		if (clientLang.includes("es")) {
			// alert("Sito en español");
			document.location.href = "http://127.0.0.1:5500/es/";
		}
	});
};

export default langDetector;
