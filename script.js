//Imagenes de arriba
let imagen = document.querySelector(".imagen_banner");
let boton = document.querySelector(".boton_img_verde");

const carrusel = [
    "https://demoxml.com/html/onlinesale/media/slide-01.jpg",
    "https://demoxml.com/html/onlinesale/media/slide-02.jpg",
    "https://demoxml.com/html/onlinesale/media/slide-03.jpg"
];

let indice = 0;

boton.addEventListener("click", () => {
    indice++;

    if(indice >= carrusel.length){
        indice = 0;
    }

    imagen.setAttribute("src", carrusel[indice]);

});

//Boton verde categorias
let contImgCat = document.querySelectorAll(".contenedor_img_cat");

contImgCat.forEach(item => {
    const overlay = item.querySelector(".overlay");
    const botonNegro = item.parentElement.querySelector(".botonCat");
     
  item.addEventListener('mouseover', () => {
    overlay.style.backgroundColor = 'rgba(144, 195, 34, 0.8)';
    botonNegro.style.backgroundColor = '#555555';
  });

  item.addEventListener('mouseout', () => {
    overlay.style.backgroundColor = 'transparent';
    botonNegro.style.backgroundColor = 'rgba(144, 195, 34)';

  });
});

//Featured
const contenedor = document.querySelector(".elementos")
const elementos = [{
    imagen: "./img/home-default.png",
    nombre: "Product Name",
    boton1: "./img/favorite_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton2: "./img/shopping_cart_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton3: "./img/sync_alt_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png"
},
{
    imagen: "./img/home-default2.png",
    nombre: "Product Name",
    boton1: "./img/favorite_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton2: "./img/shopping_cart_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton3: "./img/sync_alt_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png"
},
{
    imagen: "./img/home-default3.png",
    nombre: "Product Name",
    boton1: "./img/favorite_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton2: "./img/shopping_cart_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton3: "./img/sync_alt_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png"
},
{
    imagen: "./img/home-default4.png",
    nombre: "Product Name",
    boton1: "./img/favorite_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton2: "./img/shopping_cart_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png",
    boton3: "./img/sync_alt_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.png"
}];



elementos.forEach((el) => {
   contenedor.innerHTML += `
    <div clas="elemento" style="width: 25%; border: solid 1px gray">
    <div>
        <img style="width: 100%"; src="${el.imagen}" alt="">
    </div>
            <p>${el.nombre}</p>
            <div clas="botones_elementos" style="display: flex; justify-content: center; gap: 10px">
                <button>
                    <img src="${el.boton1}" alt="">
                </button>
                <button>
                    <img src="${el.boton2}" alt="">
                </button>
                <button>
                    <img src="${el.boton3}" alt="">
                </button>
            </div>
        </div>
`;
});


