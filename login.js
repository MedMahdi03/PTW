let login = document.querySelector(".container");
let form = document.querySelector("form");
let btn = document.querySelector("#leave");
let btn1 = document.querySelector("#login");

console.log(btn);
console.log(btn1);

btn.addEventListener("click", () => {
  login.style = "display: none";
  document.body.style = "background-color: white";
});

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(Object.fromEntries(data));
});
