import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tree from './Tree';
import NuggetInput from './NuggetInput';
import ScratchPad from './ScratchPad';
import Notes from './Notes';

const placeholderNotes = [
  { title: 'Theme 1', text: 'Dark and Moody', tags: [0, 1, 2] },
  { title: 'Theme 2', text: 'Happy and comfy', tags: [3, 5] },
];

const Body = () => (
  <Grid container spacing={8}>
    <Grid item xs>
      <Paper><Tree /></Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper><NuggetInput text="NuggetInputText" /></Paper>
      <br />
      <Paper><ScratchPad text="ScratchPadText" /></Paper>
    </Grid>
    <Grid item xs>
      <Paper><Notes notes={placeholderNotes} /></Paper>
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
