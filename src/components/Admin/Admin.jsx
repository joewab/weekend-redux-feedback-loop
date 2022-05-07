import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function Admin({getReviews}){

const reviews = useSelector(store => store.reviewReducer);
const dispatch = useDispatch();
const history = useHistory();





return(
<>
<table className="table">
    <thead>
        <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {reviews.map((review) => {
            return(
                <FeedbackItem key={review.id} getReviews={getReviews} review={review}/>
            )
        })}
    </tbody>
</table>
</>
)


}

export default Admin