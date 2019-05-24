import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';
import "./App.less";

const onOKClick = () => {
  alert("OK");
}

function App() {
  return (
    <Container text className="app-container">
      <Header>React Semantic UI App</Header>
      <Button primary onClick={onOKClick}>OK</Button>
      <Button>Cancel</Button>
    </Container>
  );
}

export default App;
