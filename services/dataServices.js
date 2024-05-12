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

async function getTextById (id) {
    const query = `SELECT Text FROM Text_List WHERE Id = ${id}`;
    try {
        const data = await db.query(query);
        return data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

async function updateText(id, text) {
    const query = `UPDATE Text_List SET Text = '${text}' WHERE Id = ${id}`;
    try {
        await db.query(query);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

async function addText(text) {
    const query = `INSERT INTO Text_List (Text) VALUES ('${text}')`;
    try {
        await db.query(query);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

async function deleteText(id) {
    const query = `DELETE FROM Text_List WHERE Id = ${id}`;
    try {
        await db.query(query);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getTexts,
    getTextById,
    updateText,
    addText,
    deleteText
}