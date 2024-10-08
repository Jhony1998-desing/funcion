// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
function despedir() {
    console.log("Adiós");
  }
  
  // Imprime
  despedir();  Imprime: "Adiós"
  

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
function multiplicarPorDos(numero) {
    return numero * 2;
  }
  
  // Imprimir
  console.log(multiplicarPorDos(5));  Imprime: 10
  
 

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
function esMayorDeEdad(edad) {
    return edad > 18;
  }
  
  // Imprimir
  console.log(esMayorDeEdad(20)); // true
  console.log(esMayorDeEdad(16)); // false
  

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
function multiplicar(a, b) {
    return a * b;
  }
  
  // Imprimir
  console.log(multiplicar(3, 4)); Imprime: 12
  
    

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
function saludarPersonalizado(nombre, apellido) {
  return `Hola, ${nombre} ${apellido}`;
}

// Imprimir
console.log(saludarPersonalizado("Jhonatan", "Benitez")); // Imprime: "Hola, Jhonatan Benitez"

  

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
  }
  
  // Imprimir
  console.log(calcularPotencia(2, 3));  Imprime: 8
  

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b) {
    return a - b;
  }
  
  // Imprimir
  console.log(restar(10, 3)); // Imprime: 7
  
    

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    
function dividir(a, b) {
    return a / b;
  }
  
  // Imprimir
  console.log(dividir(10, 2)); Imprime: 5
  
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
const multiplicarDOS = function(a, b) {
    return a * b;
  };
  
  // Imprimir
  console.log(multiplicarDOS(3, 4)); Imprime: 12
  

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
const saludar = function(nombre) {
    return "Hola, " + nombre;
  };
  
  // Imprimir
  console.log(saludar("Jhonatan")); // Imprime: "Hola,Jhonatan"
  

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
const esPar = function(numero) {
    return numero % 2 === 0;
  };
  
  // Imprimir
  console.log(esPar(4)); // Imprime: true
  console.log(esPar(7)); // Imprime: false
  

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
const multiplicarFlecha = (a, b) => a * b;

// Imprimir
console.log(multiplicarFlecha(3, 4)); // Imprime: 12


// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
const saludarFlecha = (nombre) => `Hola ${nombre}`;

// Imprimir
console.log(saludarFlecha("Jhonatan")); // Imprime: "Hola Jhonatan"


// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = (radio) => Math.PI * Math.pow(radio, 2);

// Imprimir
console.log(calcularArea(5)); // Imprime: 78.53981633974483



// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 0) {
      return 0;  
    } else {
      return n + suma(n - 1);  // Llamada recursiva
    }
  }
  
  // Imprimir
  console.log(suma(3)); // Imprime: 6
  console.log(suma(5)); // Imprime: 15
  
// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n === 0) {
      return 0;  
    } else if (n === 1) {
      return 1; 
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);  // Llamadas recursivas
    }
  }
  
  // Imprimir
  console.log(fibonacci(6)); // Imprime: 8
  

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (n === 0) {
      return 1; // Caso  el factorial de 0 es 1
    } else {
      return n * factorial(n - 1); // Llamada recursiva
    }
  }
  
  // Imprimir
  console.log(factorial(5)); // Imprime: 120
  

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
      return 1; // Caso: cualquier número elevado a 0 es 1
    } else {
      return base * potencia(base, exponente - 1); // Llamada recursiva
    }
  }
  
  // Imprimir
  console.log(potencia(2, 3)); // Imprime: 8
  
// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
