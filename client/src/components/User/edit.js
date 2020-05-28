import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import TextField from '@material-ui/core/TextField';
import { Button, FormControl,FormControlLabel  } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import SvgIcon from '@material-ui/core/SvgIcon';


const Edit = ( props ) => {
  const { classes, userData, update, isEditing, error } = props;
  const [ nombre, setNombre ] = React.useState(null);
  const [ description, setDescription ] = React.useState(null);
  
  React.useEffect(() => {
    if ( userData ) {
      setNombre(userData.nombre);
      setDescription(userData.description);
    }
  }, [userData])

  let onChangeData = (e, field) => {
    if ( field == "nombre" ) {
      setNombre(e.target.value)
    } else {
      setDescription(e.target.value)
    }
  }

  if ( !userData )
      return null;

  return (
    <div>
      <div className={classes.container}>
        <div className="container text-justify">      
          <section className={classes.section}>
            <FormControl fullWidth>
              <div className={classes.content}>
                <PersonRoundedIcon fontSize={'large'}/>
                <TextField
                  id="nombre"
                  label="Nombre"
                  style={{ margin: 8, backgroundColor: colors.BLUE_LIGHTER }}
                  fullWidth
                  type="text"
                  margin="normal"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  variant="outlined"
                  value={nombre}
                  onChange={(e) => onChangeData(e, "nombre")}
                />
              </div>
              <div className={classes.content}>
                <GroupRoundedIcon fontSize={'large'}/>
                <TextField
                id="area"
                label="Area"
                style={{ margin: 8, backgroundColor: colors.BLUE_LIGHTER }}
                fullWidth
                disabled
                type="text"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={userData.rol == 1 ? "Investigación" : "Equipo Interdisciplinario"}
                />
              </div>
              <div className={classes.content}>
                <MailRoundedIcon fontSize={'large'}/>
                <TextField
                id="correo"
                label="correo"
                style={{ margin: 8, backgroundColor: colors.BLUE_LIGHTER }}
                fullWidth
                disabled
                type="text"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={userData.username}
                />
              </div>
              <div className={classes.contentdes}>
                <DescriptionRoundedIcon fontSize={'large'}/>
                <FormControlLabel
                    classes={{labelPlacementTop: classes.textareaContainer}}
                    control={
                        <textarea className={classes.textarea} onChange={(e) => onChangeData(e, "description")} value={description} />
                    }
                    label="Descripción:"
                    labelPlacement="top"
                />
              </div>
              <Button onClick={() => update({nombre, description})} variant="text" size='large' className={classes.button} type="submit" startIcon={isEditing ? <CircularProgress size={25} /> : <SaveIcon fontSize={'large'}/>}>
                Guardar
              </Button>
            </FormControl>
          </section>   
        </div>
      </div>
    </div>
    );
}

const styles = () => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentdes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  
  section: {
		margin: '20px 0px',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: colors.GRAY_LIGHTER,
	},
  
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },

  button: {
    width: "fit-content",
    marginLeft: 'auto'
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  }, 

  textarea: {
    alignItems: 'flex-start',
    height: '205px',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: colors.BLUE_LIGHTER
  },

  textareaContainer: {
    alignItems: 'flex-start',
    height: '205px',
    width: '100%',
    margin: '8px'

  },

  [`@media (max-width: ${1000}px)`]: {
		
  }
  
});
 
export default withStyles(styles)(Edit);