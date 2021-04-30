cookie = (document.cookie.match(/^(?:.*;)?\s*selectedLanguage\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (cookie == null) {
	document.cookie = "selectedLanguage=en";
	location.reload();
} else if (cookie != 'en') {
	document.cookie = "selectedLanguage=en";
	location.reload();
}


