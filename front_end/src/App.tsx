import React from 'react'
import { Header } from './components/Header'
import { Container } from "@material-ui/core"
import { Main } from './components/Main';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <div>Hi!</div>
        <Main />
      </Container>
    </div>
  );
}

export default App;
