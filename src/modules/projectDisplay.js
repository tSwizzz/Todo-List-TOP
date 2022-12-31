import { myProjects, numOfProjects} from "./projectList";

const projectDisplayHeader = document.querySelector(".projectDisplayHeader");

const projectDisplayTitle = document.createElement('h1');
projectDisplayTitle.classList.add("projectDisplayTitle");
projectDisplayHeader.appendChild(projectDisplayTitle);

export function generateDisplayTitle() {
    if(myProjects.length >=1)
        projectDisplayTitle.textContent = "Current Project: " + myProjects[numOfProjects - 1].title;
    else {
        projectDisplayTitle.textContent = "Your projects display here!";
    }
}

 




