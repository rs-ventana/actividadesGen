// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
// cambiar a query y el # de id
const li = document.querySelector("#lista-de-productos")
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) { // ok
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p") // ok
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img"); // ok
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti); // ok con ;
  d.appendChild(imagen);
  li.appendChild(d);
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")
  
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}
// se muestra todo, pero queda pendiente el filtro
// cambiar para filtrar mejor
const filtrado = (productos = [], texto) => {
  const textoMinus = texto.toLowerCase();
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(textoMinus) || item.color.toLowerCase().includes(textoMinus)
  );
}

