const primeiraTorre = document.getElementById("torre1")
const segundaTorre = document.getElementById("torre2")
const terceiraTorre = document.getElementById("torre3")
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

if (terceiraTorre.childElementCount >= discos.length) {
    win.classList.remove("visivel")
}

