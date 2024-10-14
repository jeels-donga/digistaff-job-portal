import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Card,
    Input,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import config from "../../config";
import Logo from "../../assets/img/logo.png";
import Hero from "../../assets/svg/hero.svg";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const candidate = { email, password };
        if (!candidate?.email) {
            toast.error("Please Enter Email");
        } else if (!candidate?.password) {
            toast.error("Please Enter Password");
        } else {
            try {
                const result = await axios.post(`${config.apiUrl}/api/loginCandidate`, candidate);
                localStorage.setItem("token", result.data.data.accessToken);
                localStorage.setItem("id", result.data.data._id);
                localStorage.setItem("email", result.data.data.email);
                toast.success(result.data.msg);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } catch (err) {
                toast.error(err?.response?.data?.msg || "Please check details");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-teal-500">
            <div className="w-full max-w-6xl flex items-center justify-between bg-white shadow-lg rounded-2xl p-6">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl ">
                    <Link to="/" className="block mb-8">
                        <img src={Logo} alt="Logo" className="w-24 mx-auto" />
                    </Link>
                    <Card color="transparent" shadow={false} className="p-8 rounded-2xl bg-gray-50">
                        <Typography variant="h3" color="blue-gray" className="text-center mb-6 font-bold text-gray-800">
                            Welcome Back!
                        </Typography>
                        <form onSubmit={handleSubmit} className="mt-8 mb-2 space-y-6">
                            <div className="flex flex-col gap-4">
                                <Input
                                    size="lg"
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    size="lg"
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    icon={
                                        <IconButton
                                            variant="text"
                                            color="blue-gray"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeSlashIcon className="h-5 w-5" />
                                            ) : (
                                                <EyeIcon className="h-5 w-5" />
                                            )}
                                        </IconButton>
                                    }
                                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Link to="/forgot" className="text-sm text-blue-500 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <Button
                                type="submit"
                                className="mt-6 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white rounded-lg shadow-lg transition duration-200"
                                fullWidth
                            >
                                Log In
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Don't have an account?{" "}
                                <Link to="/register" className="font-medium text-blue-500 hover:underline">
                                    Sign Up
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
                <div className="hidden lg:block w-1/2">
                    <img src={Hero} alt="Hero" className="w-full rounded-xl " />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
