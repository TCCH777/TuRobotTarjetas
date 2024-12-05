// Selecciona el contenedor donde se agregarán las tarjetas
const container = document.getElementById("container");

// Base de datos
const database = [
  {
    nombre: "Co-ram",
    tamaño: "pequeño",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fcoram.png?alt=media&token=fbdd4648-3b9d-4bad-9c6d-6b2bd4a4e1e3",
    modelo: "amx",
    material: "fibra de vidrio",
    descripcion: "Un pequeño aliado que siempre estará ahí para apoyarte.",
    energia: "electrico",
  },
  {
    nombre: "Aur-oi",
    tamaño: "grande",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fauroi.png?alt=media&token=9a59378c-f277-4edd-a8e1-bb105fc5bf72",
    modelo: "amx",
    material: "fibra de vidrio",
    descripcion: "Un amigo en el que podrás confiar para cualquier aventura.",
    energia: "electrico",
  },
  {
    nombre: "S4-MUR4",
    tamaño: "grande",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fsamurai.png?alt=media&token=57762847-740d-4108-ae2f-506963b574c4",
    modelo: "grx",
    material: "hierro fundido",
    descripcion: "Un guerrero protector listo para cualquier batalla.",
    energia: "gasolina",
  },
  {
    nombre: "M1-L4GR-0",
    tamaño: "pequeño",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fmilagro.png?alt=media&token=1da65378-4390-4c10-ba7b-40752ecf7598",
    modelo: "grx",
    material: "hierro fundido",
    descripcion: "Un milagro en forma de robot, compacto pero poderoso.",
    energia: "gasolina",
  },
  {
    nombre: "5UM-4QU1",
    tamaño: "pequeño",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fsumaq.png?alt=media&token=2dfdfb85-4da8-4fdf-bf65-a7aaf422e8f8",
    modelo: "asx",
    material: "acero inoxidable",
    descripcion: "Un compañero de metal brillante para cualquier tarea.",
    energia: "electrico",
  },
  {
    nombre: "3L1-54",
    tamaño: "grande",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Fela.png?alt=media&token=ca326804-12e7-418a-9f83-82e41e0092ad",
    modelo: "asx",
    material: "acero inoxidable",
    descripcion: "Un gigante con corazón nuclear listo para ayudarte.",
    energia: "nuclear",
  },
  {
    nombre: "4R73",
    tamaño: "pequeño",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Farte.png?alt=media&token=55cd59e7-0d3f-4d01-8706-b5fd1d4e9ec9",
    modelo: "adx",
    material: "oro",
    descripcion: "Arte en movimiento, pequeño pero de gran valor.",
    energia: "electrico",
  },
  {
    nombre: "713-MP0",
    tamaño: "grande",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/robots%2Ftiempo.png?alt=media&token=e97fe895-b627-4b06-8364-60236c054bac",
    modelo: "adx",
    material: "oro",
    descripcion: "El lujo del tiempo, un robot para los más exigentes.",
    energia: "nuclear",
  },
];

// Mapea las imágenes de los íconos según las propiedades
const iconos = {
  tamaño: {
    pequeño: "pequeño.png",
    grande: "grande.png",
  },
  material: {
    "fibra de vidrio": "fib.png",
    "acero inoxidable": "acero.png",
    "hierro fundido": "hierro.png",
    oro: "oro.png",
  },
  energia: {
    electrico: "electrico.png",
    gasolina: "gasolina.png",
    nuclear: "nuclear.png",
  },
};

// Genera las tarjetas dinámicamente
database.forEach((robot) => {
  // Crea el contenedor de la tarjeta
  const card = document.createElement("div");
  card.classList.add("card");

  // Contenido HTML de la tarjeta
  card.innerHTML = `
    <img src="./images/assets/tarjeta.png" />
    <div class="card-header">${robot.modelo.toUpperCase()}</div>
    <div class="robot-image">
      <img src="${robot.imagen}" alt="Robot ${robot.nombre}" />
    </div>
    <h2 class="robot-name">¡${robot.nombre}!</h2>
    <p class="robot-description">${robot.descripcion}</p>
    <div class="card-icons">
      <img src="./images/assets/${iconos.tamaño[robot.tamaño]}" alt="Icono ${
    robot.tamaño
  }" />
      <img src="./images/assets/${iconos.energia[robot.energia]}" alt="Icono ${
    robot.energia
  }" />
      <img src="./images/assets/${
        iconos.material[robot.material]
      }" alt="Icono ${robot.material}" />
    </div>
  `;

  // Agrega la tarjeta al contenedor
  container.appendChild(card);
});
