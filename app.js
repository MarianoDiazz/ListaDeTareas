const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateText = document.getElementById("dateText");

// Task container
const taskContainer = document.getElementById("taskContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
};

setDate();

const addNewTask = (e) => {
  e.preventDefault();
  const { value } = e.target.taskText;
  //   Si el usuario no ingreso nada, evito que se agrefuen tareas vacias
  if (!value) return;
  //   creo el elemento tipo div
  const task = document.createElement("div");
  //   agrego clase roundBorder de css
  task.classList.add("task", "roundBoder");
  //   agrego funcion para cuando hago click cambiar el estado de la tarea
  task.addEventListener("click", changeTaskState);
  //   Dentro del elemento pongo el texto ingresado pór el usuario
  task.textContent = value;
  //   Agrego tarea al principio de la lista con PREPEND
  taskContainer.prepend(task);
  //   reseteo el form
  e.target.reset();
};

const changeTaskState = (e) => {
  e.target.classList.toggle("done");
};
// Creo funcion ordenar tareas
const order = () => {
  const done = [];
  const toDo = [];
  //   accedo a los hijos de taskContainer para iterar los elementos, y pregunto si el elemento tiene la clase DONE
  //   si no tiene la clase DONE, lo agrego al array toDo
  taskContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  //   Hago un spred primero del toDo, asi las tareas por hacer quedan primero(arriba)
  return [...toDo, ...done];
};
// LLamo a la funcion creada arriba, iterando cada elemento del Array agregandolo al Task Container
const renderOrderTask = () => {
  order().forEach((el) => taskContainer.appendChild(el));
};
