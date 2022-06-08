const pool = require('../../db');
const queries = require('./queries');

const getProtetores = (req, res) => {
    pool.query(queries.getProtetores, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addProtetores = (req, res) => {

    const {codigo, nome, fk_atendente_codigo, salario} = req.body;
    pool.query(queries.addProtetores, [codigo, nome, fk_atendente_codigo, salario], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor adicionado com sucesso.");
    })
}

const getProtetoresByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getProtetoresByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteProtetores = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteProtetores, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Fornecedor deletado com sucesso.");
    })
}

module.exports = {
    getProtetores,
    addProtetores,
    getProtetoresByCodigo,
    deleteProtetores
}