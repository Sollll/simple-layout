import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';

import TopBar from './components/TopBar'
import Form from './components/Form'
import DataFromStore from './components/DataFromStore'
import DataProvider from './dataProvider'
import LiveLayoutData from "./components/LiveLayoutData";

class App extends React.Component {

  render() {
    return (
      <DataProvider>
        <TopBar/>
        <Container>
          <Form/>
          <DataFromStore />
          <LiveLayoutData />
        </Container>
      </DataProvider>
    );
  }
}

export default App;
