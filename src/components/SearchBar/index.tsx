import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: 912,
			borderRadius: 4,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
	})
);

interface ISearchBar {
	handleOnChange: (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

const SearchBar = ({ handleOnChange }: ISearchBar) => {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<IconButton disabled className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				className={classes.input}
				placeholder="Github repos search"
				inputProps={{ 'aria-label': 'Github repos search' }}
				onChange={handleOnChange}
			/>
		</Paper>
	);
};

export default SearchBar;
