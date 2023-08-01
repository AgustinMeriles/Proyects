
let contadorTareas = 1;

document.getElementById('formNuevaTarea').addEventListener('submit', agregarNuevaTarea);

function agregarNuevaTarea(event) {
    event.preventDefault();

    if (contadorTareas <= 18) {
        var titulo = document.getElementById('titulo').value;
        var nota = document.getElementById('nota').value;
        var fecha = document.getElementById('fecha').value;

        var nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('postit')

        var h3 = document.createElement('h3');
        h3.textContent = titulo;
        h3.classList.add('fondoTxtPostit')
        nuevoDiv.appendChild(h3);

        var pNota = document.createElement("p");
        pNota.textContent = nota;
        pNota.classList.add('fondoTxtPostit')
        nuevoDiv.appendChild(pNota);

        var pFecha = document.createElement("p");
        pFecha.innerHTML = fecha;
        pFecha.classList.add('fondoTxtPostit')
        nuevoDiv.appendChild(pFecha);

        var completado = document.createElement("button");
        completado.innerHTML = "Completado";
        completado.classList.add('botonCompletado')
        completado.addEventListener('click', function(){
            completarTarea(nuevoDiv);
        })
        nuevoDiv.appendChild(completado)

        document.getElementById('fondoTareas').appendChild(nuevoDiv);

        document.getElementById('titulo').value = '';
        document.getElementById('nota').value = '';
        document.getElementById('fecha').value = '';
        contadorTareas++;
    }else{
        alert("Limite de tareas pendientes alcanzado.")
    }
}

function completarTarea(divTarea) {
    contadorTareas--;
    divTarea.remove();
}