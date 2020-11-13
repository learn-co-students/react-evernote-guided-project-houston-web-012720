import React from 'react';

const NoteItem = (props) => {
  const htmlReadyBody = props.note.body.split("\\n").join(' ');

  return (
      <li key={props.note.id} onClick={()=>props.onNoteClick(props.note)}>
        <h2>{props.note.title}</h2>
        <p style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'}}>
            {htmlReadyBody}
        </p>
      </li>
  )
};

export default NoteItem;
