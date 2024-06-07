var database = require("../database/config")

function info(idUsuario) {
    var instrucaoSql = `
        select distinct (select count(vizualizacao) from wikibrawl.paginaAcessada as pg_A where pg_A.vizualizacao = "true" and pg_A.fkUsuarios = ${idUsuario}) vizualizacao_Usuario, 
count(id) qntd_Cadastro
from wikibrawl.usuarios as us;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    info
}