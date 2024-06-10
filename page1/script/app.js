const btn = document.querySelector("#button");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
     sidebar.classList.toggle("show")
})