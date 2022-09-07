const express = require('express');
const { 
    createIncomeCtrl,
    fetchAllIncomeCtrl,
    fetchIncomeDetailsCtrl, 
    updateIncomeCtrl,
    deleteIncomeCtrl,
 } = require('../../controllers/income/IncomeControllers');
 const authMiddleware = require("../../middlewares/authMiddleware");

const incomeRoute = express.Router();

incomeRoute.post("/", authMiddleware, createIncomeCtrl);
incomeRoute.get("/", authMiddleware, fetchAllIncomeCtrl);
incomeRoute.get("/:id", authMiddleware, fetchIncomeDetailsCtrl ); 
incomeRoute.put("/:id", authMiddleware, updateIncomeCtrl );
incomeRoute.delete("/:id", authMiddleware, deleteIncomeCtrl );

module.exports = incomeRoute;