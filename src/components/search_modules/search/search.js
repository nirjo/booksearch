const data_access = require('../data/data_access');
const data_converter = require("../data/data_converter");
const statistics = require("../statistics/statistics");
const sort = require("../sort/sort");

function search(filename, query,n){
    let json_arr = data_access.getJsonFromFile(filename);
	let books_arr = data_converter.covnert_to_model(json_arr);
    return get_ranked_search_result(books_arr, query,n);
}
function get_ranked_search_result(books_arr, query,n){
    

    
    let stats = statistics.get_statistics(query,books_arr)
    
    let book_stats = sort.sort_book_stats(stats.book_stats)
    let ret =[];
    for(var i=0;i<book_stats.length&&i<n;i++){
        ret.push({...books_arr[book_stats[i].index_in_original_list],index_in_filtered_list:i});
    }
    return ret;
   
 }
exports.search = search
exports.get_ranked_search_result = get_ranked_search_result