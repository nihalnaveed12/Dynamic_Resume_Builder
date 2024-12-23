// @ts-ignore

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;

console.log("not click");
resumeForm.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  // get input values
  console.log("on click");
  const about = (document.getElementById("about") as HTMLInputElement).value;
  const Phone = (document.getElementById("phone") as HTMLInputElement).value;
  const Email = (document.getElementById("email") as HTMLInputElement).value;
  const Address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");

  const languageField = (
    document.getElementById("languagefield") as HTMLInputElement
  ).value.split(",");

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const tittle = (document.getElementById("tittle") as HTMLInputElement).value;

  // Education

  const degreeInput = (document.getElementById("degree") as HTMLInputElement)
    .value;
  const instituteInput = (
    document.getElementById("institute") as HTMLInputElement
  ).value;

  const startDate = (document.getElementById("start-date") as HTMLInputElement)
    .value;
  const endDate = (document.getElementById("end-date") as HTMLInputElement)
    .value;

  // Experience

  const jobeTittle = (document.getElementById("job-title") as HTMLInputElement)
    .value;
  const companyName = (document.getElementById("company") as HTMLInputElement)
    .value;
  const expStartDate = (
    document.getElementById("exp-start-date") as HTMLInputElement
  ).value;
  const expEndtDate = (
    document.getElementById("exp-end-date") as HTMLInputElement
  ).value;

  // Projects

  const ProjectInput = (
    document.getElementById("Project-input") as HTMLInputElement
  ).value;
  const detailsArea = (
    document.getElementById("details") as HTMLTextAreaElement
  ).value;

  // profile image

  const ProfPic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];
  const displayImg = document.getElementById("display-image") as HTMLImageElement;

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

  // display on resume

  (document.getElementById("display-about-p") as HTMLElement).textContent =
    about;
  (document.getElementById("display-num") as HTMLElement).textContent = Phone;
  (document.getElementById("display-email") as HTMLElement).textContent = Email;
  (document.getElementById("display-address") as HTMLElement).textContent =
    Address;

  const skillsList = document.getElementById("display-skills") as HTMLElement;
  skillsList.innerHTML = "";
  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill.trim();
    skillsList.appendChild(skillItem);
  });

  const languagesList = document.getElementById("displayLang") as HTMLElement;
  languagesList.innerHTML = "";
  languageField.forEach((language) => {
    const languageItem = document.createElement("li");
    languageItem.textContent = language.trim();
    languagesList.appendChild(languageItem);
  });

  (document.getElementById("display-name") as HTMLElement).textContent = name;
  (document.getElementById("display-tittle") as HTMLElement).textContent =
    tittle;
  (document.getElementById("display-start-date") as HTMLElement).textContent =
    startDate;
  (document.getElementById("display-end-date") as HTMLElement).textContent =
    endDate;
  (
    document.getElementById("display-exp-start-date") as HTMLElement
  ).textContent = expStartDate;
  (document.getElementById("display-exp-end-date") as HTMLElement).textContent =
    expEndtDate;
  (document.getElementById("display-role") as HTMLElement).textContent =
    jobeTittle;
  (document.getElementById("dispplay-role-p") as HTMLElement).textContent =
    companyName;
  (document.getElementById("display-proj-name") as HTMLElement).textContent =
    ProjectInput;
  (document.getElementById("display-p-details") as HTMLElement).textContent =
    detailsArea;
  (document.getElementById("display-degree") as HTMLElement).textContent =
    degreeInput;
  (document.getElementById("display-insit") as HTMLElement).textContent =
    instituteInput;
});
