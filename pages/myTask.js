
import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const MyTask = ({ tasks }) => {
    // const [showModal, setShowModal] = useState(false);

    const handleDeleteTask = (id) => {
        fetch(`http://localhost:3000/api/task?taskId=${id}`,
            {
                method: "DELETE"
            }).then(res => res.json()).then(data => console.log(data))
    };


    // const handleUpdateTask = (id) => {
    //     fetch(`http://localhost:3000/api/task?taskId=${id}`, {
    //         method: "PATCH"
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    return (
        <div>
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                No.
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                Image
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                Task title
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                Delete
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                Edit
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 uppercase"
                            >
                                Completed
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            tasks?.map((task, index) => <tr key={task._id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                                    {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                                    {/* {task?.taskImg && <Image src={task?.taskImg} alt="" />} */}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                                    {task?.taskTitle}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center text-xl"><FaRegTrashAlt onClick={() => handleDeleteTask(task._id)} className='inline-block' /></td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center text-xl"><FaRegEdit className='inline-block' /></td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"><button className={`${task?.completed ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} py-0.5 px-3`}>{task?.completed ? "Completed" : "Not Completed"}</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;


export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/task');
    const data = await res.json();

    return {
        props: {
            tasks: data.data
        }
    }
}