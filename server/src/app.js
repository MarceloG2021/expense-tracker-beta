const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/user/usersRoute");

const app = express();


//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//rutes
app.use('/api/users', userRoute);

//error
app.use(notFound);
app.use(errorHandler);
//income

//expenses

module.exports = app;