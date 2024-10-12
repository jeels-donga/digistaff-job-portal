import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Input,
    Select,
    Button,
    Card,
    Typography,
    Checkbox,
    Chip,
    IconButton,
} from "@material-tailwind/react";
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
import { ApplicationModal } from './ApplicationModel';
import ApplyWithoutRegistrationModal from './ApplyWithoutRegistrationModal';

const JobListingPage = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [jobPosts, setJobPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorite, setFavorite] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState('');
    const [salaryRange, setSalaryRange] = useState([0, 200000]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, [currentPage, searchLocation, searchTitle, selectedJobTypes, selectedExperience, salaryRange]);

    const fetchJobs = async () => {
        setLoading(true);
        // Simulated API call
        setTimeout(() => {
            setJobPosts([
                {
                    id: 1,
                    title: 'Software Engineer',
                    company: 'Tech Co',
                    location: 'San Francisco, CA',
                    salary: '$100,000 - $150,000',
                    postedDate: '2023-10-01',
                    experience: '3-5 years',
                    description: 'We are looking for a talented software engineer...',
                    skills: ['JavaScript', 'React', 'Node.js']
                },
                // Add more job posts here
            ]);
            setLoading(false);
        }, 1000);
    };

    const handleSearchInputs = (e) => {
        setSearchLocation(e.target.value);
    };

    const handleSearchInputsTitle = (e) => {
        setSearchTitle(e.target.value);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const toggleFavorite = (jobId) => {
        setFavorite(prev =>
            prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
        );
    };

    const handleJobTypeChange = (type) => {
        setSelectedJobTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
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
    // const openModal = (job) => {
    //     setSelectedJob(job);
    //     setIsModalOpen(true);
    // };

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
        <div className="container mx-auto px-4 py-8">
            {/* ... (rest of the component remains the same) ... */}


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <Card className="p-4 h-fit lg:sticky lg:top-4">
                    <Typography variant="h5" className="mb-4">Job Filter</Typography>
                    <div className="space-y-4">
                        <Input
                            icon={<MapPinIcon className="h-5 w-5" />}
                            label="Location"
                            value={searchLocation}
                            onChange={handleSearchInputs}
                        />
                        <div>
                            <Typography variant="h6" className="mb-2">Job Type</Typography>
                            {['Full Time', 'Part Time', 'Contract', "Freelance"].map(type => (
                                <Checkbox
                                    key={type}
                                    label={type}
                                    checked={selectedJobTypes.includes(type)}
                                    onChange={() => handleJobTypeChange(type)}
                                />
                            ))}
                        </div>
                        <Select
                            label="Experience Level"
                            value={selectedExperience}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                        >
                            <option value="">Any</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior Level</option>
                        </Select>
                        <div>
                            <Typography variant="h6" className="mb-2">Salary Range</Typography>
                            <div className="flex flex-col items-center space-x-2">
                                <Input
                                    type="number"
                                    label="Min"
                                    value={salaryRange[0]}
                                    onChange={(e) => setSalaryRange([parseInt(e.target.value), salaryRange[1]])}
                                />
                                <span>-</span>
                                <Input
                                    type="number"
                                    label="Max"
                                    value={salaryRange[1]}
                                    onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
                                />
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="lg:col-span-3 space-y-6">
                    <Card className="p-4">
                        <div className="flex items-center space-x-4">
                            <Input
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                label="Search Job Title"
                                value={searchTitle}
                                onChange={handleSearchInputsTitle}
                                className="flex-grow"
                            />
                            <Button onClick={fetchJobs}>Find Job</Button>
                        </div>
                    </Card>

                    {loading ? (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
                            <Typography className="mt-4">Loading jobs...</Typography>
                        </div>
                    ) : jobPosts.length === 0 ? (
                        <Card className="p-8 text-center">
                            <Typography variant="h5" className="mb-2">No jobs found</Typography>
                            <Typography>Try adjusting your search criteria</Typography>
                        </Card>
                    ) : (
                        jobPosts.map((job) => (
                            <Card key={job.id} className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <Typography variant="h4" className="mb-1">{job.title}</Typography>
                                        <Typography variant="h6" color="blue-gray">{job.company}</Typography>
                                    </div>
                                    <IconButton
                                        color={favorite.includes(job.id) ? "blue" : "gray"}
                                        onClick={() => toggleFavorite(job.id)}
                                    >
                                        <BookmarkIcon className="h-5 w-5" />
                                    </IconButton>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <MapPinIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.location}</Typography>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.postedDate}</Typography>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CurrencyDollarIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.salary}</Typography>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <BriefcaseIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.experience}</Typography>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Typography variant="h6" className="mb-2">Skills</Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, index) => (
                                            <Chip key={index} value={skill} color="blue" />
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Typography variant="h6" className="mb-2">Job Description</Typography>
                                    <Typography color="gray">{job.description}</Typography>
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outlined" className="flex items-center">
                                        {/* <Link to={`/jobs/:id`} className="flex items-center"> */}
                                        <Link to={`/jobs/${job._id}`} className="flex items-center">
                                            View Details
                                        </Link>
                                    </Button>
                                    <Button color="green" className="flex items-center"
                                        onClick={() => handleApplyNow(job)}>
                                        Apply Now
                                    </Button>
                                </div>
                            </Card>
                        ))
                    )}

                    <div className="flex justify-between items-center mt-8">
                        <div className="flex gap-2">
                            <IconButton
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                            </IconButton>
                            <IconButton
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                <ArrowRightIcon className="h-5 w-5" />
                            </IconButton>
                        </div>
                        <Typography>Page {currentPage}</Typography>
                    </div>
                </div>

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

export default JobListingPage;
