import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    

    function handleClick(){
        console.log('Comments rating is:', comments)
        dispatch({
            type:'LEAVE_COMMENT',
            payload: comments
          })

        history.push("/review")
    }

    return (
        <div id="Comments">
            <h1>Additional Comments</h1>
             <textarea
                    required
                    type='text'
                    placeholder="Comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
}

export default Comments