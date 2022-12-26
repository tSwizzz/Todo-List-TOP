import './styles.css';
import todoIcon from './images/todo-logo.png';
import {generateProjectInfo, exitModal, newProjectList, Project, myProjects, addTaskButton, delTaskButton, title, description, showModal} from './modules/projectList';
let modalDisplayed = false;

//generates header logo and title and appends them
const headerContainer = document.getElementById("headerContainer");

const todoLogo = new Image();
todoLogo.src = todoIcon;
todoLogo.classList.add("todoLogo");

const headerTitle = document.createElement('h1');
headerTitle.classList.add("headerTitle");
headerTitle.textContent = "To-do List";

headerContainer.append(todoLogo, headerTitle);

//event listener for adding new projects
const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener('click', projectButton);

addTaskButton.addEventListener('click', function createTask() {
    let newProject = new Project(title.value, description.value);
    newProject.addProjectToLibrary();
    newProjectList();
    modalDisplayed = false;
});

delTaskButton.addEventListener('click', () => {
    exitModal();
    modalDisplayed = false;
});


function projectButton() {
    if(modalDisplayed) 
        return;
    else {
        generateProjectInfo(); //inside projectList.js
        return modalDisplayed = true;
    }
}
