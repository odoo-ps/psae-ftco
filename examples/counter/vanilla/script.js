const button = document.getElementById("incrementor");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {
    counter.value++;
});