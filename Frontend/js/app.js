// Variables Globales
const URL = "http://localhost:8080/equipos";
let equipos = [];

// Selectores
const tbody = document.querySelector('#tbody');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const btnGuardar = document.querySelector('#btnGuardar');
const marcador1 = document.querySelector('#marcador1');
const marcador2 = document.querySelector('#marcador2');

// Eventos
document.addEventListener('DOMContentLoaded', obtenerEquipos); //Cuando carga la pagina
btnGuardar.addEventListener('click', guardarEquipo); //Cuando da click al botón

async function obtenerEquipos() { //Obtiene los equipos

  try {
    const res = await fetch(URL);
    const data = await res.json();
    ordenarEquipos(data);
    mostrarEquipos();
    llenarSelects();
  } catch (error) {
    console.log(error);
  }

}


async function guardarEquipo(e) {
  //Previene el submit del formulario
  e.preventDefault();
  //Si los dos valores de los select son iguales O los marcadores están vacios
  if (select1.value === select2.value || [marcador1.value, marcador2.value].includes('')) return;

  equipos.forEach(async equipo => {
    if (select1.value == equipo.id) {
      //Si empatan
      if (marcador1.value === marcador2.value) {
        equipo.partidos_empatados += 1;
        equipo.partidos_jugados += 1;
        equipo.puntos += 1;
      }
      //Si gana el equipo 1 al 2
      if (marcador1.value > marcador2.value) {
        equipo.partidos_ganados += 1;
        equipo.partidos_jugados += 1;
        equipo.puntos += 3;
      }
      if (marcador1.value < marcador2.value) {// si gana el 2 al 1
        equipo.partidos_jugados += 1;
        equipo.partidos_perdidos += 1;
      }

      //Inserta mediante metodo POST interactuando con la API
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(equipo)
      });
    }

    if (select2.value == equipo.id) {
      //Si empatan
      if (marcador1.value === marcador2.value) {
        equipo.partidos_empatados += 1;
        equipo.partidos_jugados += 1;
        equipo.puntos += 1;
      }
      //Si gana el equipo 1 al 2
      if (marcador1.value < marcador2.value) {
        equipo.partidos_ganados += 1;
        equipo.partidos_jugados += 1;
        equipo.puntos += 3;
      }
      if (marcador1.value > marcador2.value) {// si gana el 2 al 1
        equipo.partidos_jugados += 1;
        equipo.partidos_perdidos += 1;
      }

      //Inserta mediante metodo POST interactuando con la API
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(equipo)
      });
    }


    obtenerEquipos();
  })
}

//Lena los selects con los nombres de las selecciones
function llenarSelects() {
  limpiarSelects();
  equipos.forEach(equipo => {
    const { id, nombre, bandera_img } = equipo;
    select1.innerHTML += `
      <option value="${id}">
      ${nombre}
      </option>
   `;
    select2.innerHTML += `
    <option value="${id}">
      ${nombre}
      </option>
   `;
  });
}


//Imprime los equipos en el tbody
function mostrarEquipos() {
  limpiarHTML();
  equipos.forEach((equipo, index) => {
    const { id, nombre, bandera_img, partidos_empatados, partidos_ganados, partidos_jugados, partidos_perdidos, puntos } = equipo;
    //Le agrego nuevo HTML al tbody sin eliminar lo anterior
    tbody.innerHTML += `
          <tr>
            <td>${index + 1}</td> 
            <td><img src="img/${bandera_img}" height="35" width="51px" class="me-3" /> ${nombre}</td>
            <td>${partidos_jugados}</td>
            <td>${partidos_empatados}</td>
            <td>${partidos_ganados}</td>
            <td>${partidos_perdidos}</td>
            <td>${puntos}</td>
          </tr>
    `;
  });
}


// Ordena los equipos por su número de puntos
function ordenarEquipos(data) {
  equipos = data.sort((a, b) => {
    if (a.puntos > b.puntos) return - 1;
    if (a.puntos < b.puntos) return 1;
    return 0;
  });
}

function limpiarHTML() {
  tbody.innerHTML = '';
}

function limpiarSelects() {
  select1.innerHTML = '';
  select2.innerHTML = '';
}