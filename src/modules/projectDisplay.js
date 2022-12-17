export function generateDisplayTitle() {
    projectDisplayTitle.textContent = "hey";
}


const projectDisplayHeader = document.querySelector(".projectDisplayHeader");

const projectDisplayTitle = document.createElement('h1');
projectDisplayTitle.classList.add("projectDisplayTitle");
projectDisplayTitle.textContent = "Your projects display here!";
projectDisplayHeader.appendChild(projectDisplayTitle);
 




