// booksList.js

import React from 'react';
import { Book } from './book.js';
export class BooksList extends React.Component{
/*const BookSearchForm  = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {*/
  render(){
  return (
    <div  className="booklist">
    {
      
       this.props.books.map((book, index) => {
        return (
            <Book book= {book} index={index} key={book.key}/>
        );
      })
    }
  </div>
  );
}
}
