import React from 'react';
import { CardContent, Typography, Paper, Divider, CardMedia, Box } from '@mui/material';
import {cardStyle, contentStyle, authorStyle, imageStyle, imageContainerStyle} from './TCardStyles'

const TCard = ({content, author, src, alt, authorTitle}) => {

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