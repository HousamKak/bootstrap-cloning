const Name=document.querySelector('#Name')
const email=document.querySelector('#email')
const phone=document.querySelector('#phone')
const Message=document.querySelector('#message')
// const Namebr=document.querySelector('#Name-br')
// const emailbr=document.querySelector('#email-br')
// const phonebr=document.querySelector('#phone-br')
// const Messagebr=document.querySelector('#Message-br')
// const div=document.createElement('div')
// const p=document.createElement('p')

// fetch("put local link",{method:'POST', body: new URLSearchParams{"name":'k'})
"hello"

Name.addEventListener('input', (event) => {
    const input = event.target.value;
    // if (input.length<5){
    // Namebr.after(div)
    // div.append(p)
    // p.append(Document.createTextNode("A name is required."))
    // }

})

email.addEventListener('input', (event) => {
    const  email_value= event.target.value;
})

phone.addEventListener('input', (event) => {
    const phone_value = event.target.value;})

message.addEventListener('input', (event) => {
 const message_value = event.target.value;})