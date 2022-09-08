const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");


//create

const createIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const {title, amount, description, user } = req.body;
    try {
      const income = await Income.create({  
        title,
        amount,
        description,
        user,
    });
    res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch all income

const fetchAllIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const { page } = req.query;
    console.log(req?.user);
    try {
      const income = await Income.paginate(
        {}, 
        { limit: 10, page: Number(page), populate: "user" }
        );
    res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch single income

const fetchIncomeDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
      const income = await Income.findById(id);
    res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//update

const updateIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const {title, amount, description } = req.body;
    try {
        const income = await Income.findByIdAndUpdate(
            id,
            {
                title,
                description,
                amount,
            },
            { new: true }
            );
            res.json(income)
    } catch (error) {
        res.json(error);
    }
});

//delete

const deleteIncomeCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
      const income = await Income.findByIdAndDelete(id);
    res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { 
    createIncomeCtrl, 
    fetchAllIncomeCtrl, 
    fetchIncomeDetailsCtrl, 
    updateIncomeCtrl, 
    deleteIncomeCtrl,
};
