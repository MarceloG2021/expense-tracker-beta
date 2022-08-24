const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/user/usersRoute");

const app = express();


//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//rutes
app.use('/', userRoute);


app.use(errorHandler);

//income

//expenses

module.exports = app;