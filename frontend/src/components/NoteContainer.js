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
            notes={this.props.notes}
            onNoteClick={this.props.onNoteClick} />
          <Content
            displayNote={this.props.displayNote}
            isEditing={this.props.isEditing}
            onEditClick={this.props.onEditClick} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
