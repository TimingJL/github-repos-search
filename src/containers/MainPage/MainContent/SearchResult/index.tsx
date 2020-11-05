import React from 'react';
import RepositoryItem from './RepositoryItem';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const StyledContainer = withStyles(() => {
  return {
    root: {
			padding: '0 20px 20px 20px',
    }
  };
})(Container);

const useStyles = makeStyles((theme) => {
	const { palette } = theme;
  return {
    root: {
			padding: '8px 0',
		},
		item: {
			padding: '16px 12px',
			borderBottom: `1px solid ${palette.divider}`,
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
			<Paper elevation={0}>
				{
					items.map((item) => (
						<ListItem button key={item.id} className={classes.item}>
							<RepositoryItem item={item} />
							<Divider />
						</ListItem>
					))
				}
			</Paper>
		</StyledContainer>
	);
};

export default SearchResult;
