import React, { useState } from "react";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import {auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeRegister = (event: React.FormEvent) =>{
        event.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            alert("Account created!");
        navigate("/");
            }).catch((error) => {
                alert(error.message);
            });
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-1 text-center">Create an account</h2>
            <p className="text-sm text-gray-400 mb-6 text-center">Enter your information to get started</p>

            <form onSubmit={hanldeRegister}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-200">Full Name</label>
                    <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-200">Email</label>
                    <input
                    type="email"
                    placeholder="Email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1 text-gray-200">Password</label>
                    <input
                    type="password"
                    placeholder="..........."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>
                
                <button type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Create account          
                </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-400">
                Already have an account?{" "}      
                <a href="/" className="text-blue-400 hover:underline">Sign in</a>     
            </p>

        </div>
    </div>
);

}

export default Register;