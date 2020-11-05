import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const StyledContainer = withStyles(() => {
  return {
    root: {
			padding: '0 20px 20px 20px',
    }
  };
})(Container);

interface IProps {
  type: string;
}

const useStyles = makeStyles((theme) => {
  const { palette } = theme;
  const colorMapping = {
    'normal': palette.text.primary,
    'error': palette.error.main,
    'warning': palette.warning.main,
  };
  return {
    root: (props: IProps) => ({
      padding: '20px 24px',
      color: colorMapping[props.type] || palette.text.primary
		}),
  };
});

interface IMessageBlock {
  message: string | null;
  type?: string;
}

const MessageBlock = ({ type = 'normal', message }: IMessageBlock) => {
  const classes = useStyles({ type });
  return (
    <>
    {
      message &&
      <StyledContainer>
        <Paper elevation={0}>
          <div className={classes.root}>{message}</div>
        </Paper>
      </StyledContainer>
    }
    </>
  );
};

export default MessageBlock;
