import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Login from './components/Login';
import Methodology from './components/Methodology';
import NotFoundPage from "./components/NotFoundPage";
import User from "./components/User";
import Regions from "./components/Regions";
import AdminPanel from "./components/Admin";

import { AppContext } from './contexts/AppContext';
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
  const { token } = React.useContext(AppContext);
  let loggedIn = token !== null;
  
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
            <Route path='/regions'>      
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
            {loggedIn ? <Redirect from='/login' to="/perfil" /> : <Route path='/login' component={Login}/>}
            {!loggedIn ? <Redirect from='/perfil' to="/login" /> : <Route path='/perfil' component={User}/>}
            {!loggedIn ? <Redirect from='/adminPanel' to="/login" /> : <Route path='/adminPanel' component={AdminPanel}/>}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;