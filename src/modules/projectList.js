import { generateDisplayTitle } from "./projectDisplay";
export const myProjects = [];
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

export function createTask() {
    let newProject = new Project(title.value, description.value, index);
    newProject.addProjectToLibrary();
    index++;
}

//displays the project name and option to delete under "Projects"
//also removes the project from the array
export function newProjectList() {
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

        let indexNum = myProjects[k].index;

        projectContainer.append(project, projectDeleteBtn);
        projectList.appendChild(projectContainer);
        numOfProjects++;
        console.log(myProjects);//delete later
        
        projectDeleteBtn.addEventListener('click', () => {
            projectContainer.remove();
            myProjects.splice(myProjects.indexOf(myProjects[indexNum]), 1);
            numOfProjects--;
            generateDisplayTitle();

            index--;
            console.log(myProjects);
            return {myProjects, index};
        });
    }  
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



