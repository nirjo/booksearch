import React from 'react';
import './App.css';
import "./components/booklist.css";
import "./components/autocomplete.css";

import { Autocomplete } from './components/autocomplete.js';
import { BooksList } from './components/booksList.js';
import { covnert_to_model } from './components/search_modules/data/data_converter.js';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
   
      books:[],
      selectedBooks:[]
    };
    this.fetchBooks = this.fetchBooks.bind(this) ;
    
  

  }
   componentDidMount(){
    this.fetchBooks();
  }
  

  fetchBooks = async () => {
    
      fetch(`data.json`)
      .then((r) => r.json())
      .then((data) =>{
		  console.log(data)
		let books = covnert_to_model(data);
		for(var i=0;i<books.length;i++) books[i] = {...books[i], key: books[i].id}; // books[i].key = books[i].id;
        this.setState({books:books});
     
       
      })
  }
  addSelectedBook = selectedBook => {
	  // alert(selectedBook.title);
	 const found = this.state.selectedBooks.find(element => element.id === selectedBook.id);
	 if(found===undefined)
	  this.setState({
         selectedBooks:[...this.state.selectedBooks, selectedBook]
       });
  }
 
 


  render (){
    return (
  
		<div className="container">
			<div className="searchContainer" >


			<Autocomplete
			
			books = {this.state.books}
			addSelectedBook = {this.addSelectedBook}

			/>
			

			</div>
			<div className="bookListContainer">
				<BooksList books={this.state.selectedBooks} /> 
			</div>
		</div>
    );
  }
}
//export default App;