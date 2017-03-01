var miEquipo = new Object();
var nivel=0;

miEquipo.nombre = undefined;
miEquipo.deporte = undefined;
miEquipo.numJugadores = undefined;
miEquipo.numPlantilla = undefined;
miEquipo.categoria = undefined;


miEquipo.setNombre = function(){
	miEquipo.nombre = prompt("Nombre del equipo: ");
}
miEquipo.getNombre = function(){
	return miEquipo.nombre;
}

miEquipo.setDeporte = function(){
	miEquipo.deporte = prompt("Deporte del equipo: ");
}
miEquipo.getDeporte = function(){
	return miEquipo.deporte;
}

miEquipo.setNumPlantilla = function(){
	miEquipo.numPlantilla = prompt("Número de jugadores en plantilla: ");
}
miEquipo.getNumPlantilla = function(){
	return miEquipo.numPlantilla;
}

miEquipo.setNumJugadores = function(){
	miEquipo.numJugadores = prompt("Número de jugadores: ");
}
miEquipo.getNumJugadores = function(){
	return miEquipo.numJugadores;
}

miEquipo.setCategoria = function(){
	miEquipo.categoria = prompt("Categoria del equipo: ");
}
miEquipo.getCategoria = function(){
	return miEquipo.categoria;
}
//Métodos
miEquipo.entrenar = function(){
	nivel = ++nivel;
}

miEquipo.desentrenar = function(){
	nivel= --nivel;
}

miEquipo.mostrarDatos = function(){
	document.getElementById("deporte").innerHTML = miEquipo.getDeporte();
	document.getElementById("nombre").innerHTML = miEquipo.getNombre();
	document.getElementById("plantilla").innerHTML = miEquipo.getNumPlantilla();
	document.getElementById("jugadores").innerHTML = miEquipo.getNumJugadores();
	document.getElementById("categoria").innerHTML = miEquipo.getCategoria();
	document.getElementById("nivel").innerHTML = nivel;
}

miEquipo.jugar = function(){
	document.getElementById("fecha").innerHTML = prompt("Fecha próximo partido:");
	document.getElementById("contrincante").innerHTML= prompt("Contrincante:");
	document.getElementById("lugar").innerHTML= prompt("Lugar del encuentro:");
}

//Otras funciones
function iniNivel(){
	return 0;
}
function actualizarNivel(){
	document.getElementById("nivel").innerHTML = nivel;
}
function introducirDatos(){
	nivel=iniNivel();
	console.log("nivel:" + nivel);
	miEquipo.setDeporte();
	miEquipo.setNombre();
	miEquipo.setNumPlantilla();
	miEquipo.setNumJugadores();
	miEquipo.setCategoria();
}