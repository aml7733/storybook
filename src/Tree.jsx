import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

class Tree extends React.Component {
  constructor(props) {
    super(props);

    const { tree } = props;
    this.state = { tree };
  }

  render() {
    const { tree } = this.state;

    return (
      <Paper>
        Tree goes here + state.tree =
        { tree }
      </Paper>
    );
  }
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired,
};

export default Tree;
