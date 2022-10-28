
class animal {
	constructor(especie, edad, color) {
		this.especie = especie; // this es el objeto - // especie parámetro - el objeto "this" tendrá una carácteristica
		this.edad = edad;
		this.color = color;
		this.informacion = `Soy un ${this.especie}, tengo ${this.edad}, 
		años y soy de color ${this.color}`;
	}
	verInformacion = () => {
		document.write(this.informacion + "<br>") 
	};
	ladrar() {
		if (this.especie == "perro") {
			document.write("¡Waw! <br>");
		} else {
			document.write("No puede ladrar, ya que es un " + this.especie + "<br> ");
		}
	}
}
// const siempre para objetos
const perro = new animal("perro", 5, "marrón");
const gato = new animal("felino", 2, "negro");
const pajaro = new animal("loro", 1, "verde");

perro.ladrar();
gato.ladrar();
pajaro.ladrar();