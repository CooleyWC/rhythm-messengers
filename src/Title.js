import React from 'react';
import {Grid} from '@mui/material';


function Title(props) {
    return (
        <Grid className = 'title-container'>
            <Grid item xs={12}>
                <div className="bg-image">
                    <img src='media/RMELogo300-2-ver-4.png' alt='drum-logo' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </Grid>
        </Grid>
    );
}

export default Title;