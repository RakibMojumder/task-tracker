import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="bg-[url('../public/img/5559852.jpg')] h-[100vh] bg-no-repeat bg-center bg-cover flex justify-center items-center text-slate-800">
            <div className='border w-[400px] p-10 bg-white rounded-2xl'>
                <h1 className='text-4xl font-bold mb-8 text-center'>Login</h1>
                <form className='space-y-8'>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-5 text-xl'><HiOutlineMail /></span>
                            <input className='w-full border-none focus:outline-none bg-transparent' type="email" placeholder='User Email' />
                        </div>
                    </div>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-5 text-xl'><RiLockLine /></span>
                            <div className='w-full flex items-center'>
                                <input className='w-full border-none focus:outline-none bg-transparent' type="password" placeholder='User Password' />
                                <span className='ml-4 text-lg'>{showPass ? <FaRegEye onClick={() => setShowPass(!showPass)} /> : <FaRegEyeSlash onClick={() => setShowPass(!showPass)} />}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2 text-base'>
                            <div>
                                <input className='mr-2' type="checkbox" name="" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <p className='text-end hover:underline'>Forget password?</p>
                        </div>
                    </div>
                    <button className='w-full py-2 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase hover:bg-gradient-to-l' type='submit'>LogIn</button>
                </form>
                <p className='text-center my-3'>Or</p>
                <button className='flex items-center justify-center border border-slate-600 w-full py-2 rounded-full uppercase font-semibold'><FcGoogle className='mr-3 text-xl' /> Log in with google</button>
                <p className='mt-4 text-center'>New to Task Tracker? <Link className='hover:underline' href='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;