import React from 'react';
import { CardContent, Typography, Paper } from '@mui/material';

const TCard = ({content, author}) => {

    const cardStyle = {
        backgroundColor: '#001F3F',
        padding: '40px',
        margin: '40px'
    }

    const typeStyle = {
        color: 'white',
        whiteSpace: 'pre-line',
        fontWeight: 100,
    }

    return (
        <div>
            <Paper style={cardStyle}>
                <CardContent>
                    <Typography style={typeStyle}>
                        {content}
                        {author}
                    </Typography>
                </CardContent>
            </Paper>
        </div>
    );
};

export default TCard;