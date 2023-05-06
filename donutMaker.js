const clickerButton = document.getElementById("clicker");
const autoButton = document.getElementById("autoButton");
const clickersOwned = document.getElementById("clickersOwned");
let clickCount = 0;
let amountForAuto = 100;
let numberOfAutoclickers = [];
let numberOfAutoclicks = 0;
autoButton.disabled = true;
autoButton.style.backgroundColor = "gray";

clickerButton.addEventListener("click", function(){
    clickCount ++;
    clickerButton.innerHTML = "Donuts baked: " + clickCount;
    if (clickCount >= amountForAuto && clickCount % amountForAuto === 0){
        autoButton.disabled = false;
    }
});

autoButton.addEventListener("click", function(){
    if (clickCount >= amountForAuto){
    clickCount -= amountForAuto;
    numberOfAutoclicks++;
    amountForAuto = Math.floor(amountForAuto*1.1);
    numberOfAutoclickers.push(setInterval(function(){
        clickerButton.click();
    }, 1000));
    autoButton.disabled = true;
    autoButton.style.backgroundColor = "gray";
    if (clickCount >= amountForAuto){
        autoButton.disabled = false;
        autoButton.style.backgroundColor = "pink";
    }
}
});

function stopAutoclicking(){
    clearInterval(numberOfAutoclickers.pop());
    numberOfAutoclicks--;
}



// autoButton.style.backgroundColor = "gray";