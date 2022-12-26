import {generateDisplayTitle} from "./projectDisplay";
export const myProjects = []; //keeps track of all new projects added
export let addTaskButton = document.createElement('button');
export let delTaskButton = document.createElement('button');
export const title = document.createElement('input');
export const description = document.createElement('input');

let modalContainer;

export class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.addProjectToLibrary = function() {
            myProjects.push(this);
        }
    }
}

export function newProjectList() {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
      }
    
}

export function exitModal() {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
      }
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
