import './styles.css';
import todoIcon from './images/todo-logo.png';

//generates header logo and title and appends them
const headerContainer = document.getElementById("headerContainer");

const todoLogo = new Image();
todoLogo.src = todoIcon;
todoLogo.classList.add("todoLogo");

const headerTitle = document.createElement('h1');
headerTitle.classList.add("headerTitle");
headerTitle.textContent = "To-do List";

headerContainer.append(todoLogo, headerTitle);

//
const projectList = document.querySelector("projectList");


