import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';


function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');



    function handleNext() {
        console.log('Support rating is:', supportRating)
        if(supportRating===''){
            alert('please enter a number!')
            return false
        }
        dispatch({
            type: 'RATE_SUPPORT',
            payload: supportRating
        })

        history.push("/comments")
    }

    function handleGoBack() {
        history.push("/understanding")
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>How supported do you feel?</Typography>
            <Input
                required
                type='number'
                placeholder="Support"
                value={supportRating}
                onChange={(event) => setSupportRating(event.target.value)}
            />
            <div id="support">
                <Button onClick={handleGoBack}>Go Back</Button>
                <Button onClick={handleNext}>NEXT</Button>
            </div>
        </>
    );
}

export default Support