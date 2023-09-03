// OBJETOS
const usuario = {
    nombre: "andre",
    edad: 22
  }
  
  // opcion 1
  
  const usuarioJSON = JSON.stringify(usuario);
  localStorage.setItem("usuario", usuarioJSON);
  
  // opcion 2
  localStorage.setItem("usuario", JSON.stringify(usuario));
  
  // Guardar lo que traemos del localstorage a una variable
  // opcion 1
  const usuarioEnLocalStorage = localStorage.getItem("usuario");
  const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);
  
  // Opcion 2
  const usuarioenLS = JSON.parse(localStorage.getItem("usuario"));
  
  console.log(usuarioenLS);
  // ARRAY DE OBJETOS
  const productos = [
    { nombre: "Silla", precio: 1500 },
    { nombre: "Sillon", precio: 1500 },
    { nombre: "Mesa", precio: 1500 },
  ];
  
  localStorage.setItem("productos", JSON.stringify(productos));
  
  const productosEnLS = JSON.parse(localStorage.getItem("productos"));
  console.log(productosEnLS);


   // SWEET ALERT
 let boton = document.getElementById("btn1");
 boton.addEventListener("click", () => { 
  
 Swal.fire({
    title: "Bien hecho!",
    text: "Producto agregado al carrito!",
    icon: "success",
    confirmButtonText: "Si",
   
 }
  );
});
// Probando DOM
let div = document.getElementById("aplicacion");
console.log(div.innerHTML);
console.log(div.innerText);

let perritos = document.getElementsByClassName("perritos");
console.log(perritos);

let saludo = document.getElementById("saludo");
saludo.innerHTML = "hola coder"

const nombres = ["pepito", "pepita", "andres"];

nombres.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
})


const productoss = [

  { id: 1, nombre: "camisa", precio: 1000 },

  { id: 2, nombre: "zapato", precio: 700 },

  { id: 3, nombre: "gorra", precio: 350 },

  { id: 4, nombre: "media", precio: 100 },

];

productoss.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `

  <h2>Id: ${producto.id}</h2>

  <p>Nombre: ${producto.nombre}</p>

  <b>$${producto.precio}</b>

  <hr />

`;



document.body.append(div);

});
