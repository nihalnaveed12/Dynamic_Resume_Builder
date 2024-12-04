const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
resumeForm.addEventListener("submit", function (event: Event) {
  const ProfPic = (document.getElementById("profile-pic") as HTMLInputElement)
    .files?.[0];
  const displayImg = document.getElementById(
    "display-image"
  ) as HTMLImageElement;

  if (ProfPic) {
    const reader = new FileReader();
    reader.onload = function (event) {
      if (event.target) {
        displayImg.src = event.target.result as string;
        displayImg.style.display = "block";
      }
    };
    reader.readAsDataURL(ProfPic);
  } else {
    displayImg.style.display = "none";
  }

// About
document.getElementById("update-about")?.addEventListener("click", () => {
  // Get the value of the textarea and specify its type
  const aboutText: string = (document.getElementById("about") as HTMLTextAreaElement).value;

  // Update the <p> tag content
  const displayAboutP = document.getElementById("display-about-p");
  if (displayAboutP) {
    displayAboutP.textContent = aboutText || "Please write something about yourself!";
  }
});

  
  const Phone = (document.getElementById("phone") as HTMLInputElement).value;
  const Email = (document.getElementById("email") as HTMLInputElement).value;
  const Address = (document.getElementById("address") as HTMLInputElement).value;
  const Linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const facebook = (document.getElementById("facebook") as HTMLInputElement).value;
  const twitter = (document.getElementById("twitter") as HTMLInputElement).value;
  const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
  const skillsSecion = (document.getElementById("skills-section") as HTMLInputElement).value;
  const skill_input =( document.getElementById("skill-input") as HTMLInputElement).value;
  const languageSection = (document.getElementById("languages-section") as HTMLInputElement).value;
  const languageField = (document.getElementById("languagefield") as HTMLInputElement).value.split(",");
  const name = (document.getElementById("name") as HTMLInputElement).value
  const tittle = (document.getElementById("tittle") as HTMLInputElement).value;

// Education
const educaionsec = document.getElementById("education-section") as HTMLDivElement;
const degreeInput = (document.getElementById("degree") as HTMLInputElement).value;
const instituteInput = (document.getElementById("institute") as HTMLInputElement).value;
const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
const endDae = (document.getElementById("end-date") as HTMLInputElement).value;
const addEducation = (document.getElementById("add-education") as HTMLButtonElement).value;

// Experience
const experienceSection = document.getElementById("experience-section") as HTMLDivElement;
const jobeTittle =( document.getElementById("job-title") as HTMLInputElement).value;
const companyName = (document.getElementById("company") as HTMLInputElement).value;
const expStartDate = (document.getElementById("exp-start-date") as HTMLInputElement).value;
const expEndtDate = (document.getElementById("exp-end-date") as HTMLInputElement).value;
const addExpereinece = (document.getElementById("add-experience") as HTMLButtonElement).value;

// Projects
const projectSec = document.getElementById("project-sec") as HTMLDivElement;
const ProjectInput =( document.getElementById("Project-input") as HTMLInputElement).value;
const detailsArea = (document.getElementById("details") as HTMLTextAreaElement).value;
const techUsed = document.getElementById("technologies") as HTMLInputElement;
const projecUrl = (document.getElementById("url") as HTMLInputElement).value;

const generaeResume = (document.getElementById("generate-resume") as HTMLDivElement);
const resuemBtn =  (document.getElementById("generate-resume-button") as HTMLButtonElement).value;


  
//   Skills
const skillInput =( document.getElementById("skill-input") as HTMLInputElement).value.split(",");
const addSkillBtn = document.getElementById("add-skill") as HTMLButtonElement;
const skillsContainer = document.getElementById("skills-conainer") as HTMLDivElement;

addSkillBtn.addEventListener("click", function () {

  const skillEntry = document.createElement("div");
  skillEntry.classList.add("skill-entry");

 
  const skillInput = document.createElement("input");
  skillInput.type = "text";
  skillInput.placeholder = "Skill";
  skillInput.classList.add("skill-input");
  skillInput.required = true;

 
  const skillLevelSelect = document.createElement("select");
  skillLevelSelect.classList.add("skill-level");
  skillLevelSelect.required = true;

 
  const levels = ["Beginner", "Intermediate", "Advanced"];
  levels.forEach((level) => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    skillLevelSelect.appendChild(option);
  });

 
  const removeSkillBtn = document.createElement("button");
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
