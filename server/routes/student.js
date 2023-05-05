const { Router } = require('express');
const { cookieJwtAuth } = require('../middleware/cookieJwtAuth')
const jwt = require('jsonwebtoken');

const router = Router();
const db = require('../database').databaseConnection;

function parseJwt (token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

router.get("/transactions/:user_id", async (req,res) => {
    const q = 'SELECT DATE_ADD(transaction_date, INTERVAL 8 HOUR) as transaction_date, form_name, transaction_id, transaction_status FROM transactions WHERE user_id = ? and transaction_status = "ongoing"'
    const userId = req.params.user_id

    db.query(q, userId, (err, results) => {
      if(err) console.error('ERROR', err);
      res.json(results)
    })
    
})

router.get("/transaction_details/:id", async (req,res) => {
    const q = 'SELECT * FROM transaction_info INNER JOIN transactions ON transactions.transaction_id = transaction_info.transaction_id WHERE transaction_info.transaction_id = ?'
    const userId = req.params.id

    const details = await new Promise((resolve) => {
      db.query(q, userId, (err, data) => {
        if(err) console.error('ERROR', err);
        resolve(data)
      })
    })
  
    const values = []
  
    for(i=0;i<details.length;i++){
    let status = ""
    if (details[i].transaction_status == "await_approval"){
      status = "Awaiting Approval"
    }
    else if (details[i].transaction_status == "ongoing"){
      status = "Processing"
    }

    details[i].transaction_status = status
  
    values.push(details[i])
    }
    
    res.json(values)
})


module.exports = router;