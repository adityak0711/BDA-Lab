//1st part
use Database

db.createCollection('Student')

db.Student.insert({ RollNo:1, Age:20, Contact:9988778899, Name:"Aditya", Email:"adityakumar.cs17@bmsce.ac.in"})
db.Student.insert({ RollNo:2, Age:22, Contact:9988112233, Name:"Jatin", Email:"jatin.cs17@bmsce.ac.in"})
db.Student.insert({ RollNo:3, Age:21, Contact:9988554455, Name:"Hritik", Email:"hritik.cs17@bmsce.ac.in"})

db.Student.update({RollNo:1},{$set:{Email:"aditya.cs17@bmsce.ac.in"}})
db.Student.update({RollNo:2},{$set:{Name:"Jatin G"}})

mongoexport -d Database -c Student -f RollNo,Age,Contact,Name,Email --type=csv -o Student.csv
db.Student.drop()
mongoimport -d Database -c Student --type csv --file

//2nd part
use Database

db.createCollection('Customer')

db.Customer.insert({cust_id:1,Acc_bal:1500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:3000,Acc_type:"A"})
db.Customer.insert({cust_id:1,Acc_bal:1200,Acc_type:"A"})
db.Customer.insert({cust_id:3,Acc_bal:500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:1600,Acc_type:"Z"})

db.Customer.find({Acc_bal:{$gt:1200}, Acc_type:"Z"})
db.customers.aggregate([
    {
        $group: {
            _id: "$cust_id",
            min_bal: {$min: "$acc_bal"},
            max_bal: {$max: "$acc_bal"}
        }
    }
]);

mongoexport -d Database -c Customer -f cust_id,Acc_bal,Acc_type --type=csv -o Customer.csv
db.Customer.drop()
mongoimport -d Database -c Customer --type csv --file
