import mongoose from "mongoose";

const compTaskSchema = mongoose.Schema({
    taskTitle: String,
    taskImg: String,
    isCompleted: Boolean
});


module.exports = mongoose.models.completedTask || mongoose.model('completedTask', compTaskSchema);