import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Body />
    </React.Fragment>
  );
}

export default App;
