var resumeForm = document.getElementById("resume-form");
resumeForm.addEventListener("submit", function (event) {
    var _a, _b;
    var ProfPic = (_a = document.getElementById("profile-pic")
        .files) === null || _a === void 0 ? void 0 : _a[0];
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
    // About
    (_b = document.getElementById("update-about")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        // Get the value of the textarea and specify its type
        var aboutText = document.getElementById("about").value;
        // Update the <p> tag content
        var displayAboutP = document.getElementById("display-about-p");
        if (displayAboutP) {
            displayAboutP.textContent = aboutText || "Please write something about yourself!";
        }
    });
    var Phone = document.getElementById("phone").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var Linkedin = document.getElementById("linkedin").value;
    var facebook = document.getElementById("facebook").value;
    var twitter = document.getElementById("twitter").value;
    var portfolio = document.getElementById("portfolio").value;
    var skillsSecion = document.getElementById("skills-section").value;
    var skill_input = document.getElementById("skill-input").value;
    var languageSection = document.getElementById("languages-section").value;
    var languageField = document.getElementById("languagefield").value.split(",");
    var name = document.getElementById("name").value;
    var tittle = document.getElementById("tittle").value;
    // Education
    var educaionsec = document.getElementById("education-section");
    var degreeInput = document.getElementById("degree").value;
    var instituteInput = document.getElementById("institute").value;
    var startDate = document.getElementById("start-date").value;
    var endDae = document.getElementById("end-date").value;
    var addEducation = document.getElementById("add-education").value;
    // Experience
    var experienceSection = document.getElementById("experience-section");
    var jobeTittle = document.getElementById("job-title").value;
    var companyName = document.getElementById("company").value;
    var expStartDate = document.getElementById("exp-start-date").value;
    var expEndtDate = document.getElementById("exp-end-date").value;
    var addExpereinece = document.getElementById("add-experience").value;
    // Projects
    var projectSec = document.getElementById("project-sec");
    var ProjectInput = document.getElementById("Project-input").value;
    var detailsArea = document.getElementById("details").value;
    var techUsed = document.getElementById("technologies");
    var projecUrl = document.getElementById("url").value;
    var generaeResume = document.getElementById("generate-resume");
    var resuemBtn = document.getElementById("generate-resume-button").value;
    //   Skills
    var skillInput = document.getElementById("skill-input").value.split(",");
    var addSkillBtn = document.getElementById("add-skill");
    var skillsContainer = document.getElementById("skills-conainer");
    addSkillBtn.addEventListener("click", function () {
        var skillEntry = document.createElement("div");
        skillEntry.classList.add("skill-entry");
        var skillInput = document.createElement("input");
        skillInput.type = "text";
        skillInput.placeholder = "Skill";
        skillInput.classList.add("skill-input");
        skillInput.required = true;
        var skillLevelSelect = document.createElement("select");
        skillLevelSelect.classList.add("skill-level");
        skillLevelSelect.required = true;
        var levels = ["Beginner", "Intermediate", "Advanced"];
        levels.forEach(function (level) {
            var option = document.createElement("option");
            option.value = level.toLowerCase();
            option.textContent = level;
            skillLevelSelect.appendChild(option);
        });
        var removeSkillBtn = document.createElement("button");
        removeSkillBtn.textContent = "Remove Skill";
        removeSkillBtn.classList.add("remove-skill");
        skillEntry.appendChild(skillInput);
        skillEntry.appendChild(skillLevelSelect);
        skillEntry.appendChild(removeSkillBtn);
        skillsContainer.appendChild(skillEntry);
        removeSkillBtn.addEventListener("click", function () {
            skillEntry.remove();
        });
    });
});
