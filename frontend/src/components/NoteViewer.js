import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  // const htmlReadyBody = props.displayNote.body.split("\\n").map((line) => <Fragment>{line}<br/></Fragment>);
  const htmlReadyBody = props.displayNote.body.split("\\n").join("\n");

  return (
    <Fragment>
      <h2>{props.displayNote.title}</h2>
      <p style={{whiteSpace: 'pre-wrap'}}>{htmlReadyBody}</p>
      <p>~{props.displayNote.user.name}</p>
      <button onClick={()=>props.onEditClick()}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
