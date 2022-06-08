const pool = require('../../db');
const queries = require('./queries');
const util = require('./utils');


const getAtendente = (req, res) => {
    pool.query(queries.getAtendente, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getAtendenteByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getAtendenteByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addAtendente = async (req, res) => {

    let codigo = await util.getMax('atendente');
    codigo = codigo + 1;
    let nome = req.body.nome;
    let salario = req.body.salario;
    console.log(dados)
    pool.query(queries.addAtendente, [nome, codigo, salario], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário adicionado com sucesso.");
    })
}

const updateAtendente = async (req, res) => {

    let codigo = req.body.codigo;
    let nome = req.body.nome;
    let salario = req.body.salario;
    pool.query(queries.updateAtendente, [nome, codigo, salario], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário atualizado com sucesso.");
    })
}

const deleteAtendente = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteAtendente, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Atendente deletado com sucesso.");
    })
}


module.exports = {
    getAtendente,
    getAtendenteByCodigo,
    addAtendente,
    deleteAtendente
}