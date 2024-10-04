import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import Frame from '../../assets/svg/Frame.svg';
const JobHeader = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className="section">
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        {/* Text Section */}
                        <Grid item xs={12} md={6}>
                            <div className="secttext">
                                <Typography variant="h3" className="jbtitle" gutterBottom>
                                    Explore Job Opportunities
                                </Typography>
                                <Typography variant="body1" className="jbtxt">
                                    Looking for jobs? Browse our latest job openings to view &amp;
                                    apply to the best jobs today!
                                </Typography>
                            </div>
                        </Grid>

                        {/* Image Section */}
                        <Grid item xs={12} md={6}>
                            <div className="frameimg">
                                <img src={Frame} alt="Job Opportunities" style={{ width: '100%' }} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* Section 2 */}
            <div className="section">
                <Container>
                    <Grid container spacing={4}>
                        {/* You can add content here */}
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default JobHeader
