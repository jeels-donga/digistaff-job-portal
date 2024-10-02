import React from 'react';
import { Typography, Button, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, Apple, Android } from '@mui/icons-material';

const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/digistaffservices", color: "#3b5998" },
    { icon: Instagram, url: "https://www.instagram.com/digistaff/", color: "#c32aa3" },
    { icon: LinkedIn, url: "https://www.linkedin.com/company/digistaff/", color: "#0077b5" },
    { icon: Twitter, url: "https://twitter.com/digistaff", color: "#1da1f2" },
];

const companyLinks = [
    { text: "About Us", url: "https://digistaff.in/about" },
    { text: "Contact Us", url: "https://digistaff.in/contact" },
    { text: "Our Service", url: "https://digistaff.in/service" },
    { text: "FAQ", url: "https://digistaff.in/faq" },
];

const moreLinks = [
    { text: "Blogs", url: "https://digistaff.in/blog" },
    { text: "Our Team", url: "https://digistaff.in/team" },
    { text: "Testimonials", url: "https://digistaff.in/testimonials" },
];

const Footer = () => {
    const handleMapLink = (address) => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
    };

    return (
        <footer className="bg-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src="/api/placeholder/150/50" alt="Company Logo" className="w-36 mb-4" />
                        <Typography variant="body2" className="mt-4">
                            About Digistaff Consultants is the pioneer of organized recruitment services in India. Over the years, we have acted as preferred talent acquisition partner to multinationals and leading Indian businesses to emerge as the leading recruitment brand nationally.
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <Typography variant="h6" className="mb-4 font-bold">Company</Typography>
                            <ul className="space-y-2">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#214d3c] hover:underline">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Typography variant="h6" className="mb-4 font-bold">More</Typography>
                            <ul className="space-y-2">
                                {moreLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#214d3c] hover:underline">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="my-8 flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <Button
                            variant="contained"
                            href="https://digistaff.in/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4 bg-[#003E63] hover:bg-[#002d4a]"
                        >
                            Contact Us
                        </Button>
                        <Button
                            variant="contained"
                            href="/jobs"
                            className="bg-[#003E63] hover:bg-[#002d4a]"
                        >
                            Apply
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <Typography variant="h6" className="mb-2 font-bold">
                            <span
                                className="text-[#083c64] border-b border-[#083c64] cursor-pointer"
                                onClick={() => window.open(`https://maps.app.goo.gl/ph3Qn24ewk2Ant7m9`, "_blank")}
                            >
                                Katargam
                            </span>
                        </Typography>
                        <Typography variant="body2">
                            86, Dhanraj Socity, katargam Road, behind Gajera school, near laxmi anclave, Surat, Gujarat 395008
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" className="mb-2 font-bold">
                            <span className="text-[#083c64] border-b border-[#083c64]">
                                Contact With Us
                            </span>
                        </Typography>
                        <div className="flex space-x-4 mt-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <div className={`p-2 rounded-full cursor-pointer transition-transform hover:scale-110`} style={{ backgroundColor: social.color }}>
                                        <social.icon className="text-white" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <Typography variant="body2" className="mb-4 sm:mb-0">
                        Copyright © {new Date().getFullYear()}. All Rights Reserved by digistaff
                    </Typography>
                    <div className="flex items-center space-x-2">
                        <Typography variant="body2">Download Apps</Typography>
                        <Link
                            href="https://apps.apple.com/us/app/resume-builder-using-ai/id1475925300?ls=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Apple className="text-black hover:text-gray-600" />
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.digistaff.resumeapp&hl=en&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Android className="text-black hover:text-gray-600" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;