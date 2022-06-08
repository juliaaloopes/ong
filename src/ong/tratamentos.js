const pool = require('../../db');
const queries = require('./queries');

const getTratamentos = (req, res) => {
    pool.query(queries.getTratamentos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTratamentos = (req, res) => {

    const {codigo, nome, descricao} = req.body;
    pool.query(queries.addTratamentos, [codigo, nome, descricao], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor adicionado com sucesso.");
    })
}

const getTratamentosByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getTratamentosByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteTratamentos = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteTratamentos, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor deletado com sucesso.");
    })
}

module.exports = {
    getTratamentos,
    addTratamentos,
    getTratamentosByCodigo,
    deleteTratamentos
}