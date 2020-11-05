import { createMuiTheme } from '@material-ui/core/styles';

const sharedProperty = {
	navigationBar: {
		height: 48,
	},
};

const customTheme = {
	dark: {
		custom: {
			navigationBar: {
				backgroundColor: '#3b3b3b',
				color: '#fff',
			},
			mainContent: {
				backgroundColor: '#181818',
				color: '#fff',
			},
			border: {
				default: '1px solid #fff3',
			},
			boxShadow: {
				default: '0 1px 6px rgba(255,255,255,0.2)',
			},
		},
	},
	dcard: {
		custom: {
			navigationBar: {
				backgroundColor: '#016AA6',
				color: '#fff',
			},
			mainContent: {
				backgroundColor: '#00324E',
				color: '#fff',
			},
			border: {
				default: '1px solid #01588A',
			},
			boxShadow: {
				default: '0 1px 6px rgba(32,33,36,.28)',
			},
		},
	},
};

export const darkTheme = createMuiTheme({
	...sharedProperty,
	...customTheme.dark,
	palette: {
		type: 'dark',
	},
});

export const dcardTheme = createMuiTheme({
	...sharedProperty,
	...customTheme.dcard,
	palette: {},
});
