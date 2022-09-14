// Finding the input text elements
const Name=document.querySelector('#name')
const email=document.querySelector('#email')
const phone=document.querySelector('#phone')
const message=document.querySelector('#message')
const btn=document.querySelector('#mybtn')
const mylocalmachine="http://localhost/se/bootstrap-cloning/backend/adduserinfo.php"
btn.addEventListener(onclick,()=>
fetch(mylocalmachine,{method:'POST', body: new URLSearchParams({"name":Name.value,"email":email.value,"phone":phone.value,"message":message.value})})
)