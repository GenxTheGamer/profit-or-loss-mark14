const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(`Profit ${profit} and Profit% ${profitPercentage}%`);
  } else if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`Loss ${loss} and Loss% ${lossPercentage}%`);
  } else {
    showOutput("no pain no gain no gain no pain");
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
