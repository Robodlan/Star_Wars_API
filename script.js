import express, { json } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express()
const port = 3000;
const url = "https://swapi.dev/api/planets/"

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(url)
    console.log(result.data.results)
    res.render("index.ejs", { data: result.data });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
})

app.post("/", async (req, res) => {
  try {
    const result = await axios.get(url);
    // console.log(result.data);
    res.render("index.ejs", {
      ship: result.data
    });
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
