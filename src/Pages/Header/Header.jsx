import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Card, Menu, Typography } from "@material-tailwind/react";
import Logo from "../../assets/img/logo.png";
import Notification from "../../assets/svg/noti-icon.svg";
import Profile from "../../assets/svg/profile.svg";
import JobNoti from "../../assets/img/Job-noti.png";
import config from "../../config";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
    const [jobposts, setJobposts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const authenticated = localStorage.getItem("id");
    const openNoti = Boolean(anchorEl);

    useEffect(() => {
        if (authenticated) {
            getJobpostdata();
        }
    }, [authenticated]);

    const getJobpostdata = async () => {
        try {
            const response = await axios.get(`${config.apiUrl}/api/get_all_jobpost`);
            setJobposts(response.data.data);
        } catch (err) {
            toast.error(err.response?.data?.error || "An error occurred", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleNotiClose = () => setAnchorEl(null);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="w-24">
                        <img src={Logo} alt="Logo" className="w-full" />
                    </Link>
                    <div className="flex items-center space-x-4">
                        {!authenticated ? (
                            <>
                                <Link to="/login">
                                    <Button color="blue" variant="outlined">
                                        Log In
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button color="blue" variant="filled">
                                        Register
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button onClick={handleClick}>
                                    <img src={Notification} alt="Notification" className="w-6 h-6" />
                                </Button>
                                <Menu
                                    open={openNoti}
                                    handler={handleNotiClose}
                                    placement="bottom-end"
                                >
                                    <Card className="w-96">
                                        <Card className="m-1">
                                            <Typography variant="h6" color="blue-gray" className="p-2">
                                                Notifications
                                            </Typography>
                                            <hr className="my-2" />
                                            <div className="p-2">
                                                <div className="flex items-center space-x-4">
                                                    <img src={JobNoti} alt="JobNoti" className="w-10 h-10" />
                                                    <div>
                                                        <Typography variant="h6" color="blue-gray">
                                                            New Jobs Arrival
                                                        </Typography>
                                                        {jobposts.slice(0, 3).map((job, index) => (
                                                            <Typography key={index} variant="small" color="gray" className="font-normal">
                                                                {job.jobtitle || "N/A"}
                                                            </Typography>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Card>
                                </Menu>
                                <Link to="/editprofile">
                                    <Button className="p-0">
                                        <img src={Profile} alt="Profile" className="w-8 h-8" />
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;