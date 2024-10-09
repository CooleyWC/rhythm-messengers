import React from 'react';
import { CardContent, Typography, Paper, Divider, CardMedia, Box } from '@mui/material';

const TCard = ({content, author, src, alt, authorTitle}) => {

    const cardStyle = {
        backgroundColor: '#f8f9fa',
        m: {
            xs: '.5rem 2rem .5rem 2rem',
            sm: '1rem 8rem 1rem 8rem',
            md: '1.2rem 10rem 1.2rem 10rem',
            lg: '1.5rem 12rem 1.5rem 12rem',
            xl: '1.6rem 20rem 1.6rem 20rem'

        },
        p: {
            xs: "1.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "5rem",
          },
        maxWidth: {sm: '70%', md: '60%', lg: '50%', xl: '40%'}
    }

    const contentStyle = {
        color: '#0b2545',
        whiteSpace: 'pre-line',
        fontWeight: 300,
        fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            lg: "1.2rem",
            xl: "1.3rem",
          },
        paddingBottom: '1rem'
    }

    const authorStyle = {
        color: '#134074',
        whiteSpace: 'pre-line',
        fontWeight: 700,
        fontSize: {
            xs: "1.2rem",
            sm: "1.3rem",
            lg: "1.4rem",
            xl: "2.1rem",
          },
    }

    const imageStyle = {
        maxWidth: '250px',
        maxHeight: '70px',
        
    }

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: {xs: '2rem', xl: '4rem'},
        paddingLeft: {lg: '1rem'}
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Paper sx={cardStyle}>
                <CardContent>
                    <Typography sx={contentStyle}>
                        &ldquo;{content}&rdquo;
                    </Typography>
                    <Typography sx={authorStyle}>
                        {author}
                    </Typography>
                    <Typography sx={contentStyle}>
                        {authorTitle}
                    </Typography>
                </CardContent>
                <Divider />
                <Box sx={imageContainerStyle}>
                    <CardMedia
                        component="img"
                        src={src}
                        alt={alt}
                        loading="lazy"
                        sx={imageStyle}
                        >
                    </CardMedia>
                </Box>
            </Paper>
        </div>
    );
};

export default TCard;