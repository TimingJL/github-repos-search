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

interface ISearchBarBlock {
	handleOnChange: (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

const SearchBarBlock = ({ handleOnChange }: ISearchBarBlock) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<SearchBar handleOnChange={handleOnChange} />
		</div>
	);
};

export default SearchBarBlock;
