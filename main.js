let text = document.querySelector("#text");

let btn = document.querySelector(".btn");
let ul = document.querySelector(".ul");
let btn_delete = document.querySelector(".btn_delete");

btn.addEventListener("click", () => {
  if (text.value != "") {
    ul_div = document.createElement("div");
    ul.append(ul_div);
    ul_div.classList.add("ul_div");

    let new_li = document.createElement("li");
    ul_div.append(new_li);
    new_li.innerHTML = text.value;

    let btn_delete = document.createElement("button");
    ul_div.append(btn_delete);
    btn_delete.innerText = "Delete";
    btn_delete.classList.add("btn_delete");

    text.value = null;
  }
});

ul.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.classList.contains("btn_delete")) {
    event.target.parentElement.remove();
  } //burda bu gun dediyimiz
  // gel sene kalkulyatoru gosterim
});
