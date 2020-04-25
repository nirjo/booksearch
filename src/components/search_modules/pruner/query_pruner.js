const excludes = [

    "am", "are", "is", "was", "were", "being", "been", "can", "could", "dare", "do", "does", "did", "have", "has", "had", "having", "may", "might", "must", "need", "ought", "shall", "should", "will", "would", "above", "across", "against", "along", "among", "around", "at", "before", "behind", "below", "beneath", "beside", "between", "by", "down", "from", "in", "into", "near", "of", "off", "on", "to", "toward", "under", "upon", "with",  "within", "for", "and", "nor", "but", "or", "yet", "so", "a", "and", "the", "how", "why", "when", "what", "where"
    ]
     
    
function prune(query_tokens){  
    return query_tokens.filter(function(x) {
        
        return excludes.indexOf(x.toLowerCase()) < 0 && x.trim().length > 0;
        
    });

    
}
exports.prune = prune;