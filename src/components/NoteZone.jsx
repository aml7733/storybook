import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);

    const placeholderNotes = [
      { title: 'Theme 1', text: 'Dark and Moody', tags: [0, 1, 2] },
      { title: 'Theme 2', text: 'Happy and comfy', tags: [3, 5] },
    ];
    this.state = { notes: placeholderNotes };
  }

  componentDidMount() {
    // hit database for notes (individual notes will have own save's)
    // save to state, send as props to render
  }

  onClick() {
    // persist note to db/ add to front end list of notes, render new note
  }

  render() {
    const { notes } = this.state;


    return (
      <div>
        <Paper>
          <Note newNote />
        </Paper>
        { notes.map(note => (
          <Paper key={note.title}>
            <Note title={note.title} text={note.text} tags={note.tags} />
          </Paper>
        )) }
      </div>
    );
  }
}

export default Notes;
