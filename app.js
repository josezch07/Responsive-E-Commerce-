
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')


menu.addEventListener('click',()=>{
      menu.classList.toggle('fa-times')
      navbar.classList.toggle('active')

})

window.onscroll = ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

let slide = document.querySelectorAll('.slide-container')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let index = 0

next.addEventListener('click',()=>{
    slide[index].classList.remove('active')
    index = (index + 1) % slide.length
    slide[index].classList.add('active')
})
prev.addEventListener('click',()=>{
    slide[index].classList.remove('active')
    index = (index - 1 + slide.length) % slide.length
    slide[index].classList.add('active')
})

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', ()=>{
        let src = image_1.getAttribute('src')
        document.querySelector('.big-image-1').src = src
    })
})
document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', ()=>{
        let src = image_2.getAttribute('src')
        document.querySelector('.big-image-2').src = src
    })
})
document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', ()=>{
        let src = image_3.getAttribute('src')
        document.querySelector('.big-image-3').src = src
    })
})