function loginUsuario(){
    const nombre = prompt('Ingrese su nombre de usuario')
    const contraseña1 = prompt('Ingrese su contraseña')
    const contraseña2 = prompt('Ingrese su contraseña nuevamente')
    const espacios = false;
    const cont = 0;

    while (!espacios && (cont < contraseña1.length && cont < contraseña2.length)) {
        if (contraseña1.charAt(cont) == " "){
            espacios = true;
            cont++;
        }
            if (espacios) {
                alert ("La contraseña no puede contener espacios en blanco");
                return false;
              }
              if (espacios) {
                alert ("La contraseña no puede contener espacios en blanco");
                return false;
              }
              if (contraseña1.length === 0 || contraseña2.length === 0) {
                alert("Los campos de la password no pueden quedar vacios");
                return false;
              }
              if (contraseña1 !== contraseña2) {
                alert("Las passwords deben de coincidir");
                return false;
              } else {
                alert("Todo esta correcto");
                return true; 
              }
      }
         
      
}