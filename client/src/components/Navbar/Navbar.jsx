import React, { useEffect, useState } from "react";
import Layout from "../Layout.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        setTheme("dark");
        } else {
        setTheme("light");
        }
    }, [setTheme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <Layout>
        <nav className="flex items-center justify-between px-2 py-5">
            <div className="flex items-center gap-x-2">
                <Link to='/' className="text-xl font-bold text-blue-500">MyBlog</Link>
                <button
                className="bg-blue-800 bg-opacity-30 px-1 py-1 text-xl rounded-lg"
                onClick={handleThemeSwitch}
                >
                {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
            <div className="flex items-center gap-2">
            <Link to='/login' className={`${theme !== "dark" ? "bg-primaryColor" : "bg-white"} ${theme !== "dark" ? "text-white" : "text-black"} px-4 py-2 rounded-lg`}>
                Login
            </Link>
            <Link to='/register' className={`${theme === "dark" ? "bg-primaryColor" : "bg-secondaryColor"} px-4 py-2 rounded-lg`}>
                Register
            </Link>
            </div>
        </nav>
        </Layout>
    );
};

export default Navbar;
