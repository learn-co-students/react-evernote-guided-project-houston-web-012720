import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    // console.log('NoteContainer: ' + this.props.notes)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
            // notes={this.props.notes}
            displayNotes={this.props.displayNotes}

            onNoteClick={this.props.onNoteClick} />
          <Content
            displayNote={this.props.displayNote}
            displayNotes={this.props.displayNotes}
            isEditing={this.props.isEditing}
            onEditClick={this.props.onEditClick}
            onCancelClick={this.props.onCancelClick}
            updateDisplayNotes={this.props.updateDisplayNotes} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
