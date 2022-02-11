const inputBill = document.getElementById("inputBill");
const inputTip = document.getElementById("tipValue");
const reduceTip = document.getElementById("reduceTip");
const increaseTip = document.getElementById("increaseTip");
const inputPeopleValue = document.getElementById("peopleValue");
const reducePeople = document.getElementById("reducePeople");
const increasePeople = document.getElementById("increasePeople");
const finalTip = document.getElementById("calculatedTipAmount");
const finalBill = document.getElementById("calculatedFinalBill");

inputBill.addEventListener('input', setInputBillValue);
reduceTip.addEventListener('click', reduceTipValue);
increaseTip.addEventListener('click', increaseTipValue);
reducePeople.addEventListener('click', reducePeopleValue);
increasePeople.addEventListener('click', increasePeopleValue);
inputTip.addEventListener('input', setTipValue);
inputPeopleValue.addEventListener('input', setPeopleValue);

let inputBillValue = 0.0;
let tipValue ;
let peopleValue = 0;

function setInputBillValue() {
    inputBillValue = parseFloat(inputBill.value);
    if (inputBillValue) {
        if (inputBillValue > 0) {
            validInput(inputBill);
            calcualteFinalBill();
        } else if (inputBillValue < 0) { 
            invalidInput(inputBill);
        }
    } else {
        removeOutput();
        inputBillValue = 0;
    }
}
function reduceTipValue() {
    if (tipValue > 0) {
        tipValue -= 1;            
        inputTip.value = tipValue;
        calcualteFinalBill();
    }
}
function increaseTipValue() {
    if(!tipValue || tipValue < 0) {
        tipValue = 0.0;
    }
    tipValue += 1;
    inputTip.value = tipValue;
    validInput(inputTip);
    calcualteFinalBill();
}
function reducePeopleValue() {
    if (peopleValue > 0) {
        peopleValue -= 1;
        if (peopleValue == 0)
            removeOutput();
        inputPeopleValue.value = peopleValue;
        calcualteFinalBill();
    }
}
function increasePeopleValue() {
    if(peopleValue < 0) {
        peopleValue = 0.0;
    }
    peopleValue += 1;
    inputPeopleValue.value = peopleValue;
    validInput(inputPeopleValue);
    calcualteFinalBill();
}
function setTipValue() {
    tipValue = parseFloat(inputTip.value);
        if(!tipValue) {
            removeOutput();
        }
        if (tipValue < 0) {
            invalidInput(inputTip);
        } else {
            validInput(inputTip);
            calcualteFinalBill();
        }
     
}

function setPeopleValue() {
    peopleValue = parseFloat(inputPeopleValue.value);
    if (peopleValue) {
        if (peopleValue < 1) {
            invalidInput(inputPeopleValue);
        } else {
            validInput(inputPeopleValue);
            calcualteFinalBill();
        }
    } else {
        removeOutput();
        peopleValue = 0;
    }
}

function calcualteFinalBill() {
    if (inputBillValue > 0 && tipValue >= 0 && peopleValue > 0) {
        let tip = 0.0;
        let bill = 0.0;
        tip = (inputBillValue * tipValue / peopleValue) / 100;
        bill = (inputBillValue / peopleValue) + tip;
        finalTip.innerText = "$" + tip.toFixed(2);
        finalBill.innerText = "$" + bill.toFixed(2);
    }

    console.log("current tip value " + tipValue)
    console.log("current peopleValue " + peopleValue)
    console.log("current inputBillValue value " + inputBillValue)
}

function removeOutput() {
    finalTip.innerText = "";
    finalBill.innerText = "";
}
function invalidInput (element) {
    element.style.borderColor = "red";
    element.classList.add("text-danger");
    removeOutput();
    let errorTag = document.getElementById(element.id + "ErrorMessage");
    errorTag.hidden = false;
    console.log(errorTag.hidden);
}
function validInput (element) {
    element.style.borderColor = "lightgray";
    element.classList.remove("text-danger");
    let errorTag = document.getElementById(element.id + "ErrorMessage");
    errorTag.hidden = true;
}