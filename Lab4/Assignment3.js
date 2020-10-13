use myDB
db.createCollection("Country")

db.Country.insert({_id:1,Cities:["Delhi","Banglore"]})
db.Country.insert({_id:2,Cities:["Chennai","Mumbai","Ranchi"]})
db.Country.insert({_id:3,Cities:["Pune","Rajkot","Hyderabad"]})

db.Country.find()

db.Country.find().limit(1)
db.country.find().skip(2).limit(2)

db.Country.update({_id:1},{$push:{population:{Delhi:30,Banglore:45}}})
db.Country.find()

db.Country.update({_id:3},{$pop:{Cities:1}})
db.Country.find()

db.Country.update({Cities:"Chennai"},{$pull:{Cities:'Chennai'}})
db.Country.find()

db.Country.update({_id:1},{$set:{'Cities.2':'Srinagar'}})
db.Country.update({_id:2},{$addToSet:{Cities:"Mysore"}})
db.Country.find()
