import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Done from '../Done/Done';
import Admin from '../Admin/Admin';
import { Typography } from '@mui/material';



function App() {

  useEffect(() => {
    console.log('in useEffect');
    getReviews();
  }, []);

  const dispatch = useDispatch();

  const getReviews = () => {
    axios({
      method: 'GET',
      url: '/formSubmission'
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: 'GET_REVIEWS',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
        <Typography variant="h2" gutterBottom>Feedback!</Typography>
        <Typography variant="h4" gutterBottom>Don't forget it!</Typography>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/review">Review</Link>
          <Link to="/admin">Admin</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/">
            <Feeling/>
          </Route>
          <Route exact path="/understanding">
            <Understanding/>
          </Route>
          <Route exact path="/support">
           <Support/>
          </Route>
          <Route exact path="/comments">
           <Comments/>
          </Route>
          <Route exact path="/review">
            <Review/>
          </Route>
          <Route exact path="/done">
            <Done/>
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
