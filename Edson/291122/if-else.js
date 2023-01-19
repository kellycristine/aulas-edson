// IF SIMPLES

// let chover = false

// // condicional = se 
// // condicao = chover 
// if(chover) {
//     // acao a ser executada = entao nao vou ao parque
//     document.write('<h3> Nao vou ao parque </h3>')
// } else {
//   document.write('<h3> Vou ao parque </h3>')  
// }

// document.write('<h2> Texto que vai aparecender independente da condicao </h2>')

// ESTRUTURA CONDICIONAL COMPOSTO

// let idade =62

// if(idade < 12){
//     document.write('<h2> Voce é uma crianca </h2>')
// } else if(idade < 18){
//     document.write('<h2> Voce é adolescente </h2>')
// } else if(idade < 60){
//     document.write('<h2> Voce é adulto </h2>')
// } else {
//     document.write('<h2> Voce é idoso </h2>')
// }

// if(idade < 12){
//     document.write('<h2> Voce é uma crianca </h2>')
// } else {
//     if(idade < 18){
//         document.write('<h2> Voce é adolescente </h2>')
//     } else {
//         if(idade < 60){
//             document.write('<h2> Voce é adulto </h2>')
//         } else {
//             document.write('<h2> Voce é idoso </h2>')
//         }
//     }
// }


// OPERADOR AND / &&

// let tenhoDinheiro = true
// let temIngresso = true

// if(tenhoDinheiro && temIngresso){
//     document.write('<h2> Vou ao cinema </h2>')
// } else {
//     document.write('<h2> Nao posso ir ao cinema </h2>')
// }

// exemplo slide - intervalo[10,25]

// let numero = 20

// // numero precisa ser maior ou igual do que 10
// // numero precisa ser menor ou igual do que 25

// if(numero >= 10 && numero <= 25){
//     document.write('<h2> O número está no intervalo entre 10 e 25 </h2>')
// } else {
//     document.write('<h2> O número nao está no intervalo </h2>')
// }


// OPERADOR OR / ||

// let eIdoso = false;
// let eGestante = false;

// if(eIdoso || eGestante){
//    document.write('<h2> Voce pode passar na frente da fila </h2>') 
// }

// // exemplo slide - fora do intervalo[10,25]

// let numero = 29

// // numero precisa ser menor do que 10
// // numero precisa ser manior do que 25

// if(numero < 10 || numero > 25) {
//     document.write('<h2> Número fora do intervalo </h2>') 
// } else {
//     document.write('<h2> Número dentro do intervalo </h2>') 
// }


let media = (5 + 8 + 2 + 9) / 4

document.write(media)