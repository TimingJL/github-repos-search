import React, { useState, useCallback } from 'react';
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
	const [queryString, setQueryString] = useState('');
	const handleOnQueryChange = useCallback(event => {
		setQueryString(event.target.value);
	}, []);
	console.log('queryString: ', queryString);
	return (
		<div className={classes.root}>
			<SearchBarBlock handleOnChange={handleOnQueryChange} />
			<SearchResult />
		</div>
	);
};

export default MainContent;
