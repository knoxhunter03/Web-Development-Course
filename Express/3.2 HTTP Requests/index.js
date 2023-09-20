import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>My name is Gustavo</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>I'm the most wanted, Only I can contact you!</h1>");
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})