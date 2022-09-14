// Finding the input text elements
btn=document.querySelector('#mybtn')
Name=document.querySelector('#name')
email=document.querySelector('#email')
phone=document.querySelector('#phone')
message=document.querySelector('#message')
mylocalmachine="http://localhost/se/bootstrap-cloning/backend/adduserinfo.php"
btn.addEventListener('click',function(){fetch(mylocalmachine,{method:'POST', body: new URLSearchParams({"name":Name.value,"email":email.value,"phone":phone.value,"message":message.value})})})
