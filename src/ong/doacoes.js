const pool = require('../../db');
const queries = require('./queries');

const getDoacoes = (req, res) => {
    pool.query(queries.getDoacoes, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addDoacoes = (req, res) => {

    const {codigo, categoria, estado} = req.body;
    pool.query(queries.addDoacoes, [codigo, categoria, estado], (error, results) => {
        if(error) throw error;
        res.status(200).send("Compra adicionada com sucesso.");
    })
}

const getDoacoesByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getDoacoesByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteDoacoes = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteDoacoes, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Doação deletada com sucesso.");
    })
}

module.exports = {
    getDoacoes,
    addDoacoes,
    getDoacoesByCodigo,
    deleteDoacoes
}