// 1. Identificamos los elementos (como en tu PDF)
let logoChrome = document.getElementById("chrome");
let receptorChrome = document.getElementById("dest-chrome");

// 2. Evento cuando empezamos a arrastrar
logoChrome.addEventListener("dragstart", function(evento) {
    // Guardamos el ID del logo bajo la etiqueta "elemento"
    evento.dataTransfer.setData("elemento", evento.target.id);
});

// 3. Evento cuando el logo pasa sobre la casilla (imprescindible)
receptorChrome.addEventListener("dragover", function(evento) {
    evento.preventDefault(); // Esto permite que se pueda soltar
});

// 4. Evento cuando soltamos el logo en la casilla
receptorChrome.addEventListener("drop", function(evento) {
    evento.preventDefault();
    // Recuperamos el ID que guardamos antes
    let datos = evento.dataTransfer.getData("elemento");
    // Movemos el elemento al receptor
    evento.target.appendChild(document.getElementById(datos));
});

//----------------------------

// 1. Identificamos los elementos (como en tu PDF)
let logoFirefox = document.getElementById("firefox");
let receptorFirefox = document.getElementById("dest-firefox");

// 2. Evento cuando empezamos a arrastrar
logoFirefox.addEventListener("dragstart", function(evento) {
    // Guardamos el ID del logo bajo la etiqueta "elemento"
    evento.dataTransfer.setData("elemento", evento.target.id);
});

// 3. Evento cuando el logo pasa sobre la casilla (imprescindible)
receptorFirefox.addEventListener("dragover", function(evento) {
    evento.preventDefault(); // Esto permite que se pueda soltar
});

// 4. Evento cuando soltamos el logo en la casilla
receptorFirefox.addEventListener("drop", function(evento) {
    evento.preventDefault();
    // Recuperamos el ID que guardamos antes
    let datos = evento.dataTransfer.getData("elemento");
    // Movemos el elemento al receptor
    evento.target.appendChild(document.getElementById(datos));
});
//----------------------------
// 1. Identificamos los elementos (como en tu PDF)
let logoSafari = document.getElementById("safari");
let receptorSafari = document.getElementById("dest-safari");

// 2. Evento cuando empezamos a arrastrar
logoSafari.addEventListener("dragstart", function(evento) {
    // Guardamos el ID del logo bajo la etiqueta "elemento"
    evento.dataTransfer.setData("elemento", evento.target.id);
});

// 3. Evento cuando el logo pasa sobre la casilla (imprescindible)
receptorSafari.addEventListener("dragover", function(evento) {
    evento.preventDefault(); // Esto permite que se pueda soltar
});

// 4. Evento cuando soltamos el logo en la casilla
receptorSafari.addEventListener("drop", function(evento) {
    evento.preventDefault();
    // Recuperamos el ID que guardamos antes
    let datos = evento.dataTransfer.getData("elemento");
    // Movemos el elemento al receptor
    evento.target.appendChild(document.getElementById(datos));
});

