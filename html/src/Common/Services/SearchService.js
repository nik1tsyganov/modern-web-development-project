export const containsWord = (body, word) => {

    var arr = body.split(" ");
    if (arr.find(item => word.toLowerCase() === item.toLowerCase())) {
        return true;
    }
    
    return false;
};