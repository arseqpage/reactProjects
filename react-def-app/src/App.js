import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <Router>
      <Login />
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/dialogs" component={() => <DialogsContainer />} />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
