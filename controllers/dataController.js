const express = require('express');
const router = express.Router();
const dataServices = require('../services/dataServices');

async function getTexts(req, res) {
    try {
        let data = await dataServices.getTexts();
        data = data.map((item) => {
            return {
                id: item.Id,
                text: item.Text
            }
        });
        res.render('texts', { title: 'Text List', data: data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getTextById(req, res) {
    const id = req.params.id;
    try {
        const data = await dataServices.getTextById(id);
        res.render('edittext', { text: data[0].Text, id: id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateText(req, res) {
    const id = req.body.id;
    const text = req.body.text;
    try {
        await dataServices.updateText(id, text);
        res.redirect('/texts');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function addText(req, res) {
    const text = req.body.text;
    try {
        await dataServices.addText(text);
        res.redirect('/texts');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteText(req, res) {
    const id = req.params.id;
    try {
        await dataServices.deleteText(id);
        res.redirect('/texts');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getTextByIdForReport(req, res) {
    const id = req.params.id;
    try {
        const data = await dataServices.getTextById(id);
        res.render('index', { text: data[0].Text, title: 'Text Analyzer'});
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getTexts,
    getTextById,
    updateText,
    addText,
    deleteText,
    getTextByIdForReport
}