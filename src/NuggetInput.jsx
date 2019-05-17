import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

class NuggetInput extends React.Component {
  constructor(props) {
    super(props);

    const { text } = props;
    this.state = { text };
  }

  render() {
    const { text } = this.state;

    return (
      <Paper>
        NuggetInput goes here + state.text =
        { text }
      </Paper>
    );
  }
}

NuggetInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NuggetInput;
