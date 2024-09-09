var _a, _b;
(_a = document.getElementById("addSkillButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsContainer = document.getElementById("skillsContainer");
    if (skillsContainer) {
        var newSkillInput = document.createElement("input");
        newSkillInput.type = "text";
        newSkillInput.name = "skills[]";
        newSkillInput.placeholder = "Enter a skill";
        newSkillInput.required = true;
        skillsContainer.appendChild(newSkillInput);
    }
});
(_b = document.getElementById("resumeForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh
    var formElement = this;
    var formData = new FormData(formElement);
    var resumePreview = document.getElementById("resumePreview");
    if (resumePreview) {
        var firstName = formData.get("firstName");
        var lastName = formData.get("lastName");
        var email = formData.get("email");
        var education = formData.get("education");
        var experience = formData.get("experience");
        var skills = formData.getAll("skills[]").join(", ");
        resumePreview.innerHTML = "\n          <h2>Resume Preview</h2>\n          <p><strong>First Name:</strong> <span class=\"editable\">".concat(firstName !== null && firstName !== void 0 ? firstName : 'N/A', "</span></p>\n          <p><strong>Last Name:</strong> <span class=\"editable\">").concat(lastName !== null && lastName !== void 0 ? lastName : 'N/A', "</span></p>\n          <p><strong>Email:</strong> <span class=\"editable\">").concat(email !== null && email !== void 0 ? email : 'N/A', "</span></p>\n          <p><strong>Education:</strong> <span class=\"editable\">").concat(education !== null && education !== void 0 ? education : 'N/A', "</span></p>\n          <p><strong>Work Experience:</strong> <span class=\"editable\">").concat(experience !== null && experience !== void 0 ? experience : 'N/A', "</span></p>\n          <p><strong>Skills:</strong> <span class=\"editable\">").concat(skills ? skills : 'N/A', "</span></p>\n      ");
    }
});
