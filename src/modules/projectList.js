const myProjects = []; //keeps track of all new projects added

class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.addProjectToLibrary = function() {
            myProjects.push(this);
        }
    }
}

export function generateProjectList() {
    console.log("hi");
}