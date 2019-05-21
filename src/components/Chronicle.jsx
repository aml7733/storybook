import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const Chronicle = ({ story }) => (
  // chronicle is object, saved in db and eventually accessed via ajax/whatever
  // properties = name, id, nuggets, parent_id,
  <Paper>
    Timeline goes here + state.text =
    { story }
  </Paper>
);

Chronicle.propTypes = {
  story: PropTypes.shape({
    nuggets: PropTypes.array,
    tags: PropTypes.array,
  }).isRequired,
};

export default Chronicle;
