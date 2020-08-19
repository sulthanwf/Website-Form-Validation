const form = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const contact = document.getElementById("contactnum");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs()
});

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const contactValue = contact.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const numbers = /^[0-9]+$/;

    if(firstnameValue === ''){
        setErrorFor(firstname, 'Firstname cannot be blank');
    }else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === ''){
        setErrorFor(lastname, 'Firstname cannot be blank');
    }else {
        setSuccessFor(lastname);
    }

    if(contactValue === ''){
        setErrorFor(contact, 'Contact number cannot be blank');
    }else if(!contactValue.match(numbers)){
        setErrorFor(contact, 'Contact can only contain numbers');
    }else{
        setSuccessFor(contact);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else {
        setSuccessFor(email);
    }

    if(messageValue === ''){
        setErrorFor (message, 'Message cannot be blank');
    }else{
        setSuccessFor(message);
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