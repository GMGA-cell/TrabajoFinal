
let filtros = [
    "All",
    "Branding",
    "Design",
    "Mobile",
    "Photography",
    "Videos",
    "Web",
];

let imagenes = [
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
    "assets/imagenes/v28-aq-00.jpg",
];

let titulos = [
    "Frock",
    "Escape",
    "Aqua",
    "Buds",
    "Rosa",
    "Verne",
    "Wanderlust",
    "Water Journal",
    "bloom",
    "NYC Aparment",
    "Simple Bar",
    "Nativ",
];

let categorias = [
    ["Mobile", "Web"],
    ["Branding", "Web"],
    ["Branding", "Web"],
    ["Branding", "Web"],
    ["Branding", "Web"],
    ["Mobile", "Photography"],
    ["Branding", "Videos"],
    ["Design"],
    ["Branding"],
    ["Branding", "Photography"],
    ["Mobile", "Web"],
    ["Branding"],
];

let portafolio = document.getElementById("portafolio");

let botonesFiltros = document.getElementById("filtros");
for(let i=0;i<filtros.length;i++){
    let elementoLista = document.createElement("li")
    let botonFiltro = document.createElement('button')
    botonFiltro.innerText = filtros[i]
    botonFiltro.addEventListener("click", function(){
        mostrarPortafolio(filtros[i])
    })
    elementoLista.appendChild(botonFiltro)
    botonesFiltros.appendChild(elementoLista)
}


function mostrarPortafolio(filtro) {

    portafolio.innerHTML = "";

    for (let i = 0; i < titulos.length; i++) {

        if (filtro == "All" || categorias[i].includes(filtro)) {

            let contenedor = document.createElement("article");
            contenedor.classList.add("portafolio-item");

            let imagen = document.createElement("img");
            imagen.src = imagenes[i];
            contenedor.appendChild(imagen);

            let subcontenedor = document.createElement("a");
            subcontenedor.href = "#";
            contenedor.appendChild(subcontenedor);

            let nombre = document.createElement("p");
            nombre.innerText = titulos[i];
            subcontenedor.appendChild(nombre);

            let categoria = document.createElement("p");

            let categoriasJuntas = "";

            for (let j = 0; j < categorias[i].length; j++) {

                categoriasJuntas += categorias[i][j];

                if (j < categorias[i].length - 1) {
                    categoriasJuntas += " - ";
                }
            }

            categoria.innerText = categoriasJuntas;
            subcontenedor.appendChild(categoria);

            portafolio.appendChild(contenedor);
        }
    }
}

mostrarPortafolio('All');