const { Router } = require('express');

const atendente = require('./atendente');
const animal = require('./animal');
const veterinario = require('./veterinario');
const adotante = require('./adotante');
const compras = require('./compras');
const consultas = require('./consultas');
const doacoes = require('./doacoes');
const fornecedores = require('./fornecedores');
const protetores = require('./protetores');
const tratamentos = require('./tratamentos');


const router = Router();

router.get('/animal', animal.getAnimal);
router.post('/animal', animal.addAnimal);
router.get('/animal/:codigo', animal.getAnimalByCodigo);
router.delete('/animal/:codigo', animal.deleteAnimal);

router.get('/atendente', atendente.getAtendente);
router.get('/atendente/:codigo', atendente.getAtendenteByCodigo);
router.post('/atendente', atendente.addAtendente);
router.delete('/atendente/:codigo', atendente.deleteAtendente);


router.get('/adotante', adotante.getAdotante);
router.post('/adotante', adotante.addAdotante);
router.get('/adotante/:codigo', adotante.getAdotanteByCodigo);
router.delete('/adotante/:codigo', adotante.deleteAdotante);

router.get('/compras', compras.getCompras);
router.post('/compras', compras.addCompras);
router.get('/compras/:codigo', compras.getComprasByCodigo);
router.delete('/compras/:codigo', compras.deleteCompras);

router.get('/consultas', consultas.getConsultas);
router.post('/consultas', consultas.addConsultas);
router.get('/consultas/:codigo', consultas.getConsultasByCodigo);
router.delete('/consultas/:codigo', consultas.deleteConsultas);

router.get('/doacoes', doacoes.getDoacoes);
router.post('/doacoes', doacoes.addDoacoes);
router.get('/doacoes/:codigo', doacoes.getDoacoesByCodigo);
router.delete('/doacoes/:codigo', doacoes.deleteDoacoes);

router.get('/fornecedores', fornecedores.getFornecedores);
router.post('/fornecedores', fornecedores.addFornecedores);
router.get('/fornecedores/:codigo', fornecedores.getFornecedoresByCodigo);
router.delete('/fornecedores/:codigo', fornecedores.deleteFornecedores);

router.get('/protetores', protetores.getProtetores);
router.post('/protetores', protetores.addProtetores);
router.get('/protetores/:codigo', protetores.getProtetoresByCodigo);
router.delete('/protetores/:codigo', protetores.deleteProtetores);

router.get('/tratamentos', tratamentos.getTratamentos);
router.post('/tratamentos', tratamentos.addTratamentos);
router.get('/tratamentos/:codigo', tratamentos.getTratamentosByCodigo);
router.delete('/tratamentos/:codigo', tratamentos.deleteTratamentos);


router.get('/veterinario', veterinario.getVeterinario);
router.post('/veterinario', veterinario.addVeterinario);
router.get('/veterinario/:codigo', veterinario.getVeterinarioByCodigo);
router.delete('/veterinario/:codigo', veterinario.deleteVeterinario);

module.exports = router;
