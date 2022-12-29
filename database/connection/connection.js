// connection mongodb

const mongoose = require('mongoose');
const url = "mongodb+srv://Task-tracker:l1CaVnhyDNvh2Sxl@cluster0.zzty5cj.mongodb.net/?retryWrites=true";

const main = async () => {
    console.log(url);

    mongoose.set('strictQuery', false);
    mongoose.connect(url);
    console.log("Database is connected");
};


export default main;