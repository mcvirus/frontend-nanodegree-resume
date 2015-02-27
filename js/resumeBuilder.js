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
    "skills": ["awesomeness", "funny", "clever"],
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
    .append(HTMLbioPic.replace("%data%", bio.picture))
    .append(HTMLskillsStart)
    .append(HTMLskills.replace("%data%", bio.skills[0]))
    .append(HTMLskills.replace("%data%", bio.skills[1]))
    .append(HTMLskills.replace("%data%", bio.skills[2]));

var work = {};
work.title = "system administrator";
work.employer = "goverment";
work.dates = "2005-2015";
work.location = "localhost";

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.location));


var education = {
    "schools": [
        {
            "name": "second-level school",
            "location": "Kyev",
            "degree":"wizard",
            "majors": ["CS"],
            "dates": "2005"
        },
        {
            "name": "first-level school",
            "location": "Donetsk",
            "degree":"master",
            "majors": ["CS"],
            "dates": "2000"
        }
    ],
    "onlineClasses": [
        {
            "title": "JS Crash Course",
            "dates": "2015",
            "URL": "udacity.com"
        }

    ]
};
$("#education").prepend(HTMLschoolStart)
    .append(HTMLschoolName.replace("%data%", education.schools[0].name))
    .append(HTMLschoolLocation.replace("%data%", education.schools[0].location))
    .append(HTMLschoolDates.replace("%data%", education.schools[0].dates))
    .append(HTMLschoolDegree.replace("%data%", education.schools[0].degree))

    .append(HTMLschoolMajor.replace("%data%", education.schools[0].majors));





$("#education") .append(HTMLschoolName.replace("%data%", education.schools[1].name))
    .append(HTMLschoolDegree.replace("%data%", education.schools[1].degree))
    .append(HTMLschoolDates.replace("%data%", education.schools[1].dates))
    .append(HTMLschoolLocation.replace("%data%", education.schools[1].location))
    .append(HTMLschoolMajor.replace("%data%", education.schools[1].majors));

$("#education").append(HTMLonlineClasses)
    .append(HTMLonlineTitle.replace("%data%", education.onlineClasses[0].title))
    .append(HTMLonlineDates.replace("%data%", education.onlineClasses[0].dates))
    .append(HTMLonlineURL.replace("%data%", education.onlineClasses[0].URL));
