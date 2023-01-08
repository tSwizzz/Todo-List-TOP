import { myProjects } from "./projectList";

const projectDisplayHeader = document.querySelector(".projectDisplayHeader");

export const projectDisplayTitle = document.createElement('h1');
projectDisplayTitle.classList.add("projectDisplayTitle");
projectDisplayHeader.appendChild(projectDisplayTitle);

export function projectDisplay(item) {
    projectDisplayTitle.textContent = item.title;

    const projectDisplayInfo = document.querySelector(".projectDisplayInfo");

    const projectDisplayContainer = document.createElement('div');
    projectDisplayContainer.className = "projectDisplayContainer";
    projectDisplayInfo.appendChild(projectDisplayContainer);

    const projectDisplayDescription = document.createElement('p');
    projectDisplayDescription.className = "projectDisplayDescription";
    projectDisplayDescription.textContent = item.description;

    const addNewTask = document.createElement('button');
    addNewTask.className = "addNewTask";
    addNewTask.textContent = "Add New Task";

    projectDisplayContainer.append(projectDisplayDescription, addNewTask);

    return;
}


export function adjustProjectDisplayTitleAndInfo() {
    if(myProjects.length == 0) {
        projectDisplayTitle.textContent = "You have no projects!";
    } else {
        projectDisplayTitle.textContent = "Choose a project";
    }

    
}

 




