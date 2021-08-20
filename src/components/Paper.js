import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    flexWrap:'nowrap',
    flexBasis: 'auto',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      backgroundColor:'red'
    },
paper:{
    backgroundColor:'red'
    }
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper}  elevation={3}/>
      <Paper  className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
      <Paper className={classes.paper} elevation={3}/>
    </div>
  );
}
