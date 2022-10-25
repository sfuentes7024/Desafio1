
class Usuario{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);

    }

    addMascota(mascota){
        this.mascotas.push(mascota);

    }

    countMascotas(){
        const cantidad = this.mascotas.length;

        if(cantidad >= 1){
            const texto = `${this.nombre} posee ${cantidad} mascotas`
            console.log(texto);

        }else{
            const texto = `${this.nombre} no posee mascotas`
            console.log(texto);
        }

    }

    addBook(libro, autor){
        this.libros.push({libro, autor});

    }
    
    getBooksName(){
        console.log(this.libros.map((e) => e.libro))

    }
}

const user = new Usuario('Santiago', 'Fuentes');
user.getFullName();
user.addMascota('Perro');
user.addMascota('Gato');
user.countMascotas();
user.addBook('Los Pilares de la Tierra', 'Ken Follet');
user.addBook('El señor de los Anillos', 'J.R.R. Tolkien');
user.addBook('Crimen y Castigo', 'Fiodor Dostoyevski');
user.getBooksName();

