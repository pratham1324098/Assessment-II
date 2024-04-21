const items =[1,2,3,4,5];
function cb(accumulator , element){
    accumulator+=element;
    return accumulator;
}
function reduce(items, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : items[0];
    let startIndex = startingValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < items.length; i++) {
        accumulator = cb(accumulator, items[i]);
    }
    return accumulator;
}
console.log(reduce(items,cb,0));