function mostrarMultiplosDe3(){
    document.write('<p> Olá </p>')

    for(let contador = 1; contador <= 50; contador++){
        if(contador % 3 == 0){
            document.write(`<p> O número ${contador} é multiplo de 3 </p>`)
        }
    }
}

function escreverOla(nomePessoa){
    document.write(`<p> Olá ${nomePessoa} </p>`)
}

// escreverOla('Edson Martins')

// escreverOla('Gabriela Lei....')

// escreverOla('Carla')

// escreverOla('Mateus')

// let nomeFornecido = prompt('Digite seu nome pra mim te comprimentar')
// let idadeUsuario = 20

// escreverOla(nomeFornecido)

// let meuNome = 'Edson Martins'
// let nomeDigitadoPeloUsuario = prompt('Digite seu nome pra mim te comprimentar')

// document.write(`O nome que o usuário digitou no promp é: ${nomeDigitadoPeloUsuario}`)


// escreverOla(prompt('Digite seu nome pra mim te comprimentar'))

// nomePessoa = prompt('Digite seu nome pra mim te comprimentar')


// FUNCAO COM PARAMETRO E RETORNO

function somar(n1, n2){ 
    let resultado = n1 + n2 
    return resultado; 
}

let numero1 = Number(prompt('Digita o primeiro número')) 
let numero2 = Number(prompt('Digita o segundo número')) 

let retornoDaOperacao = somar(numero1, numero2) 

document.write(`<h3>O retorno da funcao somar é: ${retornoDaOperacao}</h3>`)






// atividade troca de valores entre variaveis
// let numero1 = 10
// let numero2 = 30
// let temporaria = numero1
// numero1 = numero2
// numero2 = temporaria
// console.log(`numero1: ${numero1}`)
// console.log(`numero2: ${numero2}`)
// console.log(`temporaria: ${temporaria}`)