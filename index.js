const Name=document.querySelector('#Name')
const email=document.querySelector('#email')
const phone=document.querySelector('#phone')
const Message=document.querySelector('#Message')
const Namebr=document.querySelector('#Name-br')
const emailbr=document.querySelector('#email-br')
const phonebr=document.querySelector('#phone-br')
const Messagebr=document.querySelector('#Message-br')
const div=document.createElement('div')
Name.addEventListener('input', (event) => {
    const input = event.target.value;
    if (input.length<5){
    Namebr.after(div)
    div.append(Document.createTextNode("A name is required."))
    }

})

email.addEventListener('input', (event) => {
    const input = event.target.value;})

phone.addEventListener('input', (event) => {
    const input = event.target.value;})

Message.addEventListener('input', (event) => {
 const input = event.target.value;})