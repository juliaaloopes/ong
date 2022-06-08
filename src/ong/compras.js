const pool = require('../../db');
const queries = require('./queries');

const getCompras = (req, res) => {
    pool.query(queries.getCompras, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addCompras = (req, res) => {

    const {codigo, valor, fk_fornecedores_codigo} = req.body;
    pool.query(queries.addCompras, [codigo, valor, fk_fornecedores_codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Compra adicionada com sucesso.");
    })
}

const getComprasByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getComprasByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteCompras = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteCompras, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Compra deletada com sucesso.");
    })
}

module.exports = {
    getCompras,
    addCompras,
    getComprasByCodigo,
    deleteCompras
}