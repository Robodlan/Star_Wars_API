import express, { json } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express()
const port = 3000;
const url = "https://swapi.dev/api/planets/1/"

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", async (req, res) => {
  try {
   res.render("index.ejs", { data: "Show Planet" });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
})

app.post("/", async (req, res) => {
  try {
    const response = await axios.post(url);
    console.log(req.body)
    const result = response.data;
    res.render("index.ejs", { data: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
})

app.listen(port, ()=> {
    console.log(`Running  on port ${port}` );
})
