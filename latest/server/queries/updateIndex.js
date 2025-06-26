const {local_client} = require('../utils/connect.js');
const {uuid} = require('../utils/uuid.js');
async function run() {
  const connection = await local_client.connect();
  const db = connection.db('colors');
  const meta = db.collection('{{meta}}');
  const all = db.collection('{{all}}');

  const collections = (await db.listCollections().toArray()).map(({name}) => name);
  console.log(collections)  
  for (const collection of collections) {
    let c = db.collection(collection);
    let items = await c.find().toArray();
    items.forEach(item => all.insertOne({
      ...item,
      index_id: uuid(),
    }))
  }
  const info = {
    collection_type: 'index',
    name: 'all',
    cid: uuid(),
    size: await all.countDocuments(),
    created_at: Date.now(),
  }
  meta.insertOne(info)
}

run();
