import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const ___dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

let type = "weekday";
let adv = "it's time to work hard"

if (day === 0 | day === 1){
    type ="the weekend";
    adv = "it's time for fun"
}

app.get("/", (req, res) => {
    res.render( "index.ejs", {
        dayType: type,
        advice: adv,
    });
})


app.listen(port, () => {
    console.log(`Service is running on ${port}`);
})