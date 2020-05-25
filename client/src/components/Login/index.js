import React, { Component } from 'react';
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

const Login = ({classes}) => {
  document.title = "¿Quiénes Somos? | MexiCOVID";
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
                label="Correo Electronico"
                style={{ margin: 8 }}
                placeholder="ejemplo@itesm.mx"
                fullWidth
                type="email"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
                <TextField
                id="outlined-full-width"
                label="Contraseña"
                style={{ margin: 8 }}
                placeholder="Placeholder"
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
                />
            </FormControl>
            <Grid container item xs direction="row"  justify="space-around"  alignItems="right">
                <Button className={classes.button}>Iniciar</Button>
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
  
    button: {

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
  
  header: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  h1: {
		fontSize: '36px'
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