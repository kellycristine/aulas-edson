// localStorage.setItem => adiciona informações no local storage
// localStorage.getItem => recupera informações do local storage
// localStorage.removeItem => remove informações do local storage

function cadastrarDev(event){
    // para o comportamento do evento de submit (nao deixa a pagina atualizar)
    event.preventDefault() 

    const formulario = document.getElementById('formulario-cadastro')

    const dev = {
        nome: formulario.nomeCompleto.value,
        email: formulario.email.value,
        dataNascimento: formulario.dataNascimento.value,
        telefone: formulario.telefone.value,
        endereco: formulario.endereco.value,
        atuacao: formulario.areaAtuacao.value,
        senioridade: formulario.nivelSenior.value
    }

    // JSON = Javascript Object Notation
    // JSON => A representação de um objeto em Javascript no formato de STRING
    // JSON.stringify => Converte um objeto em JSON
    // JSON.parse => Converte um JSON em objeto
    
    // 1º Pegar a lista do localStorage 
    let listaDevs = JSON.parse(localStorage.getItem('devsCadastrados'))

    // se não existir valor no localStorage, iniciamos a lista vazia
    if(!listaDevs){
        listaDevs = []
    }

    if(listaDevs.some(devCadastrado => devCadastrado.email === dev.email)){
        alert('Já existe um DEV cadastrado com este e-mail.')
        return;
    }

    if(listaDevs.some(devCadastrado => devCadastrado.telefone === dev.telefone)){
        alert('Já existe um DEV cadastrado com este telefone.')
        return;
    }

    // 2º Atualizar a lista recuperada com o novo dev cadastrado
    listaDevs.push(dev)

    // 3º Salvar a lista atualizada no localStorage (substituindo a anterior)
    localStorage.setItem('devsCadastrados', JSON.stringify(listaDevs))

    alert('Dev cadastrado com sucesso')
}