import React, { useState } from 'react';
import { Box, Grid, TextField, InputAdornment, FormControl, RadioGroup, FormControlLabel, Radio, Slider, Typography, Button } from '@mui/material';
import Search from '@mui/icons-material/Search';

const JobFilter = () => {
    const [searchLocation, setSearchLocation] = useState("");
    const [locationStatus, setLocationStatus] = useState("");
    const [experience, setExperience] = useState(0);
    const [salaryRange, setSalaryRange] = useState(0);

    const MAX_YEARS = 30;
    const MAX_SALARY = 3000000;

    const handleAllfilterClear = () => {
        setSearchLocation("");
        setLocationStatus("");
        setExperience(0);
        setSalaryRange(0);
    };

    const clearSearchJob = () => {
        setSearchLocation("");
        setLocationStatus("");
        setExperience(0);
        setSalaryRange(0);
    };

    const filterJobs = (currentPage, itemsPerPage) => {
        // Logic to filter jobs based on the current filters
    };

    return (
        <Box sx={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <Typography variant="h6" fontWeight="bold">Job Filter</Typography>
                <Button size="small" onClick={handleAllfilterClear} sx={{ color: '#009CD0', textTransform: 'none' }}>
                    Clear all
                </Button>
            </Box>

            {/* Job Location Filter */}
            <Box sx={{ marginBottom: '24px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold">Job Location</Typography>
                    {(searchLocation !== "" || locationStatus !== "") && (
                        <Button size="small" onClick={clearSearchJob} sx={{ color: '#009CD0', textTransform: 'none' }}>
                            Clear
                        </Button>
                    )}
                </Box>
                <TextField
                    size="small"
                    fullWidth
                    type="text"
                    label="Location"
                    placeholder="Search by Location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search
                                    onClick={() => filterJobs(1, 10)}
                                    className="searchicon"
                                    style={{ cursor: "pointer", color: '#009CD0' }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") filterJobs(1, 10);
                    }}
                    sx={{ backgroundColor: "#fff", borderRadius: '8px', marginTop: '8px' }}
                />
                <FormControl component="fieldset" sx={{ marginTop: '16px' }}>
                    <RadioGroup
                        value={locationStatus}
                        onChange={(e) => setLocationStatus(e.target.value)}
                        row
                    >
                        <FormControlLabel
                            value="OnSite"
                            control={<Radio sx={{ color: '#666', "&.Mui-checked": { color: '#009CD0' } }} />}
                            label="On Site"
                        />
                        <FormControlLabel
                            value="Remote"
                            control={<Radio sx={{ color: '#666', "&.Mui-checked": { color: '#009CD0' } }} />}
                            label="Remote"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Job Experience Filter */}
            <Box sx={{ marginBottom: '24px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold">Job Experience</Typography>
                    {experience !== 0 && (
                        <Button size="small" onClick={clearSearchJob} sx={{ color: '#009CD0', textTransform: 'none' }}>
                            Clear
                        </Button>
                    )}
                </Box>
                <Slider
                    value={experience}
                    min={0}
                    max={MAX_YEARS}
                    valueLabelDisplay={experience !== 0 ? "on" : "auto"}
                    onChange={(e) => setExperience(e.target.value)}
                    sx={{ color: '#009CD0' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <Typography>{experience} Yrs</Typography>
                    <Typography>{MAX_YEARS} Yrs</Typography>
                </Box>
            </Box>

            {/* Job Salary Range Filter */}
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold">Job Salary Range</Typography>
                    {salaryRange !== 0 && (
                        <Button size="small" onClick={clearSearchJob} sx={{ color: '#009CD0', textTransform: 'none' }}>
                            Clear
                        </Button>
                    )}
                </Box>
                <Slider
                    value={salaryRange}
                    min={0}
                    max={MAX_SALARY}
                    step={10000}
                    valueLabelDisplay={salaryRange !== 0 ? "on" : "auto"}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    sx={{ color: '#009CD0' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <Typography>{(salaryRange / 100000).toFixed(1)} Lakhs</Typography>
                    <Typography>{(MAX_SALARY / 100000).toFixed(1)} Lakhs</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default JobFilter;
