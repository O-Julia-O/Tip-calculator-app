const tipBtns = document.querySelectorAll(".tip");
const fieldsAll = document.querySelectorAll("input");
const resetBtn = document.getElementById("reset-btn");

tipBtns.forEach(button => {
    /* adding listener on every button */
    button.addEventListener("click", () => {
        clearPersentange();
        addingClassName(button, "selected");
    });
});

resetBtn.addEventListener("click", reset);

function addingClassName(item, className) {
    item.classList.add(className);
}
function clearPersentange() {
    /* delete class from others buttons */
    tipBtns.forEach(button => {
        button.classList.remove("selected");
    });
}
function reset() {
    fieldsAll.forEach(field => {
        field.value = "";
    });

    clearPersentange();
}
}