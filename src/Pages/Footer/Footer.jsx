import React from "react";
import { Container, Grid, Typography, Link, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/img/logo.png";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import "./footer.css";

const Footer = () => {
    const facebook_url = "https://www.facebook.com/digistaffservices";
    const instagram_url = "https://www.instagram.com/digistaff/";
    const linkedin_url = "https://www.linkedin.com/company/digistaff/";
    const twitter_url = "https://twitter.com/digistaff";

    const handleMapLink = (address) => {
        const encodedAddress = encodeURIComponent(address);
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
            "_blank"
        );
    };

    return (
        <footer style={{ backgroundColor: "#fff", padding: "40px 0px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* Left section */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={Logo} alt="Company Logo" style={{ width: "150px" }} />
                            <Typography variant="body1" style={{ marginTop: "20px" }}>
                                About Digistaff Consultants is the pioneer of organized
                                recruitment services in India. Over the years, we have acted as
                                preferred talent acquisition partner to multinationals and
                                leading Indian businesses to emerge as the leading recruitment
                                brand nationally.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right section */}
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            {/* First column in right section */}
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ marginBottom: "20px" }}>
                                    Company
                                </Typography>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/about"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/contact"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/service"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            Our Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/faq"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>

                            {/* Second column in right section */}
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ marginBottom: "20px" }}>
                                    More
                                </Typography>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/blog"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/team"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{ textDecoration: "none", color: "#214d3c" }}
                                            href="https://digistaff.in/testimonials"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn_hover"
                                        >
                                            Testimonials
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="space-between"
                    style={{ margin: "40px 0" }}
                >
                    <Grid item xs={12} md={12} lg={12}>
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                            <hr className="contact_footer" />
                            <Link
                                style={{ textDecoration: "none", color: "#FFF" }}
                                href="https://digistaff.in/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    className="footer_button"
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginRight: "16px",
                                        minWidth: "200px",
                                        background: "#003E63",
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </Link>
                            <Link
                                style={{ textDecoration: "none", color: "#FFF" }}
                                href="/jobs"
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    className="footer_button"
                                    variant="contained"
                                    style={{ background: "#003E63" }}
                                    color="primary"
                                >
                                    Apply
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" mb={1}>
                                <span
                                    style={{
                                        color: "#083c64",
                                        fontWeight: "bold",
                                        borderBottom: "1px solid #083c64",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        window.open(
                                            `https://maps.app.goo.gl/ph3Qn24ewk2Ant7m9`,
                                            "_blank"
                                        )
                                    }
                                >
                                    {" "}
                                    katargam
                                </span>
                            </Typography>{" "}
                            <Typography variant="body1">
                                86, Dhanraj Socity, katargam Road, behind Gajera school, near
                                laxmi anclave, Surat, Gujarat 395008
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" mb={1}>
                                <span
                                    style={{
                                        color: "#083c64",
                                        fontWeight: "bold",
                                        borderBottom: "1px solid #083c64",
                                    }}
                                >
                                    {" "}
                                    Contact With Us
                                </span>
                            </Typography>
                            <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
                                <Link
                                    href={facebook_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#3b5998",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        className="social_icon"
                                    >
                                        <FacebookIcon style={{ color: "#fff" }} />
                                    </div>
                                </Link>
                                <Link
                                    href={instagram_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#c32aa3",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        className="social_icon"
                                    >
                                        <InstagramIcon style={{ color: "#fff" }} />
                                    </div>
                                </Link>
                                <Link
                                    href={linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#0077b5",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        className="social_icon"
                                    >
                                        <LinkedInIcon style={{ color: "#fff" }} />
                                    </div>
                                </Link>
                                <Link
                                    href={twitter_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#1da1f2",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        className="social_icon"
                                    >
                                        <TwitterIcon style={{ color: "#fff" }} />
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <hr style={{ margin: "40px 0" }}></hr>
                <Box
                    component="footer"
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Typography>
                        Copyright © 2024. All Rights Reserved by digistaff
                    </Typography>
                    <div style={{ display: "flex", gap: "8px", justifyItems: "center" }}>
                        <Typography color={"#000"}>Download Apps</Typography>
                        <Link
                            color={"#000"}
                            href={
                                "https://apps.apple.com/us/app/resume-builder-using-ai/id1475925300?ls=1"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AppleIcon className="icon" />
                        </Link>
                        <Link
                            color={"#000"}
                            href={
                                "https://play.google.com/store/apps/details?id=com.digistaff.resumeapp&hl=en&pli=1"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AdbIcon className="icon" />
                        </Link>
                    </div>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
