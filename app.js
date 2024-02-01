//* Selectors

const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const dayTitle = document.querySelector("#dayName");
const added = document.querySelector("#adding")
const lang = navigator.language;

//*Date Arrange
let date = new Date();
let dayName = date.toLocaleString(lang, {
    weekday: "long"
});
dayTitle.innerHTML = dayName;
let listLenght = list.lenght;



//*Initials

let liste = [];


const generateTempalate = (todo) => {
    const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
    todoList.innerHTML += html;
};

//*Functions

function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim();
    if (todo.length) {
        listLenght = listLenght + 1;
        generateTempalate(todo);
        liste.push(added.value)
        localStorage.setItem("TodoList", JSON.stringify(liste))
        submitForm.reset();
    }
}
//*Event  Listeners
submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);
//*Genel Silme
function deleteTodos(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        localStorage.getItem("TodoList", JSON.stringify(liste))
    }
}

todoList.addEventListener("click", deleteTodos);



