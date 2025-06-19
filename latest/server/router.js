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
    const cid = request.params.collection
    const connection = await local_client.connect();
    const db = connection.db('colors');
    const meta = db.collection('{{meta}}');
    const collectionData = await meta.findOne({id:cid});
    console.log(cid,collectionData)
    const collection = db.collection(collectionData.name);
    const colors = await collection.find().toArray();
    response.json({
        ...collectionData,
        colors,
    })
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

