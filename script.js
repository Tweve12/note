let btn = document.querySelector(".button");
let formTask = document.querySelector(".form-task");
let taskList = document.querySelector(".task-list");


function addNewTask(){
    let value = formTask.value;
    if(value==""){
        formTask.focus();
        return;
    }
    let newList = document.querySelector(".template").cloneNode(true).content;
    let newListBtn = newList.querySelector(".task__delete");
    newListBtn.addEventListener("click", deleteList)
    newList.querySelector(".task__text").value = value;
    taskList.append(newList);
    formTask.value = "";
    formTask.focus();
};

btn.addEventListener("click", addNewTask);


function deleteList(e){
    e.target.parentElement.remove();
}


