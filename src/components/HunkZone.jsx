import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class HunkZone extends React.Component {
  constructor(props) {
    super(props);

    const { text } = props;
    this.state = { text: 'Practice text' };
  }



  save() {
    // save hunk to back end
  }

  renderTags() {
    //render tags. if none yet, render tag adding widget
  }

  render() {
    const { text } = this.state;

    return (
      <Paper>
        {
          // story selection component/area. want cascading? tree/buttons.
        }
        <TextField
          label="New Hunk"
          multiline
          rows="4"
          value={text}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <Button onClick={this.save}>
          Save Hunk
        </Button>
        { this.renderTags() }
      </Paper>
    );
  }
}

HunkZone.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HunkZone;
