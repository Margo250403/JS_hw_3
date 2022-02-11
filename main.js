"use strict";

var phone_number = prompt("Введите ваш номер телефона:");


//enter 13 chars 
if (phone_number.length === 13) {
     console.log(code)
}
else {
     alert("Поле не должно быть пустым и должно содержать 13 символов")
}

//enter "+"
var plus = phone_number[0]
if (plus === "+") {
     console.log(code)
}
else {
     alert("Телефон должен вводться в формате +000000000000")
}

//only numbers
var isError = false

for (var char of phone_number) {
     var code = char.charCodeAt()
     if (plus === 43 && code < 48 || code > 57) {
          isError = true;
          break;
     }
     console.log(code)
}

if (isError) {
     alert("Номер телефона должен состоять только из цифр и плюса в начале")
}

