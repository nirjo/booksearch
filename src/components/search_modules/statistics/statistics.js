
const query_pruner = require("../pruner/query_pruner")
function get_statistics(query, books){
   
    let book_stats= []; 
    let selected_tokens = query_pruner.prune(query.split(" "));
   
    for(var i=0;i<books.length;i++){
        var token_stats = [];
        for(var j=0;j<selected_tokens.length;j++){
          
            var regExp = new RegExp(selected_tokens[j], "gi");
            var token_count =  books[i].summary.match(regExp) ?books[i].summary.match(regExp).length : 0;        

            if(token_count>0){               
                token_stats.push ({token:selected_tokens[j],count:token_count});         

          
            }
        }
        if(token_stats.length>0){
            var total_token_count = token_stats.reduce(
                (sum, obj) => sum + obj['count'] 
                ,0
              );
            book_stats.push(
                            {
                                book_id:books[i].id,
                                token_stats:token_stats,
                                distinct_tokens:token_stats.length,
                                total_token_count:total_token_count,
                                index_in_original_list:books[i].index_in_original_list} 

            );
        }

    }
  
    return{book_stats:book_stats}
}

exports.get_statistics = get_statistics;