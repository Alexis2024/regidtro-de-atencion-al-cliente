const excellentBtn = document.getElementById("excelente-btn");
const goodBtn = document.getElementById("bueno-btn");
const regularBtn = document.getElementById("regular-btn");
const badBtn = document.getElementById("malo-btn");
const resultsContainer = document.getElementById("results-container");
const closeResultsBtn = document.getElementById("close-results");
const verRegistroBtn = document.getElementById("ver-registro");
const resultsTableBody = document.querySelector("#results-table tbody");

let calificaciones = [];

excellentBtn.addEventListener("click", function() {
  calificaciones.push({
    tipo: "excelente",
    fecha: new Date()
  });
  alert("¡Gracias por calificarnos!");
});

goodBtn.addEventListener("click", function() {
  calificaciones.push({
    tipo: "bueno",
    fecha: new Date()
  });
  alert("¡Gracias por calificarnos!");
});

regularBtn.addEventListener("click", function() {
  calificaciones.push({
    tipo: "regular",
    fecha: new Date()
  });
  alert("¡Gracias por calificarnos!");
});

badBtn.addEventListener("click", function() {
  calificaciones.push({
    tipo: "malo",
    fecha: new Date()
  });
  alert("¡Gracias por calificarnos!");
});

verRegistroBtn.addEventListener("click", function() {
  if (calificaciones.length > 0) {
    resultsTableBody.innerHTML = "";
    calificaciones.forEach(function(calificacion) {
      let row = resultsTableBody.insertRow();
      let calificacionCell = row.insertCell();
      let fechaCell = row.insertCell();
      calificacionCell.innerHTML = calificacion.tipo;
      fechaCell.innerHTML = calificacion.fecha.toLocaleString();
    });
    resultsContainer.style.display = "block";
  } else {
    alert("¡Aún no se han registrado calificaciones!");
  }
});

closeResultsBtn.addEventListener("click", function() {
  resultsContainer.style.display = "none";
});













