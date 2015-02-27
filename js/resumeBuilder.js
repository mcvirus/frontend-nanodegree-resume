//$("#main").append("Vitaliy");
var awesomeThoughts = "I am Vitaliy and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
$("#main").append(funThoughts);


var bio = {
    "name" : "Vitaliy",
    "role" : "Front-end Developer",
    "contacts": {
    "mobile" : "123-456-789",
    "email" : "anonymous@gmail.com",
    "twitter" : "@anonymous",
    "github": "anonymous",
    "blog" : "anonymous.blogspot.com",
    "location" : "someCity"
 },
    "welcomeMsg" : "WELCOME",
    "skills" :["awesomeness", "funny", "clever"],
    "picture" : "images/fry.jpg"
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

$("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));

$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg));

$("#header").append(HTMLbioPic.replace("%data%",bio.picture));

$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[2]));