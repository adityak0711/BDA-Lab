use myDB

db.createCollection("books");

db.books.save({_id:1,Category:"Machine Learning",BookName:"Machine Learning for Hackers",Author:"Drew Conway",qty:25,price:400,rol:30,pages:350});
db.books.save({_id:2,Category:"Business Intelligence",BookName:"Fundamentals of Business Analytics",Author:"Seema Acharya",qty:55,price:500,rol:30,pages:250});
db.books.save({_id:3,Category:"Analytics",BookName:"Competing on Analytics",Author:"Thomas",qty:8,price:150,rol:20,pages:150});
db.books.save({_id:4,Category:"Visualisation",BookName:"Visualising Data",Author:"Ben Fry",qty:12,price:325,rol:6,pages:450});

db.books.find()

db.books.mapReduce(
    function() {
        let key = null, value = null;
        if(this.pages >= 300){
            key = "Big books";
            value = this.pages;
        }
        else{
            key = "Small books";
            value = this.pages;
        }
        emit(key, value);
    },
    function(key, values){
        return values.length;
    },
    {
        out: "Book_Records"
    }
);
db.Book_Records.find()
