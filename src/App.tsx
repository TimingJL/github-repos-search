import React, { useState, useCallback } from 'react';
import MainPage from 'containers/MainPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, dcardTheme } from './theme';

const App = () => {
	const themes = [dcardTheme, darkTheme];
	const [themeIndex, setThemeIndex] = useState(0);

	const handleChangeTheme = useCallback(() => {
		setThemeIndex(prevIndex => (prevIndex + 1) % 2);
	}, []);

	return (
		<ThemeProvider theme={themes[themeIndex]}>
			<MainPage
				handleChangeTheme={handleChangeTheme}
				isDarkMode={themeIndex === 1}
			/>
		</ThemeProvider>
	);
};

export default App;
