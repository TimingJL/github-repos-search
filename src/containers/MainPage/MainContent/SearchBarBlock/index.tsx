import React from 'react';
import SearchBar from 'components/SearchBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
	return {
		root: {
			height: 100,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 20px',
		},
	};
});

const SearchBarBlock = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<SearchBar />
		</div>
	);
};

export default SearchBarBlock;
