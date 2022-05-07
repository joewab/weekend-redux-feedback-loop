import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function Review(){
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    console.log(feeling);

    return(
        <div id="deview">
        <h1>Review Your Feedback</h1>
        <h3>Feelings:{feeling}</h3>
        <h3>Understanding:{understanding}</h3>
        <h3>Support:{support}</h3>
        <h3>Comments:{comments}</h3>
        <button>SUBMIT</button>
      </div>
    )
    
}

export default Review

