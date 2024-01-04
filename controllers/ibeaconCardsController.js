const db = require('../db.js');

const dotenv = require('dotenv');
dotenv.config();

exports.ibeacon_cards = (req, res) => {
    db.query(`SELECT * FROM ibeacon_cards`, (err, rows) => {
        if(err){
            console.error(`Erro ao executar a consulta: ${err.stack}`);
            res.status(500).json({
                error: "Erro interno do servidor"
            });
            return;
        }
        res.status(200).json(rows)
    })
};

exports.ibeacon_cards_extra = (req, res) => {
    db.query(`SELECT * FROM ibeacon_cards`, (err, rows) => {
        if(err){
            console.error(`Erro ao executar a consulta: ${err.stack}`);
            res.status(500).json({
                error: "Erro interno do servidor"
            });
            return;
        }
        res.status(200).json(rows)
    })
};