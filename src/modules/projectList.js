import { generateDisplayTitle } from "./projectDisplay";

export const myProjects = []; //keeps track of all new projects added
export let addTaskButton = document.createElement('button');
export let delTaskButton = document.createElement('button');
export const title = document.createElement('input');
export const description = document.createElement('input');
export let modalContainer;
export let numOfProjects = 0;
let index = 0;

export class Project {
    constructor(title, description, index) {
        this.title = title;
        this.description = description;
        this.index = index;
        this.addProjectToLibrary = function() {
            myProjects.push(this);
        }
    }
}

//displays the project name and option to delete under "Projects"
//also removes the project from the array
export function newProjectList() {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
    }
    
    for(let k = numOfProjects; k < myProjects.length; k++) {
        const projectList = document.querySelector(".projectList");

        const projectContainer = document.createElement('div');
        projectContainer.className = "projectContainer";

        const project = document.createElement('div');
        project.className = "project";
        project.textContent = myProjects[numOfProjects].title;

        let projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.className = "projectDeleteBtn";
        projectDeleteBtn.textContent = "Delete";

        let indexNum = myProjects[k].index;//i figured this out somehow
        myProjects[k].index = projectDeleteBtn;//i figured this out somehow

        projectContainer.append(project, projectDeleteBtn);
        projectList.appendChild(projectContainer);
        numOfProjects++;
        console.log(myProjects);
        
        projectDeleteBtn.addEventListener('click', () => {
            projectContainer.remove();
            myProjects.splice(myProjects.indexOf(myProjects[indexNum]), 1);//i figured this out somehow
            numOfProjects--;//i figured this out somehow
            generateDisplayTitle();
            console.log(myProjects);
        });
    }
    
}

export function createTask() {
    let newProject = new Project(title.value, description.value, index);
    newProject.addProjectToLibrary();
    index++;
}

//opens a popup menu to input task details
export function generateProjectInfo() {
    modalContainer = document.querySelector(".modalContainer");

    const modalCard = document.createElement('div');
    modalCard.className = "modalCard";
    modalContainer.appendChild(modalCard);

    const header = document.createElement('h3');
    header.className = "header";
    header.textContent = "Enter Task Details Here!";

    title.type = "text";
    title.className = 'title';
    title.placeholder = "Task title";

    description.type = "text";
    description.className = 'description';
    description.placeholder = "Description: (go jogging, cook, etc)";

    addTaskButton.className = "addTaskButton";
    addTaskButton.textContent = "Add";

    delTaskButton.className = "delTaskButton";
    delTaskButton.textContent = "Delete";

    modalCard.append(header, title, description, addTaskButton, delTaskButton);
}

