function create_new_book(id,title,summary,author){
    return {id:id,title:title,summary:summary,author:author.author};

}
function covnert_to_model(json_array){  
    let books_array = [];
    json_array.summaries.forEach(function (a_summary, index) {
        books_array.push({...create_new_book(a_summary.id,json_array.titles[index],a_summary.summary,json_array.authors[index]),index_in_original_list:index})
        //books_array.push(Object.assign(summary, {title: json_array.titles[index], author:json_array.authors[index]}));

        
    });
    return books_array
    
}
exports.covnert_to_model = covnert_to_model;