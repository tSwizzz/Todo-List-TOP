import './styles.css';
import header from './modules/websiteHeader';
import { generateDisplayTitle } from './modules/projectDisplay';
import {modalContainer, generateProjectInfo, newProjectList, Project, myProjects, projPosInArray, addTaskButton, delTaskButton, title, description, showModal, numOfProjects, createTask} from './modules/projectList';
let modalDisplayed = false;

header(); //displays website header; inside websiteHeader.js
generateDisplayTitle();

//event listener for adding new projects
const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener('click', () => {
        if(modalDisplayed) 
            return;
        else {
            generateProjectInfo();
            modalDisplayed = true;
        }
    });

//sends project info to array and displays the info on screen
addTaskButton.addEventListener('click', () => {
    createTask();
    newProjectList();
    generateDisplayTitle();
    modalDisplayed = false;
});

//exits modal that asks for project info
delTaskButton.addEventListener('click', () => {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
    }
    modalDisplayed = false;
});

