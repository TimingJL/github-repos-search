import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }
  };
});

interface IMainPage {
  isDarkMode: boolean;
  handleChangeTheme: () => void;
}

const MainPage = ({ isDarkMode, handleChangeTheme }: IMainPage) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header isDarkMode={isDarkMode} handleChangeTheme={handleChangeTheme} />
      <MainContent />
    </div>
  );
};

export default MainPage;
