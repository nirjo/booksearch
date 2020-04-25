// book.js
import React from 'react';
export class Book extends React.Component{
/*const BookSearchForm  = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {*/
  render(){
  return (
    <div  className="item">
		 <p className="title">{this.props.book.title}</p>
		
        <p className="summary_text">{this.props.book.summary}</p>
        <p className="author_text">{this.props.book.author}</p>
  </div>
  );
}
}
