import main from "../../../database/connection/connection";
import { deleteTask, getTask, postTask, putTask } from "../../../database/controllers/taskControllers";

const handler = async (req, res) => {
    await main().catch(e => console.log(e.message));

    try {
        const { method } = req;

        switch (method) {
            case "GET":
                getTask(req, res);
                break;
            case "POST":
                postTask(req, res)
                break;
            case "PUT":
                putTask(req, res)
                break;
            case "DELETE":
                deleteTask(req, res)
                break;

            default:
                res.send("nothing")
        }

    } catch (error) {
        console.log(error.message);
    }
};


export default handler;