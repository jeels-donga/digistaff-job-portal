import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, IconButton, MobileNav, Navbar, Typography, Menu, Card } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from "../../assets/img/logo.png";
import Notification from "../../assets/svg/noti-icon.svg";
import Profile from "../../assets/svg/profile.svg";
import JobNoti from "../../assets/img/Job-noti.png";
import config from "../../config";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [jobposts, setJobposts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const authenticated = Boolean(localStorage.getItem("id"));
    const openNoti = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotiClose = () => {
        setAnchorEl(null);
    };

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

    useEffect(() => {
        getJobpostdata();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const NotificationMenu = () => (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openNoti}
            onClose={handleNotiClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
        >
            <Card className="max-w-md shadow-lg">
                <Typography className="font-bold text-lg p-4">Notifications</Typography>
                {jobposts.length > 0 ? (
                    jobposts.map((val, index) => (
                        <div key={index} className="flex p-2 border-b last:border-b-0">
                            <img src={JobNoti} alt="Job Notification" className="w-10 h-10 rounded-full" />
                            <div className="ml-2">
                                <Typography className="font-semibold">{val?.jobtitle || "N/A"}</Typography>
                                <Typography className="text-gray-500 text-sm">New Jobs Arrival</Typography>
                            </div>
                        </div>
                    ))
                ) : (
                    <Typography className="text-center p-4 text-gray-500">No new notifications</Typography>
                )}
            </Card>
        </Menu>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl bg-gradient-to-r px-4 py-2 lg:px-8 lg:py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between text-white gap-5">
                <Link to="/jobs" style={{ textDecoration: "none" }}>
                    <img src={Logo} alt="Logo" className='w-[10%] md:w-[8%]' />
                </Link>
                <div className="flex items-center gap-x-2">
                    {!authenticated ? (
                        <div className="flex gap-x-2">
                            <Link to="/login">
                                <Button
                                    variant="outlined"
                                    className="w-[88px] bg-white text-black hover:bg-[#003E63] hover:text-white"
                                >
                                    Log In
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button
                                    variant="outlined"
                                    className="bg-white text-black hover:bg-[#003E63] hover:text-white"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-x-4">
                            <Button
                                id="basic-button"
                                aria-controls={openNoti ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openNoti ? "true" : undefined}
                                onClick={handleClick}
                                className="relative hover:bg-[#003E63] transition-all rounded-full p-1"
                            >
                                <img src={Notification} alt="Notification" width="30px" />
                                {jobposts.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{jobposts.length}</span>
                                )}
                            </Button>
                            <NotificationMenu />
                            <Link to="/editprofile" style={{ textDecoration: "none" }}>
                                <Button className="hover:bg-[#003E63] transition-all rounded-full p-1">
                                    <img src={Profile} alt="Profile" width="32px" />
                                </Button>
                            </Link>
                        </div>
                    )}
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav} className="bg-gradient-to-r from-[#003E63] to-[#003E63]">
                <div className="container mx-auto">
                    {authenticated ? (
                        <Link to="/profile" className="w-full">
                            <Button fullWidth variant="text" size="sm" className="text-white">My Profile</Button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="w-full">
                                <Button fullWidth variant="text" size="sm" className="text-white">Log In</Button>
                            </Link>
                            <Link to="/register" className="w-full">
                                <Button fullWidth variant="gradient" size="sm" className="text-white">Sign In</Button>
                            </Link>
                        </>
                    )}
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default Header;
