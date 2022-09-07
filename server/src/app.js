const express = require("express");
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/user/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expenseRoute = require("./routes/expenses/ExpenseRoutes");

const app = express();

//env
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "welcome Expenses tracker API"});
});

//rutes routes
app.use('/api/users', userRoute);

//income routes
app.use('/api/income', incomeRoute);

//expense routes
app.use('/api/expense', expenseRoute);

//error
app.use(notFound);
app.use(errorHandler);
//income

//expenses

module.exports = app;