let text = document.querySelector("#text");
let btn = document.querySelector(".btn");
let ul = document.querySelector(".ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (text.value == "") {
    return;
  }
  ul.innerHTML += `<li class="li">${text.value}<button class="btn_delete">Delete</button></li>`;
  text.value = null;
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_delete")) {
    e.target.parentElement.remove();
  }
});
