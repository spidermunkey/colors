const express = require('express');
const router = express.Router();
const client = require('./connect.js');

const connect = async name => {
    const connection = await client.connect();
    const standardCollection = connection.db('colors');
    const user_collection = connection.db('user_colors');
    return {
        connection,
        standardCollection,
        user_collection,
    };
}

router.get('/', async (req,res) => {

});

module.exports = router;

