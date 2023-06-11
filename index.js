const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const { connectDb } = require("./connectDb");
const authRoute=require('./route/authRoute')
const categoriesRoute=require('./route/categoriesRoute')
const carsRoute=require('./route/carRoute')


config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.CLIENT}:${process.env.CLIENT_PORT}`,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
app.use("",authRoute)
app.use("/categories",categoriesRoute)
app.use("/cars",carsRoute)

connectDb()


app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});



module.exports = app;
