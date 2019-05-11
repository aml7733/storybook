import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Body = () => (
  <Grid container spacing={8}>
    <Grid item xs>
      <Paper>tree? outline? quick create buttons?</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>primary text area</Paper>
      <br />
      <Paper>other text area</Paper>
    </Grid>
    <Grid item xs>
      <Paper>Notes/Reminders</Paper>
    </Grid>
  </Grid>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(Body);
