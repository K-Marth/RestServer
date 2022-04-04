const { Router } = require('express');
const { usersGet,
        usersPost,
        usersPut,
        usersPatch,
        usersDelete } = require('../controllers/users.controllers');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost)

router.put('/:id', usersPut)

router.patch('/', usersPatch)

router.delete('/', usersDelete)




/*router.get('/', (req, res) => {
    res.json({
        msg: 'get API'
    })
})

router.put('/', (req, res) => {
    res.status(500).json({
        msg: 'put API'
    })
})

router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    })
})

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    })
})

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    })
})*/



module.exports = router;