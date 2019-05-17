import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const Notes = ({ notes }) => (
  <div>
    <Note />
    { notes.map(note => <Note title={note.title} text={note.text} tags={note.tags} />) }
  </div>
);

export default Notes;

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.instanceOf(Note)),
};

Notes.defaultProps = {
  notes: [],
};
