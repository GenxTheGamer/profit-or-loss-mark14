const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = ((current - initial) * quantity).toFixed(2);
    var profitPercentage = (((current - initial) * 100) / initial).toFixed(2);
    showOutput(`
    Profit : ${profit} 
    Profit% : ${profitPercentage}%`);
  } else if (initial > current) {
    var loss = ((initial - current) * quantity).toFixed(2);
    var lossPercentage = (((initial - current) * 100) / initial).toFixed(2);
    showOutput(`
    Loss : ${loss} 
    Loss% : ${lossPercentage}%`);
  } else {
    showOutput("No Pain = No Gain , No Gain = No Pain");
  }
}

function showOutput(message) {
  output.innerText = message;
}

function submitHandler() {
  let initialPriceValue = Number(initialPrice.value);

  let quantityValue = Number(quantity.value);

  let currentPriceValue = Number(currentPrice.value);

  if ((initialPriceValue, quantityValue, currentPriceValue !== 0)) {
    if ((initialPriceValue, quantityValue, currentPriceValue <= 0)) {
      showOutput("Values cant be less than 0");
    } else {
      let calculatedValue = Number(
        calculateProfitAndLoss(
          initialPriceValue,
          quantityValue,
          currentPriceValue
        )
      );
    }
  } else {
    showOutput("Values cant be 0 or Empty");
  }
}

submitBtn.addEventListener("click", submitHandler);
