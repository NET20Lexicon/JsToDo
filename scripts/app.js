import { item } from "/scripts/item.js";

((todo) => {
  document.querySelector("#additem").addEventListener("change", additem);
  let listan = document.querySelector("#listan");

  todo.save = function () {
    let items = document.querySelectorAll(".save");
    var result = Array.from(items).map((e) => new item(e.childNodes[0].nodeValue, e.classList.contains("change")));
    localStorage.setItem("listan", JSON.stringify(result));
  };

  function additem() {
    let li = document.createElement("li");
    li.innerHTML = this.value;
    this.value = "";
    li.classList.add("list-group-item", "save");
    li.addEventListener("click", change);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger", "btn-sm");
    button.innerHTML = "Ta bort";
    button.addEventListener("click", remove);

    li.appendChild(button);

    listan.appendChild(li);
  }

  function remove() {
    this.parentElement.remove();
  }

  function change() {
    this.classList.toggle("change");
  }
})((window.todo = window.todo || {}));

document.querySelector("h1").addEventListener("click", window.todo.save);
