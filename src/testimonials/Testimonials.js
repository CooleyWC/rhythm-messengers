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
                    author={"- Stacy Medima, Creative Manager DecisionOne Dental Partners"}
                    >
                    </TCard>
                    <TCard
                    content={'We partnered with Tom and his musicians for a 250 person corporate event in Chicagoland.  We are a sales driven company and having hosted this event every year we were really looking to inject a ton of excitement to get our folks excited and proud of the company they represent.  Tom and his amazing group of drummers were the perfect addition to our sales rally.  They were incredibly easy to work with, provided fresh ideas, delivered an insane performance, and were just nice people!  If you are looking to get your crowd up and moving, hire these guys!\n\n'}
                    author={'- Noel Williams, Operations Director Century 21'}
                    >
                    </TCard>
                    <TCard
                    content={'The Rhythm Messengers...they were amazing!! I truly appreciate their talent, energy and heart they put into the performance; it was a highlight of the night! More than anything, I am grateful for who they are, each one was so nice and happy to be there to make our night special, they are great guys! I look forward to working with them in the future and will be sure to recommend them to others.\n\n'}
                    author={'- Mike Winn, Owner and Founder of Justin Rite Acoustics'}
                    >     
                    </TCard>
                </Grid>
            </Box>

           
        </div>
    );
}

export default Testimonials;