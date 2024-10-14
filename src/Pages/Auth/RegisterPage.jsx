import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import Logo from "../../assets/img/logo.png";
import config from "../../config";
// import { Spinner } from "react-bootstrap"; // Make sure to install react-bootstrap for the spinner

// Formik Schema For Register
const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter First Name"),
    lastName: Yup.string().required("Enter Last Name"),
    email: Yup.string().email().required("Enter Email Address"),
    phone: Yup.string().required("Please Enter Mobile Number"),
    password: Yup.string().required("Please Create Password"),
    address: Yup.string().required("Please Add Address"),
    pincode: Yup.string().required("Please Enter Pincode"),
    country: Yup.string().required("Please Select Country"),
    state: Yup.string().required("Please Select State"),
    city: Yup.string().required("Please Select City"),
    selectfield: Yup.string().required("Please Select Field"),
    file: Yup.mixed()
        .required("File Is Required")
        .test("file", "Unsupported File Type", (value) => {
            if (!value) return true;
            return (
                value &&
                (value.type === "application/pdf" ||
                    value.type === "image/jpeg" ||
                    value.type === "image/png" ||
                    value.type === "application/msword" ||
                    value.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
            );
        })
        .test("fileSize", "File Size Is Too Large", (value) => {
            if (!value) return true;
            return value && value.size <= 5024000; // 4.8 MB
        }),
});

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([
        "Mern",
        "Mean",
        "UI/Ux",
        "Flutter",
        "Python",
    ]);
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true);
        const data = {
            ...values,
            candidateStatus: "Available",
            source: "Career Portal",
        };

        const configdata = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        try {
            // API call to parse resume
            const parseResponse = await axios.post(
                `${config.apiUrl}/api/resumeParse`,
                data,
                configdata
            );

            const rdata = JSON.parse(parseResponse.data.data);
            data.experience = rdata.experience;
            data.education = rdata.education;

            // API call to register candidate
            const registerResponse = await axios.post(
                `${config.apiUrl}/api/registerCandidate_jobportal`,
                data,
                configdata
            );

            toast.success(registerResponse.data.msg, {
                position: toast.POSITION.TOP_RIGHT,
            });

            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.log(error);
            const errorMsg =
                error.response?.data?.msg ||
                "An error occurred. Please try again later.";
            toast.error(errorMsg, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
                <div className="text-center">
                    <Link to="/" className="flex justify-center mb-4">
                        <img className="h-12 w-auto" src={Logo} alt="Logo" />
                    </Link>
                    <h2 className="text-3xl font-extrabold text-gray-800">Sign Up</h2>
                </div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        phone: "",
                        selectfield: "",
                        address: "",
                        pincode: "",
                        country: "",
                        state: "",
                        city: "",
                        file: null,
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm space-y-4">
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    error={touched.firstName && errors.firstName}
                                    success={touched.firstName && !errors.firstName}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    error={touched.lastName && errors.lastName}
                                    success={touched.lastName && !errors.lastName}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    error={touched.email && errors.email}
                                    success={touched.email && !errors.email}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    label="Phone Number"
                                    error={touched.phone && errors.phone}
                                    success={touched.phone && !errors.phone}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    error={touched.password && errors.password}
                                    success={touched.password && !errors.password}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="address"
                                    name="address"
                                    type="text"
                                    label="Address"
                                    error={touched.address && errors.address}
                                    success={touched.address && !errors.address}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Input
                                    id="pincode"
                                    name="pincode"
                                    type="text"
                                    label="Pincode"
                                    error={touched.pincode && errors.pincode}
                                    success={touched.pincode && !errors.pincode}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                                <Select
                                    label="Select Field"
                                    onChange={(value) => setFieldValue("selectfield", value)}
                                    error={touched.selectfield && errors.selectfield}
                                    className="border border-gray-300 rounded-md p-2"
                                >
                                    {options.map((option) => (
                                        <Option key={option} value={option}>
                                            {option}
                                        </Option>
                                    ))}
                                </Select>
                                <Input
                                    type="file"
                                    label="Resume"
                                    onChange={(event) => {
                                        const file = event.currentTarget.files[0];
                                        setFieldValue("file", file);
                                    }}
                                    error={touched.file && errors.file}
                                    className="border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            {/* <Spinner animation="border" size="sm" className="mr-2" /> */}
                                            Checking resume...
                                        </div>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="text-center">
                    <Typography color="gray">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Log In
                        </Link>
                    </Typography>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
