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
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

const JobListingPage = () => {
    const [jobPosts, setJobPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorite, setFavorite] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalJobPosts, setTotalJobPosts] = useState(0);
    const [searchLocation, setSearchLocation] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [experience, setExperience] = useState('');
    const [salaryRange, setSalaryRange] = useState([0, 200000]);
    const itemsPerPage = 5;

    const [debouncedExperience] = useDebounce(experience, 1000);
    const [debouncedSalaryRange] = useDebounce(salaryRange, 1000);

    useEffect(() => {
        fetchJobs(currentPage, itemsPerPage);
    }, [currentPage, debouncedExperience, debouncedSalaryRange]);

    useEffect(() => {
        filterJobs();
    }, [searchLocation, searchTitle, selectedJobTypes]);

    const fetchJobs = async (page, limit) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${config.apiUrl}/api/get_all_jobpost?page=${page}&limit=${limit}&activeJob=true`
            );
            const jobPostData = response.data.data;
            setJobPosts(jobPostData);
            setTotalJobPosts(response.data.totalJobPosts);
        } catch (err) {
            toast.error(
                err?.response?.data?.msg ||
                "Something went wrong, please try again later.",
                { position: toast.POSITION.TOP_RIGHT }
            );
        } finally {
            setLoading(false);
        }
    };

    const filterJobs = async () => {
        setLoading(true);
        try {
            const url = `${config.apiUrl}/api/get_all_search_jobpost?page=${currentPage}&limit=${itemsPerPage}&city=${searchLocation}&jobtitle=${searchTitle}&remotestatus=${selectedJobTypes.join(',')}&experience=${debouncedExperience}&ctc=${debouncedSalaryRange.join('-')}&activeJob=true`;
            const response = await axios.get(url);
            const filteredData = response.data.data;
            setJobPosts(filteredData);
            setTotalJobPosts(response.data.totalJobPosts);
        } catch (error) {
            toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
        } finally {
            setLoading(false);
        }
    };

    const handleSearchInputs = (e) => {
        setSearchLocation(e.target.value);
    };

    const handleSearchInputsTitle = (e) => {
        setSearchTitle(e.target.value);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= Math.ceil(totalJobPosts / itemsPerPage)) {
            setCurrentPage(newPage);
        }
    };

    const toggleFavorite = async (jobId) => {
        if (favorite.includes(jobId)) {
            const temp = favorite.filter(id => id !== jobId);
            setFavorite(temp);
            try {
                const result = await axios.post(`${config.apiUrl}/api/remove_savedJobs`, {
                    candidateId: localStorage.getItem("id"),
                    savedJobs: temp,
                });
                toast.success(result.data.msg, { position: toast.POSITION.TOP_RIGHT });
            } catch (err) {
                toast.error(err?.response?.data?.msg || "Please check details", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } else {
            const tempFav = [...favorite, jobId];
            setFavorite(tempFav);
            try {
                const result = await axios.post(`${config.apiUrl}/api/savedJobs`, {
                    candidateId: localStorage.getItem("id"),
                    savedJobs: tempFav,
                });
                toast.success(result.data.msg, { position: toast.POSITION.TOP_RIGHT });
            } catch (err) {
                toast.error(err?.response?.data?.msg || "Please check details", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    };

    const handleJobTypeChange = (type) => {
        setSelectedJobTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const clearFilters = () => {
        setSearchLocation('');
        setSearchTitle('');
        setSelectedJobTypes([]);
        setExperience('');
        setSalaryRange([0, 200000]);
        setCurrentPage(1);
        fetchJobs(1, itemsPerPage);
    };

    return (
        <div className="container mx-auto px-4 py-8">
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
                        <Input
                            type="number"
                            label="Experience (years)"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
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
                        <Button onClick={clearFilters}>Clear Filters</Button>
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
                            <Button onClick={filterJobs}>Find Job</Button>
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
                            <Card key={job._id} className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <Typography variant="h4" className="mb-1">{job.jobtitle}</Typography>
                                        <Typography variant="h6" color="blue-gray">{job.client_name}</Typography>
                                    </div>
                                    <IconButton
                                        color={favorite.includes(job._id) ? "blue" : "gray"}
                                        onClick={() => toggleFavorite(job._id)}
                                    >
                                        <BookmarkIcon className="h-5 w-5" />
                                    </IconButton>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <MapPinIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.city}</Typography>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon className="h-5 w-5 text-blue-gray-500" />
                                        <Typography>{job.jobposted_date}</Typography>
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
                                    <Typography color="gray">{job.jobdescription}</Typography>
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outlined" className="flex items-center">
                                        <Link to={`/jobs/${job._id}`}>View Details</Link>
                                    </Button>
                                    <Button color="green" className="flex items-center">
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
                                disabled={currentPage * itemsPerPage >= totalJobPosts}
                            >
                                <ArrowRightIcon className="h-5 w-5" />
                            </IconButton>
                        </div>
                        <Typography>Page {currentPage} of {Math.ceil(totalJobPosts / itemsPerPage)}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobListingPage