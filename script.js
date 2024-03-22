import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express()
const port = 3000;
const url = "https://swapi.dev/api/planets/10/"
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))



app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    
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

    console.log(req.body)
    const response = await axios.get(url);
    const result = response.data;
    res.redirect("index.ejs", { data: "Show Planet" });
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
