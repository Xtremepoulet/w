const express = require('express');
const router = express.Router();

const Users = require('../models/users');

const {checkBody } = require('../modules/checkBody')


router.post('/signup', async (req, res) => {

  
    if(!checkBody(req.body, ['password', 'email', 'name'])){
        return res.json({ result: false, error: 'Missing or empty fields' })
    }


   await Users.findOne({ email: req.body.email }).then(data => {
    if(data){
        res.json({ result: false, error: 'User already exists' })
    }else {
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        user.save().then(() => res.json({ result: true}))
    }
   })
    
})



// POST /signin : route chargée de vérifier la connexion d’un utilisateur.

// Si l’email ou le mdp renvoyé est indéfini ou vide, renvoyez : { result: false, error: 'Missing or empty fields' }.


// Si aucun utilisateur est trouvé avec cet email et mdp, renvoyez : { result: false, error: 'User not found' }.


// Sinon, renvoyez : { result: true }.
router.post('/signin', async (req, res) => {
    
    if(!req.body.password || !req.body.email || req.body.password === '' || req.body.email === ''){
        return res.json({ result: false, error: 'Missing or empty fields' })
    }
    

    await Users.findOne({ email: req.body.email }, {password: req.body.password}).then(data => {
        if(data){
            res.json({ result : true })
        }else {
            res.json({ result: false, error: 'User not found' })
        }
    })
})



router.get('/get', (req, res) => {
    res.json({ result : 'ok'})
})






module.exports = router;