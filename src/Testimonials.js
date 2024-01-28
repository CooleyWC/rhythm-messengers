import React from 'react';
import NavBar from './NavBar';
import {Grid, Card, CardContent, Typography} from '@mui/material'

function Testimonials(props) {

    const cardStyle = {
        backgroundColor: 'black'
    }

    const typeStyle = {
        color: 'white'
    }

    return (
        <div id='testemonials'>
            <NavBar>
            </NavBar>
            <Grid container>
                <Card style={cardStyle}>
                    <CardContent>
                        <Typography style={typeStyle}>
                            "Rhythm Messengers helped transform what could have been a stuffy boring corporate meeting into an unforgettable experience. They provided a  multi-set custom performance piece for our event. Their high energy drum breaks got our employees out of their chairs, on their feet, and kept them excited and engaged throughout the day.  Our employees were dancing, involved in the performance, and of course taking pictures and videos to show off how much fun they were having while at “work” all over social media. Working with the team in the planning stage was a breeze. They were always available whenever we had questions and were able to transform our initial idea into something spectacular. One-third of attendees listed the drum-line as their favorite part of our entire event.  We can’t wait to work with Rhythm Messengers again every year!"
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default Testimonials;