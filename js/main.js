//  
// Capatura de nodos
// 

let buscador = document.getElementById("buscador")
let filtroPaises = document.getElementById("filtroPaises")
let filtroPosicion = document.getElementById("filtroPosicion")
let orden = document.getElementById("orden")
let optionMenormayor = document.getElementById("menorMayor")
let optionMayormenor = document.getElementById("mayorMenor")
let optionAlfabetica = document.getElementById("alfabeticamente")
let tarjeta = document.getElementById("tarjeta")
let encontrado = document.getElementById("encontrado")
let btnAgregar = document.getElementById("btnAgregar")
let btnCarrito = document.getElementById("btnCarrito")
let bodyCarrito = document.getElementById("modal-bodyCarrito")

// Interviniendo en el HTML --> DOM

function catalogo(arrayjugador) {
    tarjeta.innerHTML = ""
    for (let jugador of arrayjugador) {
        let nuevaCard = document.createElement("div")
        nuevaCard.innerHTML =
            `<div id="${jugador.id}" class="card" style="width: 30rem;">
                <img src=img/${jugador.imagen} alt="${jugador.apellidoJugador} ${jugador.nombreJugador}">
    
                <div class="card-body">
                    <h5 class="card-title">${jugador.apellidoJugador} ${jugador.nombreJugador}</h5>
                    <p class="card-text">Nacionalidad: ${jugador.pais}</p>
                    <p class="card-text">Posición: ${jugador.posicion}</p>
                    <p class="card-text">$ ${jugador.precio}</p>
                    <button id="btnAgregar${jugador.id}" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>`

        tarjeta.appendChild(nuevaCard)

        let agregar = document.getElementById(`btnAgregar${jugador.id}`)
        
        agregar.addEventListener("click", ()=>{
            sumandoAlCarritoJugador(jugador);
        })
    }
}

function catalogoSeleccion(arrayseleccion){
    for (let seleccion of arrayseleccion) {
        let nuevaCardSeleccion = document.createElement("div")
        nuevaCardSeleccion.innerHTML =
            `<div id="${seleccion.seleccionId}" class="card" style="width: 30rem;">
                <img src=img/${seleccion.seleccionImagen} alt="${seleccion.seleccionPais}">
    
                <div class="card-body">
                    <h5 class="card-title">${seleccion.seleccionPais}</h5>
                    <p class="card-text">Nacionalidad: </p>
                    <p class="card-text">Posición: </p>
                    <p class="card-text">$ ${seleccion.seleccionPrecio}</p>
                    <button id="btnAgregar${seleccion.seleccionId}" class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>`
        
        tarjeta.appendChild(nuevaCardSeleccion)
    
        let agregar = document.getElementById(`btnAgregar${seleccion.seleccionId}`)
        
        agregar.addEventListener("click", ()=>{
            sumandoAlCarritoSeleccion(seleccion);
        })
    }
}

//
// functions
// 

// Catalogo
catalogo(listado)
catalogoSeleccion(listadoSeleccion)

// Buscador
function buscadorCard(buscando, array) {
    let cardEncontrado = array.filter(
        (valor) => valor.apellidoJugador.toLowerCase().includes(buscando.toLowerCase()) ||
        valor.nombreJugador.toLowerCase().includes(buscando.toLowerCase()) || 
        valor.pais.toLowerCase().includes(buscando.toLowerCase()) || 
        valor.posicion.toLowerCase().includes(buscando.toLowerCase())
        )

    cardEncontrado.length == 0 ? (encontrado.innerHTML = `<h3>No hay articulos con ese nombre</h3>` , catalogo(cardEncontrado)) : (encontrado.innerHTML = "" , catalogo(cardEncontrado))
}

// Orden
function ordenarMenorMayor(listadoMenor){
    const menorMayor = [].concat(listadoMenor)
    menorMayor.sort((a,b) => a.precio - b.precio)
    catalogo(menorMayor)
}

function ordenarMayorMenor(listadoMayor){
    const mayorMenor = [].concat(listadoMayor)
    mayorMenor.sort((param1, param2)=>{
    return param2.precio - param1.precio})
    catalogo(mayorMenor)
}

function ordenarAlfabetico(alfabetico){
    const ordenAlfabetico = [].concat(alfabetico)
    ordenAlfabetico.sort((a,b) => {
    if(a.apellidoJugador > b.apellidoJugador){
        return 1
    }
    if (a.apellidoJugador < b.apellidoJugador) {
        return -1
    }
    return 0;
    })
    catalogo(ordenAlfabetico) 
}

// 
// Eventos
//

// Buscador
buscador.addEventListener("input", ()=>{
    console.log(buscador.value)
    buscadorCard(buscador.value, listado)
})

// Filtros
// prueba de los botones todavia no andan
filtroPaises.addEventListener("change", ()=>{
    console.log("este boton anda")
})

filtroPosicion.addEventListener("click", ()=>{
    console.log("este boton anda")
})

// Orden
orden.addEventListener("change", function ordenarCards(){
    console.log(orden.value)
    if (orden.value == 1) {
        console.log("se ordena menor a mayor por precio")
        ordenarMenorMayor(listado)
    } else if (orden.value == 2) {
        console.log("se ordena mayor a menor por precio")
        ordenarMayorMenor(listado)
    } else if (orden.value == 3) {
        console.log("se ordena alfabeticamente por apellido")
        ordenarAlfabetico(listado)
    } else {
        console.log("nada pasa")
        catalogo(listado)
    }
})

function agregarProductosCarritoJugador(arrayjugador){
    bodyCarrito.innerHTML = ""
    let nuevaCardCarrito = document.createElement("div")
    arrayjugador.forEach((itemjugador) => {
        nuevaCardCarrito.innerHTML += `
        <div id="item${itemjugador.id}" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="img/${itemjugador.imagen}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${itemjugador.apellidoJugador} ${itemjugador.nombreJugador}</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`
})
bodyCarrito.appendChild(nuevaCardCarrito)
}

function agregarProductosCarritoSeleccion(arrayseleccion){
    bodyCarrito.innerHTML = ""
    let nuevaCardCarrito = document.createElement("div")
    arrayseleccion.forEach((itemseleccion) => {
        nuevaCardCarrito.innerHTML += `
        <div id="item${itemseleccion.seleccionId}" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="img/${itemseleccion.seleccionImagen}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${itemseleccion.seleccionPais}</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`
    })
    bodyCarrito.appendChild(nuevaCardCarrito)
}

btnCarrito.addEventListener("click", () =>{
    agregarProductosCarritoJugador(carritoCompra)
})

btnCarrito.addEventListener("click", () =>{
    agregarProductosCarritoSeleccion(carritoCompra)
})

// 
// Storage
// 

// agregando items en el carrito
let carritoCompra
localStorage.getItem("carroCompras") ? carritoCompra = JSON.parse(localStorage.getItem("carroCompras")) : carritoCompra = []


function sumandoAlCarritoJugador(jugador){
    console.log(`El Jugador ${jugador.apellidoJugador} ${jugador.nombreJugador} a sido agregado al carrito`);
    carritoCompra.push(jugador);
    console.log(carritoCompra);
    localStorage.setItem("carroCompras", JSON.stringify(carritoCompra));
}

function sumandoAlCarritoSeleccion(seleccion){
    console.log(`Se ha Agregado al carrito ${seleccion.seleccionPais}`);
    carritoCompra.push(seleccion);
    console.log(carritoCompra);
    localStorage.setItem("carroCompras", JSON.stringify(carritoCompra));
}

// agregar operador logico and (&&) para colocar ofertas - clase operadores avanzados