// CLOCK
setInterval( () => {
    let date = new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML =
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds () 
},1000)

// HAMBURGER MENU
const btn = document.getElementById('button')
const menu = document.querySelector('.menu')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
document.addEventListener('click', (e) => {
    if(!btn.contains(e.target) && !menu.contains(e.target))
    menu.classList.remove('active')
})