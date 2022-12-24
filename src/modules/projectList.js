import {generateDisplayTitle} from "./projectDisplay";
const myProjects = []; //keeps track of all new projects added
let modalContainer;

class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.addProjectToLibrary = function() {
            myProjects.push(this);
        }
    }
}

function newProjectList() { //continue from here
    modalContainer.style.display = "none";
}

function exitModal() {
    modalContainer.style.display = "none";
}

export function generateProjectInfo() { //opens a popup menu to input task details
    modalContainer = document.querySelector(".modalContainer");

    const modalCard = document.createElement('div');
    modalCard.className = "modalCard";
    modalContainer.appendChild(modalCard);

    //const modal = document.createElement('div');
    //modal.className = "modal";
    //modalContainer.appendChild(modal);

    const header = document.createElement('h3');
    header.className = "header";
    header.textContent = "Enter Task Details Here!";

    const title = document.createElement('input');
    title.type = "text";
    title.className = 'title';
    title.placeholder = "Task title";

    const description = document.createElement('input');
    description.type = "text";
    description.className = 'description';
    description.placeholder = "Description: (go jogging, cook, etc)";

    const addTaskButton = document.createElement('button');
    addTaskButton.className = "addTaskButton";
    addTaskButton.textContent = "Add";

    const delTaskButton = document.createElement('button');
    delTaskButton.className = "delTaskButton";
    delTaskButton.textContent = "Delete";

    modalCard.append(header, title, description, addTaskButton, delTaskButton);

    addTaskButton.addEventListener('click', function createTask() {
        let newProject = new Project(title.value, description.value);
        newProject.addProjectToLibrary();
        newProjectList();
    });

    delTaskButton.addEventListener('click', exitModal);
}
