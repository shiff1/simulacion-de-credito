
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


 function guardarCliente(){
    let cedula = document.getElementById("cedulaCliente").value;
    let nombre = document.getElementById("nombreCliente").value;
    let apellido = document.getElementById("apellidoCliente").value;
    let ingresos = document.getElementById("ingresosCliente").value;
    let egresos = document.getElementById("egresosCliente").value;

    
    ingresos = Number(ingresos);
    egresos = Number(egresos);

    
    let cliente = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        ingresos: ingresos,
        egresos: egresos
    };

    
    clientes.push(cliente);

    
    pintarClientes();

    limpiarFormulario();
 }

 function limpiarFormulario(){
    document.getElementById("cedulaCliente").value = "";
    document.getElementById("nombreCliente").value = "";
    document.getElementById("apellidoCliente").value = "";
    document.getElementById("ingresosCliente").value = "";
    document.getElementById("egresosCliente").value = "";
 }

 function pintarClientes(){
    let tbody = document.getElementById("tablaClientes");
    tbody.innerHTML = ""; // limpiar para no duplicar

    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];

        let fila = document.createElement("tr");

        let tdCedula = document.createElement("td");
        tdCedula.textContent = cliente.cedula;

        let tdNombre = document.createElement("td");
        tdNombre.textContent = cliente.nombre;

        let tdApellido = document.createElement("td");
        tdApellido.textContent = cliente.apellido;

        let tdIngresos = document.createElement("td");
        tdIngresos.textContent = cliente.ingresos;

        let tdEgresos = document.createElement("td");
        tdEgresos.textContent = cliente.egresos;

        
        let tdAcciones = document.createElement("td");
        let btnActualizar = document.createElement("button");
        btnActualizar.textContent = "Actualizar";
        btnActualizar.onclick = function(){
            alert("Actualizando a: " + cliente.nombre);
        };
        tdAcciones.appendChild(btnActualizar);

        fila.appendChild(tdCedula);
        fila.appendChild(tdNombre);
        fila.appendChild(tdApellido);
        fila.appendChild(tdIngresos);
        fila.appendChild(tdEgresos);
        fila.appendChild(tdAcciones);

        tbody.appendChild(fila);
    }
  }

