import React, { useRef, useState, useCallback } from "react";
import { connect } from "react-redux";
import SearchBarBlock from "./SearchBarBlock";
import SearchResult from "./SearchResult";
import { makeStyles } from "@material-ui/core/styles";
import { fetchRepositories, loadRepositories } from "actions/githubReposSearchActions";
import CircularIndeterminate from 'components/CircularIndeterminate'
import { IMeta, IGithubReposSearchReducer } from 'types';
import MessageBlock from './MessageBlock';

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

interface IFetchReposParams {
  queryString: string;
  perPage: number;
}

interface ILoadReposParams {
  queryString: string;
  page: number;
  perPage: number;
}

interface IMainContent {
  fetchMeta: IMeta;
  loadMeta: IMeta;
  repositories: any;
  page: number;
  perPage: number;
  isLastPage: boolean;
  handleFetchRepositories: (props: IFetchReposParams) => void;
  handleLoadRepositories: (props: ILoadReposParams) => void;
}

const MainContent = ({
  repositories,
  fetchMeta,
  loadMeta,
  page,
  perPage,
  isLastPage,
  handleFetchRepositories,
  handleLoadRepositories
}: IMainContent) => {
  const mainContentRef = useRef<HTMLInputElement>(null);
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
    const mainContentElem = mainContentRef.current;
    if (mainContentElem) {
      const scrollPos = mainContentElem.scrollTop + mainContentElem.clientHeight;
      const divHeight = mainContentElem.scrollHeight;
      if ((scrollPos >= divHeight) && !isLastPage) {
        handleLoadRepositories({ queryString, page, perPage })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainContentRef]);
  return (
    <div ref={mainContentRef} className={classes.root} onScroll={handleOnScroll}>
      <SearchBarBlock handleOnChange={handleOnQueryChange} />
      <MessageBlock type="error" message={fetchMeta.error} />
      {fetchMeta.isLoading && <CircularIndeterminate color={"#fff"} />}
      {fetchMeta.isLoaded && <SearchResult repositories={repositories} />}
      {loadMeta.isLoading && <CircularIndeterminate color={"#fff"} />}
      <MessageBlock type="error" message={loadMeta.error} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    repositories,
    fetchMeta,
    loadMeta,
    page,
    perPage,
    isLastPage
  } = state.githubReposSearchReducer as IGithubReposSearchReducer;
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
  handleFetchRepositories: (params: IFetchReposParams) =>
    dispatch(fetchRepositories(params)),
  handleLoadRepositories: (params: ILoadReposParams) => dispatch(loadRepositories(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
