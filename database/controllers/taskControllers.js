import Task from '../models/taskModels';

export const getTask = async (req, res) => {
    try {
        const result = await Task.find({});
        res.json({
            success: true,
            message: "successfully got the data",
            data: result
        })
    } catch (error) {
        console.log(error.message);
    }
};




export const postTask = async (req, res) => {
    try {
        const task = req.body;
        await new Task(task).save();
        res.json({
            success: true,
            message: "Successfully post the task"
        })
    } catch (error) {
        console.log(error.message);
    }
};



export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.query;
        const task = await Task.findByIdAndDelete(taskId);
        res.json({
            success: true,
            message: "successfully deleted"
        })
    } catch (error) {
        console.log(error.message);
    }
};


export const putTask = async (req, res) => {
    try {
        const { taskId } = req.query;
        const updatedDoc = { isCompleted: true }
        await Task.findByIdAndUpdate(taskId, updatedDoc)
        res.json({
            updatedDoc: updatedDoc
        })
    } catch (error) {
        console.log(error.message);
    }
}