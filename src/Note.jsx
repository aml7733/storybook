import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


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
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  render() {
    const {
      id, title, text, tags,
    } = this.state;

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

    return (
      <Paper style={styles.root}>
        <Paper key="0">
          <TextField
            id={`${id}`}
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            variant="filled"
          />
          <textarea id={`${id}`} value={text} name="text" onChange={this.handleChange('text')} />
        </Paper>
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
    );
  }
}

export default Note;

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.number),
};

Note.defaultProps = {
  id: 0,
  title: 'New Note Title',
  text: 'New Note Text',
  tags: [],
};
