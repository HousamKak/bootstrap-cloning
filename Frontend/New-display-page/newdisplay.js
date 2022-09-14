fetch('http://localhost/se/bootstrap-cloning/backend/adduserinfo.php/getUserInfo.php')
.then(x=> x.json())
.then(y => console.log(y))