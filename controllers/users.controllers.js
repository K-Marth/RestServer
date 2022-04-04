const { response, request } = require('express');

const usersGet = (req = request, res = response) => {

    const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q, nombre, apikey, page, limit
    })
}

const usersPost = (req, res = response) => {

    //const body = req.body;
    const { nombre, edad } = req.body;


    res.status(500).json({
        msg: 'post API - controlador',
        //body
        nombre,
        edad
    })
}

const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.status(201).json({
        msg: 'put API - controlador',
        id
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
}

const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete

}