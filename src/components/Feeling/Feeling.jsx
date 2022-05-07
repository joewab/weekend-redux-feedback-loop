import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


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
        <div id="Feeling">
            <h1>How are you Feeling today?</h1>
             <input
                    required
                    type='number'
                    placeholder="Feeling"
                    value={feelingRating}
                    onChange={(event) => setFeelingRating(event.target.value)}
                />
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
}

export default Feeling