import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HunkZone from './HunkZone';
import NoteZone from './NoteZone';

const Body = () => (
  <Grid container spacing={8}>
    <Grid item xs>
      <Paper>placeholder for tree? add new chronicle?</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper><HunkZone /></Paper>
      <br />
      <Paper>placeholder for Timeline component</Paper>
    </Grid>
    <Grid item xs>
      <Paper><NoteZone /></Paper>
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
