
function sort_book_stats(book_stats){
    
   /*console.log(book_stats)
   console.log(typeof(book_stats));
   console.log(typeof([]));
   return;*/
    book_stats.sort(function(a, b){return b.distinct_tokens - a.distinct_tokens });
    book_stats.sort(function(a, b){ 
                                       var ret = 0 ; 
                                       if( b.distinct_tokens ===  a.distinct_tokens  )  {
                                           ret = b.total_token_count - a.total_token_count;
                                           
                                       }
                                       return ret; 
                                   }
                   );
    

    return book_stats

}
exports.sort_book_stats = sort_book_stats;