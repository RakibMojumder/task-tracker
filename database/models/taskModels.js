const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskTitle: String,
    isCompleted: Boolean,
    taskImg: String
});

module.exports = mongoose.models.task || mongoose.model("task", taskSchema);