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
        Object to string===   key:
        {tree.key}
      </Paper>
    );
  }
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired,
};

export default Tree;
