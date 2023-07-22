import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {loginFailed,loginStart,loginSuccess} from "../../redux/userSlice";

const Signin = () => {
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try{
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signin`,{username,password});
            dispatch(loginSuccess(res.data));
            navigate("/");

        }catch(err){
            dispatch(loginFailed());
            navigate("/signin/error");

        }

    };

    const handleSignup = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try{
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`,{username,password,email});
            dispatch(loginSuccess(res.data));
            navigate("/");

        }catch(err){
            dispatch(loginFailed());
            navigate("/signup/error");

        }

    };

    return (
        <form className='bg-gray-200 flex flex-col py-7 px-10 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10'>
            <h2 className='text-2xl font-bold text-center'>Sign in to Twitter</h2>
            <input onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='username' className='text-l py-2 rounded-full px-4'></input>
            <input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='password' className='text-l py-2 rounded-full px-4'></input>
            <button onClick={handleLogin} className='text-l py-2 rounded-full px-4 bg-blue-500 text-white'>Sign In</button>
            <p className='text-l text-center'>Dont have an account?</p>
            <input onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='username' className='text-l py-2 rounded-full px-4'></input>
            <input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='email' className='text-l py-2 rounded-full px-4' required></input>
            <input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='password' className='text-l py-2 rounded-full px-4'></input>
            <button onClick={handleSignup} className='text-l py-2 rounded-full px-4 bg-blue-500 text-white' type='submit'>Sign Up</button>

        </form>
    );
};

export default Signin;