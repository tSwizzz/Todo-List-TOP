import './styles.css';
import header from './modules/websiteHeader';
import { generateDisplayTitle } from './modules/projectDisplay';
import {modalContainer, generateProjectInfo, newProjectList, Project, myProjects, projPosInArray, addTaskButton, delTaskButton, title, description, showModal, numOfProjects, createTask} from './modules/projectList';
let modalDisplayed = false;

header(); //displays website header;
generateDisplayTitle();

function exitModal() {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
    }
    modalDisplayed = false;
}

//displays modal for adding info to new project
const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener('click', () => {
        if(modalDisplayed) 
            return;
        else {
            generateProjectInfo();
            modalDisplayed = true;
        }
    });

//after adding info to new project via "addProjectBtn", this will
//send the project info to the array and display the info on screen
addTaskButton.addEventListener('click', () => {
    exitModal();
    createTask();
    newProjectList();
    generateDisplayTitle();
    modalDisplayed = false;
});

//strictly exits modal
delTaskButton.addEventListener('click', exitModal);

