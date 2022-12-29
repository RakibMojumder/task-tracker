import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from 'react-nextjs-toast'

const AddTask = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const taskTitle = e.target.taskTitle.value;
        // const taskDescription = e.target.taskDescription.value;
        const taskImg = e.target.taskImg.files[0];
        formData.append("image", taskImg);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imgbb_api_Key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const task = {
                        taskTitle: taskTitle,
                        isCompleted: false,
                        taskImg: data.data.url,
                    }

                    fetch('http://localhost:3000/api/task', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.notify("Task added")
                            console.log(data);
                        })
                }
            })
    }

    return (
        <div className='min-h-full flex justify-center items-center'>
            <div className='w-[500px] p-10 text-slate-800 border border-slate-700 rounded-lg'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-3 text-xl'><IoIosAddCircleOutline /></span>
                            <input className='w-full border-none focus:outline-none bg-transparent' type="text" placeholder='Add Task' name='taskTitle' />
                        </div>
                    </div>
                    {/* <div>
                        <textarea className='w-full h-20 border border-slate-900 rounded-lg pl-3 pt-2' name="taskDescription" id="" placeholder='Description'></textarea>
                    </div> */}
                    <div className="rounded-lg shadow-xl bg-gray-50 p-3">
                        <div className="m-4">
                            <label className="inline-block mb-2 text-gray-500">Upload
                                Image(jpg,png,svg,jpeg)</label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-16 border-2 border-dashed border-slate-400 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-0">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Select a photo</p>
                                    </div>
                                    <input name='taskImg' type="file" className="opacity-0" required />
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className='w-full py-2 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase hover:bg-gradient-to-l' type='submit'>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddTask;