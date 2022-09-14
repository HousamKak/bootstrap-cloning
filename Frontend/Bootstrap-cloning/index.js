// Finding the input text elements
const namee=document.querySelector('#name')
const email=document.querySelector('#email')
const phone=document.querySelector('#phone')
const message=document.querySelector('#message')


// fetch("put local link",{method:'POST', body: new URLSearchParams{"name":'k'})

namee.addEventListener('input', (event) => {
    name_value = event.target.value;
    console.log(name_value)
})

email.addEventListener('input', (event) => {
    email_value= event.target.value;
})

phone.addEventListener('input', (event) => {
    phone_value = event.target.value;})

message.addEventListener('input', (event) => {
    message_value = event.target.value;})

    