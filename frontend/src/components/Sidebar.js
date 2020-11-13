import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'
        style={{height: 'calc(100vh - 242px)', overflow: 'auto'}}
        >
        <NoteList
          // notes={this.props.notes}
          displayNotes={this.props.displayNotes}
          onNoteClick={this.props.onNoteClick} />
        <button onClick={()=>this.props.onNewClick()}>New</button>
      </div>
    );
  }
}

export default Sidebar;
