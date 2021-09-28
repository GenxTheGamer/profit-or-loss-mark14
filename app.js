const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    console.log(`Profit ${profit} and Profit% ${profitPercentage}%`);
  } else if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    console.log(`Loss ${loss} and Loss% ${lossPercentage}%`);
  } else {
    console.log("no pain no gain no gain no pain");
  }
}

calculateProfitAndLoss(100, 10, 10);
calculateProfitAndLoss(20, 10, 100);
