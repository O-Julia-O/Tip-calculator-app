const tipBtns = document.querySelectorAll(".tip");
tipBtns.forEach(button => {
    /* adding listener on every button */
    button.addEventListener("click", () => {
        clearPersentange();
        addingClassName(button, "selected");
    });
});
function addingClassName(item, className) {
    item.classList.add(className);
}
function clearPersentange() {
    /* delete class from others buttons */
    tipBtns.forEach(button => {
        button.classList.remove("selected");
    });
}
}