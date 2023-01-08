import './styles.css';
import header from './modules/websiteHeader';
import {modalContainer, generateProjectInfo, newProjectList, myProjects, addTaskButton, delTaskButton, title, description, showModal, numOfProjects, createTask} from './modules/projectList';
import { projectDisplay } from './modules/projectDisplay';
let modalDisplayed = false;
header();

function exitModal() {
    while (modalContainer.firstChild) {
        modalContainer.removeChild(modalContainer.firstChild);
    }
    modalDisplayed = false;
}

//displays modal for adding info to new project
const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener('click', () => {
        if(modalDisplayed) {
            return;
        } else {
            generateProjectInfo();
            modalDisplayed = true;
        }
    });

//after adding info to new project via "addProjectBtn", this will
//send the project info to the array and display the info on screen
addTaskButton.addEventListener('click', () => {
    exitModal();
    createTask();//push task into array
    for (let k = numOfProjects; k < myProjects.length; k++) {
        newProjectList(myProjects[k]);
    }
    modalDisplayed = false;
});

//strictly exits modal
delTaskButton.addEventListener('click', exitModal);

