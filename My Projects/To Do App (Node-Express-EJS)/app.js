import express from "express";
import ejs from "ejs";
import bodyParser from 'body-parser';



const app = express();
const port = 3000;

// Set the render engine for HTML files to dynamically render using EJS
app.set("view engine", "ejs");
// Use the bodyParser package to get data from the form
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
  
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today  = new Date();
const currentYear = new Date().getFullYear();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res) => {
   
    const day = today.toLocaleDateString("en-US", options);
    console.log(day);


  
    res.render("list", {listTitle: day, newListItems: items, currentYear});
})


app.post("/", (req, res) => {
    const newItem = req.body.newItem;

    items.push(newItem);
    res.redirect("/");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})