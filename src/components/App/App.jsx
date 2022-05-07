import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Done from '../Done/Done';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/review">Review</Link>
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
        </main>
      </div>
    </Router>
  );
}

export default App;
