const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
let discoAtual = undefined
let modo = 'modo torre'
let counter = 0

t1.addEventListener("click", function () {
    if (modo === 'modo torre') {
        discoAtual = t1.lastElementChild
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        // if () {
        //     t1.appendChild(discoAtual)
        // }
        discoAtual = undefined
        console.log(modo)
        modo = 'modo torre'
    }
})

t2.addEventListener("click", function () {
    if (modo === 'modo torre') {
        discoAtual = t2.lastElementChild
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        t2.appendChild(discoAtual)
        discoAtual = undefined
        console.log(modo)
        modo = 'modo torre'
    }
})

t3.addEventListener("click", function () {
    if (modo === 'modo torre') {
        discoAtual = t3.lastElementChild
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        t3.appendChild(discoAtual)
        discoAtual = undefined
        console.log(modo)
        modo = 'modo torre'
    }
})

