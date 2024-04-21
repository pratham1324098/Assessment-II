const items = [1,2,3,4,5,5];

function cb(element){
    return element%2===0;
}

function filter(items, cb) {
    const filteredArray = [];
    for(let i=0;i<items.length;i++){
        if(cb(items[i])){
            filteredArray.push(items[i]);
        }
    }
    return filteredArray;
}
console.log(filter(items,cb));