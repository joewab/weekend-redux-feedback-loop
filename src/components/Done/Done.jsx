import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
            <h1>Thanks for your feedback!</h1>
            <button onClick={handleClick}>Back to Beginning</button>
        </div>
    )
};

export default Done;