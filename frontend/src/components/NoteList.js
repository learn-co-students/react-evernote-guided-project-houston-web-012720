import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  // console.log(props);
  return (
    <ul>
      {/* Render list of notes here... */}
      {/* <NoteItem /> */}
      {props.notes.map((note) => <NoteItem
        key={note.id.toString()}
        note={note}
        onNoteClick={props.onNoteClick}/>)}
    </ul>
  );
}

export default NoteList;
