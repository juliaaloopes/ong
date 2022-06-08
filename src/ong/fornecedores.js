const pool = require('../../db');
const queries = require('./queries');

const getFornecedores = (req, res) => {
    pool.query(queries.getFornecedores, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addFornecedores = (req, res) => {

    const {codigo, nome, cnpj, tipo, fk_atendente_codigo, estado} = req.body;
    pool.query(queries.addFornecedores, [codigo, nome, cnpj, tipo, fk_atendente_codigo, estado], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor adicionado com sucesso.");
    })
}

const getFornecedoresByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getFornecedoresByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteFornecedores = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteFornecedores, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor deletado com sucesso.");
    })
}

module.exports = {
    getFornecedores,
    addFornecedores,
    getFornecedoresByCodigo,
    deleteFornecedores
}