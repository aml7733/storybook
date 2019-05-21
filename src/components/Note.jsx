import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import SaveIcon from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/Delete';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

class Note extends Component {
  constructor(props) {
    super(props);

    const {
      id, title, text, tags,
    } = props;
    this.state = {
      id, title, text, tags,
    };
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  save() {
    const { newNote } = this.props;
    const payloadObject = this.state;
    // commit note to db.
    if (newNote) {
      // trigger parent re-render, change self props to newNote=false
    }
  }

  delete() {
    const payloadObject = this.state;
    const { newNote } = this.props;
    if (!newNote) {
      // hit back end to delete note. make sure parent re-renders list
    }

    this.setState(Note.defaultProps);
  }

  edit() {
    // put the value of that note into state, so it occupies new note.
  }

  renderButtons() {
    const { newNote } = this.props;
    const saveButton = (
      <Button onClick={this.save}>
        <SaveIcon />
        { newNote ? ' Save to Notes' : ' Commit Edit' }
      </Button>
    );

    const deleteButton = (
      <Button onClick={this.delete}>
        { newNote ? <Delete /> : <DeleteForever /> }
        { newNote ? ' Discard' : ' Delete' }
      </Button>
    );

    return [saveButton, deleteButton];
  }

  renderNoteTitle() {
    const {
      id, title,
    } = this.state;
    const { newNote } = this.props;

    return newNote ? (
      <TextField
        id={`${id}`}
        label="Title"
        value={title}
        onChange={this.handleChange('title')}
        variant="filled"
      />
    ) : null;
  }

  render() {
    const {
      id, title, text, tags,
    } = this.state;
    const { newNote } = this.props;

    // TEMP:
    const styles = {
      root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 4,
      },
      chip: {
        margin: 4,
      },
    };

    const textLabel = newNote ? '' : title;
    const textValue = newNote ? 'New Note Text' : text;

    return (
      <Paper style={styles.root}>
        <Paper key="0">
          { this.renderNoteTitle() }
          <TextField
            id={`${id}`}
            label={textLabel}
            multiline
            rows="4"
            defaultValue={textValue}
            margin="normal"
            variant="outlined"
          />
          { this.renderButtons() }
          <Paper key="1">
            { // eventually have Tag component
              tags.map(
                tag => (
                  <Chip
                    key={tag}
                    style={styles.chip}
                  />
                ),
              )
            }
          </Paper>
        </Paper>
      </Paper>
    );
  }
}

export default Note;

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.number),
  newNote: PropTypes.bool,
};

Note.defaultProps = {
  id: 0,
  title: 'New Note Title',
  text: 'New Note Text',
  tags: [],
  newNote: false,
};
