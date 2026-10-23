
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

  let componente = document.getElementById("parametros");
  let listaClass = componente.classList;
  listaClass.add("activa");
  listaClass.remove("activa");

  function ocultarSecciones (){
     let secciones = document.querySelectorAll("section");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("activa");
    }
  }

  function mostrarSeccion (id){
    ocultarSecciones();
    document.getElementById(id).classList.add("activa");
  }

  function guardarTasa (){
    let valor = document.getElementById("tasaInteres").value;
    let tasaInteres = Number(valor);
    let mensaje = document.getElementById("mensajeTasa");
    if(tasaInteres >= 10 && tasaInteres <= 20){
      mensaje.innerHTML = "taza configurada correctamente:"+ tasaInteres +"%";
    }else{
       mensaje.innerHTML = "La tasa debe estar entre 10% y 20%";
    }
    
  }

  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios