var database = require("../database/config");

function vizualizar(idUsuario, pagina) {

    var instrucaoSql = `
        UPDATE wikibrawl.paginaAcessada SET vizualizacao = 'true' WHERE fkUsuarios = ${idUsuario} and fkPagina = ${pagina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    vizualizar,
}