const express = require('express');
const { 
    createExpenseCtrl, 
    fetchAllExpenseCtrl, 
    fetchExpenseDetailsCtrl, 
    updateExpenseCtrl, 
    deleteExpenseCtrl,
 } = require('../../controllers/expenses/ExpenseControllers');
const authMiddleware = require('../../middlewares/authMiddleware');

const expenseRoute = express.Router();

expenseRoute.post("/", authMiddleware, createExpenseCtrl);
expenseRoute.get("/", authMiddleware, fetchAllExpenseCtrl);
expenseRoute.get("/:id", authMiddleware, fetchExpenseDetailsCtrl ); 
expenseRoute.put("/:id", authMiddleware, updateExpenseCtrl );
expenseRoute.delete("/:id", authMiddleware, deleteExpenseCtrl );

module.exports = expenseRoute;