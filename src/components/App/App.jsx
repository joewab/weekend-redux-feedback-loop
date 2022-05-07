import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';

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
            <div id="understanding">
              <h1>How well are you understanding the content?</h1>
              <input type="number" placeholder='Understanding?' />
              <button>NEXT</button>
            </div>
          </Route>
          <Route exact path="/support">
            <div id="support">
              <h1>How well are you being supported?</h1>
              <input type="number" placeholder='Support?' />
              <button>NEXT</button>
            </div>
          </Route>
          <Route exact path="/comments">
            <div id="comments">
              <h1>Any comments you want to leave?</h1>
              <input type="text" placeholder='Comments' />
              <button>NEXT</button>
            </div>
          </Route>
          <Route exact path="/review">
            <Review/>
          </Route>
          <Route exact path="/done">
            <div id="done">
              <h1>Thanks for your feedback!</h1>
              <button>Leave</button>
            </div>
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
