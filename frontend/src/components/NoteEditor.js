import React, { Component } from 'react';

class NoteEditor extends Component {
  state={
    newNote: {...this.props.displayNote,
      // body: ...this.props.displayNote.body,
      user: {
        id: 1,
        name: 'newUser'
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
    this.setState({newNote: {
        [e.target.name]: e.target.value 
      }
    })
  }

  handleSave = (e) => {
    e.preventDefault()
    this.setState({
      newNote: {
        title: e.target[0].value,
        body: e.target[1].value
      }
    })
  }

  render() {
    console.log(this.state.newNote)
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
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
