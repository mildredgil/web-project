import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Login from './components/Login';
import Methodology from './components/Methodology';
import NotFoundPage from "./components/NotFoundPage";
import User from "./components/User";
import Regions from "./components/Regions";
import AdminPanel from "./components/Admin";

import { RegionContextProvider } from './contexts/RegionContext';
import { HomeContextProvider } from './contexts/HomeContext';
import { MapContextProvider } from './contexts/MapContext';
import { MapMunicipioContextProvider } from './contexts/MapMunicipioContext';
import AvailableBeds from './components/AvailableBeds';
import ConfirmAge from './components/ConfirmAge';
import MunicipalitiesFollow from './components/MunicipalitiesFollow';
import DistributionEstate from './components/DistributionEstate';
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
            <Route path='/regions' >
              <RegionContextProvider>
                <Regions/>
              </RegionContextProvider>
            </Route>
            <Route path='/about-us' component={Team}/>
            <Route path='/methodology' component={Methodology}/>
            <Route path='/availablebeds' component={AvailableBeds}/>
            <Route path='/confirmage' component={ConfirmAge}/>
            <Route path='/municipalitiesfollow' component={MunicipalitiesFollow}/>
            <Route path='/distributionestate' component={DistributionEstate}/>
            <Route path='/login' component={Login}/>
            <Route path='/perfil' component={User}/>
            <Route path='/adminPanel' component={AdminPanel}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;