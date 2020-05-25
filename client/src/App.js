import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Login from './components/Login';
import Methodology from './components/Methodology';
import NotFoundPage from "./components/NotFoundPage";

import { HomeContextProvider } from './contexts/HomeContext';
import { MapContextProvider } from './contexts/MapContext';
import { MapMunicipioContextProvider } from './contexts/MapMunicipioContext';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway', 
      '-apple-system',
      'BlinkMacSystemFont',
      "'Lato', sans-serif",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: '#fff'
  }
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/'>
                <HomeContextProvider>
                    <MapContextProvider>
                      <MapMunicipioContextProvider>
                          <Home/>
                      </MapMunicipioContextProvider>
                    </MapContextProvider>
                </HomeContextProvider>
            </Route>
            <Route path='/about-us' component={Team}/>
            <Route path='/methodology' component={Methodology}/>
            <Route path='/login' component={Login}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;