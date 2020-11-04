import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CodeIcon from '@material-ui/icons/Code';

const StyledChip = withStyles(() => {
  return {
    root: {
      marginRight: 2,
      padding: '0 4px',
    }
  };
})(Chip);

const useStyles = makeStyles((theme) => {
  const {
    custom: { repositoryItem }
  } = theme as any;
  return {
    root: {
      display: 'flex',
      color: repositoryItem.color,
    },
    content: {
      padding: '0 12px',
    },
    fullName: {
      fontSize: 16,
      fontWeight: 600,
    },
    description: {
      fontSize: 14,
      color: repositoryItem.secondaryColor,
      lineHeight: '24px',
    },
    chips: {
      marginTop: 4,
    }
  };
});

interface IRepositoryItem {
  item: any;
}

const RepositoryItem = ({ item }: IRepositoryItem) => {
  const classes = useStyles();
  const { owner } = item;
  return (
    <div className={classes.root}>
      <Avatar alt={owner.login} src={owner.avatar_url} />
      <div className={classes.content}>
        <div className={classes.fullName}>{item.full_name}</div>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.chips}>
          <StyledChip variant="outlined" size="small" label={item.language} icon={<CodeIcon />} />
          <StyledChip variant="outlined" size="small" label={item.stargazers_count} icon={<StarBorderIcon />} />
          <StyledChip variant="outlined" size="small" label={item.watchers} icon={<VisibilityIcon />} />
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem;
