import { useEffect } from 'react';

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
      props.setPosition([t.startOffset, t.endOffset]);
      props.setText(document.getElementById('input').value);
    }
  });
  return (
    <>
    <input id='input' type='text' style={{ display: 'none' }}></input>
    <div className='App'>
      <div className='container'>
        <p id='content'>{props.page[0].content}</p>
      </div>
      <small>{props.page[0].pageIndex}</small>
    </div>
    <div className='App'>
      <div className='container'>
        <p id='content'>{props.page[1].content}</p>
      </div>
      <small>{props.page[1].pageIndex}</small>
    </div>
    
    </>
  );
}
