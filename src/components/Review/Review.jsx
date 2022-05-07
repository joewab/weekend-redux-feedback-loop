import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';



function Review({getReviews}) {

  const dispatch = useDispatch();
  const history = useHistory();

  const feeling = useSelector(store => store.feelingReducer);
  const understanding = useSelector(store => store.understandingReducer);
  const support = useSelector(store => store.supportReducer);
  const comments = useSelector(store => store.commentsReducer);

  function handleSubmit() {
    console.log( feeling, understanding, support, comments );
    if (feeling==='' || understanding==='' || support==='' || comments===''){
      alert('Please complete the form!')
      return false
    }

    axios({
      method: 'POST',
      url: '/formSubmission',
      data: { feeling, understanding, support, comments }
    }).then((response) => {
      console.log('response from review submit button:', response);
      getReviews();
      history.push('/done');
    }).catch((error) => {
      console.log('POST /formSubmission broke:', error);
    })


  }

  function handleGoBack(){
    history.push('/comments')
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>Review Your Feedback</Typography>
      <Typography variant="h6" gutterBottom>Feelings: {feeling}</Typography>
      <Typography variant="h6" gutterBottom>Understanding: {understanding}</Typography>
      <Typography variant="h6" gutterBottom>Support: {support}</Typography>
      <Typography variant="h6" gutterBottom>Comments: {comments}</Typography>
    <div id="review">
      <Button onClick={handleGoBack}>Go Back</Button>
      <Button onClick={handleSubmit}>SUBMIT</Button>
    </div>
    </>
  )

}

export default Review

