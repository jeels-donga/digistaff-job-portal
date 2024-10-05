import React from 'react';
import Logo from '../../assets/img/logo.png';
import './footer.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography, Button as MUIButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
    const socialLinks = {
        facebook: "https://www.facebook.com/tekpillarservices",
        instagram: "https://www.instagram.com/itekpillar/",
        linkedin: "https://www.linkedin.com/company/tekpillar/",
        twitter: "https://twitter.com/tekpillar",
    };

    const companyLinks = [
        { label: "About Us", url: "https://tekpillar.in/about" },
        { label: "Contact Us", url: "https://tekpillar.in/contact" },
        { label: "Our Services", url: "https://tekpillar.in/service" },
        { label: "FAQ", url: "https://tekpillar.in/faq" },
    ];

    const moreLinks = [
        { label: "Blogs", url: "https://tekpillar.in/blog" },
        { label: "Our Team", url: "https://tekpillar.in/team" },
        { label: "Testimonials", url: "https://tekpillar.in/testimonials" },
    ];

    const handleMapLink = (address) => {
        const encodedAddress = encodeURIComponent(address);
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
            "_blank"
        );
    };

    return (
        <footer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* Logo and Company Description */}
                    <Grid item xs={12} md={6}>
                        <div>
                            <img src={Logo} alt="Company Logo" style={{ width: "150px" }} />
                            <Typography variant="body1" style={{ marginTop: "20px" }}>
                                DigiStaff Consultants is the pioneer of organized recruitment services in India. Over the years, we have acted as preferred talent acquisition partners to multinationals and leading Indian businesses to emerge as the leading recruitment brand nationally.
                            </Typography>
                        </div>
                    </Grid>

                    {/* Company Links and More Links */}
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" style={{ marginBottom: "20px" }}>Company</Typography>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {companyLinks.map(({ label, url }, index) => (
                                        <li key={index}>
                                            <Link
                                                to={url} // Changed to use Link from react-router
                                                style={{ textDecoration: "none", color: "#214d3c" }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" style={{ marginBottom: "20px" }}>More</Typography>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    {moreLinks.map(({ label, url }, index) => (
                                        <li key={index}>
                                            <Link
                                                to={url} // Changed to use Link from react-router
                                                style={{ textDecoration: "none", color: "#214d3c" }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginTop: '20px' }}>
                                    <Typography variant="h6" style={{ marginBottom: "10px" }}>Follow Us</Typography>
                                    <ul style={{ listStyle: "none", padding: 0, display: 'flex', gap: '15px' }}>
                                        {Object.entries(socialLinks).map(([key, url]) => (
                                            <li key={key}>
                                                <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${key}`}>
                                                    {React.createElement(
                                                        { facebook: FacebookIcon, instagram: InstagramIcon, linkedin: LinkedInIcon, twitter: TwitterIcon }[key],
                                                        { style: { color: "#fff", fontSize: '24px' } }
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Address and Contact */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6" mb={1} mt={5}>
                            <span
                                style={{
                                    color: "#083c64",
                                    fontWeight: "bold",
                                    borderBottom: "1px solid #083c64",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleMapLink('86, Dhanraj Socity, Katargam, Surat, Gujarat 395008')}
                            >
                                Katargam
                            </span>
                        </Typography>
                        <Typography variant="body1">
                            86, Dhanraj Socity, Katargam, behind Gajera school, near Laxmi Anckale, Surat, Gujarat 395008
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} mt={5}>
                        <Typography variant="h6" mb={1}>
                            <span
                                style={{
                                    color: "#083c64",
                                    fontWeight: "bold",
                                    borderBottom: "1px solid #083c64",
                                }}
                            >
                                Follow Us
                            </span>
                        </Typography>
                        <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
                            {Object.entries(socialLinks).map(([key, url]) => (
                                <Link href={url} target="_blank" rel="noopener noreferrer" key={key} aria-label={`Contact us on ${key}`}>
                                    <div
                                        style={{
                                            backgroundColor: {
                                                facebook: "#3b5998",
                                                instagram: "#c32aa3",
                                                linkedin: "#0077b5",
                                                twitter: "#1da1f2"
                                            }[key],
                                            padding: "8px",
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        className="social_icon"
                                    >
                                        {React.createElement(
                                            { facebook: FacebookIcon, instagram: InstagramIcon, linkedin: LinkedInIcon, twitter: TwitterIcon }[key],
                                            { style: { color: "#fff" } }
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} mt={5}>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                            <Link
                                to="/contact"
                                style={{ textDecoration: "none", color: "#FFF" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MUIButton
                                    variant="contained"
                                    style={{
                                        marginRight: "16px",
                                        minWidth: "200px",
                                        background: "#003E63",

                                    }}
                                >
                                    Contact Us
                                </MUIButton>
                            </Link>
                            <Link
                                to="/jobs"
                                style={{ textDecoration: "none", color: "#FFF" }}
                                rel="noopener noreferrer"
                            >
                                <MUIButton
                                    variant="contained"
                                    style={{
                                        marginRight: "16px",
                                        minWidth: "200px",
                                        background: "#003E63", marginTop: "10px"
                                    }}
                                >
                                    Apply
                                </MUIButton>
                            </Link>
                        </div>
                    </Grid>
                </Grid>

                <hr style={{ margin: "40px 0" }} />

                {/* Copyright Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2">
                        Copyright © 2024. All Rights Reserved by DigiStaff
                    </Typography>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <Typography color={"#000"}>Download Apps</Typography>
                        <Link
                            href="https://apps.apple.com/us/app/resume-builder-using-ai/id1475925300?ls=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download the app on Apple Store"
                        >
                            <AppleIcon className="icon" />
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.tekpillar.resumeapp&hl=en&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download the app on Google Play"
                        >
                            <AdbIcon className="icon" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
