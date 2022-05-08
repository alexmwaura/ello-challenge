/* eslint-disable no-unused-vars */
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
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
      <div id='wrapper'>
        <div id='container'>
          <section className='open-book'> "loading..."</section>
        </div>
      </div>
    );
  if (error)
    return (
      <div className='container open-book'>
        <pre>{error.message}</pre>
      </div>
    );
  else if (pagArr.length > 0) {
    return (
      <>
        <Content
          title={data.book.title}
          author={data.book.author}
          page={pagArr[index]}
        />
        <Footer
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          pagArr={pagArr}
          index={index}
        />
      </>
    );
  }
}

export default App;
