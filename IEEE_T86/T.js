let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];

get_data_storage();

submit.onclick = function () {
  if (input.value !== "") {
    add_to_array(input.value);
    input.value = "";
  }
};

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
    remove_from_storage(e.target.parentElement.getAttribute("data-id"));
  }

  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
  }
});

function add_to_array(textvalue) {
  let task = {
    id: Date.now(),
    title: textvalue,
    completed: false,
  };
  arrayOfTasks.push(task);

  add_to_page(arrayOfTasks);

  add_to_storage(arrayOfTasks);
}

function add_to_page(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";

    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
}
function add_to_storage(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function get_data_storage() {
  try {
    let data = window.localStorage.getItem("tasks");

    if (data) {
      let tasks = JSON.parse(data);
      arrayOfTasks = tasks;
      add_to_page(arrayOfTasks);
    }
  } catch (e) {
    console.log("Corrupted data in localStorage");
    localStorage.removeItem("tasks");
  }
}
function remove_from_storage(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  add_to_storage(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  add_to_storage(arrayOfTasks);
}
