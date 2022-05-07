import { useState, useEffect } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

function FeedbackItem({ review, getReviews }) {

    const handleDelete = () => {
        deleteFeedback(review.id)
    }

    const deleteFeedback = (feedbackId) => {
        console.log('this will delete!', feedbackId);
        axios({
            method: 'DELETE',
            url: `/formsubmission/${feedbackId}`
        }).then(function (response) {
            console.log(response);
            getReviews();
        }).catch(function (error) {
            console.log(error);
        })

    }

    return (
        <tr>
            <td>{review.feeling}</td>
            <td>{review.understanding}</td>
            <td>{review.support}</td>
            <td>{review.comments}</td>
            <td><Button onClick={handleDelete}>Delete</Button></td>
        </tr>
    )

}

export default FeedbackItem