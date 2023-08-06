import React, { useState } from "react";
import axios from 'axios'
import {toast, Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


import Layout from "../../components/Layout";
import Input from "../../components/Input";


const RegisterPage = () => {
    
    const navigate = useNavigate();
    
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [cfPassword, setCfPassword] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
            try{
                const data = {username, password, cfPassword};
                await axios.post('http://localhost:9000/api/auth/register', data)
                .then(res => toast.success(res.data.msg))
                .catch(err => toast.error(err.response.data.msg))
                //navigate to login page
                navigate('/login')
            }catch(err){
                console.log(err)
            }
    }

    return (
        <Layout>
            <section className="md:max-w-2xl mx-auto">
                <form 
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-4">
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
                    <Input
                        lblName="Comfirm Password"
                        inputType="password"
                        inputPlaceHolder="Comfirm Passowrd"
                        inputName="cfPassword"
                        onChange={(e) => setCfPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-primaryColor text-white hover:bg-secondaryColor duration-150 ease-in-out border-[1px] border-secondaryColor hover:border-primaryColor py-2 rounded-lg font-thin">
                        Regitser
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

export default RegisterPage;
