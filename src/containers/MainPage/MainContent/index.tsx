import React from 'react';
import SearchBarBlock from './SearchBarBlock';
import SearchResult from './SearchResult';
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
	return (
		<div className={classes.root}>
			<SearchBarBlock />
			<SearchResult />
		</div>
	);
};

export default MainContent;
