const clickerButton = document.getElementById("clicker");
const autoButton = document.getElementById("autoButton");
let clickCount = 0;
let amountForAuto = 100;
autoButton.disabled = true;

clickerButton.addEventListener("click", function(){
    clickCount ++;
    clickerButton.innerHTML = "Donuts baked: " + clickCount;
    if (clickCount === amountForAuto) {
        autoButton.disabled = false;
    }
});

autoButton.addEventListener("click", function(){
    clickCount -= amountForAuto;
    amountForAutoCost = Math.floor(amountForAuto*1.1);
    setInterval(function() {
        clickerButton.click();
    }, 1000);
    autoButton.disabled = true;
    if (clickCount >= amountForAuto){
        autoButton.disabled = false;
    }
});



// autoButton.style.backgroundColor = "gray";

// clickerButton.onclick = function() {
//     count += 1;
//     clickerButton.innerHTML = "Donuts baked: " + count;
// };

// setInterval(function() {
//     clickerButton.click();
// }, 1000);


// let donutAmount = count;
// let donutEvent = clickerButton.onmouseup;

// let autoClicker = setInterval (function(){
//     count += 1;
// });


// autoButton.addEventListener("click", function() {
// // let autoPurchase = function(num){
// //     return num * 1.1;}

//     if (autoPurchase == true) {
//         autoButton.disabled == false;
//     } else {
//         autoButton.style.backgroundColor = "gray";
//         autoButton.disabled == true;
//     }
// }