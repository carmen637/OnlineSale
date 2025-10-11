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

let imagen2 = document.querySelector(".imagenCat");

imagen2.addEventListener("mouseover", () => {
    
})