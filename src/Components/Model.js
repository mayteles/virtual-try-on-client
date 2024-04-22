import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Model.scss';


function Model() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/next-page'); //change for actual page
        }, 30000); 

        return () => clearTimeout(timer); 
    }, [ navigate ]);

    return (
        <div className='model'>
            <div className='model__container'>
                <img className='model__silhouette' src={require('')} alt='Model silhouette'/>
                <img className='model__selector' src={require('')} alt='Model selector'/>
            </div>
           <Box className='model__progress' sx={{ display: 'flex' }}>
                <CircularProgress />
           </Box>
        </div>
    );
}

export default Model;
