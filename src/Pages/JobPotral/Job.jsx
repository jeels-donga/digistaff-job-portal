import React from 'react';
import JobHeader from './JobHeader';
import { Container, Grid } from '@mui/material';
import JobFilter from './JobFilter';
import JobList from './JobList';
import ViewBoxModel from './ViewBoxModel';


const Job = () => {
    return (
        <div>
            <JobHeader />
            {/* job filter */}
            <div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={4}>
                            <JobFilter />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <JobList />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <ViewBoxModel />
            </div>
        </div>
    );
};

export default Job;
