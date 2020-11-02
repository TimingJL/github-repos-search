import React from 'react';
import NavigationBar from 'components/NavigationBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
		},
		mainContent: {
			background: 'grey',
			flex: '1 1 auto',
		},
	};
});

const MainPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<NavigationBar />
			<div className={classes.mainContent}>Main Content</div>
		</div>
	);
};

export default MainPage;
