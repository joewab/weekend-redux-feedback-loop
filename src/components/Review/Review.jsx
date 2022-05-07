import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Review() {

  const dispatch = useDispatch();
  const history = useHistory();

  const feeling = useSelector(store => store.feelingReducer);
  const understanding = useSelector(store => store.understandingReducer);
  const support = useSelector(store => store.supportReducer);
  const comments = useSelector(store => store.commentsReducer);

  function handleSubmit() {
    console.log( feeling, understanding, support, comments );
    axios({
      method: 'POST',
      url: '/formSubmission',
      data: { feeling, understanding, support, comments }
    }).then((response) => {
      console.log('response from review submit button:', response);
      history.push('/done');
    }).catch((error) => {
      console.log('POST /formSubmission broke:', error);
    })


  }

  return (
    <div id="review">
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understanding}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comments}</h3>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )

}

export default Review

