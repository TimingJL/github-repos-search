import React, { useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import MainPage from 'containers/MainPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, dcardTheme } from './theme';
import store from 'store';

const App = () => {
	const themes = [dcardTheme, darkTheme];
	const [themeIndex, setThemeIndex] = useState(0);

	const handleChangeTheme = useCallback(() => {
		setThemeIndex(prevIndex => (prevIndex + 1) % 2);
	}, []);

	return (
		<Provider store={store}>
			<ThemeProvider theme={themes[themeIndex]}>
				<MainPage
					handleChangeTheme={handleChangeTheme}
					isDarkMode={themeIndex === 1}
				/>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
