import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { Helmet } from 'react-helmet';

const Content = ({classes}) => {
  return (
    <div>
      <div className={classes.container}>
            <div className="container text-justify">      
                <section className={classes.section}>
                <div>
                <Typography align = {"justify"} className={classes.textclass}>
                    Mildred Gil
                </Typography>
                </div>
                <div>
                <Typography align = {"justify"} className={classes.textclass}>
                    Equpo: Investigación
                </Typography>
                </div>
                <div>
                <Typography align = {"justify"} className={classes.textclass}>
                    Estudiante del Tecnologico de Monterrey Lorem Ipsum..
                </Typography>
                </div>
                </section>   
            </div>
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
  
  container: {
    width: '100%',
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  }, 

  [`@media (max-width: ${1000}px)`]: {
		
  }
  
});
 
export default withStyles(styles)(Content);