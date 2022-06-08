const getAnimal = "SELECT * FROM animal";
const addAnimal = "INSERT INTO animal(codigo, idade, habitat, sexo, raca, fk_atendente_coodigo, fk_veterinario_codigo, fk_adotante_codigo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"; 
const getAnimalByCodigo = "SELECT * FROM animal WHERE codigo = $1";
const deleteAnimal = "DELETE FROM atendente WHERE codigo = $1"; 

const getAdotante = "SELECT * FROM adotante";
const addAdotante = "INSERT INTO adotante(codigo, identidade, nome, fk_atendente_codigo) VALUES ($1, $2, $3, $4)"; 
const getAdotanteByCodigo = "SELECT * FROM adotante WHERE codigo = $1";
const deleteAdotante = "DELETE FROM atendente WHERE codigo = $1"; 

const getAtendente = "SELECT * FROM atendente";
const addAtendente = "INSERT INTO atendente(nome, codigo, salario) VALUES ($1, $2, $3)"; 
const getAtendenteByCodigo = "SELECT * FROM atendente WHERE codigo = $1";
const deleteAtendente = "DELETE FROM atendente WHERE codigo = $1"; 

const getCompras = "SELECT * FROM compras";
const addCompras = "INSERT INTO compras(codigo, valor, fk_fornecedores_codigo) VALUES ($1, $2, $3)"; 
const getComprasByCodigo = "SELECT * FROM compras WHERE codigo = $1";
const deleteCompras = "DELETE FROM compras WHERE codigo = $1"; 

const getConsultas = "SELECT * FROM consulta";
const addConsultas = "INSERT INTO consulta(codigo, fk_animal_codigo, fk_veterinario_codigo, fk_tratamentos_codigo) VALUES ($1, $2, $3, $4)"; 
const getConsultasByCodigo = "SELECT * FROM consulta WHERE codigo = $1";
const deleteConsultas = "DELETE FROM consulta WHERE codigo = $1"; 

const getDoacoes = "SELECT * FROM doacoes";
const addDoacoes = "INSERT INTO doacoes(codigo, categoria, estado) VALUES ($1, $2, $3)"; 
const getDoacoesByCodigo = "SELECT * FROM consulta WHERE codigo = $1";
const deleteDoacoes = "DELETE FROM consulta WHERE codigo = $1"; 

const getFornecedores = "SELECT * FROM fornecedores";
const addFornecedores = "INSERT INTO fornecedores(codigo, nome, cnpj, tipo, fk_atendente_codigo, estado) VALUES ($1, $2, $3, $4, $5, $6)"; 
const getFornecedoresByCodigo = "SELECT * FROM fornecedores WHERE codigo = $1";
const deleteFornecedores = "DELETE FROM fornecedores WHERE codigo = $1"; 

const getProtetores = "SELECT * FROM protetores";
const addProtetores = "INSERT INTO protetores(codigo, nome, fk_atendente_codigo, salario) VALUES ($1, $2, $3, $4)"; 
const getProtetoresByCodigo = "SELECT * FROM protetores WHERE codigo = $1";
const deleteProtetores = "DELETE FROM protetores WHERE codigo = $1"; 

const getTratamentos = "SELECT * FROM tratamentos";
const addTratamentos = "INSERT INTO tratamentos(codigo, nome, descricao) VALUES ($1, $2, $3)"; 
const getTratamentosByCodigo = "SELECT * FROM tratamentos WHERE codigo = $1";
const deleteTratamentos = "DELETE FROM tratamentos WHERE codigo = $1"; 

const getVeterinario = "SELECT * FROM veterinario";
const addVeterinario = "INSERT INTO atendente(nome, codigo, ano_de_conclusao, fk_atendente_codigo, salario) VALUES ($1, $2, $3, $4, $5)"; 
const getVeterinarioByCodigo = "SELECT * FROM veterinario WHERE codigo = $1";
const deleteVeterinario = "DELETE FROM atendente WHERE codigo = $1"; 

module.exports = {
    getAnimal,
    addAnimal,
    getAnimalByCodigo,
    deleteAnimal,

    getAdotante,
    addAdotante,
    getAdotanteByCodigo,
    deleteAdotante,

    getAtendente,
    addAtendente,
    getAtendenteByCodigo,
    deleteAtendente,

    getCompras,
    addCompras,
    getComprasByCodigo,
    deleteCompras,

    getConsultas,
    addConsultas,
    getConsultasByCodigo,
    deleteConsultas,

    getDoacoes,
    addDoacoes,
    getDoacoesByCodigo,
    deleteDoacoes,

    getFornecedores,
    addFornecedores,
    getFornecedoresByCodigo,
    deleteFornecedores,

    getProtetores,
    addProtetores,
    getProtetoresByCodigo,
    deleteProtetores,

    getTratamentos,
    addTratamentos,
    getTratamentosByCodigo,
    deleteTratamentos,

    getVeterinario,
    addVeterinario,
    getVeterinarioByCodigo,
    deleteVeterinario
}