import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast, Toaster} from 'react-hot-toast'

import Layout from "../../components/Layout";
import Input from "../../components/Input";

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const LoginPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {username, password};
        try{
            await axios.post('http://localhost:9000/api/auth/login',data);
            navigate('/')
        }catch(err){
            toast.error(err.response.data.msg);
        }
    }


    return (
        <Layout>
        <section className="md:max-w-2xl mx-auto">
            <form 
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col gap-y-4"
            >
                <Input
                    lblName="Username"
                    inputType="text"
                    inputPlaceHolder="Enter Username"
                    inputName="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                    <Input
                    lblName="Password"
                    inputType="password"
                    inputPlaceHolder="Enter Passowrd"
                    inputName="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="submit"
                    className="bg-primaryColor text-white hover:bg-secondaryColor duration-150 ease-in-out border-[1px] border-secondaryColor hover:border-primaryColor py-2 rounded-lg font-thin">
                    Login
                </button>
            </form>
            <Toaster 
                    toastOptions={{
                        position: "top-right",
                        success: {
                            style: {
                                padding: "5px 12px",
                                background: "#0BDA51",
                                color: "black",
                                fontSize: "1em"
                            }
                            },
                        error: {
                            style: {
                                padding: "5px 12px",
                                background: "#D70040",
                                color: "white",
                                fontSize: "1em"
                            }
                            },
                        }}
                />
        </section>
        </Layout>
    );
};

export default LoginPage;
