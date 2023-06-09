const clickerButton = document.getElementById("clicker");
const autoButton = document.getElementById("autoButton");
const clickersOwned = document.getElementById("clickersOwned");
const donutBakers = document.getElementById("donutBakers");
const resetGame = document.getElementById("resetGame");

let clickCount = 0;
let amountForAuto = 100;
let numberOfAutoclickers = [];
let numberOfAutoclicks = 0;
autoButton.disabled = true;
autoButton.style.backgroundColor = "gray";

function updateAutoButtonColor() {
    if (clickCount < amountForAuto) {
      autoButton.style.backgroundColor = "gray";
    } else {
      autoButton.style.backgroundColor = "white";
    }
  }

clickerButton.addEventListener("click", function(){
    clickCount ++;
    clickerButton.innerHTML = "Donuts Baked: " + clickCount;
    if (clickCount >= amountForAuto && clickCount % amountForAuto === 0){
        autoButton.disabled = false;
    }
    if (clickCount < amountForAuto){
        autoButton.disabled = true;
        updateAutoButtonColor();
    }
    else{
        autoButton.disabled = false;
        updateAutoButtonColor();
    }
});

autoButton.addEventListener("click", function(){
    if (clickCount >= amountForAuto){
    clickCount -= amountForAuto;
    numberOfAutoclicks++;
    amountForAuto = Math.floor(amountForAuto*1.1);
    autoButton.innerHTML = "Donut Bakers Working: " + numberOfAutoclicks;
    donutBakers.innerHTML = amountForAuto;
    numberOfAutoclickers.push(setInterval(function(){
        clickerButton.click();
    }, 1000));
    autoButton.disabled = true;
    autoButton.style.backgroundColor = "gray";
    updateAutoButtonColor();
    }
});

resetGame.addEventListener("click", function(){
    clickCount = 0;
    amountForAuto = 100;
    numberOfAutoclickers.forEach(clearInterval);
    numberOfAutoclickers = [];
    clickerButton.innerText = "Click to Make Donuts";
    autoButton.disabled = true;
    autoButton.style.backgroundColor = "gray";
    autoButton.innerHTML = "Click to Purchase Donut Baker";
    donutBakers.innerHTML = "100";
    console.log("game reset");
});



