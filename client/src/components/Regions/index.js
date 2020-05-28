import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import * as colors from '../../constants/colors';
import Header from '../Header';
import Footer from '../Footer';
import States from './States';
import Municipalities from './Municipalities';
import { Helmet } from 'react-helmet';
import { RegionContext } from '../../contexts/RegionContext';

const Regions = ({ classes }) => {
	const { isState, changeState } = React.useContext(RegionContext);
	
	const isMobile = window.innerWidth < 1000;
	const title = `Seguimiento por ${isState ? 'Estado' : 'Municipio'}`;
	const subtitle = `${isMobile ? '' : 'Seguimiento por'} ${isState ? 'Municipio' : 'Estado'}`;
	return (
		<div>
			<Helmet>
			<title>Seguimiento por regiones | MexiCOVID</title>
			
			</Helmet>
			<div className={classes.container}>
				<Header fixed={true}/>
					<div className={classes.regionsContainer}>
						<header id="header" className={classes.header}>
							<Typography className={classes.h1} variant={'h1'}> {title} </Typography>	
							<Button className={classes.label} onClick={changeState}> 
								{subtitle} <ArrowForwardIosRoundedIcon/>
							</Button>
						</header>
						<main>
							{isState ?<States/>: <Municipalities/>}
						</main>
					</div>
				<Footer/>
			</div>
		</div>
	);
}

const styles = () => ({
	container: {
    	width: '100%',
    	backgroundColor: colors.GRAY,
  	},

  	regionsContainer: {
		width: '70%',
		margin: 'auto',
		padding: '25px',
		paddingTop: '128px',
		backgroundColor: colors.WHITE
	},
	
	h1: {
		fontSize: '36px'
	},

	header: {
		borderBottom: `1px solid ${colors.BLACK}`,
		display: 'flex',
    	alignItems: 'baseline',
    	justifyContent: 'space-between',
	},

	label: {
		color: colors.GRAY_LIGHT
	},

	[`@media (max-width: ${1000}px)`]: {
		regionsContainer: {
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

export default withStyles(styles)(Regions);
