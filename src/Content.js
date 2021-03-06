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
      if (props.page[0].pageIndex === 10 && t.startOffset > 226) {
        props.setPosition([t.startOffset - 1, t.endOffset - 1]);
      } else {
        props.setPosition([t.startOffset, t.endOffset]);
      }
    }
  });
  return (
    <div id='wrapper'>
      <div id='container'>
        <h1 style={{ textAlign: 'center' }}>
          Double Click on Word or Highlight
        </h1>
        <section className='open-book'>
          <header>
            <h1>{props.title}</h1>
            <h6>{props.author}</h6>
          </header>
          <article className='article'>
            <div className='page'>
              <p
                className={`content`}
                onClick={()=>props.setTokens(props.page[0].tokens)}
              >
                {props.page[0].content}
              </p>
            </div>
            <br />
            <div className='page'>
              <p
                className={`content`}
                onClick={()=>props.setTokens(props.page[1].tokens)}
              >
                {props.page[1].content}
              </p>
            </div>
          </article>
          <footer>
            <ol id='page-numbers'>
              <li>{props.page[0].pageIndex}</li>
              <li>{props.page[1].pageIndex}</li>
            </ol>
          </footer>
        </section>
      </div>
    </div>
  );
}
