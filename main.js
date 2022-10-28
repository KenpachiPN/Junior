
class Celular {
	constructor (color, peso, tamaño, rdc, ram) {
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.rdc = rdc;
		this.ram = ram;
		this.encendido = false;
	}
	presionarBotonEncendido() {
		if(this.encendido == false) {
			alert("Celular prendido");
			this.encendido = true;
		} else {
			alert("Celular apagado");
			this.encendido = false;
		}
	}

	reiniciar() {
		if(this.encendido == true) {
			alert("Reiniciando celular");
		} else {
			alert("El celular está apagado");
		}
	}

	tomarFoto() {
		alert(`Foto tomada en una resolución de: ${this.rdc}`);
	}

	grabarVideo() {
		alert(`Grabando vídeo con una resolución de: ${this.rdc}`);
	}
	mobileInfo() {
		return `
		Color: <b>${this.color} </b><br>
		Peso: <b>${this.peso} </b><br>
		Tamaño: <b>${this.tamaño} </b><br>
		Resolución de Cámara: <b>${this.rdc} </b><br>
		Memoria Ram: <b>${this.ram} </b><br>
		`
	}
}



celular1 = new Celular ("rojo", "150g", "5'", "full HD", "1GB");
celular2 = new Celular ("negro", "155g", "5.4'", "HD", "2GB");
celular3 = new Celular ("blanco", "146g", "5.9'", "full HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()}
	`);