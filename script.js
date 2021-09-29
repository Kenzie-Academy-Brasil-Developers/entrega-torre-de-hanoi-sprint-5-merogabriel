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
        if (t1.lastElementChild === null) {
            t1.appendChild(discoAtual)
            counter += 1
        } else if (discoAtual.clientWidth < t1.lastElementChild.clientWidth) {
            t1.appendChild(discoAtual)
            counter += 1
        }
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
        if (t2.lastElementChild === null) {
            t2.appendChild(discoAtual)
            counter += 1
        } else if (discoAtual.clientWidth < t2.lastElementChild.clientWidth) {
            t2.appendChild(discoAtual)
            counter += 1
        }
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
        if (t3.lastElementChild === null) {
            t3.appendChild(discoAtual)
            counter += 1
        } else if (discoAtual.clientWidth < t3.lastElementChild.clientWidth) {
            t3.appendChild(discoAtual)
            counter += 1
        }
        discoAtual = undefined
        console.log(modo)
        modo = 'modo torre'
    }
})

