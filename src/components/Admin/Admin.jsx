import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Admin(){

const reviews = useSelector(store => store.reviewReducer);
const dispatch = useDispatch();
const history = useHistory();





return(
<>
<table>
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
                <tr>
                    <td>{review.feeling}</td>
                    <td>{review.understanding}</td>
                    <td>{review.support}</td>
                    <td>{review.comments}</td>
                    <td><button>Delete</button></td>
                </tr>
            )
        })}
    </tbody>
</table>
</>
)


}

export default Admin