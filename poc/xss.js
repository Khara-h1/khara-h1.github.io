function retrieve(){
  console.log(window.location);
  console.log(document.cookie);
  console.log(localStorage.getItem("customer-data-frontend-authToken"));
  alert(document.domain);
}
retrieve();

setTimeout(retrieve, 30000)

