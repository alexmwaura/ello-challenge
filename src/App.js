import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import './App.css';
import Content from './Content';

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

  if (loading) return <div className='App'> "loading..." </div>;
  if (error)
    return (
      <div className='App'>
        <pre>{error.message}</pre>
      </div>
    );
  else {
    return (
      <div className='App'>
        <h1 className='author'>{data.book.author}</h1>
        <h3 className='title'>{data.book.title}</h3>
        <span>{text}</span>
        <input id='input' type='text' style={{ display: 'none' }}></input>

        {data.book.pages.map(({ content, pageIndex, tokens }, index) => (
          <Content
            setText={setText}
            key={index}
            content={content}
            tokens={tokens}
            pageIndex={pageIndex}
          />
        ))}
      </div>
    );
  }
}

export default App;
