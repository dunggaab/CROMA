const { Router } = require('express');
const { cookieJwtAuth } = require('../middleware/cookieJwtAuth')
const jwt = require('jsonwebtoken');

const router = Router();
const db = require('../database').databaseConnection;

function parseJwt (token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

router.get("/transactions/:user_id", (req,res) => {
    const q = 'SELECT transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "ongoing"'
    const userId = req.params.user_id

    db.query(q, userId, (err, results) => {
        if(err) console.error('ERROR', err);
        console.log(results)
        res.json(results)
      })
})

router.get("/transaction_details/:id", (req,res) => {
    const q = 'SELECT * FROM transaction_info WHERE transaction_id = ?'
    const userId = req.params.id

    db.query(q, userId, (err, results) => {
        if(err) console.error('ERROR', err);
        console.log(results)
        res.json(results)
      })
})


module.exports = router;