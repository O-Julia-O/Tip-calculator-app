const tipBtns = document.querySelectorAll(".tip");
const fieldsAll = document.querySelectorAll("input");
const resetBtn = document.getElementById("reset-btn");

const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const output = document.getElementById('tipAmount');
const output2 = document.getElementById('displayedAmount');

let selectedTip = 0;

tipBtns.forEach(button => {
    /* adding listener on every button */
    button.addEventListener("click", () => {
        clearPersentange();
        selectedTip = parseFloat(button.dataset.tip);
        addingClassName(button, "selected");
        calculate();
    });
});

resetBtn.addEventListener("click", reset);


/* checks for any updates */
[billInput, peopleInput].forEach(input => {
    input.addEventListener("input", () => {
        calculate();
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

function reset() {
    fieldsAll.forEach(field => {
        field.value = "";
    });

    clearPersentange();
    output.textContent = `0`;
    output2.textContent = `0`;
}

function calculate() {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(people) || people <= 0 || selectedTip === 0) {
      output.textContent = "Please fill all fields and select tip.";
      output2.textContent = "Please fill all fields and select tip.";
      return;
    }

    const tipAmount = bill * (selectedTip / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    output.textContent = `Each person pays: $${perPerson.toFixed(2)}`;
    output2.textContent = `Total: $${total.toFixed(2)}`;
}