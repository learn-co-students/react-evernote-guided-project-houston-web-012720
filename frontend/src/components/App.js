import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  state = {
    notes: [],
    displayNotes: [],
    displayNote: null,
    user: null,
    isEditing: false,
    filterStr: ''
  }

  componentDidMount() {
    // console.log('fetching...');
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(notes => {
        // console.log(data)
        this.setState({
          notes,
          displayNotes: notes,
          user: notes[0].user
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

  onNewClick = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'Title',
        body: 'Body',
        user_id: this.state.user.id
      })
    })

    this.updateDisplayNotes('POST', {
      id: (this.state.notes[this.state.notes.length - 1].id + 1),
      title: 'Title',
      body: 'Body',
      user: this.state.user
    })
  }

  updateDisplayNotes = (type, note) => {
    const newNotes = [...this.state.notes]
    const newDisplayNotes = [...this.state.displayNotes]
    switch (type) {
      case 'POST':
        newNotes.push(note)
        newDisplayNotes.push(note)
        this.setState({
          notes: newNotes,
          displayNotes: newDisplayNotes
        },
        ()=>this.filterNotes(this.state.filterStr))
        break
      case 'PATCH':
        const i = this.state.notes.findIndex(n => n.id === note.id)
        if (i !== -1) {
          newNotes[i] = note
          this.setState({
            notes: newNotes,
            displayNote: note,
            // displayNotes: newDisplayNotes
            },
            ()=>this.filterNotes(this.state.filterStr))
        } else {
          console.error("Couldn't find note")
        }
        break
      default:
        console.error('Invalid type')
    }

    
  }

  filterNotes = (str) => {
    const newDisplayNotes = []

    for (const note of this.state.notes) {
      if (note.title.toUpperCase().includes(str.toUpperCase())) {
        newDisplayNotes.push(note)
      }
    }

    this.setState({
      filterStr: str,
      displayNotes: newDisplayNotes
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          notes={this.state.notes}
          onNoteClick={this.onNoteClick}
          displayNote={this.state.displayNote}
          displayNotes={this.state.displayNotes}
          user={this.state.user}
          isEditing={this.state.isEditing}
          onEditClick={this.onEditClick}
          onCancelClick={this.onCancelClick}
          updateDisplayNotes={this.updateDisplayNotes}
          onNewClick={this.onNewClick}
          filterNotes={this.filterNotes} />
      </div>
    );
  }
}

export default App;
