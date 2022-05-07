import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';

function Done() {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick(){
        console.log('thank you!')
        dispatch({
            type:'DELETE_FORM',
            payload: ''
          })

        history.push("/")
    }
    return (
        <div id="done">
            <Typography variant="h4" gutterBottom>Thanks for your feedback!</Typography>
            <Button onClick={handleClick}>Back to Beginning</Button>
        </div>
    )
};

export default Done;