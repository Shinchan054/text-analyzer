const db = require('../db_config');
async function getTexts () {
    const query = 'SELECT * FROM Text_List';
    try {
        const data = await db.query(query);
        return data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getTexts
}