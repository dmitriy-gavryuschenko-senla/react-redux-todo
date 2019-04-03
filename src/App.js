import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Radium from 'radium';
import { Provider } from 'react-redux';
import './styles/App.css';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <header style={styles.header}>
              <img src={logo} className="App-logo" alt="logo" />
              <NavLink to="/" style={styles.navLink}>
                <span style={styles.logoText}>Actionlist</span>
              </NavLink>
            </header>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' render={() => <Dashboard />} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#282c34',
    height: '78px',
    fontSize: 'calc(16px + 2vmin)',
    color: 'white',
    fontFamily: '\'Lobster Two\', cursive',
    fontStyle: 'italic'
  },

  navLink: {
    textDecoration: 'none',
  },

  logoText: {
    color: 'white',
    ':hover': {
      color: '#61dafb'
    }
  }
}

export default Radium(App);
