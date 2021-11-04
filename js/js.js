//Cree una función que, a partir de un array con valores numéricos, devuelva otro array con todos los números que son pares.

function pares(numeros) {
  arregloPar = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      arregloPar.push(numeros[i]);
    }
  }
  if (arreglo.length == 0) {
    console.log("No hay datos");
  } else {
    console.log(arregloPar);
  }
}
pares([1, 3, 5, 7, 8, 10]);

//Cree una función que sume todos los elementos de un arreglo dado.
function sumaArreglo(suma) {
  let sum = 0;
  for (let i = 0; i < suma.length; i++) {
    sum += suma[i];
  }
  console.log(sum);
}
sumaArreglo([3, 2, 44, 5, 6, 7, 10]);

/*Hagamos 5 operaciones sobre un array:
• Cree un array llamado musicales con los elementos "Rock" y "Salsa".
• Agregue el elemento "Merengue".
• Remplace el valor del medio por "Clasica". El codigo para encontrar el
valor del medio debe de funcionar para cualquier array con valor impar.
• Elimine el primer valor del array y muéstrelo
• Agregue "Cumbia" y "Bolero" al arreglo.*/

let arregloMusica = ["Rock", "Salsa"];
function agregarMusica(genero) {
  arregloMusica.push(genero);
}
function reemplazarMedio() {
  if (arregloMusica.length % 2 == 1) {
    let dato = arregloMusica.length / 2;
    arregloMusica[Math.round(dato - 1)] = "Clásica";
    console.log(arregloMusica);
  }
}
function eliminarMusica() {
  console.log(arregloMusica[0]);
  arregloMusica.shift();
}
agregarMusica("Merengue");
reemplazarMedio();
eliminarMusica();
console.log(arregloMusica);
agregarMusica("Cumbia");
agregarMusica("Bolero");
console.log(arregloMusica);

//Create Div

function createDiv() {
  // create a new div element
  let a = document.getElementsByClassName("newDiv");
  if (a.length == 0) {
    newDiv = document.createElement("div");
    console.log(a);
    newDiv.setAttribute("id", "myDiv");
    newDiv.classList.add("newDiv");
    // and give it some content
    const newContent = document.createTextNode(
      "Ingrese la lista de números separados por un (,) o espacio. "
    );
    const newContent1 = document.createTextNode("Ejemplo '2,4,5' o '2 4 5'");
    const button = document.createElement("button");
    // add the text node to the newly created div
    button.innerHTML = "Regresar";
    button.type = "";
    button.onclick = function () {
      var elem = document.getElementById("myDiv");
      elem.parentNode.removeChild(elem);
    };
    button.name = "formBtn";
    newDiv.appendChild(newContent);
    newDiv.appendChild(newContent1);
    newDiv.appendChild(button);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("col-one");
    currentDiv.appendChild(newDiv, button);
  } else {
    alert("No");
  }
}
