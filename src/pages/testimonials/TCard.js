import React from 'react';
import { CardContent, Typography, Paper, Divider, CardMedia, Box } from '@mui/material';

const TCard = ({content, author, src, alt}) => {

    const cardStyle = {
        backgroundColor: '#e9ecef',
        m: {
            xs: '.5rem 2rem .5rem 2rem',
            sm: '1rem 3rem 1rem 3rem',
            md: '1.2rem 4rem 1.2rem 4rem',
            lg: '1.5rem 10rem 1.5rem 10rem',
            xl: '1.6rem 15rem 1.6rem 15rem'

        },
        p: {
            xs: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
            xl: "5rem",
          }
    }

    const contentStyle = {
        color: '#001F3F',
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
        color: '#001F3F',
        whiteSpace: 'pre-line',
        fontWeight: 400,
        fontSize: '1rem',
        fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            lg: "1.2rem",
            xl: "1.3rem",
          },
    }

    const imageStyle = {
        maxWidth: '300px',
        maxHeight: '100px',
        
    }

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: {xs: 'center', lg: 'left'},
        paddingTop: '1rem'
    }

    return (
        <div>
            <Paper sx={cardStyle}>
                <CardContent>
                    <Typography sx={contentStyle}>
                        &ldquo;{content}&rdquo;
                    </Typography>
                    <Typography sx={authorStyle}>
                        {author}
                    </Typography>
                </CardContent>
                <Divider />
                <Box sx={imageContainerStyle}>
                    <CardMedia
                        component="img"
                        src={src}
                        alt={alt}
                        loading="lazy"
                        style={imageStyle}
                        >
                    </CardMedia>
                </Box>
            </Paper>
        </div>
    );
};

export default TCard;