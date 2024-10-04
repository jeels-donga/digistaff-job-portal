import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, InputAdornment, Pagination, Button, Chip } from '@mui/material';
import { Search as SearchIcon, PlaceOutlined as PlaceOutlinedIcon, CalendarMonthOutlined as CalendarMonthOutlinedIcon, CurrencyRupee as CurrencyRupeeIcon, WorkOutline as WorkOutlineIcon, BookmarkBorder as BookmarkBorderIcon, CallMadeOutlined as CallMadeOutlinedIcon, DescriptionOutlined as DescriptionOutlinedIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';

const JobList = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearchInputsTitle = (e) => setSearchTitle(e.target.value);
    const handleSearchInputsLocation = (e) => setSearchLocation(e.target.value);
    const handlePageChange = (event, value) => setCurrentPage(value);

    const clearSearchJob = () => {
        setSearchTitle('');
        setSearchLocation('');
    };

    const filterJobs = () => {
        // Implement job filtering logic here
    };

    const displayjobposts = [
        {
            _id: '1',
            jobtitle: 'Software Engineer',
            city: 'San Francisco',
            state: 'CA',
            created_at: new Date(),
            ctc: '120,000',
            clientpayType: 'annual',
            experience: '3-5 years',
            skill: 'React,Node.js,JavaScript',
            jobdescription: 'We are looking for a talented Software Engineer...',
            ownerPhone: '+1234567890'
        },
        // Add more job posts as needed
    ];

    return (
        <Box className="joblist" sx={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
            <Box className="searchjob" sx={{ marginBottom: '2rem', backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                    <Typography variant="h4" fontWeight={600} color="#002840">
                        Search Job
                    </Typography>
                    {(searchTitle || searchLocation) && (
                        <Typography
                            variant="body2"
                            sx={{ cursor: 'pointer', color: '#002840', textDecoration: 'underline' }}
                            onClick={clearSearchJob}
                        >
                            Clear
                        </Typography>
                    )}
                </Box>
                <Box display="flex" gap={2}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search Job Title"
                        value={searchTitle}
                        onChange={handleSearchInputsTitle}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search Location"
                        value={searchLocation}
                        onChange={handleSearchInputsLocation}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PlaceOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box>
                        <Button
                            onClick={filterJobs}
                            variant="contained"
                            color="primary"
                            sx={{ padding: '0.5rem 1rem' }}
                        >
                            Find Job
                        </Button>
                    </Box>
                </Box>
            </Box>

            {displayjobposts.map((job) => (
                <Box key={job._id} className="job-card" sx={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                            <Link to={`/jobs/${job.jobtitle.replaceAll(' ', '_')}-${job.city.replaceAll(' ', '_')}?jobid=${job._id}`} style={{ textDecoration: 'none' }}>
                                <Typography variant="h5" color="#083c64" fontWeight="bold" gutterBottom>
                                    {job.jobtitle}
                                </Typography>
                            </Link>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
                                <PlaceOutlinedIcon fontSize="small" />
                                {job.city}, {job.state}
                            </Typography>
                            <Box display="flex" gap={2} marginBottom={1}>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <CalendarMonthOutlinedIcon fontSize="small" />
                                    {new Date(job.created_at).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <CurrencyRupeeIcon fontSize="small" />
                                    {job.ctc}/{job.clientpayType}
                                </Typography>
                                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <WorkOutlineIcon fontSize="small" />
                                    {job.experience}
                                </Typography>
                            </Box>
                        </Box>
                        <BookmarkBorderIcon sx={{ fontSize: '2rem', cursor: 'pointer', color: '#002840' }} />
                    </Box>
                    <Box marginBottom={2}>
                        {job.skill.split(',').slice(0, 5).map((skill, index) => (
                            <Chip key={index} label={skill.trim()} size="small" sx={{ marginRight: '8px', backgroundColor: '#f0f0f0', color: '#083c64', fontWeight: 'bold' }} />
                        ))}
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Link to={`/jobs/${job.jobtitle.replaceAll(' ', '_')}-${job.city.replaceAll(' ', '_')}?jobid=${job._id}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    startIcon={<CallMadeOutlinedIcon />}
                                    sx={{ marginRight: '1rem' }}
                                >
                                    View Details
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary" size="small" startIcon={<DescriptionOutlinedIcon />}>
                                Apply Now
                            </Button>
                        </Box>
                        <a href={`https://api.whatsapp.com/send/?phone=${job.ownerPhone}&text=I am interested in your job posting for the "${job.jobtitle}" position in "${job.city}".`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#25D366' }} startIcon={<WhatsAppIcon />}>
                                Chat With Recruiter
                            </Button>
                        </a>
                    </Box>
                </Box>
            ))}

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Pagination
                    count={10} // Replace with actual total pages
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
                <Typography variant="body2">
                    Total: {displayjobposts.length} jobs
                </Typography>
            </Box>
        </Box>
    );
};

export default JobList;
