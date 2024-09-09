<<<<<<< HEAD
document.getElementById("addSkillButton")?.addEventListener("click", function () {
  const skillsContainer = document.getElementById("skillsContainer") as HTMLDivElement | null;
  if (skillsContainer) {
      const newSkillInput = document.createElement("input");
      newSkillInput.type = "text";
      newSkillInput.name = "skills[]";
      newSkillInput.placeholder = "Enter a skill";
      newSkillInput.required = true;
      skillsContainer.appendChild(newSkillInput);
  }
});

document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
  event.preventDefault(); // Prevent form refresh

  const formElement = this as HTMLFormElement;
  const formData = new FormData(formElement);
  const resumePreview = document.getElementById("resumePreview") as HTMLDivElement | null;

  if (resumePreview) {
      const firstName = formData.get("firstName") as string | null;
      const lastName = formData.get("lastName") as string | null;
      const email = formData.get("email") as string | null;
      const education = formData.get("education") as string | null;
      const experience = formData.get("experience") as string | null;
      const skills = formData.getAll("skills[]").join(", ");

      resumePreview.innerHTML = `
          <h2>Resume Preview</h2>
          <p><strong>First Name:</strong> <span class="editable">${firstName ?? 'N/A'}</span></p>
          <p><strong>Last Name:</strong> <span class="editable">${lastName ?? 'N/A'}</span></p>
          <p><strong>Email:</strong> <span class="editable">${email ?? 'N/A'}</span></p>
          <p><strong>Education:</strong> <span class="editable">${education ?? 'N/A'}</span></p>
          <p><strong>Work Experience:</strong> <span class="editable">${experience ?? 'N/A'}</span></p>
          <p><strong>Skills:</strong> <span class="editable">${skills ? skills : 'N/A'}</span></p>
      `;
  }
});
=======
document.getElementById("addSkillButton")?.addEventListener("click", function () {
  const skillsContainer = document.getElementById("skillsContainer") as HTMLDivElement | null;
  if (skillsContainer) {
      const newSkillInput = document.createElement("input");
      newSkillInput.type = "text";
      newSkillInput.name = "skills[]";
      newSkillInput.placeholder = "Enter a skill";
      newSkillInput.required = true;
      skillsContainer.appendChild(newSkillInput);
  }
});

document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
  event.preventDefault(); // Prevent form refresh

  const formElement = this as HTMLFormElement;
  const formData = new FormData(formElement);
  const resumePreview = document.getElementById("resumePreview") as HTMLDivElement | null;

  if (resumePreview) {
      const firstName = formData.get("firstName") as string | null;
      const lastName = formData.get("lastName") as string | null;
      const email = formData.get("email") as string | null;
      const education = formData.get("education") as string | null;
      const experience = formData.get("experience") as string | null;
      const skills = formData.getAll("skills[]").join(", ");

      resumePreview.innerHTML = `
          <h2>Resume Preview</h2>
          <p><strong>First Name:</strong> <span class="editable">${firstName ?? 'N/A'}</span></p>
          <p><strong>Last Name:</strong> <span class="editable">${lastName ?? 'N/A'}</span></p>
          <p><strong>Email:</strong> <span class="editable">${email ?? 'N/A'}</span></p>
          <p><strong>Education:</strong> <span class="editable">${education ?? 'N/A'}</span></p>
          <p><strong>Work Experience:</strong> <span class="editable">${experience ?? 'N/A'}</span></p>
          <p><strong>Skills:</strong> <span class="editable">${skills ? skills : 'N/A'}</span></p>
      `;
  }
});
>>>>>>> 90b479ab5d7b0ca48d0811a89a539eddf4fa2f3a
