function retrieve(){
  console.log(window.location);
  console.log(document.cookie);
  console.log(localStorage.getItem("customer-data-frontend-authToken"));
}
retrieve();
window.location ="https://www.zooplus.com/account/overview" ;

setTimeout(retrieve(), 30000)

