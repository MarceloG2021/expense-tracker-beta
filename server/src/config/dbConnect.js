const mongoose = require('mongoose');

const dbConnect =  async () => {
    try {
        await mongoose.connect("mongodb+srv://me:4IFJOdsAVeyOF5ec@expenses-tracker.807ao40.mongodb.net/expenses-tracker-db?retryWrites=true&w=majority", 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,

            autoIndex: true, //make this also true
        });
        console.log(`DB connected Successfully`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;