import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');

    

    function handleClick(){
        console.log('Support rating is:', supportRating)
        dispatch({
            type:'RATE_SUPPORT',
            payload: supportRating
          })

        history.push("/comments")
    }

    return (
        <div id="Support">
            <h1>How well are you Support the content?</h1>
             <input
                    required
                    type='number'
                    placeholder="Support"
                    value={supportRating}
                    onChange={(event) => setSupportRating(event.target.value)}
                />
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
}

export default Support