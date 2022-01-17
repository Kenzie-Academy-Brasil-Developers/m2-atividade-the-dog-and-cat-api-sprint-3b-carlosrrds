import { RotaDog } from "./rota/RotaDog.js"
import { RotaCat } from "./rota/RotaCat.js"

const ul = document.querySelector(".gerandoImagens")
ul.addEventListener('click', inputImgAleatoria)

function inputImgAleatoria(event) {
    if (event.target.id == 'getCat_input') {
        imgCat()
    } else
    if (event.target.id == 'getDog_input') {
        imgDog()
    }
}

async function imgDog() {
    const img = document.querySelector('#imgDog')
    const data = await RotaDog.urlDog()
    img.src = `${data}`
}

async function imgCat() {
    const img = document.querySelector('#imgCat')
    const data = await RotaCat.urlCat()
    img.src = `${data}`
}

imgDog()
imgCat()