import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  state = {
    notes: [],
    displayNotes: [],
    displayNote: null,
    isEditing: false
  }

  componentDidMount() {
    console.log('fetching...');
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(notes => {
        // console.log(data)
        this.setState({
          notes,
          displayNotes: notes,
        });
        // console.log(this.state)
        },
        (error) => {
          console.error(error)
      })
  }

  onNoteClick = (note) => {
    this.setState({
      displayNote: note,
      isEditing: false
    });
  }

  onEditClick = () => {
    this.setState({
      isEditing: true
    })
  }

  onCancelClick = () => {
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          notes={this.state.notes}
          onNoteClick={this.onNoteClick}
          displayNote={this.state.displayNote}
          isEditing={this.state.isEditing}
          onEditClick={this.onEditClick} />
      </div>
    );
  }
}

export default App;
