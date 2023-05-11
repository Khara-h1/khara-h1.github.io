var a=document.createElement("iframe");
a.src="https://www.zooplus.com/account/overview";
a.name="mainsite";
document.body.appendChild(a);
function messageHandler(e){
  console.log(e);
}

function hookMessageHandler(){
  mainsite.window.addEventListener("message",messageHandler)
}
setInterval(hookMessageHandler, 1000);
