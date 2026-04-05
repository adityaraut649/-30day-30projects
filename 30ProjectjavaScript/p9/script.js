let counter = 1;

function addToList() {
  const inp = document.querySelector("input");
  let value = inp.value;

  if (value.trim()) {
    const list = document.querySelector("#list");
    const tododiv = createTodoElement(value);

    list.appendChild(tododiv);

    counter++;
    inp.value = "";
  } else {
    alert("Please enter a name");
  }
}

function createTodoElement(value) {
  const tododiv = document.createElement("div");
  tododiv.className = "todo";

  const inputElement = createInputElement(value);
  const updateElement = createUpdateButton(inputElement);
  const deleteElement = createDeleteButton(tododiv);

  tododiv.appendChild(inputElement);
  tododiv.appendChild(updateElement);
  tododiv.appendChild(deleteElement);

  return tododiv;
}

function createInputElement(value) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = "Enter your name";
  input.id = "todo-" + counter;
  return input;
}

function createUpdateButton(inputElement) {
  const button = document.createElement("button");
  button.innerText = "Edit"; // better default

  inputElement.readOnly = true; // start as readonly

  button.onclick = function () {
    if (inputElement.readOnly) {
      inputElement.readOnly = false;
      button.innerText = "Save";
      inputElement.focus();
      inputElement.style.outline = "1px solid #007BFF";
    } else {
      inputElement.readOnly = true;
      button.innerText = "Edit";
      inputElement.style.outline = "none";
    }
  };
  return button;
}

function createDeleteButton(todoDiv) {
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.onclick = function () {
    const list = document.querySelector("#list");
    list.removeChild(todoDiv);
    counter--;
  };
  return button;
}
