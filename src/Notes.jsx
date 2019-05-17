import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Note from './Note';

const Notes = ({ notes }) => (
  <div>
    <Paper>
      <Note />
    </Paper>
    { notes.map(note => (
      <Paper key={note.title}>
        <Note title={note.title} text={note.text} tags={note.tags} />
      </Paper>
    )) }
  </div>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.array,
  })),
};

Notes.defaultProps = {
  notes: [],
};

export default Notes;
