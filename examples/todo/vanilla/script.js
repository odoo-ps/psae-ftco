document.addEventListener("click", ev => {
    const addButton = document.getElementById("add-button");
    if (ev.target === addButton) {
        addToDo();
    } else if (ev.target.className === "remove-button")
        removeToDo(ev.target);
})

const addToDo = () => {
    const text = document.getElementById("text");
    const list = document.getElementById("list");
    if (!text.value) return;
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `<p>${text.value}</p><button class="remove-button">Remove</button>`;
    list.insertBefore(item, list.firstChild);
    text.value = "";
}

const removeToDo = (target) => {
    target.parentElement.remove();
}