const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
const primeiroDisco = document.getElementById("disco1")
const segundoDisco = document.getElementById("disco2")
const terceiroDisco = document.getElementById("disco3")
const quartoDisco = document.getElementById("disco4")
const vitoria = document.getElementById("win")
const win = document.createElement("p")
win.classList.add("vitoria", "visivel")
win.innerHTML = "Parabens, voce conseguiu vencer o desafio da Torre de Hanoi!!"
vitoria.appendChild(win)
const discos = [primeiroDisco, segundoDisco, terceiroDisco, quartoDisco]
let discoAtual = undefined
let modo = 'modo torre'
let counter = 0

t1.addEventListener("click", function () {
    if (modo === 'modo torre') {
        discoAtual = t1.lastElementChild
        t1.lastElementChild.setAttribute('class', 'selected')
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        toClassDisco()
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
        t2.lastElementChild.setAttribute('class', 'selected')
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        toClassDisco()
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
        t3.lastElementChild.setAttribute('class', 'selected')
        console.log(modo)
        modo = 'modo disco'
    } else if (modo === 'modo disco') {
        toClassDisco()
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
    if (t3.childElementCount >= discos.length) {
        win.classList.remove("visivel")
    }
})

function toClassDisco() {
    if (t1.lastElementChild !== null) {
        t1.lastElementChild.setAttribute('class', 'disco')
    }
    if (t2.lastElementChild !== null) {
        t2.lastElementChild.setAttribute('class', 'disco')
    }
        
    if (t3.lastElementChild !== null) {
        t3.lastElementChild.setAttribute('class', 'disco')
    }
}