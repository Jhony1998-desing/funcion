// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Sacar el primer elemento (nombre del cliente)
    const cliente = pedido.shift();
  
    // Añadir "bebida" al inicio del array
    pedido.unshift("bebida");
  
    // Añadir el nombre del cliente al final del array
    pedido.push(cliente);
  
    return pedido;
  }
  
  // Pedido
  const pedidoOriginal = ["Carlos", "pizza", "ensalada"];
  const pedidoProcesado = procesarPedido(pedidoOriginal);
  console.log(pedidoProcesado); // Imprime: ["bebida", "pizza", "ensalada", "Jhonatan"]

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        suma += numeros[i];
      }
    }
  
    return suma;
  }
  
  // Imprimir
  const numeros = [1, 2, 3, 4, 5, 6];
  console.log(sumarPares(numeros)); // Imprime: 12 (2 + 4 + 6)
  

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].slice(-1).toLowerCase() !== 'a') {
        return false;
      }
    }
    return true;
  }
  
  // Ejemplo de uso
  const palabras = ["casa", "mesa", "taza", "ropa"];
  console.log(palabrasTerminanConA(palabras)); // Imprime: true
  
  const otrasPalabras = ["casa", "mesa", "taza", "luz"];
  console.log(palabrasTerminanConA(otrasPalabras)); // Imprime: false
  


// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    
    // Si la palabra no se encuentra, devuelve un array vacío
    if (index === -1) {
      return [];
    }
    
    // Devuelve todas las palabras después del índice encontrado
    return words.slice(index + 1);
  }
  
  // Imprimir
  const wordsArray = ["manzana", "banana", "cereza", "durazno", "melon"];
  console.log(buscaPalabras(wordsArray, "cereza")); // Imprime: ["durazno", "melon"]
  console.log(buscaPalabras(wordsArray, "uva")); // Imprime: []
  



// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].

function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "JavaScript") {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }
  
  // Matriz
  const matriz = [
    ["HTML", "CSS", "JavaScript"],
    ["Python", "Java", "C++"],
    ["Ruby", "PHP", "Swift"]
  ];
  
  console.log(findJavaScript(matriz)); // Imprime: [0, 2]
  console.log(findJavaScript(matriz, "TypeScript")); // Imprime: [-1, -1]
  


// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.

function findMinMaxPages(paginas) {
    if (paginas.length === 0) {
      return [-1, -1];
    }
  
    let minIndex = 0;
    let maxIndex = 0;
  
    for (let i = 1; i < paginas.length; i++) {
      if (paginas[i] < paginas[minIndex]) {
        minIndex = i;
      }
      if (paginas[i] > paginas[maxIndex]) {
        maxIndex = i;
      }
    }
  
    return [minIndex, maxIndex];
  }
  
  // Paginas
  const paginas = [300, 150, 450, 200, 700];
  console.log(findMinMaxPages(paginas)); // Imprime: [1, 4]
  


// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
