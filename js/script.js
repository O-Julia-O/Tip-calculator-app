// === DOM Elements ===
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn:not(.tip-btn--custom)');
const customTipInput = document.querySelector('.tip-btn--custom');
const tipAmountOutput = document.getElementById('tipAmount');
const totalOutput = document.getElementById('displayedAmount');
const resetBtn = document.getElementById('reset-btn');

let selectedTip = 0;

// === Handle Tip Button Clicks ===
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    clearActiveTips();
    button.classList.add('tip-btn--active');
    selectedTip = parseFloat(button.dataset.tip);
    customTipInput.value = ''; 
    calculate();
  });
});

// === Handle Custom Tip Input ===
customTipInput.addEventListener('input', () => {
  clearActiveTips();
  const customValue = parseFloat(customTipInput.value);
  selectedTip = isNaN(customValue) ? 0 : customValue;
  calculate();
});

// === Handle Bill & People Input ===
[billInput, peopleInput].forEach(input => {
  input.addEventListener('input', () => {
    limitInputValues();
    calculate();
  });
});

// === Handle Reset Button ===
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '1';
  customTipInput.value = '';
  selectedTip = 0;
  clearActiveTips();
  updateDisplay(0, 0);
});

// === Clear Active Button States ===
function clearActiveTips() {
  tipButtons.forEach(btn => btn.classList.remove('tip-btn--active'));
}

// === Limit Inputs (sanity checks) ===
function limitInputValues() {
  //max 6 numbers
  if (billInput.value.length > 6) {
    billInput.value = billInput.value.slice(0, 6);
  }

  // from 1 to 25
  const peopleVal = parseInt(peopleInput.value);
  if (peopleVal > 25) {
    peopleInput.value = 25;
  } else if (peopleVal < 1 || isNaN(peopleVal)) {
    peopleInput.value = 1;
  }
}

// === Main function ===
function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(people) || people <= 0 || selectedTip === 0) {
    updateDisplay(0, 0);
    return;
  }

  const tipAmount = bill * (selectedTip / 100);
  const total = bill + tipAmount;
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = total / people;

  updateDisplay(tipPerPerson, totalPerPerson);
}

// === Uodating DOM ===
function updateDisplay(tip, total) {
  tipAmountOutput.textContent = "$" + tip.toFixed(2);
  totalOutput.textContent = "$" + total.toFixed(2);
}
