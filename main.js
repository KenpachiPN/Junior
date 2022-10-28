
class Animal {
	constructor(especie, edad, color) {
		this.especie = especie; // this es el objeto - // especie parámetro - el objeto "this" tendrá una carácteristica
		this.edad = edad;
		this.color = color;
		this.informacion = `Soy un ${this.especie}, tengo ${this.edad}, 
		años, soy de color ${this.color}, y mi raza es ${this.raza}`;
	}
	verInformacion = () => {
		document.write(this.informacion + "<br>") 
	};
} 

class Perro extends Animal {
	constructor(especie, edad, color, raza) {
		super(especie, edad, color);
		this.raza = raza;
	};
	static ladrar() {
		alert("¡WAW!");
	}
}
// const siempre para objetos
const gato = new Animal("felino", 2, "negro");
const pajaro = new Animal("loro", 1, "verde");

Perro.ladrar();
