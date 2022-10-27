
const sumar = (num1, num2) => {
	return parseInt(num1) + parseInt(num2)
};

const restar = (num1, num2) => {
	return parseInt(num1) - parseInt(num2)
};

const multiplicar = (num1, num2) => {
	return parseInt(num1) * parseInt(num2)
};

const dividir = (num1, num2) => {
	return parseInt(num1) / parseInt(num2)
};

alert("¿Qué operación matemática básica deseas realizar?");
let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir");

if(operacion == 1) {
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	let resul = sumar(numero1,numero2);
	alert("El resultado de sumar " + numero1 + " y " + numero2 + " es de " + resul);
}

else if(operacion == 2) {
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	let resul = restar(numero1,numero2);
	alert("El resultado de restar " + numero1 + " y " + numero2 + " es de " + resul);
}

else if(operacion == 3) {
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	let resul = multiplicar(numero1,numero2);
	parseFloat(resul);
	alert("El resultado de multiplicar " + numero1 + " y " + numero2 + " es de " + resul);
}

else if(operacion == 4) {
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	let resul = dividir(numero1,numero2);
	parseFloat(resul);
	alert("El resultado de dividir " + numero1 + " y " + numero2 + " es de " + resul);
} else {
	alert("No se encontró tu operación");
}