var phone_number = prompt("Введите ваш номер телефона:");

//enter "+"

// if(phone_number[0] === 43){
//      console.log(phone_number)
// }
// else{
//      alert("Номер телефона должен начинаться на +")
// }

//enter 13 chars 
if (phone_number.length === 13) {
     console.log(phone_number)
}
else {
     alert("Номер телефона должен быть длиной 13 символов")
}

//only numbers
var isError = false

for (var char of phone_number) {
     var code = char.charCodeAt()
     if (code < 48 || code > 57 ) {
          isError = true;
          break;
     }
     console.log(code)
}

if (isError) {
     alert("Введите только числа, пожалуйста")
}

