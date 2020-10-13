use mongoDB
db.createCollection("MongoDBHandsOn")

mongoimport -d mongoDB -c MongoDBHandsOn --type csv --headerline --file "bank-data.csv"

db.MongoDBHandsOn.aggregate([
    { $group : { _id: null, sum: {$sum:"$children"} } }
])
db.MongoDBHandsOn.aggregate([
    { $group : { _id: "Avg of Age", avg: {$avg:"$age"} } }
])
