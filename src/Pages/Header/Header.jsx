import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import config from "../../config";
import { Box, Button, Card, Menu, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Notification from "../../assets/svg/noti-icon.svg";
import Profile from "../../assets/svg/profile.svg";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import JobNoti from "../../assets/img/Job-noti.png";
import axios from "axios";
import { toast } from "react-toastify";
const Header = ({ }) => {
    const page = 0;
    const rowsPerPage = 3;
    const authenticated = localStorage.getItem("id");
    // const [jobposts, setJobposts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const openNoti = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotiClose = () => {
        setAnchorEl(null);
    };
    // const getJobpostdata = () => {
    //   axios
    //     .get(`${config.apiUrl}/api/get_all_jobpost`)
    //     .then((response) => {
    //       const jobpostData = response.data.data;
    //       setJobposts(jobpostData);
    //     })
    //     .catch((err) => {
    //       toast.error(err.response.data.error, {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //     });
    // };
    // useEffect(() => {
    //   getJobpostdata();
    // }, []);

    return (
        <>
            <nav className="navb">
                <Container>
                    <div div className="grid grid-cols-2">
                        <div className="logo w-[25%] mt-5">
                            <Link to="/" >
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        {!authenticated ? (
                            <>
                                {/* <Box className="nav_btns">
                                    <Link to="/login" style={{ textDecoration: "none" }}>
                                        <Button id="login_text" variant="outlined">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link to="/register" style={{ textDecoration: "none" }}>
                                        <Button id="login_text" variant="outlined">
                                            Register
                                        </Button>
                                    </Link>
                                </Box> */}
                                <div className="flex justify-end self-center gap-5">
                                    <Link to="/login" style={{ textDecoration: "none" }}>
                                        <Button id="login_text" variant="outlined">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link to="/register" style={{ textDecoration: "none" }}>
                                        <Button id="login_text" variant="outlined">
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="icon">
                                    <Button
                                        id="basic-button"
                                        aria-controls={openNoti ? "basic-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openNoti ? "true" : undefined}
                                        onClick={handleClick}
                                    >
                                        <img src={Notification} alt="Notification" width="30px" />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openNoti}
                                        onClose={handleNotiClose}
                                        MenuListProps={{
                                            "aria-labelledby": "basic-button",
                                        }}
                                    >
                                        <Card
                                            sx={{ width: "auto", height: "auto", border: "none" }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontWeight: "bold",
                                                    paddingLeft: "1rem",
                                                    fontFamily: "math",
                                                }}
                                            >
                                                Notifications
                                            </Typography>
                                            <Card
                                                sx={{
                                                    width: "auto",
                                                    height: "auto",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        p: 1,
                                                        gap: "1rem",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <img
                                                        src={JobNoti}
                                                        alt="JobNoti"
                                                        width="40px"
                                                        height="40px"
                                                    />
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontWeight: "bold",
                                                                fontSize: "15px",
                                                                fontFamily: "math",
                                                            }}
                                                        >
                                                            New Jobs Arrival
                                                        </Typography>
                                                        {/* {jobposts
                                ?.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                                )
                                ?.map((val) => (
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "grey",
                                      fontFamily: "math",
                                    }}
                                  >
                                    {!val?.jobtitle ? "N/A" : val?.jobtitle}
                                  </Typography>
                                ))} */}
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px",
                                                                color: "grey",
                                                                fontFamily: "math",
                                                            }}
                                                        >
                                                            title
                                                            {/* {!val?.jobtitle ? "N/A" : val?.jobtitle} */}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Card>
                                    </Menu>
                                    <Link to="/editprofile" style={{ textDecoration: "none" }}>
                                        <Button>
                                            <img src={Profile} alt="Profile" width="32px" />
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </Container >
            </nav >
        </>
    );
};

export default Header;
