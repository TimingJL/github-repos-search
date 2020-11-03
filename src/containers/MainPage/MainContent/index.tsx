import React, { useCallback } from "react";
import { connect } from "react-redux";
import SearchBarBlock from "./SearchBarBlock";
import SearchResult from "./SearchResult";
import { makeStyles } from "@material-ui/core/styles";
import { fetchRepositories } from "actions/githubReposSearchActions";

const useStyles = makeStyles(theme => {
  const {
    custom: { mainContent }
  } = theme as any;
  return {
    root: {
      background: mainContent.backgroundColor,
      color: mainContent.color,
      flex: "1 1 auto"
    }
  };
});

interface IMainContent {
  handleFetchRepositories: (queryString: string) => void;
}

const MainContent = ({ handleFetchRepositories }: IMainContent) => {
  const classes = useStyles();
  const handleOnQueryChange = useCallback(
    event => {
      const value = event.target.value;
      handleFetchRepositories(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={classes.root}>
      <SearchBarBlock handleOnChange={handleOnQueryChange} />
      <SearchResult />
    </div>
  );
};

const mapStateToProps = state => {
  const { repositories } = state.githubReposSearchReducer;
  return {
    repositories
  };
};

const mapDispatchToProps = dispatch => ({
  handleFetchRepositories: queryString =>
    dispatch(fetchRepositories(queryString))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
