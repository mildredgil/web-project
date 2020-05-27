import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import LoaderView from '../Loader';

const Content = ( props ) => {
    const { classes, userData, error } = props;

    if ( !userData )
        return (
            <div className={classes.loader}>
                <LoaderView size={150}/>
            </div>
        )

    const { username, nombre, description, rol, image } = userData;
    
        
    return (
        <div className={classes.container}>
            <div className="container text-justify">      
                <section className={classes.section}>
                    <Typography className={classes.h2} variant={'h2'}>Datos</Typography>
                    <div className={classes.content}>
                        <div className={classes.imageContainer}>
                            <img src={image} alt={image}/>
                        </div>
                        <div className={classes.dataContainer}>
                        <div>
                            <Typography align = {"justify"} className={classes.textclass}>
                                Nombre: {nombre}
                            </Typography>
                        </div>
                        <div>
                            <Typography align = {"justify"} className={classes.textclass}>
                                Correo: {username}
                            </Typography>
                        </div>
                        <div>
                            <Typography align = {"justify"} className={classes.textclass}>
                                Equipo: {rol == 1 ? "Investigación" : "Equipo Interdisciplinario"}
                            </Typography>
                        </div>
                        <div>
                            <Typography align = {"justify"} className={classes.textclass}>
                                Descripción:
                            </Typography>
                        </div>
                        <div>
                            <Typography align = {"justify"} className={classes.textclass}>
                                {description}
                            </Typography>
                        </div>
                    </div>
                    </div>
                </section>   
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

  h2: {
    fontSize: '20px',
    fontWeight: '800'
  },

  loader: {
    textAlign: "center",
    margin: '30px'
  },

  [`@media (max-width: ${1000}px)`]: {
		
  }
  
});
 
export default withStyles(styles)(Content);