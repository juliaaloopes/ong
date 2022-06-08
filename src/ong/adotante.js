const pool = require('../../db');
const queries = require('./queries');

const getAdotante = (req, res) => {
    pool.query(queries.getAdotante, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addAdotante = (req, res) => {

    const {codigo, identidade, nome, fk_atendente_codigo} = req.body;
    console.log(random)
    pool.query(queries.addAdotante, [codigo, identidade, nome, fk_atendente_codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário adicionado com sucesso.");
    })
}

const getAdotanteByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getAdotanteByCodigo,[codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteAdotante = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteAdotante, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário deletado com sucesso.");
    })
}

module.exports = {
    getAdotante,
    addAdotante,
    getAdotanteByCodigo,
    deleteAdotante
}