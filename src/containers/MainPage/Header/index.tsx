import React from 'react';
import NavigationBar from 'components/NavigationBar';

interface IHeader {
	isDarkMode: boolean;
	handleChangeTheme: () => void;
}

const Header = ({ isDarkMode, handleChangeTheme }: IHeader) => {
	return (
		<NavigationBar isDarkMode={isDarkMode} handleChangeTheme={handleChangeTheme} />
	);
};

export default Header;
