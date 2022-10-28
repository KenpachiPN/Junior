
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
		this.raza = null;
	};
	set setRaza(newName) { 
		this.raza = newName; 
	}
	get getRaza (){
		return this.raza;
	}

}
// const siempre para objetos
const perro = new Perro("perro", 5, "marrón", "rotwailer");
const gato = new Animal("felino", 2, "negro");
const pajaro = new Animal("loro", 1, "verde");

perro.setRaza = "Pedro";
document.write(perro.getRaza);
