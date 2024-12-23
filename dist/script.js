"use strict";
// @ts-ignore
var resumeForm = document.getElementById("resume-form");
console.log("not click");
resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // get input values
    console.log("on click");
    var about = document.getElementById("about").value;
    var Phone = document.getElementById("phone").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address")
        .value;
    var skills = document.getElementById("skills").value.split(",");
    var languageField = document.getElementById("languagefield").value.split(",");
    var name = document.getElementById("name").value;
    var tittle = document.getElementById("tittle").value;
    // Education
    var degreeInput = document.getElementById("degree")
        .value;
    var instituteInput = document.getElementById("institute").value;
    var startDate = document.getElementById("start-date")
        .value;
    var endDate = document.getElementById("end-date")
        .value;
    // Experience
    var jobeTittle = document.getElementById("job-title")
        .value;
    var companyName = document.getElementById("company")
        .value;
    var expStartDate = document.getElementById("exp-start-date").value;
    var expEndtDate = document.getElementById("exp-end-date").value;
    // Projects
    var ProjectInput = document.getElementById("Project-input").value;
    var detailsArea = document.getElementById("details").value;
    // profile image
    var ProfPic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    var displayImg = document.getElementById("display-image");
    if (ProfPic) {
        var reader = new FileReader();
        reader.onload = function (event) {
            if (event.target) {
                displayImg.src = event.target.result;
                displayImg.style.display = "block";
            }
        };
        reader.readAsDataURL(ProfPic);
    }
    else {
        displayImg.style.display = "none";
    }
    // display on resume
    document.getElementById("display-about-p").textContent =
        about;
    document.getElementById("display-num").textContent = Phone;
    document.getElementById("display-email").textContent = Email;
    document.getElementById("display-address").textContent =
        Address;
    var skillsList = document.getElementById("display-skills");
    skillsList.innerHTML = "";
    skills.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        skillsList.appendChild(skillItem);
    });
    var languagesList = document.getElementById("displayLang");
    languagesList.innerHTML = "";
    languageField.forEach(function (language) {
        var languageItem = document.createElement("li");
        languageItem.textContent = language.trim();
        languagesList.appendChild(languageItem);
    });
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-tittle").textContent =
        tittle;
    document.getElementById("display-start-date").textContent =
        startDate;
    document.getElementById("display-end-date").textContent =
        endDate;
    document.getElementById("display-exp-start-date").textContent = expStartDate;
    document.getElementById("display-exp-end-date").textContent =
        expEndtDate;
    document.getElementById("display-role").textContent =
        jobeTittle;
    document.getElementById("dispplay-role-p").textContent =
        companyName;
    document.getElementById("display-proj-name").textContent =
        ProjectInput;
    document.getElementById("display-p-details").textContent =
        detailsArea;
    document.getElementById("display-degree").textContent =
        degreeInput;
    document.getElementById("display-insit").textContent =
        instituteInput;
});
