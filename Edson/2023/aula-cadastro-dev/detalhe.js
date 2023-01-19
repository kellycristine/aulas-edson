function carregarInformacoes(){
    const tBody = document.getElementById('corpo-tabela')

    const listaDevs = JSON.parse(localStorage.getItem('devsCadastrados'))

    listaDevs.forEach((dev) => {
        tBody.innerHTML += `
            <tr>
                <td>${dev.nome}</td>
                <td>${dev.email}</td>
                <td>${dev.telefone}</td>
                <td>${dev.dataNascimento}</td>
                <td>${dev.endereco}</td>
                <td>${dev.atuacao}</td>
                <td>${dev.senioridade}</td>
            </tr>
        `
    })

   
}