const pool = require('../../db');
const queries = require('./queries');

const getConsultas = (req, res) => {
    pool.query(queries.getConsultas, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addConsultas = (req, res) => {

    const {codigo, fk_animal_codigo, fk_veterinario_codigo, fk_tratamentos_codigo} = req.body;
    pool.query(queries.addConsultas, [codigo, fk_animal_codigo, fk_veterinario_codigo, fk_tratamentos_codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Consulta adicionada com sucesso.");
    })
}

const getConsultasByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getConsultasByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteConsultas = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteConsultas, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Consulta deletada com sucesso.");
    })
}

module.exports = {
    getConsultas,
    addConsultas,
    getConsultasByCodigo,
    deleteConsultas
}