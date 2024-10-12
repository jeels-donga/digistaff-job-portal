import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Popover } from "@material-tailwind/react";
import { ToastContainer } from 'react-toastify';
// import { BookmarkIcon, BookmarkBorderIcon, ShareIcon, FacebookIcon, TwitterIcon, LinkedInIcon, PrintIcon } from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
    MapPinIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    BriefcaseIcon,
    BookmarkIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import NewLogo from "../../assets/img/logo.png";
import { ApplicationModal } from './ApplicationModel';
import ApplyWithoutRegistrationModal from './ApplyWithoutRegistrationModal';

const JobViewPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [jobpost, setJobpost] = useState([]);  // Ideally fetch the job data by `id`
    const [openshare, setOpenShare] = useState(false);
    const [anchorshare, setAnchorShare] = useState(null);
    const [authenticated, setAuthenticated] = useState(null);  // Set authentication logic
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const handleShareClick = (event) => {
        setAnchorShare(event.currentTarget);
        setOpenShare(true);
    };

    const handleShareClose = () => {
        setAnchorShare(null);
        setOpenShare(false);
    };
    const handleApplyNow = (job) => {
        const isLoggedIn = localStorage.getItem("id"); // Assuming you store user ID in localStorage when logged in
        if (isLoggedIn) {
            setSelectedJob(job);
            setIsModalOpen(true);
        } else {
            setSelectedJobId(job.id);
            setIsModalOpen(true);
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
        setSelectedJobId(null);
    };
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        // Here you would typically send the form data to your backend
        setSubmitting(false);
        closeModal();
    };
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-5">
                {loading ? (
                    <div className="flex justify-center items-center text-red-500 h-48">
                        <div className="main_loader"></div>
                    </div>
                ) : (
                    <>
                        <div className="bg-white shadow-md p-5">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-3 gap-4 py-2">
                                    <div className="col-span-2">
                                        <div className="flex items-center">
                                            <div className="mr-4 w-[25%]">
                                                <img src={NewLogo} alt="NewLogo" className="w-18" />
                                            </div>
                                            <div>
                                                <Typography variant="h4" color="blue-gray" className="font-bold">
                                                    Software Engineer
                                                    {/* {jobpost?.jobtitle || "N/A"} */}
                                                </Typography>
                                                <Typography color="gray" className="flex items-center gap-2">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    San Francisco, CA
                                                    {/* {jobpost?.city || "N/A"}, {jobpost?.state || "N/A"} */}
                                                </Typography>
                                                <div className="flex gap-4 mt-2">
                                                    <Typography color="gray" className="flex items-center gap-2">
                                                        <i className="far fa-calendar-alt"></i>
                                                        2023-10-01
                                                        {/* {jobpost?.created_at || "N/A"} */}
                                                    </Typography>
                                                    <Typography color="gray" className="flex items-center gap-2">
                                                        <i className="fas fa-rupee-sign"></i>
                                                        $100,000 - $150,000
                                                        {/* {jobpost?.ctc ? `${jobpost.ctc}` : "N/A"} */}
                                                    </Typography>
                                                    <Typography color="gray" className="flex items-center gap-2">
                                                        <i className="fas fa-briefcase"></i>
                                                        3-5 years
                                                        {/* {jobpost?.experience || "N/A"} */}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                                            </svg>

                                            {/* <PrintIcon className="w-8 h-8 text-[#474d6a]" /> */}
                                            {/* Add print functionality if needed */}
                                        </div>

                                        {!authenticated ? (
                                            <Link
                                                to="/login"
                                                className="no-underline text-[#474d6a]"
                                            >
                                                BookmarkBorderIcon
                                                {/* <BookmarkBorderIcon className="w-8 h-8 cursor-pointer text-[#474d6a]" /> */}
                                            </Link>
                                        ) : (
                                            <>
                                                {jobpost?.favorite ? (
                                                    <BookmarkIcon
                                                        className="w-8 h-8 cursor-pointer text-[#474d6a]"
                                                        onClick={() => removeFavorite(jobpost?._id)}
                                                    />
                                                ) : (
                                                    "BookmarkBorderIcon"
                                                    // <BookmarkBorderIcon
                                                    //     className="w-8 h-8 cursor-pointer text-[#474d6a]"
                                                    //     onClick={() => addToFavorite(jobpost?._id)}
                                                    // />
                                                )}
                                            </>
                                        )}

                                        {/* <ShareIcon
                                            className="w-8 h-8 cursor-pointer text-[#474d6a]"
                                            onClick={handleShareClick}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Description Section */}
                        <div className="bg-white shadow-md mt-5 p-5">
                            <Typography variant="h5" color="blue-gray" className="font-bold mb-3">
                                Job Description
                            </Typography>
                            <div className="text-gray-700 whitespace-pre-wrap">
                                We are looking for a talented software engineer...
                                {/* {jobpost?.jobdescription || "No description available."} */}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white shadow-md mt-5 p-5">
                            <Typography variant="h5" color="blue-gray" className="font-bold mb-3">
                                Skills
                            </Typography>
                            <div className="flex flex-wrap gap-2">
                                {jobpost?.skill?.split(",").map((val, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-gray-50 text-blue-gray-700 rounded-full">
                                        {val.trim()}
                                    </span>
                                )) || "No skills listed"}
                            </div>
                        </div>

                        {/* Apply and WhatsApp Section */}
                        <div className="bg-white shadow-md mt-5 p-5 flex justify-between items-center">
                            <Button color="blue" className="flex items-center gap-2" onClick={() => handleApplyNow(jobpost)}>
                                <i className="fas fa-file-alt"></i> Apply Now
                            </Button>
                            <a
                                href={`https://api.whatsapp.com/send/?phone=${jobpost?.ownerPhone || jobpost?.jobOwnerDetails?.phone}&text=I am interested in your job posting.`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button color="green" className="flex items-center gap-2">
                                    <i className="fab fa-whatsapp"></i> Chat With Recruiter
                                </Button>
                            </a>
                        </div>

                        {/* Share Popover */}
                        <Popover open={openshare} handler={handleShareClose} placement="bottom">
                            <div className="p-4">
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Share
                                </Typography>
                                <hr className="my-2 border-blue-gray-50" />
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                                        {/* <FacebookIcon className="w-8 h-8 cursor-pointer text-blue-600" /> */}
                                    </a>
                                    <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                                        {/* <TwitterIcon className="w-8 h-8 cursor-pointer text-blue-400" /> */}
                                    </a>
                                    <a href="https://www.linkedin.com/home" target="_blank" rel="noopener noreferrer">
                                        {/* <LinkedInIcon className="w-8 h-8 cursor-pointer text-blue-700" /> */}
                                    </a>
                                </div>
                            </div>
                        </Popover>
                    </>
                )}
                <ToastContainer />
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    job={selectedJob}
                    onSubmit={handleSubmit}
                />

                <ApplyWithoutRegistrationModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    jobId={selectedJobId}
                />
            </div>
        </div>
    );
};

export default JobViewPage;
