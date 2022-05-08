import { gql } from '@apollo/client';

export const BOOK_QUERY = gql`
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
