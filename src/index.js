import './styles.css';
import todoIcon from './images/todo-logo.png';
import {generateProjectList} from './modules/projectList';
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
    addProjectBtn.addEventListener('click', generateProjectList);