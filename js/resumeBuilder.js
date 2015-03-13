var bio = {
    "name": "Vitaliy Doe",
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

$("#main").append(internationalizeButton);
function inName(name) {

    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name = name.join(" ");
    return name;
}

var work = {
    "jobs": [
        {
            "title": "System Administrator",
            "employer": "Government",
            "dates": "2010-future",
            "location": "localhost",
            "description": "Updates job knowledge by tracking emerging Internet technologies;" +
            " participating in educational opportunities; reading professional publications;" +
            " maintaining personal networks; participating in professional organizations."
        },
        {
            "title": "System Administrator",
            "employer": "Government",
            "dates": "2005-2010",
            "location": "localhost",
            "description": "Accomplishes organization goals by accepting ownership for accomplishing" +
            " new and different requests; exploring opportunities to add value to job accomplishments."
        }
    ],
    display: function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last")
                .append(formattedEmployerTitle)
                .append(formattedDates)
                .append(formattedLocation)
                .append(formattedDescription);

        }
    }
};

work.display();

var projects = {
    "project": [
        {
            "title": "Last Panzer",
            "dates": "2015",
            "description": "do something",
            "images": ["images/project.jpg"]
        },
        {
            "title": "First panzer",
            "dates": "2014",
            "description": "do nothing",
            "images": ["images/project.jpg", "images/project2.jpg"]
        }

    ],
    display: function () {

        for (var i in this.project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

            $(".project-entry:last")
                .append(formattedTitle)
                .append(formattedDates)
                .append(formattedDescription);
            if (projects.project[i].images.length > 0) {
                for (var image in projects.project[i].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }


    }

};
projects.display();

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


$("#mapDiv:last").append(googleMap);


function MyDate() {
    this.x = '77';
    this.y = '88';
    this.z = '99';
    this.e = '00';
}
var z = [];

var d = new MyDate();

for (var i in obj) {

    var temp = makeArray(i);
    if (temp.length > 1) {

    } else {
        db[i] = obj[i];
    }
}

for (var i in db) {
    console.log(i + " " + db[i]);

}

//console.log(db.toSource());
//console.log(d.toSource());


var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};

// Your code goes here! Let me help you get started

function locationizer(workObj) {
    var locations = [];
    for (var i in workObj.jobs) {
        locations.push(workObj.jobs[i].location);
        //console.log(workObj.jobs.location[i]);
    }
    return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

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
var db = {};
var tempArr = [];
hr1();
function hr1(){
for (var i in obj) {
    var arr = makeArray(i);
    if(arr.length>1){
        qaz(arr[0]);
    }

}
}
console.log(tempArr.toString());

function makeObj(a, b) {
    var tObj = new Object();
    tObj[a] = b;
    return tObj;
}
function qaz(p){
    if(tempArr.indexOf(p) == -1){
        tempArr.push(p);
    }
}

function makeArray(str) {
    var array = str.split(".");
    return array;
}