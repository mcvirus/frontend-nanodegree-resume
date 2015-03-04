var bio = {
    "name": "Vitaliy",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "123-456-789",
        "email": "anonymous@gmail.com",
        "twitter": "@anonymous",
        "github": "anonymous",
        "blog": "anonymous.blogspot.com",
        "location": "someCity"
    },
    "welcomeMsg": "WELCOME",
    "skills": ["awesomeness", "funny", "clever", "wonderful"],
    "picture": "images/fry.jpg"
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
    .prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
    .append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
    .append(HTMLgithub.replace("%data%", bio.contacts.github))
    .append(HTMLblog.replace("%data%", bio.contacts.blog))
    .append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg))
    .append(HTMLbioPic.replace("%data%", bio.picture));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]))
        .append(HTMLskills.replace("%data%", bio.skills[1]))
        .append(HTMLskills.replace("%data%", bio.skills[2]))
        .append(HTMLskills.replace("%data%", bio.skills[3]));
}


var work = {
    "jobs": [
        {
            "title": "system administrator",
            "employer": "goverment",
            "dates": "2010-future",
            "location": "localhost",
            "description": "Updates job knowledge by tracking emerging Internet technologies;" +
            " participating in educational opportunities; reading professional publications;" +
            " maintaining personal networks; participating in professional organizations."
        },
        {
            "title": "system administrator",
            "employer": "goverment",
            "dates": "2005-2010",
            "location": "localhost",
            "description": "Accomplishes organization goals by accepting ownership for accomplishing" +
            " new and different requests; exploring opportunities to add value to job accomplishments."
        }
    ]
};
$("#workExperience").append(HTMLworkStart);

 $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer))
    .append(HTMLworkTitle.replace("%data%", work.jobs[0].title))
    .append(HTMLworkDates.replace("%data%", work.jobs[0].dates))
    .append(HTMLworkLocation.replace("%data%", work.jobs[0].location))
    .append(HTMLworkDescription.replace("%data%", work.jobs[0].description))

    .append(HTMLworkEmployer.replace("%data%", work.jobs[1].employer))
    .append(HTMLworkTitle.replace("%data%", work.jobs[1].title))
    .append(HTMLworkDates.replace("%data%", work.jobs[1].dates))
    .append(HTMLworkLocation.replace("%data%", work.jobs[1].location))
    .append(HTMLworkDescription.replace("%data%", work.jobs[1].description));

var project = {
    "projects": [
        {
            "title": "Last Project",
            "dates": "2015",
            "projects": "do something",
            "image": ["images/project2.jpg", "images/project.jpg"]
        },
        {
            "title": "Project1",
            "dates": "2014",
            "projects": "do nothing",
            "image": ["images/project.jpg"]
        }
    ]
};
$("#projects").prepend(HTMLprojectStart);
  $(".project-entry").append(HTMLprojectTitle.replace("%data%", project.projects[0].title))
    .append(HTMLprojectDates.replace("%data%", project.projects[0].dates))
    .append(HTMLprojectDescription.replace("%data%", project.projects[0].projects))
    .append(HTMLprojectImage.replace("%data%", project.projects[0].image[0]))
    .append(HTMLprojectImage.replace("%data%", project.projects[0].image[1]))

    .append(HTMLprojectTitle.replace("%data%", project.projects[1].title))
    .append(HTMLprojectDates.replace("%data%", project.projects[1].dates))
    .append(HTMLprojectDescription.replace("%data%", project.projects[1].projects))
    .append(HTMLprojectImage.replace("%data%", project.projects[1].image[0]));

var education = {
    "schools": [
        {
            "name": "second-level school",
            "location": "Kyev",
            "degree": "wizard",
            "majors": ["CS"],
            "dates": "2005"
        },
        {
            "name": "first-level school",
            "location": "Donetsk",
            "degree": "master",
            "majors": ["CS"],
            "dates": "2000"
        }
    ],
    "onlineClasses": [
        {
            "title": "JS Crash Course",
            "school": "udacity",
            "dates": "2015",
            "URL": "https://www.udacity.com/course/ud804"
        }

    ]
};
$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[0].name))
    .append(HTMLschoolLocation.replace("%data%", education.schools[0].location))
    .append(HTMLschoolDates.replace("%data%", education.schools[0].dates))
    .append(HTMLschoolDegree.replace("%data%", education.schools[0].degree))
    .append(HTMLschoolMajor.replace("%data%", education.schools[0].majors))

    .append(HTMLschoolName.replace("%data%", education.schools[1].name))
    .append(HTMLschoolDegree.replace("%data%", education.schools[1].degree))
    .append(HTMLschoolDates.replace("%data%", education.schools[1].dates))
    .append(HTMLschoolLocation.replace("%data%", education.schools[1].location))
    .append(HTMLschoolMajor.replace("%data%", education.schools[1].majors));

$("#education").append(HTMLonlineClasses)
    .append(HTMLonlineTitle.replace("%data%", education.onlineClasses[0].title))
    .append(HTMLonlineSchool.replace("%data%", education.onlineClasses[0].school))
    .append(HTMLonlineDates.replace("%data%", education.onlineClasses[0].dates))
    .append(HTMLonlineURL.replace("%data%", education.onlineClasses[0].URL));


var obj = {
    "database.host": "127.0.0.1",
    "database.user": "test",
    "database.password": "qwerty",
    "rest.photo.host": "127.0.0.2",
    "rest.users.host": "127.0.0.3",
    "rest.users.password": "p@ssw0rd",
    "baseUrl": "test.com",
    "limit": 10
};
var database = {};
function makeArray(str){
    var array = str.split(".");
    return array;
}
var z = [];

for(var i in obj){

    var temp = makeArray(i);

    if(temp.length > 1){
       if(z[z.length -1] !=temp[0]){
           var p =0;
            z.push(temp[0]);
        }
        database[temp[0] + temp[p]]=(obj[i]);
        p++;
    }else{
       database[i] = obj[i];
    }

}

for(var i in database){
   console.log(i + " " + database[i]);

}
console.log(database.toSource());
console.log(z.toSource());