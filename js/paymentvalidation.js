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

    checkInputs()
});

function checkInputs(){
    const nameValue = uname.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const cardNumValue = cardNum.value.trim();
    const numbers = /^[0-9]+$/;
    let radioCheck = false;

    if(nameValue === ''){
        setErrorFor(uname, 'Name cannot be blank');
    } else {
        setSuccessFor(uname);
    }

    if(addressValue === ''){
        setErrorFor(address, 'Name cannot be blank');
    } else {
        setSuccessFor(address);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(cardNumValue === ''){
        setErrorFor(cardNum, 'Card number cannot be blank');
    }else if(!cardNumValue.match(numbers)){
        setErrorFor(cardNum, 'Card number can only contain numbers');
    } else{
        setSuccessFor(cardNum);
    }

    for(var i=0;i<creditCards.length;i++){
        if(creditCards[i].checked){
            radioCheck = true;
        }
    }

    if(radioCheck == false){
        setErrorFor2(creditCardId, 'Please choose 1 card');
    } else {
        setSuccessFor2(creditCardId);
    }

    if(checkBox.checked == false){
        setErrorFor2(checkBoxId, 'Please agree to terms & condition');
    } else {
        setSuccessFor2(checkBoxId);
    }
    /*if(document.querySelector('input[name="credit_card"]:checked').value === null){
        setErrorFor2(creditCards, 'Please choose 1 credit card');
    } else {
        setSuccessFor2(creditCards);
    }*/

    if(checkBox === undefined){
        setErrorFor2(checkBox, 'Please agree with the terms & condition');
    } else {
        setSuccessFor2(checkBox);
    }
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