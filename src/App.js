/* eslint-disable no-unused-vars */
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import { handlePages } from './lib';

const BOOK_QUERY = gql`
  {
    book {
      author
      pages {
        content
        pageIndex
        tokens {
          position
          value
        }
      }
      title
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(BOOK_QUERY);
  const [text, setText] = useState();
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState([]);
  const [pagArr, setPagArr] = useState([]);

  useEffect(() => {
    if (pagArr.length <= 0 && !loading && !error) {
      setPagArr(handlePages(data.book.pages));
    }
  }, [data, error, loading, pagArr]);

  function handleNextPage(pageIndex) {
    if (index < pagArr.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePreviousPage(pageIndex) {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  if (loading)
    return (
      <div className='main'>
        <div className='container'>
          <p id='content'> "loading..."</p>
        </div>{' '}
      </div>
    );
  if (error)
    return (
      <div className='App'>
        <pre>{error.message}</pre>
      </div>
    );
  else if (pagArr.length > 0) {
    return (
      <>
        <div id='wrapper'>
          <div id='container'>
            <section className='open-book'>
              <header>
                <h1>{data.book.title}</h1>
                <h6>{data.book.author}</h6>
              </header>
              <article className='article'>
                <div className='page'>
                <div id="follower">
  <div id="circle1"></div>
  <div id="circle2"></div>
</div>
                  <p className='content'>
                    {pagArr[index][0].content}
                  </p>
                </div>
                <br/>
                <div className='page'>
                  <p className='content'>
                    {pagArr[index][1].content}
                  </p>
                </div>
              </article>
              <footer>
                <ol id='page-numbers'>
                  <li>{pagArr[index][0].pageIndex}</li>
                  <li>{pagArr[index][1].pageIndex}</li>
                </ol>
              </footer>
            </section>
          </div>
        </div>
  
        <div className='footer'>
          <div className='nav_buttons'>
            <div
              className='circle ps_prev'
              onClick={() => handlePreviousPage(pagArr[index])}
            >
              <span className='material-symbols-outlined'>
                arrow_back_ios_new
              </span>
            </div>
            <div
              className='circle ps_next'
              onClick={() => handleNextPage(pagArr[index])}
            >
              <span className='material-symbols-outlined'>
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
        {/* <Header title={data.book.title} author={data.book.author} />
        <div className='main'>
          <Content
            setText={setText}
            setPosition={setPosition}
            page={pagArr[index]}
          />
        </div>
        <div className='footer'>
          <div className='nav_buttons'>
            <div
              className='circle ps_prev'
              onClick={() => handlePreviousPage(pagArr[index])}
            >
              <span className='material-symbols-outlined'>
                arrow_back_ios_new
              </span>
            </div>
            <div
              className='circle ps_next'
              onClick={() => handleNextPage(pagArr[index])}
            >
              <span className='material-symbols-outlined'>
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default App;
