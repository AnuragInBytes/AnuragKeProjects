const addBtnElement = document.querySelector('.js-add-todo');
const inputTodoElement = document.querySelector('.js-input-todo');
const inputDateElement = document.querySelector('.js-input-date');

window.addEventListener('DOMContentLoaded', () => {
    renderTodo(todoArray);
})

let todoArray = JSON.parse(localStorage.getItem('saveTodo')) || [];

//random id for each todo

function GenerateRandomId(){
    return(
        Math.random().toString(36).substring(2, 15) + 
        Math.random().toString(36).substring(2, 15)
    );
}

//rendering function to display the list on page

function renderTodo(todoArray){
    if(todoArray.length === 0){
        document.querySelector('.js-todo-page').innerHTML = 'You have no Task Left';
    } else{
        let todoHTML = '';
        for(let i = 0; i<todoArray.length ; i++){
            const todo = todoArray[i];
            const { task, dueDate, status } = todo;
            const html = `
            <div>${task}</div>
            <div>${dueDate}</div>
            <div>${status}</div>
            <div id="actionTab">
            <button id="completeBtn" onclick="completeTodo('${
                todo.id
            }')" class="fas fa-check"></button>

            <button id="editBtn" onclick="editTodo('${
                todo.id
            }')" class="fa fa-pencil"></button>

            <button id="deleteBtn" onclick="deleteTodo('${
                todo.id
            }')" class="fa fa-bucket"></button>
            </div>
            `;
            todoHTML += html;
        }
        document.querySelector('.js-todo-page').innerHTML = todoHTML;
    }
}

function addTodo(){

    const inputTodo = inputTodoElement.value;
    const inputDate = inputDateElement.value || 'No due date';

    todoArray.push({
        id: GenerateRandomId(),
        task: inputTodo,
        dueDate: inputDate,
        status: "Pending",
        complete: false
    });
    inputTodoElement.value = '';
    saveToLocalStorage();
    renderTodo(todoArray);
}

function saveToLocalStorage(){
    localStorage.setItem("saveTodo", JSON.stringify(todoArray));
}
addBtnElement.addEventListener('click', () => {
    if(inputTodoElement.value === ''){
        showPopUps('Please enter Task', 'error');
    } else{
        addTodo();
        saveToLocalStorage();
        renderTodo(todoArray);
        //alert('task succefully added');
        showPopUps("Task added successfully", "success");
    }
});

// Action feature

function deleteTodo(id){
    todoArray = todoArray.filter((todo) => todo.id !== id);
    saveToLocalStorage();
    renderTodo(todoArray);
    // console.log(todoArray);
    showPopUps('Task deleted successfully', 'success');
}
function completeTodo(id){
    let todo = todoArray.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    if(todo.complete){
        todo.status = "Completed";
    } else{
        todo.status = "Pending";
    }
    saveToLocalStorage();
    renderTodo(todoArray);
    // console.log(todo);
}
function editTodo(id){
    let todo = todoArray.find((ele) => ele.id === id);
    inputTodoElement.value = todo.task;
    addBtnElement.classList.add('changeIcon');
    todoArray = todoArray.filter((e) => e.id !== id);
    saveToLocalStorage();
    renderTodo(todoArray);
    if(addBtnElement.classList.contains('changeIcon')){
        addBtnElement.innerHTML = '<i class="fas fa-check"></i>';
        addBtnElement.addEventListener('click', ()=> {
            showPopUps('Task Updated successfully', 'success');
            addBtnElement.innerHTML = '<i class="fas fa-plus"></i>';
        });
    }

}

//toggeling feature

const filterBtnElement = document.querySelector('.js-filter-btn');
const hiddenBtnsElement = document.querySelector('.js-hidden-btns');

filterBtnElement.addEventListener('click', () => {
    hiddenBtnsElement.classList.add('showBtn');
    if(!hiddenBtnsElement.classList.contains('hidden')){
        hiddenBtnsElement.style.display = 'none';
        hiddenBtnsElement.classList.add('hidden');
    } else{
        hiddenBtnsElement.style.display = 'block';
        hiddenBtnsElement.classList.remove('hidden');
    }
});

//Filter feature

const compFil = document.getElementById('completed');
const pendFil = document.getElementById('pending');
const allFil = document.getElementById('all');

allFil.addEventListener('click', () => {
    let dummyArray;
    dummyArray = todoArray;
    renderTodo(dummyArray);
});

compFil.addEventListener('click', () => {
    let dummyArray;
    dummyArray = todoArray.filter((todo) => todo.status === "Completed");
    renderTodo(dummyArray);
});

pendFil.addEventListener('click', () => {
    let dummyArray;
    dummyArray = todoArray.filter((todo) => todo.status === "Pending");
    renderTodo(dummyArray);
});

//delete all feature

const deleteAllBtnElement = document.querySelector(".js-delete-all");
deleteAllBtnElement.addEventListener('click', () => {
    todoArray=[];
    saveToLocalStorage();
    renderTodo(todoArray);
    showPopUps('All Todos Deleted successfully', 'success');
});

//message alert feature

const msgBox = document.querySelector('.popup-bar');

function showPopUps(message, type){
    let msg = `
    <div class="alert alert-${type}">
        <div>
            <span>
                ${message}
            </span>
        </div>
    </div>
    `;
    msgBox.innerHTML = `${msg}`;
    msgBox.classList.add('showMsg');
    msgBox.classList.remove('hideMsg');
    setTimeout(() => {
        msgBox.classList.remove('showMsg');
        msgBox.classList.add('hideMsg');
    }, 2000);
}
