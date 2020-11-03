import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Brightness7 as Brightness7Icon,
	Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import dcardLogoPath from './dcard_logo.svg';

interface IProps {
	matches: boolean;
}

const useStyles = makeStyles(theme => {
	const {
		custom: { navigationBar },
		navigationBar: { height },
	} = theme as any;
	return {
		root: {
			height: height,
			background: navigationBar.backgroundColor,
			color: navigationBar.color,
			boxSizing: 'border-box',
			display: 'flex',
			justifyContent: 'center',
		},
		container: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0 20px',
			margin: 'auto',
			boxSizing: 'border-box',
			width: 1280,
			maxWidth: 1280,
		},
		logo: (props: IProps) => ({
			display: 'block',
			height: 28,
			padding: props.matches ? '0 16px' : 0,
		}),
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
	const matches = useMediaQuery('(min-width: 768px)');
	const classes = useStyles({ matches });
	const ThemeIcon = isDarkMode ? Brightness7Icon : Brightness4Icon;
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<img src={dcardLogoPath} className={classes.logo} alt="dcard logo" />
				<IconButton
					className={classes.button}
					aria-label="theme change"
					onClick={handleChangeTheme}
				>
					<ThemeIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default NavigationBar;
