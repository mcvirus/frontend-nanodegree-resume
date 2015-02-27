//$("#main").append("Vitaliy");
var awesomeThoughts = "I am Vitaliy and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);
$("#main").append(funThoughts);

var name = "Vitaliy";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Front-end Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var bio = {
    "name" : "Vitaliy",
    "role" : "Front-end Developer",
    "contact" : "foo",
    "welcomeMessage" : "Welcome to my site",
    "skills" : "foo"
};
