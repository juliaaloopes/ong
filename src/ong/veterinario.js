const pool = require('../../db');
const queries = require('./queries');

const getVeterinario = (req, res) => {
    pool.query(queries.getVeterinario, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addVeterinario = (req, res) => {

    const {nome, codigo, ano_de_conclusao, fk_atendente_codigo, salario} = req.body;
    pool.query(queries.addVeterinario, [nome, codigo, ano_de_conclusao, fk_atendente_codigo, salario], (error, results) => {
        if(error) throw error;
        res.status(200).send("Veterinário adicionado com sucesso.");
    })
}

const getVeterinarioByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getVeterinarioByCodigo, [codigo], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteVeterinario = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteVeterinario, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário deletado com sucesso.");
    })
}


module.exports = {
    getVeterinario,
    addVeterinario,
    getVeterinarioByCodigo,
    deleteVeterinario
}