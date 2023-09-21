//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is Gustavo

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    const passwd = req.body.password;
    if(passwd === "Gustavo"){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect(__dirname + "/public/index.html");
    }
  })

app.listen(port, () => {
    console.log(`Service is running on port ${port}`);
})


