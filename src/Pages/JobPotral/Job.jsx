import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Frame from "../../assets/svg/Frame.svg";
import "./Job.css";
// import JobFilter from './JobFilter';
import JobListingPage from './JobList';
import JobListingPages from './JobListingApi';

const Job = () => {
    return (
        <>  <div className='section'>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h4" component="h3" gutterBottom>
                                Explore Job Opportunities
                            </Typography>
                            <Typography variant="body1">
                                Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center">
                            <img src={Frame} alt="Job Opportunities" style={{ width: '100%', maxWidth: '500px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
            <div className='section my-[3%]'>
                <Container>
                    {/* <JobFilter /> */}
                    <JobListingPage />
                    {/* <JobListingPages /> */}
                </Container >
            </div >
        </>
    );
}

export default Job;
