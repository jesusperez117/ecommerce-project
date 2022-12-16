const nombreUsuario = prompt("Hola, como te llamas?");
alert(`Hola, ${nombreUsuario}, ingresa 2 numeros`);
console.log(nombreUsuario);

let numero1 = parseInt(prompt("Numero 1:"));
console.log(numero1);
let numero2 = parseInt(prompt("Numero 2:"));
console.log(numero2);

if (numero1 == numero2){
    alert("Ambos numeros son iguales");
    }
    else if(numero1 >= numero2){
    alert(numero1 + " es mayor que " + numero2);    
    }
    else{
        alert(numero2 + " es mayor que " + numero1);
    }

const cantidad1 = numero1 + numero2;
console.log(numero1);
alert("La suma de los 2 numeros es: " + cantidad1);

let cantidad2 = numero1 - numero2;
console.log(numero2);
alert("La resta de los 2 numeros es: " + cantidad2);

