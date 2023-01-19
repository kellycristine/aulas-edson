/*
    TIPOS DE DADOS: 
    'edson' -> string
    25 -> number
    25.89 -> number
    true -> boolean
*/

/*
    Maneiras de pegar um elemento do HTML:
    getElementById: Recupera um (e somente 1) elemento pelo ID
    getElementsByClassName: Recupera todos os elementos que possuem a classe informada
    getElementsByTagName: Recupera todos os elementos que possuem o nome da tag
    querySelector: Recupera um (e somente 1) elemento pelo ID, classe ou nome tag
    querySelectorAll: Mesma coisa do querySelector mas recupera mais de um elemento
*/

/*
    Buscas pelo querySelector:
    . => representa uma classe
    # => representa um ID
*/

let quebrada = false;

function apagarLampada(){
    // Nao falso = verdadeiro
    // Nao verdadeiro = falso
    if(!quebrada){
        const minhaLampada = document.querySelector('#minha-lampada')
        minhaLampada.src = 'imagens/lampada_apagada.jpg'
    }
}

function acenderLampada(){
    if(!quebrada){
        const minhaLampada = document.getElementById('minha-lampada')
        minhaLampada.src = 'imagens/lampada_acessa.jpg'
    }
}

function quebrarLampada(){
    const minhaLampada = document.getElementById('minha-lampada')
    minhaLampada.src = 'imagens/lampada_quebrada.jpg'
    quebrada = true
    
    /*
        == ABORDAGEM COM O BOTAO CRIADO NA TELA ==
        // mostra o botao para restaurar
        const botaoRestaurar = document.querySelector('#btn-restaurar')
        botaoRestaurar.removeAttribute('hidden')
    */

    // == ABORDAGEM CRIANDO E REMOVENDO O BOTAO PELO HTML ==   
    // cria o botao para restaurar a lampada
    const btnRestaurar = document.createElement('button')
    btnRestaurar.id = 'btn-restaurar'
    btnRestaurar.innerText = 'Restaurar lampada'
    btnRestaurar.onclick = restaurarLampada

    // recupera a div onde o botao vai ficar
    const divContainer = document.querySelector('#container')

    // adiciona o botao dentro da div
    divContainer.appendChild(btnRestaurar)
}

function restaurarLampada(){
    quebrada = false
    const minhaLampada = document.querySelector('#minha-lampada')
    // minhaLampada.src = 'imagens/lampada_apagada.jpg'
    minhaLampada.setAttribute('src', 'imagens/lampada_apagada.jpg')

    /*
        == ABORDAGEM COM O BOTAO CRIADO NA TELA ==
        // esconder o botao de restaurar novamente
        // const botaoRestaurar = document.querySelector('#btn-restaurar')
        // botaoRestaurar.setAttribute('hidden', 'hidden')
        // botaoRestaurar.hidden = 'hidden'
    */

    // == ABORDAGEM CRIANDO E REMOVENDO O BOTAO PELO HTML ==  
    // 1- recuperar o botao pelo id

    // 2- recuperar a div pelo id

    // 3- remover o botao da div utilizando o metodo removeChild
}