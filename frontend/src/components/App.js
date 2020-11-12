import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    console.log('fetching...');
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(data => {
        // console.log(data)
        this.setState({notes: data});
        // console.log(this.state)
      }),
      (error) => {

      }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
