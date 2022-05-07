import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';


function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');

    

    function handleClick(){
        console.log('Feeling rating is:', feelingRating)
        dispatch({
            type:'RATE_FEELING',
            payload: feelingRating
          })

        history.push("/understanding")
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>How are you Feeling today?</Typography>
            <div id="feeling">
             <Input
                    required
                    type='number'
                    placeholder="Feeling"
                    value={feelingRating}
                    onChange={(event) => setFeelingRating(event.target.value)}
                />
            </div>
            <Button onClick={handleClick}>NEXT</Button>
            
        </>
    );
}

export default Feeling