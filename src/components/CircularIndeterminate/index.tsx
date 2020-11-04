import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) => {
  return ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
});

interface ICircularIndeterminate {
  color?: string;
}

const CircularIndeterminate = ({ color }: ICircularIndeterminate) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: color }} />
    </div>
  );
}

export default CircularIndeterminate;
