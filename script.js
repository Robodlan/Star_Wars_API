import express, { json } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express()
const port = 3000;
const url = "https://swapi.dev/api/planets/1/"

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
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
    const result = await axios.get(url);
    console.log(result.data.name);
    res.render("index.ejs");
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
