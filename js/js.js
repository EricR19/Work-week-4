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
    suma = suma.filter((e) => String(e).trim());
    for (let i = 0; i < suma.length; i++) {
        sum += parseInt(suma[i]);
    }
    if (suma.length > 1) {
        return "La suma total del arreglo es: " + sum;
    } else {
        return "No hay números en el arreglo";
    }
}

/*Hagamos 5 operaciones sobre un array:
• Cree un array llamado musicales con los elementos "Rock" y "Salsa".
• Agregue el elemento "Merengue".
• Remplace el valor del medio por "Clasica". El codigo para encontrar el
valor del medio debe de funcionar para cualquier array con valor impar.
• Elimine el primer valor del array y muéstrelo
• Agregue "Cumbia" y "Bolero" al arreglo.*/

let arregloMusica = ["Rock", "Salsa"];



function agregarMusica(genero) {
    let musica = arregloMusica;
    musica.push(genero);
    return musica;
}

function reemplazarMedio(genero) {
    if (arregloMusica.length % 2 == 1) {
        let dato = arregloMusica.length / 2;
        arregloMusica[Math.round(dato - 1)] = genero;
        return arregloMusica
    } else {
        return "El arreglo de música no es de tamaño impar, no se puede reemplazr el medio"
    }
}

function eliminarMusica() {
    let primero = arregloMusica[0];
    arregloMusica.shift();
    return primero;
}


//Create Div

function createDiv() {
    let a = document.getElementsByClassName("newDiv");
    if (a.length == 0) {
        createElementsNumerosPares();
    } else {
        alert("No");
    }
}

function createDivSuma() {
    let a = document.getElementsByClassName("myDivSuma");
    if (a.length == 0) {
        createElementsSumaArreglo();
    } else {
        alert("No");
    }
}

function createDivMusica() {
    let a = document.getElementsByClassName("myDivMusica");
    if (a.length == 0) {
        createElementsMusica();
    } else {
        alert("No");
    }
}

function createElementsNumerosPares() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "myDiv");
    newDiv.classList.add("newDiv");
    const newContent = document.createTextNode(
        "Ingrese la lista de números separados por una (,) o espacio. "
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
    buttonEnviar.onclick = function() {
        let remove = document.getElementById("infoPares");
        remove.textContent = "";
        obtenerdatos();
    };
    const button = document.createElement("button");

    button.innerHTML = "Regresar";
    button.setAttribute("class", "btn btn-primary btn-1");
    button.onclick = function() {
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

function createElementsSumaArreglo() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "myDivSuma");
    newDiv.classList.add("myDivSuma");
    const newContent = document.createTextNode(
        "Ingrese la lista de números separados por una (,) o espacio. Para obtener la suma total. "
    );
    const label = document.createTextNode("Ingrese los números: ");
    const labelInfo = document.createElement("label");
    labelInfo.setAttribute("id", "infoSuma");
    const inp = document.createElement("input");
    inp.setAttribute("id", "sumaNumeros");
    inp.setAttribute("placeholder", "Ejemplo: '2,4,5' ó '2 4 5'");

    const buttonEnviar = document.createElement("button");
    buttonEnviar.innerHTML = "Obtener Pares";
    buttonEnviar.setAttribute("class", "btn btn-primary btn-1");
    buttonEnviar.setAttribute("id", "buttonPares");
    buttonEnviar.onclick = function() {
        let remove = document.getElementById("infoSuma");
        remove.textContent = "";
        obtenerSuma();
    };
    const button = document.createElement("button");

    button.innerHTML = "Regresar";
    button.setAttribute("class", "btn btn-primary btn-1");
    button.onclick = function() {
        var elem = document.getElementById("myDivSuma");
        elem.parentNode.removeChild(elem);
    };
    button.name = "formBtn";
    newDiv.appendChild(newContent);
    newDiv.appendChild(label);
    newDiv.appendChild(inp);
    newDiv.appendChild(buttonEnviar);
    newDiv.appendChild(button);
    newDiv.appendChild(labelInfo);

    const currentDiv = document.getElementById("sumaArreglo");
    currentDiv.appendChild(newDiv);
}

function createElementsMusica() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "myDivMusica");
    newDiv.classList.add("myDivMusica");
    const newContent = document.createTextNode(
        "Ingrese el género músical "
    );
    const label = document.createTextNode("Ingrese los números: ");
    const labelInfo = document.createElement("label");
    labelInfo.setAttribute("id", "infoMusica");
    const inp = document.createElement("input");
    inp.setAttribute("id", "generoMusical");
    inp.setAttribute("placeholder", "Ejemplo: 'bachata'");

    const buttonEnviar = document.createElement("button");
    buttonEnviar.innerHTML = "Insertar Género";
    buttonEnviar.setAttribute("class", "btn btn-primary btn-1");
    buttonEnviar.setAttribute("id", "insertGenero");
    buttonEnviar.onclick = function() {
        let remove = document.getElementById("infoMusica");
        remove.textContent = "";
        insertarGenero();
    };
    const buttonRemplazarMedio = document.createElement("button");
    buttonRemplazarMedio.innerHTML = "Ingresar Valor en el medio";
    buttonRemplazarMedio.setAttribute("class", "btn btn-primary btn-1");
    buttonRemplazarMedio.setAttribute("id", "reemplazar");
    buttonRemplazarMedio.onclick = function() {
        let remove = document.getElementById("infoMusica");
        remove.textContent = "";
        insertarMedio();
    }

    const buttonEliminar = document.createElement("button");
    buttonEliminar.innerHTML = "Eliminar primer valor";
    buttonEliminar.setAttribute("class", "btn btn-primary btn-1");
    buttonEliminar.onclick = function() {
        let remove = document.getElementById("infoMusica");
        remove.textContent = "";
        eliminar();

    }

    const button = document.createElement("button");
    button.innerHTML = "Regresar";
    button.setAttribute("class", "btn btn-primary btn-1");
    button.onclick = function() {
        var elem = document.getElementById("myDivMusica");
        elem.parentNode.removeChild(elem);
    };
    button.name = "formBtn";
    newDiv.appendChild(newContent);
    newDiv.appendChild(label);
    newDiv.appendChild(inp);
    newDiv.appendChild(buttonEnviar);
    newDiv.appendChild(buttonRemplazarMedio);
    newDiv.appendChild(buttonEliminar);
    newDiv.appendChild(button);
    newDiv.appendChild(labelInfo);

    const currentDiv = document.getElementById("musica");
    currentDiv.appendChild(newDiv);

}

function obtenerdatos() {
    let data = document.getElementById("numerosPares").value.replace(/ /g, ",");
    let a = pares(data.split(","));
    mensaje(a);
}

function obtenerSuma() {
    let data = document.getElementById("sumaNumeros").value.replace(/ /g, ",");
    mensajeSuma(sumaArreglo(data.split(",")));
}

function insertarGenero() {
    let data = document.getElementById("generoMusical").value;
    let a = agregarMusica(data);
    document.getElementById("infoMusica").textContent += a;
}

function insertarMedio() {
    let data = document.getElementById("generoMusical").value;
    let a = reemplazarMedio(data);
    document.getElementById("infoMusica").textContent += a;
}

function eliminar() {
    let eliminado = eliminarMusica();
    document.getElementById("infoMusica").textContent += eliminado;
}

function mensaje(z) {
    document.getElementById("infoPares").textContent += z;
}

function mensajeSuma(msj) {
    document.getElementById("infoSuma").textContent += msj;
}