//get element from page

//Determine the percentage you need to find

//Determine the sum from which you need to find the percentage

const enteredAmount = document.getElementById("total");
const percentageButtons = document.querySelectorAll("#percentage");
const displyedAmount = document.getElementById("displayedAmount");


const countPercentageOfAmount = (e) => {
    const numPercentage = parseFloat(e.target.textContent);

    const sumTips = parseFloat(enteredAmount.value) * (numPercentage / 100);
}

//adding event listener to all parcentage
percentageButtons.forEach((button) => {
    button.addEventListener('click', countPercentageOfAmount)
});


//while typing in input putting text in paragraph
function annotate() {
    document.getElementById("displayedAmount").innerHTML = enteredAmount.value;
}