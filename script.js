function addElemento() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("tarefa").value.trim().toUpperCase();
  let dataValue = document.getElementById("data").value;
  let categoriaValue = document.getElementById("categoria").value;

  // Check if input is just the date (no task description)
  if (!inputValue || !dataValue) {
    alert("Por favor, preencha a descrição da tarefa e selecione a data.");
    return;
  }

  let formattedDate = new Date(dataValue).toLocaleDateString();
  inputValue = `${formattedDate} - ${inputValue} [${categoriaValue}]`;

  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("itemLista").appendChild(li);

  document.getElementById("tarefa").value = "";
  document.getElementById("data").value = "";
  document.getElementById("categoria").value = "Trabalho";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let editSpan = document.createElement("SPAN");
  let editTxt = document.createTextNode("✎");
  editSpan.className = "edit";
  editSpan.appendChild(editTxt);
  li.appendChild(editSpan);

  span.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };

  editSpan.onclick = function() {
    let li = this.parentElement;
    let taskText = li.childNodes[0].nodeValue;
    let taskCategory = taskText.match(/\[(.*?)\]$/)[1];
    let taskDate = taskText.split(" - ")[0];
    let taskDescription = taskText.split(" - ")[1].replace(/\[.*?\]$/, '').trim();
    document.getElementById("data").value = taskDate;
    document.getElementById("tarefa").value = taskDescription;
    document.getElementById("categoria").value = taskCategory;
    li.style.display = "none";
  };
}

// Add close buttons and edit buttons to existing list items
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

  let editSpan = document.createElement("SPAN");
  let editTxt = document.createTextNode("✎");
  editSpan.className = "edit";
  editSpan.appendChild(editTxt);
  myNodelist[i].appendChild(editSpan);
}

// Add event listeners to close buttons and edit buttons
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let edit = document.getElementsByClassName("edit");
for (let i = 0; i < edit.length; i++) {
  edit[i].onclick = function () {
    let li = this.parentElement;
    let taskText = li.childNodes[0].nodeValue;
    let taskCategory = taskText.match(/\[(.*?)\]$/)[1];
    let taskDate = taskText.split(" - ")[0];
    let taskDescription = taskText.split(" - ")[1].replace(/\[.*?\]$/, '').trim();
    document.getElementById("data").value = taskDate;
    document.getElementById("tarefa").value = taskDescription;
    document.getElementById("categoria").value = taskCategory;
    li.style.display = "none";
  };
}

// Toggle checked class on and off when clicking list items
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function clearList() {
  document.getElementById("itemLista").innerHTML = "";
}
