function calcular(){
    var edad = document.getElementById("edad").value;
    var sueldo = document.getElementById("sueldo").value;
    var hijos = document.getElementById("hijos").value;

   
    if ((edad > 18 && edad < 72) && (sueldo > 19999 && sueldo < 500000)){
        swal({
            title: "FELICITACIONES!!",
            text: "Puedes obtener la Tarjeta Crypto!",
            icon: "success",
            button: "click aqui",
          });
   }

   else if ((edad > 18 && edad < 72) && (sueldo > 1000 && sueldo < 19999) && (hijos == true)) {
    swal({
        title: "FELICITACIONES!!",
        text: "Puedes obtener la Tarjeta Eco!",
        icon: "success",
        button: "click aqui",
      });
   }

   else if ((edad > 18 && edad < 72) && (sueldo > 1000 && sueldo < 19999)){
    swal({
        title: "FELICITACIONES!!",
        text: "Puedes obtener la Tarjeta Joven!",
        icon: "success",
        button: "click aqui",
      });
   }

   else {
        swal({
            title: "LO LAMENTAMOS",
            text: "NO cumples los requisitos para obtener una tarjeta prepaga de LA CUEVA SRL.",
            icon: "error",
            button: "click aqui",
          });
    }
    
}


function limpiar() {
    document.getElementById ("botones").reset();
}

