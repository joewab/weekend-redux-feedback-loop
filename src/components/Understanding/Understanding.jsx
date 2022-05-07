import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';



function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');

    

    function handleNext(){
        console.log('Understanding rating is:', understandingRating)
        dispatch({
            type:'RATE_UNDERSTANDING',
            payload: understandingRating
          })

        history.push("/support")
    }

    function handleGoBack(){
        history.push("/")
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>How well are you understanding the content?</Typography>
            
             <Input
                    required
                    type='number'
                    placeholder="Understanding"
                    value={understandingRating}
                    onChange={(event) => setUnderstandingRating(event.target.value)}
                />

            <div id="understanding">
            <Button onClick={handleGoBack}>Go Back</Button>
            <Button onClick={handleNext}>NEXT</Button>
            </div>
            
        </>
    );
}

export default Understanding