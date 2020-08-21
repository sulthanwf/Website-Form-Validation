const form = document.getElementById("payment-form");
const uname = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const cardNum = document.getElementById("card-number");
const creditCardId = document.getElementById("credit-cards")
const checkBoxId = document.getElementById("check-box");
const creditCards = document.getElementsByName("credit_card");
const checkBox = document.getElementById("terms-condition");

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    successAlert(checkInputs(),cardType());
});

function checkInputs(){
    const nameValue = uname.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const cardNumValue = cardNum.value.trim();
    const numbers = /^[0-9]+$/;
    let radioCheck = false;
    let successCount = 0;

    //===============Name Field Check===============
    if(nameValue === ''){
        setErrorFor(uname, 'Name cannot be blank');
    } else {
        setSuccessFor(uname);
        successCount++;
    }

    //===============Address Field Check===============
    if(addressValue === ''){
        setErrorFor(address, 'Name cannot be blank');
    } else {
        setSuccessFor(address);
        successCount++;
    }

    //===============Email Field Check===============
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
        successCount++;
    }

    //===============Card Number Field Check===============
    if(cardNumValue === ''){
        setErrorFor(cardNum, 'Card number cannot be blank');
    }else if(!cardNumValue.match(numbers)){
        setErrorFor(cardNum, 'Card number can only contain numbers');
    } else{
        setSuccessFor(cardNum);
        successCount++;
    }

    //===============Radio Check===============
    for(var i=0;i<creditCards.length;i++){
        if(creditCards[i].checked){
            radioCheck = true;
        }
    }

    if(radioCheck == false){
        setErrorFor2(creditCardId, 'Please choose 1 card');
    } else {
        setSuccessFor2(creditCardId);
        successCount++;
    }

    //===============Check Box Check===============
    if(checkBox.checked == false){
        setErrorFor2(checkBoxId, 'Please agree to terms & condition');
    } else {
        setSuccessFor2(checkBoxId);
        successCount++;
    }

    return successCount;
}

function successAlert (successCount, cardType){
    const countForSuccess = 6;

    const nameValue = uname.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const cardNumValue = cardNum.value.trim();
    const successDiv = document.getElementById("success-message");
    let message = "Hi " + nameValue + ", Thanks for purchasing our product using your " + cardType + 
    " card that ends with " + cardNumValue.substr(-4) + ". we will send a copy of the receipt to " + emailValue + 
    " and send the product to " + addressValue;

    if(successCount == countForSuccess){
        const formControl = successDiv;
        const p = formControl.querySelector('p');
        formControl.className = 'form-group success-message';
        p.innerText = message;
    } else {
        console.log("Failed");
    }
}

function cardType(){
    let radioCheck = false;
    let cardType = "";

    for(var i=0;i<creditCards.length;i++){
        if(creditCards[i].checked){
            radioCheck = true;
            cardType = creditCards[i].id;
        }
    }
    return cardType;
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setErrorFor2(input, message){
    const formControl = input;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function setSuccessFor2(input){
    const formControl = input;
    formControl.className = 'form-group success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}