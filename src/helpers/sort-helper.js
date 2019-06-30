const sortBy = (type, field) => {
    switch(type) {
        case "string":
            return (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1;
        case "number":
            return (a, b) => b[field] - a[field];
        default:
            return (a, b) => new Date(b[field]) - new Date(a[field]);
    }
}

const sortFunction = (sort) => {
    switch(sort) {
        case "SORTED_BY_TITLE":
            return sortBy("string", "title");
        case "SORTED_BY_RATING":
            return sortBy("number", "rating");
        default: 
            return sortBy("date", "timestamp");
    }
}

export default sortFunction;