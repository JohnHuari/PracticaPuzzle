// botones
let btn1 = document.getElementById("ba1");
let btn2 = document.getElementById("bb2");
let btn3 = document.getElementById("bc3");
let btn4 = document.getElementById("bd4");
let btn5 = document.getElementById("be5");
let btn6 = document.getElementById("bf6");
let btn7 = document.getElementById("bg7");
let btn8 = document.getElementById("bh8");
let btn9 = document.getElementById("bi9");
let btn0 = document.getElementById("bj0");
// los h2
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

// iniciamos con las condiciones por boton para letras y numeros

const boton1 = () => {
  if (letras.innerHTML == "" && numeros.innerHTML == "") {
    letras.innerHTML += "A";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
    numeros.innerHTML += "1";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton2 = () => {
  if (letras.innerHTML == "A" && numeros.innerHTML == "") {
    letras.innerHTML += "B";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
    numeros.innerHTML += "2";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton3 = () => {
  if (letras.innerHTML == "AB" && numeros.innerHTML == "") {
    letras.innerHTML += "C";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12") {
    numeros.innerHTML += "3";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton4 = () => {
  if (letras.innerHTML == "ABC" && numeros.innerHTML == "") {
    letras.innerHTML += "D";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123") {
    numeros.innerHTML += "4";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton5 = () => {
  if (letras.innerHTML == "ABCD" && numeros.innerHTML == "") {
    letras.innerHTML += "E";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234") {
    numeros.innerHTML += "5";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton6 = () => {
  if (letras.innerHTML == "ABCDE" && numeros.innerHTML == "") {
    letras.innerHTML += "F";
  } else if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345") {
    numeros.innerHTML += "6";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton7 = () => {
  if (letras.innerHTML == "ABCDEF" && numeros.innerHTML == "") {
    letras.innerHTML += "G";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "123456"
  ) {
    numeros.innerHTML += "7";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton8 = () => {
  if (letras.innerHTML == "ABCDEFG" && numeros.innerHTML == "") {
    letras.innerHTML += "H";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "1234567"
  ) {
    numeros.innerHTML += "8";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton9 = () => {
  if (letras.innerHTML == "ABCDEFGH" && numeros.innerHTML == "") {
    letras.innerHTML += "I";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "12345678"
  ) {
    numeros.innerHTML += "9";
  } else {
    alert("No cumple con el orden establecido");
  }
};
const boton0 = () => {
  if (letras.innerHTML == "ABCDEFGHI" && numeros.innerHTML == "") {
    letras.innerHTML += "J";
  } else if (
    letras.innerHTML == "ABCDEFGHIJ" &&
    numeros.innerHTML == "123456789"
  ) {
    numeros.innerHTML += "0";
  } else {
    alert("No cumple con el orden establecido");
  }
};

// Eventos
btn1.onclick = () => {
  boton1();
};
btn2.onclick = () => {
  boton2();
};
btn3.onclick = () => {
  boton3();
};
btn4.onclick = () => {
  boton4();
};
btn5.onclick = () => {
  boton5();
};
btn6.onclick = () => {
  boton6();
};
btn7.onclick = () => {
  boton7();
};
btn8.onclick = () => {
  boton8();
};
btn9.onclick = () => {
  boton9();
};
btn0.onclick = () => {
  boton0();
};

console.log("prueba");