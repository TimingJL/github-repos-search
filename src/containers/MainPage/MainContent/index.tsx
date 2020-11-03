import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
	const {
		custom: { mainContent },
	} = theme as any;
	return {
		root: {
			background: mainContent.backgroundColor,
			color: mainContent.color,
			flex: '1 1 auto',
		},
	};
});

const MainContent = () => {
	const classes = useStyles();
	return <div className={classes.root}>Main Content</div>;
};

export default MainContent;
