function registroUsuario (datoNombre, datoApellido, datoEmail) {
	this.nombreUsuario = datoNombre;
	this.apellidosUsuario = datoApellido;
	this.email = datoEmail;

	this.mostrarDatos = function() {
		let msg = 'Se ha confirmado el registro de la nueva cuenta: Nombre: ' + this.nombreUsuario;
		msg += '; Apellido: ' + this.datoApellido + '; Email: ' + this.email;
		alert(msg);
	}

}
function crearUsuario(){
	let nombre = prompt('Ingrese su su nombre por favor');
	let apellidos = prompt('Ingrese su apellido por favor');
	let email = prompt('Ingrese su email por favor');
    let espacios = false;
    let cont = 0;

	let cuenta1 = new registroUsuario(nombre, apellidos, email);
	cuenta1.mostrarDatos();
}