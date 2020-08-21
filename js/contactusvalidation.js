const form = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const contact = document.getElementById("contactnum");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener('submit', e =>{
    e.preventDefault();

    successAlert(checkInputs());
});

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const contactValue = contact.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const numbers = /^[0-9]+$/;
    let successCount = 0;

    //===============Firstname Field Check===============
    if(firstnameValue === ''){
        setErrorFor(firstname, 'Firstname cannot be blank');
    }else {
        setSuccessFor(firstname);
        successCount++;
    }

    //===============Lastname Field Check===============
    if(lastnameValue === ''){
        setErrorFor(lastname, 'Firstname cannot be blank');
    }else {
        setSuccessFor(lastname);
        successCount++;
    }

    //===============Contact Field Check===============
    if(contactValue === ''){
        setErrorFor(contact, 'Contact number cannot be blank');
    }else if(!contactValue.match(numbers)){
        setErrorFor(contact, 'Contact can only contain numbers');
    }else{
        setSuccessFor(contact);
        successCount++;
    }

    //===============Email Field Check===============
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else {
        setSuccessFor(email);
        successCount++;
    }

    //===============Message Field Check===============
    if(messageValue === ''){
        setErrorFor (message, 'Message cannot be blank');
    }else{
        setSuccessFor(message);
        successCount++;
    }

    return successCount;
}

function successAlert (successCount){
    const countForSuccess = 5;

    if(successCount == countForSuccess){
        alert ("Message has been sent");
    } else {
        console.log("Failed");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}