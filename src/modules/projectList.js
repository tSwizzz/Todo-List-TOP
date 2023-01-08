import { projectDisplay } from "./projectDisplay";
import { adjustProjectDisplayTitle } from "./projectDisplay";
export const myProjects = [];
export let addTaskButton = document.createElement('button');
export let delTaskButton = document.createElement('button');
export const title = document.createElement('input');
export const description = document.createElement('input');
export let modalContainer;
export let numOfProjects = 0;

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.addProjectToLibrary = function() {
            myProjects.push(this);
        }
    }
}

export function createTask() {
    let newProject = new Project(title.value, description.value);
    newProject.addProjectToLibrary();
}

//displays the project name and option to delete
//also removes the project from the array
export function newProjectList(item) {
    projectDisplay(item);
    const projectList = document.querySelector(".projectList");

    const projectContainer = document.createElement('div');
    projectContainer.className = "projectContainer";

    const project = document.createElement('div');
    project.className = "project";
    project.textContent = myProjects[numOfProjects].title;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.className = "projectDeleteBtn";
    projectDeleteBtn.textContent = "Delete";

    projectContainer.append(project, projectDeleteBtn);
    projectList.appendChild(projectContainer);

    numOfProjects++;
    projectDeleteBtn.addEventListener('click', () => {
        projectContainer.remove();
        myProjects.splice(myProjects.indexOf(item), 1);
        adjustProjectDisplayTitleAndInfo();
        numOfProjects--;
    });
    
    project.addEventListener('click', () => {
        projectDisplay(item);
    });
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
    description.placeholder = "Description: (Go jogging, Cook, etc)";

    addTaskButton.className = "addTaskButton";
    addTaskButton.textContent = "Add";

    delTaskButton.className = "delTaskButton";
    delTaskButton.textContent = "Delete";

    modalCard.append(header, title, description, addTaskButton, delTaskButton);
}









