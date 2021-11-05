//Cree una función que, a partir de un array con valores numéricos, devuelva otro array con todos los números que son pares.

function pares(numeros) {
  arregloPar = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0 && numeros[i] > 0) {
      arregloPar.push(numeros[i]);
    }
  }
  if (arregloPar.length == 0) {
    return "No hay numeros pares";
  } else {
    return "Los números pares del arreglo son: " + arregloPar;
  }
}

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
  let a = document.getElementsByClassName("newDiv");
  if (a.length == 0) {
    createElements();
  } else {
    alert("No");
  }
}
function createElements() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "myDiv");
  newDiv.classList.add("newDiv");
  const newContent = document.createTextNode(
    "Ingrese la lista de números separados por un (,) o espacio. "
  );
  const label = document.createTextNode("Ingrese los números: ");
  const labelInfo = document.createElement("label");
  labelInfo.setAttribute("id", "infoPares");
  const inp = document.createElement("input");
  inp.setAttribute("id", "numerosPares");
  inp.setAttribute("placeholder", "Ejemplo: '2,4,5' ó '2 4 5'");

  const buttonEnviar = document.createElement("button");
  buttonEnviar.innerHTML = "Obtener Pares";
  buttonEnviar.setAttribute("class", "btn btn-primary btn-1");
  buttonEnviar.setAttribute("id", "buttonPares");
  buttonEnviar.onclick = function () {
    let remove = document.getElementById("infoPares");
    remove.textContent = "";
    obtenerdatos();
  };
  const button = document.createElement("button");

  button.innerHTML = "Regresar";
  button.setAttribute("class", "btn btn-primary btn-1");
  button.onclick = function () {
    var elem = document.getElementById("myDiv");
    elem.parentNode.removeChild(elem);
  };
  button.name = "formBtn";
  newDiv.appendChild(newContent);
  newDiv.appendChild(label);
  newDiv.appendChild(inp);
  newDiv.appendChild(buttonEnviar);
  newDiv.appendChild(button);
  newDiv.appendChild(labelInfo);

  const currentDiv = document.getElementById("col-one");
  currentDiv.appendChild(newDiv);
}

function obtenerdatos() {
  let data = document.getElementById("numerosPares").value.replace(/ /g, ",");
  let a = pares(data.split(","));
  mensaje(a);
}
function mensaje(z) {
  document.getElementById("infoPares").textContent += z;
}
