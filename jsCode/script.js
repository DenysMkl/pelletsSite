var lang = document.querySelector('.curLang')
var langVar = document.querySelectorAll('.lang')

lang.addEventListener('click', ()=>{
    lang.classList.toggle('active')
})

langVar.forEach(l =>{
    l.addEventListener('click', (ev)=> {
        ev.preventDefault()
        curLink = window.location.href.split('?')[0]
        var newLink = curLink + `?lang=${ev.target.textContent}`;
        window.location.href = newLink
    })
})

var burger = document.querySelector('.phoneBar')
var x_bar = document.querySelector('.x-bar')

burger.addEventListener('click', ()=>{
    x_bar.classList.toggle('active')
})