let numero1 = 5
let numero2 = 10
let operacao = '3'

let resultado;

// if(operacao == 'somar'){
//     resultado = numero1 + numero2
// } else if(operacao == 'subtracao'){
//     resultado = numero1 - numero2
// } else if(operacao == 'multiplicacao'){
//     resultado = numero1 * numero2
// } else if(operacao == 'divisao'){
//     resultado = numero1 / numero2
// } else {
//     resultado = -9999
// }

// switch case > escolha caso
// ==
switch(operacao){
    case '1': 
        resultado = numero1 + numero2
        console.log('executou o caso de somar')
        break;
        
    case '2': 
        resultado = numero1 - numero2
        console.log('executou o caso de sbutracao')
        break;

    case '3': 
        resultado = numero1 * numero2
        console.log('executou o caso de multiplicao')
    
    case '4': 
        resultado = numero1 / numero2
        console.log('executou o caso de divisao')
        break
    
    default: 
        resultado = -9999
        console.log('a opcao nao foi encontrada, entao executou o default')
    
}

document.write(`Resultado da operacao é: ${resultado}`)