const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  
    res.status(200);
    res.send('hello friend');
 
});


router.get('/', function(req, res) {
  //res.status(200).json(trolotlotlolos);
});

router.post('/add', function(req, res) {
  // const result = req.body
  // res.status(200).json({somme:result});
});






module.exports = router;