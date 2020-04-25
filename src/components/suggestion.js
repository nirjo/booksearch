import React from 'react';
export class Suggestion extends React.Component{
	
 
	onClick = e => {
		
		this.props.handelSuggestionClick(this.props.book)
		
	};
	render(){
		
		return(
			  <div key={this.props.key} onClick={this.onClick} className="booktitle"  >
                  {this.props.book.title}
                </div>
		);
	}
}