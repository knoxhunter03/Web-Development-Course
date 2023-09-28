import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/vegetablesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
  // You can start your server or perform other operations here
})

const vegetableSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    rating: Number,
    review: String
})

const Vegetable = mongoose.model("Vegetable", vegetableSchema);

const vegetable = new Vegetable ({
    _id: 1,
    name: "Potato",
    rating: 8,
    review: "Very tasty & versatile, can be used in any dish!"
})

// vegetable.save();

// const personSchema = new mongoose.Schema({
//     _id: Number,
//     name: String,
//     age: Number
// })

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     _id: 1,
//     name: "Mangalam K",
//     age: 25
// })

// person.save();

// const tomato = new Vegetable({
//     id: 2,
//     name: "Tomato",
//     rating: 5,
//     review: "Good enough, some people they don't like it!"
// });

// const onion = new Vegetable({
//     id: 3,
//     name: "Onion",
//     rating: 5,
//     review: "Can make anyone wet!"
// });

// const capsicum = new Vegetable({
//     id: 4,
//     name: "Capsicum",
//     rating: 5,
//     review: "Available in different shapes & sizes"
// });

// Vegetable.insertMany([tomato, onion, capsicum])
//     .then( () => {
//         console.log("Successfully saved the vegetabes");
//     })
//     .catch( (err) => {
//         console.log.apply(err);
//     });

Vegetable.find(vegetable)
    .then( () => {
        vegetable.forEach((item) => {
            console.log(vegetable.name);
        })
        
    })
    .catch( (err) => {
        console.log.apply(err);
    });




