import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			height: 48,
			display: 'flex',
			alignItems: 'center',
			padding: '0 20px',
		},
		title: {
			flexGrow: 1,
		},
	})
);

const NavigationBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.title}>Github Repos Search</div>
		</div>
	);
};

export default NavigationBar;
