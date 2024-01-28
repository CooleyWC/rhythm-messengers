import React from 'react';
import NavBar from '../NavBar';
import { Grid, Box, Typography } from '@mui/material'
import TCard from './TCard';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Testimonials(props) {


    const containerStyle = {
        paddingTop: '50px',
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
        
    }

    const titleStyle = {
        fontSize: '48px',
        color: '#f77a00',
        marginBottom: '20px'
    }

    const gridContainerStyle = {
        alignItems: 'center',
        justifyContent: 'center'
    }

    const thumbsUpStyle = {
        color: 'white',
        fontSize: '40px',
        paddingBottom: '20px'
    }


    return (
        <div id='testimonials'>

            <NavBar />
            <Box id='testimonials' style={containerStyle}>
                    <Typography variant='h4' style={titleStyle}>
                        What People Say
                    </Typography>   
                <Grid container style={gridContainerStyle}>
                    <ThumbUpIcon style={thumbsUpStyle}/>
                    <TCard
                    content={`"Rhythm Messengers helped transform what could have been a stuffy boring corporate meeting into an unforgettable experience. They provided a  multi-set custom performance piece for our event.\n\n Their high energy drum breaks got our employees out of their chairs, on their feet, and kept them excited and engaged throughout the day.  Our employees were dancing, involved in the performance, and of course taking pictures and videos to show off how much fun they were having while at “work” all over social media.\n\n Working with the team in the planning stage was a breeze. They were always available whenever we had questions and were able to transform our initial idea into something spectacular. One-third of attendees listed the drum-line as their favorite part of our entire event.  We can’t wait to work with Rhythm Messengers again every year!"\n\n`}
                    author="- Stacy Medima, Creative Manager DecisionOne Dental Partners."
                    >
                    </TCard>
                </Grid>
            </Box>

           
        </div>
    );
}

export default Testimonials;