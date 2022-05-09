export default function Token({ word, setWord, title, author }) {
  return (
    <div id='wrapper'>
      <div id='container'>
        <input id='input' type='text' style={{ display: 'none' }}></input>
        <section className='open-book'>
          <header>
            <h1>{title}</h1>
            <h6>{author}</h6>
          </header>
          <article className='article'>
            <div className='page'>
              <div className='text-effect'>
                <h1 data-text={word}>{word}</h1>
              </div>
            </div>
            <br />
            <div className='page'></div>
          </article>
          <footer>
            <ol id='page-numbers'>
            <li>
              <button className='button-18' onClick={() => setWord(null)}>
                Done
              </button>
              </li>
              <li></li>
            </ol>
          </footer>
        </section>
      </div>
    </div>
  );
}
