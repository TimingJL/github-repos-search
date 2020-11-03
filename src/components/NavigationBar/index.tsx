import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Brightness7 as Brightness7Icon,
	Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => {
	const {
		custom: { navigationBar },
		navigationBar: { height },
	} = theme as any;
	return {
		root: {
			height: height,
			display: 'flex',
			alignItems: 'center',
			padding: '0 20px',
			background: navigationBar.backgroundColor,
			color: navigationBar.color,
		},
		title: {
			flexGrow: 1,
		},
		button: {
			color: navigationBar.color,
		},
	};
});

interface INavigationBar {
	isDarkMode: boolean;
	handleChangeTheme: () => void;
}

const NavigationBar = ({ isDarkMode, handleChangeTheme }: INavigationBar) => {
	const classes = useStyles();
	const ThemeIcon = isDarkMode ? Brightness7Icon : Brightness4Icon;
	return (
		<div className={classes.root}>
			<div className={classes.title}>Github Repos Search</div>
			<IconButton
				className={classes.button}
				aria-label="theme change"
				onClick={handleChangeTheme}
			>
				<ThemeIcon />
			</IconButton>
		</div>
	);
};

export default NavigationBar;
