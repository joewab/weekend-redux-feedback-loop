import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <main>
          <Route exact path="/feeling">
            <div id="feeling">
              <h1>How are you feeling today?</h1>
              <input type="number" placeholder='Feeling?' />
              <button>NEXT</button>
            </div>
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
            <div id="Comments">
              <h1>Any comments you want to leave?</h1>
              <input type="text" placeholder='Comments' />
              <button>NEXT</button>
            </div>
          </Route>
          <Route exact path="/review">
            <div id="Review">
              <h1>Review Your Feedback</h1>
              <h3>Feelings:</h3>
              <h3>Understanding:</h3>
              <h3>Support:</h3>
              <h3>Comments:</h3>
              <button>SUBMIT</button>
            </div>
          </Route>
          <Route exact path="/done">
            <div id="Done">
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
