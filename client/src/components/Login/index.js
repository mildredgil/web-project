import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/';
import Footer from '../Footer/';
import * as colors from '../../constants/colors';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { AppContext } from '../../contexts/AppContext';

const Login = ({classes}) => {
  const { login, error } = React.useContext(AppContext)
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  let onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  let onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  
  return (
    <div>
    <Helmet>
      <title>Login| MexiCOVID</title>
    </Helmet>
      <div className={classes.container}>
        <Header fixed={true}/>
        <div className={classes.teamsContainer}>
        <Typography className={classes.h1} variant={'h1'}>Bienvenido</Typography>
          <FormControl fullWidth>
              <TextField
              id="outlined-full-width"
              label="Correo Electrónico"
              placeholder="ejemplo@itesm.mx"
              fullWidth
              type="email"
              margin="normal"
              InputLabelProps={{
                  shrink: true,
              }}
              variant="outlined"
              onChange={onChangeUsername}
              value={username}
              />
              <TextField
              id="outlined-full-width"
              label="Contraseña"
              helperText="8 caracteres"
              fullWidth
              margin="normal"
              type="password"
              required
              minlength="8"
              InputLabelProps={{
                  shrink: true,
              }}
              variant="outlined"
              onChange={onChangePassword}
              value={password}
              />
          </FormControl>
          <Grid container item xs direction="column"  alignItems="flex-end">
            <Button variant='outlined' size='large' onClick={() => login(username, password)} className={classes.button}>Iniciar</Button>
            {error && <Typography className={classes.error} variant={'p'}>{error.message}</Typography>}
          </Grid>
        </div>
        <Footer/>
      </div>
    </div>
    );
}

const styles = () => ({
  section: {
		margin: '20px 0px',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: colors.GRAY,
	},
  
  error: {
    color: colors.RED
  },

  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  teamsContainer: {
    width: '70%',
		margin: 'auto',
		padding: '25px',
    paddingTop: '128px',
    backgroundColor: colors.WHITE
  },
  
  h1: {
    fontSize: '36px',
    borderBottom: `1px solid ${colors.BLACK}`,
	},
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  }, 

  [`@media (max-width: ${1000}px)`]: {
		teamsContainer: {
			width: '100%',
			padding: '10px',
			paddingTop: '60px'
		},
		header: {
			alignItems: 'flex-end'
		},
		h1: {
			fontSize: '24px'
		},
  }
  
});
 
export default withStyles(styles)(Login);