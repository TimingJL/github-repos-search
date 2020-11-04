import React, { useRef, useState, useCallback } from "react";
import { connect } from "react-redux";
import SearchBarBlock from "./SearchBarBlock";
import SearchResult from "./SearchResult";
import { makeStyles } from "@material-ui/core/styles";
import { fetchRepositories, loadRepositories } from "actions/githubReposSearchActions";
import CircularIndeterminate from 'components/CircularIndeterminate'

const useStyles = makeStyles(theme => {
  const {
    custom: { mainContent }
  } = theme as any;
  return {
    root: {
      background: mainContent.backgroundColor,
      color: mainContent.color,
      flex: "1 1 auto",
      overflowY: 'auto',
    }
  };
});

interface IMainContent {
  fetchMeta: any;
  loadMeta: any;
  repositories: any;
  page: number;
  perPage: number;
  isLastPage: boolean;
  handleFetchRepositories: (props: any) => void;
  handleLoadRepositories: (props: any) => void;
}

const MainContent = ({ repositories, fetchMeta, loadMeta, page, perPage, isLastPage, handleFetchRepositories, handleLoadRepositories }: IMainContent) => {
  const mainContentRef = useRef() as any;
  const classes = useStyles();
  const [queryString, setQueryString] = useState('')
  const handleOnQueryChange = useCallback(
    event => {
      const value = event.target.value;
      if (value.length > 0) {
        handleFetchRepositories({ queryString: value, perPage });
        setQueryString(value);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  const handleOnScroll = useCallback(() => {
    const $rDOM = mainContentRef.current;
    const scrollPos = $rDOM.scrollTop + $rDOM.clientHeight;
    const divHeight = $rDOM.scrollHeight;
    if ((scrollPos >= divHeight) && !isLastPage) {
      handleLoadRepositories({ queryString, page, perPage })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainContentRef]);

  return (
    <div ref={mainContentRef} className={classes.root} onScroll={handleOnScroll}>
      <SearchBarBlock handleOnChange={handleOnQueryChange} />
      {
        fetchMeta.isLoading && <CircularIndeterminate color={"#fff"} />
      }
      {
        fetchMeta.isLoaded && <SearchResult repositories={repositories} />
      }
      {
        loadMeta.isLoading && <CircularIndeterminate color={"#fff"} />
      }
    </div>
  );
};

const mapStateToProps = state => {
  const { repositories, fetchMeta, loadMeta, page, perPage, isLastPage } = state.githubReposSearchReducer;
  return {
    repositories,
    fetchMeta,
    loadMeta,
    page,
    perPage,
    isLastPage,
  };
};

const mapDispatchToProps = dispatch => ({
  handleFetchRepositories: (params) =>
    dispatch(fetchRepositories(params)),
  handleLoadRepositories: (params) => dispatch(loadRepositories(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
