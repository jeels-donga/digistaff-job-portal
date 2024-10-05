import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
    Input,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { toast } from 'react-toastify';

const ApplyWithoutRegistrationModal = ({ isOpen, onClose, jobId }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null,
        experience: '',
        currentCTC: '',
        expectedCTC: '',
        noticePeriod: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.agreeToTerms) {
            toast.error("Please agree to the terms and conditions");
            return;
        }

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append('jobId', jobId);

        try {
            const response = await axios.post(`${config.apiUrl}/api/apply-without-registration`, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            toast.success(response.data.message);
            onClose();
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred while submitting your application");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Card className="w-96 max-h-[90vh] overflow-y-auto">
                <CardHeader floated={false} className="h-20">
                    <div className="flex justify-between items-center m-4">
                        <Typography variant="h5" color="blue-gray">
                            Apply Without Registration
                        </Typography>
                        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
                    </div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            type="text"
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="tel"
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="file"
                            label="Resume"
                            name="resume"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            required
                        />
                        <Select
                            label="Experience"
                            name="experience"
                            value={formData.experience}
                            onChange={(value) => handleChange({ target: { name: 'experience', value } })}
                            required
                        >
                            <Option value="0-1">0-1 years</Option>
                            <Option value="1-3">1-3 years</Option>
                            <Option value="3-5">3-5 years</Option>
                            <Option value="5+">5+ years</Option>
                        </Select>
                        <Input
                            type="text"
                            label="Current CTC"
                            name="currentCTC"
                            value={formData.currentCTC}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            label="Expected CTC"
                            name="expectedCTC"
                            value={formData.expectedCTC}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            label="Notice Period"
                            name="noticePeriod"
                            value={formData.noticePeriod}
                            onChange={handleChange}
                            required
                        />
                        <Checkbox
                            label="I agree to the terms and conditions"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />
                        <Button type="submit" fullWidth>
                            Submit Application
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="pt-0">
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            Sign In
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ApplyWithoutRegistrationModal;