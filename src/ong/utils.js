const pool = require('../../db');


const getMax = async (tabela) => {

    try {
        const results = await pool.query("SELECT max(" + tabela + ".codigo) FROM " + tabela);
        return results.rows[0].max;
    } catch(err) {
        return err;
    }
}

module.exports = {
    getMax
}