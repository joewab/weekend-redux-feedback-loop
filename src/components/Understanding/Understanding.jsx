import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');

    

    function handleClick(){
        console.log('Understanding rating is:', understandingRating)
        dispatch({
            type:'RATE_UNDERSTANDING',
            payload: understandingRating
          })

        history.push("/support")
    }

    return (
        <div id="understanding">
            <h1>How well are you understanding the content?</h1>
             <input
                    required
                    type='number'
                    placeholder="Understanding"
                    value={understandingRating}
                    onChange={(event) => setUnderstandingRating(event.target.value)}
                />
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
}

export default Understanding