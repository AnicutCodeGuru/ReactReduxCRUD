var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/blue', function (err, db) {
  if (err) throw err
    



  db.db("blue").collection('activities').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})