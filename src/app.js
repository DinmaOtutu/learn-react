import React from 'react';
import { render } from 'react-dom';
import { Pet } from './pet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="luna" animal="dog" breed="asian" />
        <Pet name="escort" animal="cat" breed="cocasian" />
        <Pet name="billy" animal="horse" breed="mosco" />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
