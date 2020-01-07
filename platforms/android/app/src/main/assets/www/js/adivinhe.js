var numeroX = 5 /*Math.floor(Math.random() * 100 + 1)*/
var rodada = 1
var palpiteTxt = document.querySelector('#campoPalpite')
var enviarPalpite = document.querySelector('.envioPalpite')
var palpites = document.querySelector('.palpites')
var resultado = document.querySelector('.ultimoResultado')
var maisoumenos = document.querySelector('.baixoOuAlto')
var footer = document.querySelector('.resultadoParas')
var iniciar = document.createElement("button")
enviarPalpite.addEventListener('click', palpitar)
function palpitar() {
    var chute = Number(palpiteTxt.value)
    if (rodada==1){
        palpites.textContent = "Palpites: "
    }
    palpites.textContent += chute + ', '
    if (chute == numeroX){
        resultado.textContent = "Parabéns! Você acertou"
        resultado.style.background = 'green'
        maisoumenos.textContent = ""
        fimdejogo()
    } else if (rodada == 10){
        maisoumenos.textContent = ""
        resultado.textContent = "FIM DE JOGO! Tente outra vez."
        resultado.style.background = "red"
        fimdejogo()
    } else if (chute < numeroX){
        maisoumenos.textContent = "Chute mais ALTO."
        maisoumenos.style.background = 'red'
        maisoumenos.style.color = 'white'
    } else {
        maisoumenos.textContent = "Chute mais BAIXO."
        maisoumenos.style.background = 'blue'
        maisoumenos.style.color = 'white'
    }
    rodada++
    palpiteTxt.value = ""
    palpiteTxt.focus()
}
function fimdejogo(){
    palpiteTxt.disabled = true
    enviarPalpite.disabled = true
    iniciar.textContent = 'Iniciar novo jogo'
    footer.appendChild(iniciar)
    iniciar.addEventListener('click',reinicio)
}
function reinicio(){
    palpiteTxt.disabled = false
    enviarPalpite.disabled = false
    rodada = 1
    numeroX = Math.floor(Math.random() * 100 + 1)
    iniciar.parentNode.removeChild(iniciar)
    palpites.textContent = ''
    resultado.textContent = ''
    maisoumenos.textContent = ''
    palpiteTxt.focus()
}