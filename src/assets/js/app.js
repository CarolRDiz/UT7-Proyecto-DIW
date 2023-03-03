// TABS
const character_tabs_li = document.querySelectorAll(".character-tabs__li")
const character_tabs_block = document.querySelectorAll(".character-tabs__block")
const character_img = document.querySelectorAll(".character__img")

console.log("script")
character_tabs_li.forEach((eachLi, i) => {
    character_tabs_li[i].addEventListener("click", () => {
        character_tabs_li.forEach((eachLi, i) => {
            character_tabs_li[i].classList.remove("character-tabs__li--active")
            character_tabs_block[i].classList.remove("character-tabs__block--active")
            character_img[i].classList.remove("character__img--active")
        })
        character_tabs_li[i].classList.add("character-tabs__li--active")
        character_tabs_block[i].classList.add("character-tabs__block--active")
        character_img[i].classList.add("character__img--active")
    })
})

//ACCORDION
const accordion_h2 = document.querySelectorAll(".accordion__h2")
const accordion_block = document.querySelectorAll(".accordion__block")

accordion_h2.forEach((eachH2, i) => {
    accordion_h2[i].addEventListener("click", () => {
        accordion_block.forEach((eachBlock, i) => {
            accordion_block[i].classList.remove("accordion__block--active")
        })
        accordion_block[i].classList.add("accordion__block--active")
    })
})

//GALLERY__LIGHTBOX

const gallery_a = document.querySelectorAll(".gallery__a")
const lightbox = document.querySelector(".gallery__lightbox")
const lightbox_large_img = document.querySelector(".lightbox__large-img")
const lightbox_button = document.querySelector(".lightbox__button")
console.log(gallery_a)
console.log(lightbox)
console.log(lightbox_large_img)
gallery_a.forEach((a, i) => {
    gallery_a[i].addEventListener("click", (e) => {
        e.preventDefault()
        let img = a.querySelector(".gallery__img").src
        lightbox.classList.add("gallery__lightbox--active")
        lightbox_large_img.setAttribute("src", img)
    })
})

lightbox_button.addEventListener("click", () => {
    lightbox.classList.remove("gallery__lightbox--active")
})

// CARROUSEL

const carrousel_large = document.querySelector(".carrousel__large")
const carrousel_point = document.querySelectorAll(".carrousel__point")
console.log(carrousel_large)
console.log(carrousel_point)
carrousel_point.forEach((point, i) => {
    carrousel_point[i].addEventListener("click", () => {
        let position = i
        let operation = position * -25
        carrousel_large.style.transform = `translateX(${operation}%)`
        carrousel_point.forEach((eachPoint, i) => {
            carrousel_point[i].classList.remove("carrousel__point--active")
        })
        carrousel_point[i].classList.add("carrousel__point--active")
    })
})

// LOGO

var logo = document.querySelector('.header__logo');
var bike = document.getElementById('bike');
console.log(bike)

logo.addEventListener('mouseenter', function () {
    bike.play();
}, false);

// logo.addEventListener('mouseleave', function () {
//     bike.pause();
//     bike.currentTime = 0;
// }, false);