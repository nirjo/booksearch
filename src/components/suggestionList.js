
import React from 'react';
import { Suggestion } from './suggestion.js';

export class SuggestionList extends React.Component{


	handelSuggestionClick= clickedBook => {
		
		this.props.handelSuggestionClick(clickedBook);
		
	};
	getSuggestion= suggestionList => {	

		return suggestionList.map((book)=>{

			return <Suggestion 
						key={book.key} 
						book= {book}	
						handelSuggestionClick ={this.handelSuggestionClick}
						/>


		});		

	}
	
	render(){
		
		let suggestionLists = this.getSuggestion(this.props.suggestionList);
		if(this.props.selectedBook){
			return(
						<div id="myInputautocomplete-list" class="autocomplete-items">					

						</div>
					);
		}else if(this.props.userInput ){
			if( suggestionLists.length>1)
				return (
					<div id="myInputautocomplete-list" class="autocomplete-items">					

						{suggestionLists}

					</div>
					);
			else
				return	<></>;

						
			
		}else{
			return	<></>;
			
		}
		
		

	}
}
