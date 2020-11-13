import React, { Component } from 'react';

class NoteEditor extends Component {
  state={
    newNote: {...this.props.displayNote,
      // body: ...this.props.displayNote.body,
      user: {
        id: 4,
        name: 'placido'
      }
    }
  }

  // ComponentDidUpdate() {
  //   this.setState({
  //     newNote: {
  //       title: this.props.displayNote.title,
  //       body: this.props.displayNote.body
  //     }
  //   })
  // }

  handleChange = (e) => {
    // console.log(g.target.name)
    this.setState({newNote: {...this.state.newNote,
        [e.target.name]: e.target.value 
      }
    })
  }

  handleSave = (e) => {
    e.preventDefault()

    // debugger

    fetch(`http://localhost:3000/api/v1/notes/${this.props.displayNote.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.newNote.title,
        body: this.state.newNote.body,
        user_id: 4
      })
    })

    this.props.updateDisplayNotes('PATCH', this.state.newNote)
  }

  render() {
    // console.log(this.state.newNote)
    return (
      <form className="note-editor" onSubmit={(e)=>this.handleSave(e)}>
        <input type="text" name="title"
          value={this.state.newNote.title}
          onChange={e=>this.handleChange(e)} />
        <textarea name="body"
          value={this.state.newNote.body}
          onChange={e=>this.handleChange(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={()=>this.props.onCancelClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
