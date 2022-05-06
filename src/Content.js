import {  useEffect } from 'react';

export default function Content(props) {
  useEffect(() => {
    var t = '';
    document.onmouseup = getContent;
    if (!document.all) document.captureEvents(Event.MOUSEUP);

    function getContent(e) {
      t = document.all
        ? document.selection.createRange().text
        : document.getSelection().getRangeAt(0);
      document.getElementById('input').value = t;
      props.setText(document.getElementById('input').value);
    }
  });
  return <p id='content'>{props.content}</p>;
}
