const express = require('express');
const router = express.Router();
const {local_client} = require('./utils/connect.js');

router.get('/meta/collections', async (request,response) => {
    const connection = await local_client.connect();
    const db = connection.db('colors');
    const meta = db.collection('{{meta}}');
    const meta_data = await meta.find({collection_type:'local'}).toArray();
    response.json(meta_data)
})
router.get('/meta/projects', async (request,response) => {
    const connection = await local_client.connect();
    const db = connection.db('colors');
    const meta = db.collection('{{meta}}');
    const meta_data = await meta.find({collection_type:'project'}).toArray();
    response.json(meta_data)
})

router.get('/collections/:collection', async (request,response) => {

});

router.get('/projects/:project', async (request,response) => {

});

router.get('/', async (request,response) => {
    const connection = await local_client.connect();
    const db = connection.db('colors');
    const meta = db.collection('{{meta}}');
    const meta_data = await meta.find().toArray()
    console.log(meta_data)
    response.json(meta_data)
})

module.exports = router;

