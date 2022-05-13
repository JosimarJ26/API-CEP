function retornadadosCEP() {
    var cep = document.getElementById("cep").value;
    if (cep.length > 8) {
        cep = cep.replace("-", "");
        cep = cep.replace(".", "");
    }
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => Response.json())
    .then(function (retorno) {
        let endereco = retorno.logradouro
        let bairro = retorno.bairro
        let cidade = retorno.localidade
        let uf = retorno.uf
        let cep = retorno.cep

        document.getElementById("dadoscep").innerText = (`Endereço: ${endereco}\nBairro: ${bairro}\nCidade: ${cidade}\nUF: ${uf}\nCEP: ${cep}`)
    });
}
//retornadadosCEP();