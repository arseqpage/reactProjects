import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App({ dispatch, appState, store }) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar dispatch={dispatch} />

        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

          <Route path="/dialogs" component={() => <Dialogs store={store} />} />
          <Route
            path="/profile"
            render={() => <Profile profilePage={appState.profilePage} dispatch={dispatch} />}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
