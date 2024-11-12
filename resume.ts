document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const skillInput = document.getElementById('skill') as HTMLInputElement;
    const skillLevel = document.getElementById('skill-level') as HTMLSelectElement;
    const addSkillButton = document.getElementById('add-skill-button') as HTMLButtonElement;
    const addedSkills = document.getElementById('added-skills') as HTMLElement;

    const projectButton = document.getElementById('add-project-button') as HTMLButtonElement;
    const addedProjects = document.getElementById('added-projects') as HTMLElement;

    const generateResumeButton = document.getElementById('generate-resume-button') as HTMLButtonElement;
    const previewName = document.getElementById('preview-name') as HTMLParagraphElement;
    const previewJobTitle = document.getElementById('preview-job-title') as HTMLParagraphElement;
    const previewContact = document.getElementById('preview-contact') as HTMLParagraphElement;
    const previewEducation = document.getElementById('preview-education') as HTMLParagraphElement;
    const previewSkills = document.getElementById('preview-skills') as HTMLParagraphElement;

    // Add skill functionality
    addSkillButton.addEventListener('click', (e) => {
        e.preventDefault();

        const skill = skillInput.value.trim();
        const level = skillLevel.value;

        if (skill) {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill-item');
            skillDiv.innerHTML = `${skill} - ${level}`;
            addedSkills.appendChild(skillDiv);
            skillInput.value = '';
        }
    });

    // Add project functionality
    projectButton.addEventListener('click', (e) => {
        e.preventDefault();

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-item');
        projectDiv.innerHTML = `<input type="text" placeholder="Project Name" class="project-name"> 
                                <textarea placeholder="Project Description" class="project-description"></textarea>`;
        addedProjects.appendChild(projectDiv);
    });


    generateResumeButton.addEventListener('click', () => {

        previewName.innerText = `Name: ${(<HTMLInputElement>document.getElementById('name')).value}`;
        previewJobTitle.innerText = `Job Title: ${(<HTMLInputElement>document.getElementById('job-title')).value}`;
        previewContact.innerText = `Contact: ${(<HTMLInputElement>document.getElementById('phone')).value} | ${(<HTMLInputElement>document.getElementById('email')).value}`;
        previewEducation.innerText = `Education: ${(<HTMLInputElement>document.getElementById('education')).value}`;
        
     
        previewSkills.innerText = 'Skills: ';
        const skillItems = addedSkills.querySelectorAll('.skill-item');
        skillItems.forEach((item: Element) => {
            const skillItem = item as HTMLElement;
            previewSkills.innerText += `${skillItem.innerText}, `;
        });
    });
});
