const db = require('../db_config');
const NodeCache = require('node-cache');
const myCache = new NodeCache();

async function getTexts () {
    const cachedData = myCache.get('texts');
    if(cachedData) {
        return cachedData;
    }
    else {
        const query = 'SELECT * FROM Text_List';
        try {
            const data = await db.query(query);
            myCache.set('texts', data, 30);
            return data;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function getTextById (id) {
    const cachedData = myCache.get(`text_${id}`);
    if(cachedData) {
        return cachedData;
    }
    else {
        const query = `SELECT Text FROM Text_List WHERE Id = ${id}`;
        try {
            const data = await db.query(query);
            myCache.set(`text_${id}`, data, 30);
            return data;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function updateText(id, text) {
    const query = `UPDATE Text_List SET Text = '${text}' WHERE Id = ${id}`;
    try {
        await db.query(query);
        myCache.del('texts');
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
        myCache.del('texts');
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
        myCache.del(`text_${id}`);
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
    deleteText,
    myCache
}