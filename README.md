# booksearch
ReachApp
the application structure is roughtly the following

The app has one component named autocomplete, that has a textbox, a button and a componnent called suggestionlist(which itself has a child component called suggestion. the sugestion component shows the book title).On "onchange" event of the textbox a search is performed and dependi9ng on the search result the number of suggestion inside suggeion list is changed.

If a suggestion(book title) is clicked, then the title is displayed in the text box. user can add it to list by clicking the button.

\<app><br/>
 &nbsp;     \<autocomplete><br/>
         &nbsp; &nbsp;  \<input/><br/>
         &nbsp; &nbsp; \<suggestionlist><br/>
             &nbsp; &nbsp; &nbsp; \<suggestion><br/>
          &nbsp; &nbsp; \<suggestionlist><br/>
      &nbsp; \</autocomplete><br/>
      &nbsp;\<booklist><br/>
          &nbsp; &nbsp; \<book/><br/>
      &nbsp;\<booklist> <br/>   
\</app><br/>


run 
# npm install
# npm test
# npm start
