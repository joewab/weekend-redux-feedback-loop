import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';


function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    

    function handleNext(){
        console.log('Comments rating is:', comments)
        dispatch({
            type:'LEAVE_COMMENT',
            payload: comments
          })

        history.push("/review")
    }

    function handleGoBack(){
        history.push('/support')
    }

    

    return (
        <>
            <Typography variant="h4" gutterBottom>Additional Comments</Typography>
             <textarea
                    required
                    type='text'
                    placeholder="Comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
            <div id="comments">
            <Button onClick={handleGoBack}>Go Back</Button>
            <Button onClick={handleNext}>NEXT</Button>
            </div>
            
        </>
    );
}

export default Comments