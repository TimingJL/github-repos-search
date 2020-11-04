import React from 'react';
import RepositoryItem from './RepositoryItem'
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';

const StyledContainer = withStyles(() => {
  return {
    root: {
			padding: '0 20px 20px 20px',
    }
  };
})(Container);

const useStyles = makeStyles(() => {
  return {
    root: {
			borderRadius: 4,
			padding: '8px 0',
			background: 'white',
		},
		item: {
			borderBottom: '1px solid #ddd',
		}
  };
});

interface ISearchResult {
	repositories: any;
}

const SearchResult = ({ repositories }: ISearchResult) => {
	const classes = useStyles();
	const { items } = repositories;
	return (
		<StyledContainer maxWidth="md">
			<div className={classes.root}>
				{
					items.map((item) => (
						<ListItem button key={item.id} className={classes.item}>
							<RepositoryItem item={item} />
						</ListItem>
					))
				}
			</div>
		</StyledContainer>
	);
};

export default SearchResult;
