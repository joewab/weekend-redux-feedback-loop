import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const feelingReducer = (state = '', action) => {

    if(action.type==='RATE_FEELING'){
      console.log('feeling rated',action.payload)
        return action.payload
    }
    else if(action.type==='DELETE_FORM'){
        console.log('deleted',action.payload)
          return action.payload
      }
    return state;
  };

const understandingReducer = (state = '', action) => {

    if(action.type==='RATE_UNDERSTANDING'){
      console.log('understanding rated',action.payload)
        return action.payload
    }
    else if(action.type==='DELETE_FORM'){
        console.log('deleted',action.payload)
          return action.payload
      }
    return state;
  };

  const supportReducer = (state = '', action) => {

    if(action.type==='RATE_SUPPORT'){
      console.log('support rated',action.payload)
        return action.payload
    }
    else if(action.type==='DELETE_FORM'){
        console.log('deleted',action.payload)
          return action.payload
      }
    return state;
  };

  const commentsReducer = (state = '', action) => {

    if(action.type==='LEAVE_COMMENT'){
      console.log('comment:',action.payload)
        return action.payload
    }
    else if(action.type==='DELETE_FORM'){
        console.log('deleted',action.payload)
          return action.payload
      }
    return state;
  };

  const reviewReducer = (state = [], action) => {
    if(action.type==='GET_REVIEWS'){
      console.log('reviews gotten:', action.payload);
      return action.payload;
    }
    return state;
  }


const storeInstance = createStore(
    combineReducers({
      feelingReducer,
      understandingReducer,
      supportReducer,
      commentsReducer,
      reviewReducer,
    //   doneReducer,
    }),
    applyMiddleware(logger),
  );

  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
  registerServiceWorker();
  