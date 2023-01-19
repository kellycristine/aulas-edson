// let frutas = ["banana", "maca", "pera"]

// let numeros = [1, 6, 0, 29, 38]

// let carros = ["civic", "montana", "saveiro"]
// console.log(carros[1])

// let nomesEstudantes = ["Carla", "Samuel", "Stela", "Paola"]
// let emailsEstudantes = ["carla@hotmail.com", "samual@hotmail.com", "stella@gmail.com", "paola@bol.com"]

// let nome = "edson"
// let idade = 25


// nome, idade, endereco, e-mail

// let continua = true
// let pessoas = []

// do {
//     let nome = prompt('Digita o seu nome: ')
//     let idade = prompt('Digita a sua idade: ')
//     let endereco = prompt('Digita o seu endereço: ')
//     let email = prompt('Digita o seu e-mail: ')

//     let objetoPessoa = {
//         nome: nome,
//         idade: idade,
//         endereco: endereco,
//         email: email
//     }

//     pessoas.push(objetoPessoa)

//     continua = confirm("Deseja continuar o cadastro?")

// } while (continua);

// console.log(pessoas)

// () => funções, while, for, if, switch => condicoes, ou parametros
// [] => lista, acessar a posicao de uma lista
// {} => funções, escopo, objetos

// CHAVE : VALOR
// const pessoa = {
//     nome: 'Edson',
//     idade: 25,
//     email: 'edson@growdev.com.br',
//     endereco: 'Rua X, 998',
//     nota: 25.7994312
// }

// console.log(pessoa)
// console.log(pessoa.nome.toUpperCase())
// console.log(pessoa.email)
// console.log(pessoa.nota)

// // console.log(pessoa['idade']) => funciona, mas não é muito utilizado

// document.write(`Nome: ${pessoa.nome}, E-mail: ${pessoa.email}, Idade: ${pessoa.idade}`)


const pessoas = [
    {
        nome: 'Edson',
        idade: 25,
        email: 'edson@growdev.com.br',
        endereco: 'Rua X, 998'
    },
    {
        nome: 'Carla',
        idade: 26,
        email: 'carla@growdev.com.br',
        endereco: 'Rua A, 997'
    },
    {
        nome: 'Samuel',
        idade: 28,
        email: 'samuel@growdev.com.br',
        endereco: 'Rua B, 996'
    },
    {
        nome: 'Stela',
        idade: 29,
        email: 'stela@growdev.com.br',
        endereco: 'Rua C, 995'
    },
    {
        nome: 'Esther',
        idade: 29,
        email: 'esther@growdev.com.br',
        endereco: 'Rua D, 994'
    },
]

pessoas.forEach(function (pessoa){
    console.log(`Nome: ${pessoa.nome}, E-mail: ${pessoa.email}`)
})

console.log('\n')

// console.log(pessoas[1].nome)

for(let indice = 0; indice < pessoas.length; indice++){
    console.log(pessoas[indice].endereco)
}