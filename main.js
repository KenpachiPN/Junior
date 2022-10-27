
let cantidad = prompt("cuantos alumnos son");
let alumTotales = [];

for (i = 0; i < cantidad; i++) {
	alumTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0];

}

const tomarAsistencia = (nombre, p)=> {
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
		alumTotales[p][1]++
	};
}

for (i = 0; i < 30; i++) {
	for(alumno in alumTotales) {
		tomarAsistencia(alumTotales[alumno][0], alumno)
	};
}

for(alumno in alumTotales) {
	let result = `${alumTotales[alumno[0]]}: <br>
	_____________Presentes: <b> ${alumTotales[alumno][1]}: </b> <br>
	_____________Ausencia: <b> ${30 - parseInt(alumTotales[alumno][1])} </b>
	`;
	if (30 - alumTotales[alumno][1] > 18) {
		result += "<b style = color 'red'> Reprobado por inasistencias </b> <br> <br>"
	} else {
		result += "<br><br>";
	}document.write(result);
};
