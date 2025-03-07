const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso) {
        resultado('Peso invalido', false)
        return
    }

    if (!altura) {
        resultado('Altura invalida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `SEU IMC É ${imc} (${nivelImc})`
    
    resultado(msg, true)
})

function getNivelImc (imc) {
    const nivel = ['Abaixo de peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9){
        return nivel[4]
    } else if (imc >= 29.9){
        return nivel[3]
    } else if (imc >= 24.9){
        return nivel[2]
    } else if (imc >= 18.5){
        return nivel[1]
    } else if (imc < 18.5){
        return nivel[0]
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criarP () {
    const p = document.createElement('p')
    return p
}

function resultado (msg, isValid) {
    const res = document.querySelector('.res')
    res.innerHTML = ''
    const p = criarP()

    if (isValid) {
        p.classList.add('p-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    res.appendChild(p)
}