document.addEventListener('DOMContentLoaded', function () {
    // Elements
    var skillInput = document.getElementById('skill');
    var skillLevel = document.getElementById('skill-level');
    var addSkillButton = document.getElementById('add-skill-button');
    var addedSkills = document.getElementById('added-skills');
    var projectButton = document.getElementById('add-project-button');
    var addedProjects = document.getElementById('added-projects');
    var generateResumeButton = document.getElementById('generate-resume-button');
    var previewName = document.getElementById('preview-name');
    var previewJobTitle = document.getElementById('preview-job-title');
    var previewContact = document.getElementById('preview-contact');
    var previewEducation = document.getElementById('preview-education');
    var previewSkills = document.getElementById('preview-skills');
    // Add skill functionality
    addSkillButton.addEventListener('click', function (e) {
        e.preventDefault();
        var skill = skillInput.value.trim();
        var level = skillLevel.value;
        if (skill) {
            var skillDiv = document.createElement('div');
            skillDiv.classList.add('skill-item');
            skillDiv.innerHTML = "".concat(skill, " - ").concat(level);
            addedSkills.appendChild(skillDiv);
            skillInput.value = '';
        }
    });
    // Add project functionality
    projectButton.addEventListener('click', function (e) {
        e.preventDefault();
        var projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');
        projectDiv.innerHTML = "<input type=\"text\" placeholder=\"Project Name\" class=\"project-name\"> \n                                <textarea placeholder=\"Project Description\" class=\"project-description\"></textarea>";
        addedProjects.appendChild(projectDiv);
    });
    // Generate resume functionality
    generateResumeButton.addEventListener('click', function () {
        // Preview the data entered in the form fields
        previewName.innerText = "Name: ".concat(document.getElementById('name').value);
        previewJobTitle.innerText = "Job Title: ".concat(document.getElementById('job-title').value);
        previewContact.innerText = "Contact: ".concat(document.getElementById('phone').value, " | ").concat(document.getElementById('email').value);
        previewEducation.innerText = "Education: ".concat(document.getElementById('education').value);
        // Show the skills
        previewSkills.innerText = 'Skills: ';
        var skillItems = addedSkills.querySelectorAll('.skill-item');
        skillItems.forEach(function (item) {
            var skillItem = item;
            previewSkills.innerText += "".concat(skillItem.innerText, ", ");
        });
    });
});
