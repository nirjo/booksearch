import React, { Component } from "react";
import { SuggestionList } from './suggestionList.js';
import { get_ranked_search_result } from './search_modules/search/search.js';

export class Autocomplete extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
		
      filteredSuggestions: [],     
      userInput: "",
	  selectedBook: null
    };
	
  }
  handelSuggestionClick= clickedBook => {
		
	
		this.setState({selectedBook:clickedBook})
		document.getElementById("input_text").value= clickedBook.title;
		
		
	};

  onChange = e => {  
	  
     if(this.state.selectedBook!==null && this.state.selectedBook.title !== e.currentTarget.value)
		 this.setState({selectedBook:null});
   
    
    const userInput = e.currentTarget.value;
	
	
		 const filteredSuggestions =[];
	
		if(userInput.length>3) {
			
			let result = get_ranked_search_result(this.props.books,userInput,5)
			for(var i=0;i<result.length;i++){
				filteredSuggestions.push(result[i])
			}
			
			
		}
	
    this.setState({
     
      filteredSuggestions,
     
      userInput: e.currentTarget.value
    });
   
  };
  
  
  clickSubmit = e => {
	    e.preventDefault();
		if(this.state.selectedBook!==null){
			this.props.addSelectedBook(this.state.selectedBook)
			this.setState({selectedBook:null});
		}
		document.getElementById("input_text").value= "";
		this.setState({filteredSuggestions:[]})
  };
 
  onKeyDown = e => {
	  
   if(this.state.selectedBook!==null && this.state.selectedBook.title !== e.currentTarget.value)	  
	this.setState({selectedBook:null});
	
  };

  render() {
	    return (
			  <React.Fragment>
					<div className="autocomplete" >
						<input
						  id="input_text"
						  type="search"
						  onChange={this.onChange}
						  onKeyDown={this.onKeyDown}
						  value={this.userInput}
						/>&nbsp;&nbsp;&nbsp;
						<button 
						onClick={this.clickSubmit}>Submit</button>
							<SuggestionList 
								
								userInput={this.state.userInput} 
								suggestionList = {this.state.filteredSuggestions}
								handelSuggestionClick = {this.handelSuggestionClick}
								
								selectedBook = {this.state.selectedBook}
								/>
					 </div>
			  </React.Fragment>
    );
	
  }
}

export default Autocomplete;
