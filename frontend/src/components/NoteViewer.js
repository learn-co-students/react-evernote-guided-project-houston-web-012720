import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const htmlReadyBody = props.displayNote.body.split("\\n").map((line) => <Fragment>{line}<br/></Fragment>);

  return (
    <Fragment>
      <h2>{props.displayNote.title}</h2>
      <p>{htmlReadyBody}</p>
      <p>~{props.displayNote.user.name}</p>
      <button onClick={()=>props.onEditClick()}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
