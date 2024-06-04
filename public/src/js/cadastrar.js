
// Evento no Botão que cancela o preenchimento do formulário
const cancel = document.getElementById("cancel_btn");
cancel.addEventListener("click", cancelarFormulario)

function cancelarFormulario() {
    window.open("index.html", "_self")
}

const caracterMaiusculo = "QWERTYUIOPASDFGHJKLZXCVBNM";
const caracterMinusculo = "qwertyuiopasdfghjklzxcvbnm";
const caracterNum = "1234567890";
const caracterEspecial = "!#$%&*?@_";

function validarCadastro() {
    const nome = input_nome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const confirmarSenha = input_confirmaSenha.value;

    let qtdMaiusculo = 0;
    let qtdMinisculo = 0;
    let qtdNum = 0;
    let qtdCarecterEspecial = 0;

    for (let contador = 0; contador < senha.length; contador++) {
        if (caracterMaiusculo.indexOf(senha[contador]) !== -1) {
            qtdMaiusculo++;
        }
        if (caracterMinusculo.indexOf(senha[contador]) !== -1) {
            qtdMinisculo++;
        }
        if (caracterNum.indexOf(senha[contador]) !== -1) {
            qtdNum++;
        }
        if (caracterEspecial.indexOf(senha[contador]) !== -1) {
            qtdCarecterEspecial++;
        }
    }

    const validar_nome = nome.length > 3;
    const validar_email = email.indexOf("@") >= 0 && email.indexOf(".") >= 0;
    const validacaoTotal = nome === "" || senha === "" || email === "" || confirmarSenha === "";

    const tamanhoSenha = senha.length >= 8;
    const validarConfirmar = senha === confirmarSenha;

    let mensagensErro = [];

    if (validacaoTotal) {
        mensagensErro.push("Preencha todos os campos.");
    }
    if (!validar_nome) {
        mensagensErro.push("Nome inválido. Deve ter mais de 3 caracteres.");
    }
    if (!validar_email) {
        mensagensErro.push("Email inválido. Deve haver @ e ponto.");
    }
    if (!tamanhoSenha) {
        mensagensErro.push("A senha deve ter no mínimo 8 caracteres.");
    }
    if (qtdMaiusculo === 0) {
        mensagensErro.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (qtdMinisculo === 0) {
        mensagensErro.push("A senha deve conter pelo menos uma letra minúscula.");
    }
    if (qtdNum === 0) {
        mensagensErro.push("A senha deve conter pelo menos um número.");
    }
    if (qtdCarecterEspecial === 0) {
        mensagensErro.push("A senha deve conter pelo menos um caractere especial.");
    }
    if (!validarConfirmar) {
        mensagensErro.push("A confirmação da senha não coincide.");
    }

    if (mensagensErro.length > 0) {
        alert(mensagensErro.join("\n"));

    } else {
        alert("credencias criadas aceitas")
        
        var nomeVar = nome;
        var emailVar = email;
        var senhaVar = senha;
        var confirmacaoSenhaVar = confirmarSenha;
        console.log(nomeVar, emailVar, senhaVar, confirmacaoSenhaVar)
    
            // Enviando o valor da nova input
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: nomeVar,
                    emailServer: emailVar,
                    senhaServer: senhaVar
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);
    
                    if (resposta.ok) {
    
                        alert("Cadastro realizado com sucesso!");
    
                        setTimeout(() => {
                            window.location = "logar.html";
                        }, "2000");
    
                    } else {
                        throw "Houve um erro ao tentar realizar o cadastro!";
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });
    
            return false;
        }
    }
