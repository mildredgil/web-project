import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import TextField from '@material-ui/core/TextField';
import { FormControl,FormControlLabel  } from '@material-ui/core';

const Edit = ({classes}) => {
  return (
    <div>
      <div className={classes.container}>
            <div className="container text-justify">      
                <section className={classes.section}>
                    <FormControl fullWidth>
                        <TextField
                        id="nombre"
                        label="Nombre"
                        style={{ margin: 8 }}
                        fullWidth
                        type="text"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        />
                        <TextField
                        id="area"
                        label="Area"
                        style={{ margin: 8 }}
                        fullWidth
                        disabled
                        type="text"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        />
                        <FormControlLabel
                            classes={{labelPlacementTop: classes.textareaContainer}}
                            control={
                                <textarea className={classes.textarea} value={"Lorem Ipsum"} onChange={null} />
                            }
                            label="Descripción:"
                            labelPlacement="top"
                        />
                    </FormControl>
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
    backgroundColor: colors.GRAY_LIGHTER,
	},
  
  container: {
    width: '100%',
    backgroundColor: colors.GRAY,
  },
  
  textclass: {
    marginTop: '0px',
    marginBottom: '0px'
  }, 

  textarea: {
    alignItems: 'flex-start',
    height: '205px',
    width: '100%',
    borderRadius: '5px'
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