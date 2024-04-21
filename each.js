const items = [1, 2, 3, 4, 5, 5];
function cb(element,i){
    console.log(element);
}
function each(items,cb){
    for(let i =0 ;i<items.length;i++){
        cb(items[i],i);
    }
}
each(items,cb);