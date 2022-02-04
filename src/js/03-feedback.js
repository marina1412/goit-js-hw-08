import throttle from 'lodash/throttle';
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input[name="email"]')
const messageRef = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

populateMessageOutput();

const formData = {

};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormRefInput, 500) );



function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log(formData);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    delete formData.email;
    delete formData.message;
}

function onFormRefInput(evt) { 
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateMessageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    if (savedMessage) {
        inputRef.value = parsedMessage.email;
        messageRef.value = parsedMessage.message;
        if (!parsedMessage.hasOwnProperty('email')) {
        inputRef.value = " ";
    } 
    if (!parsedMessage.hasOwnProperty('message')) {
        messageRef.value = " ";
     } 
    } 
    

}
