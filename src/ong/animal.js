const pool = require('../../db');
const queries = require('./queries');

const getAnimal = (req, res) => {
    console.log('2');
    pool.query(queries.getAnimal, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addAnimal = (req, res) => {

    const {codigo, idade, habitat, sexo, raca, fk_atendente_coodigo, fk_veterinario_codigo, fk_adotante_codigo} = req.body;
    pool.query(queries.addAnimal, [codigo, idade, habitat, sexo, raca, fk_atendente_coodigo, fk_veterinario_codigo, fk_adotante_codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Animal adicionado com sucesso.");
    })
}

const getAnimalByCodigo = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.getAnimalByCodigo, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteAnimal = (req, res) => {

    const codigo = parseInt(req.params.codigo);
    pool.query(queries.deleteAnimal, [codigo], (error, results) => {
        if(error) throw error;
        res.status(200).send("Usuário deletado com sucesso.");
    })
}

module.exports = {
    getAnimal,
    addAnimal,
    getAnimalByCodigo,
    deleteAnimal
}