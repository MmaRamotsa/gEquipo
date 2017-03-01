var miEquipo = new Object();

miEquipo.nombre = undefined;
miEquipo.deporte = undefined;
miEquipo.numJugadores = undefined;
miEquipo.numPlantilla = undefined;
miEquipo.categoria = undefined;
miEquipo.nivel = 0;


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
	++miEquipo.nivel;
	//En este caso también vale nivel++
	alert("¡BUEN TRABAJO!")
	actualizarNivel();
}

miEquipo.desentrenar = function(){
	--miEquipo.nivel;
	//En este caso también vale nivel--
	actualizarNivel();
}

miEquipo.mostrarDatos = function(){
	document.getElementById("deporte").innerHTML = miEquipo.getDeporte();
	document.getElementById("nombre").innerHTML = miEquipo.getNombre();
	document.getElementById("plantilla").innerHTML = miEquipo.getNumPlantilla();
	document.getElementById("jugadores").innerHTML = miEquipo.getNumJugadores();
	document.getElementById("categoria").innerHTML = miEquipo.getCategoria();
	document.getElementById("nivel").innerHTML = miEquipo.nivel;
}

miEquipo.jugar = function(){
	document.getElementById("fecha").innerHTML = prompt("Fecha próximo partido:");
	document.getElementById("contrincante").innerHTML= prompt("Contrincante:");
	document.getElementById("lugar").innerHTML= prompt("Lugar del encuentro:");
}

//Otras funciones
function actualizarNivel(){
	document.getElementById("nivel").innerHTML = miEquipo.nivel;
}
function introducirDatos(){
	miEquipo.setDeporte();
	miEquipo.setNombre();
	miEquipo.setNumPlantilla();
	miEquipo.setNumJugadores();
	miEquipo.setCategoria();
}