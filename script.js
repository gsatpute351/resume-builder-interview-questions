 function generateResume() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;
let linkedin = document.getElementById("linkedin").value;
let github = document.getElementById("github").value;
let education = document.getElementById("education").value;
let objective = document.getElementById("objective").value;
let internship = document.getElementById("internship").value;
let projects = document.getElementById("projects").value;
let certificates = document.getElementById("certificates").value;
let achievements = document.getElementById("achievements").value;
let languages = document.getElementById("languages").value;
let interests = document.getElementById("interests").value;

let selectedSkills = [];

document.querySelectorAll(".skill:checked").forEach(skill => {
    selectedSkills.push(skill.value);
});

let questions = "";

const interviewQuestions = {

HTML: [
"What is HTML?",
"What are Semantic Tags?",
"What is Hyperlink?"
],

CSS: [
"What is CSS?",
"What is Flexbox?",
"What is the difference between Margin and Padding?"
],

JavaScript: [
"What is JavaScript?",
"What is DOM?",
"What are Functions?"
],

Java: [
"What is Java?",
"What is OOP?",
"What is Inheritance?"
],

Python: [
"What is Python?",
"What are Lists?",
"What is Function?"
],

C: [
"What is C Language?",
"What is Pointer?",
"What is Array?"
],

"C++": [
"What is C++?",
"What is Polymorphism?",
"What is Encapsulation?"
],

SQL: [
"What is SQL?",
"What is Primary Key?",
"What is JOIN?"
],

React: [
"What is React?",
"What are Components?",
"What is useState?"
],

"Node.js": [
"What is Node.js?",
"What is npm?",
"What is Express.js?"
],

MongoDB: [
"What is MongoDB?",
"What is Collection?",
"What is NoSQL?"
],

"Power BI": [
"What is Power BI?",
"What is Dashboard?",
"What are Visualizations?"
]

};

selectedSkills.forEach(skill => {

questions += `<h4>${skill}</h4><ul>`;

if(interviewQuestions[skill]){
interviewQuestions[skill].forEach(question => {
questions += `<li>${question}</li>`;
});
}

questions += "</ul>";

});

document.getElementById("resumeOutput").innerHTML = `

<h1>${name}</h1>

<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Address:</b> ${address}</p>

<h2>Career Objective</h2>
<p>${objective}</p>

<h2>Education</h2>
<p>${education}</p>

<h2>Skills</h2>
<p>${selectedSkills.join(", ")}</p>

<h2>Internship Experience</h2>
<p>${internship}</p>

<h2>Projects</h2>
<p>${projects}</p>

<h2>Certificates</h2>
<p>${certificates}</p>

<h2>Achievements</h2>
<p>${achievements}</p>

<h2>Languages Known</h2>
<p>${languages}</p>

<h2>Interests / Hobbies</h2>
<p>${interests}</p>

<h2>LinkedIn</h2>
<p>${linkedin}</p>

<h2>GitHub</h2>
<p>${github}</p>

<h2>Interview Questions</h2>
${questions}

`;

}