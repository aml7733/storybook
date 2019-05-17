import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

class ScratchPad extends React.Component {
  constructor(props) {
    super(props);

    const { text } = props;
    this.state = { text };
  }

  render() {
    const { text } = this.state;

    return (
      <Paper>
        ScratchPad goes here + state.text =
        { text }
      </Paper>
    );
  }
}

ScratchPad.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ScratchPad;
