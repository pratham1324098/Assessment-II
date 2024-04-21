const items = [1,2,3,4,5]
function cb(items,element){
    for(let i=0;i<items.lenght;i++){
        if(items[i]===element){
            return items[i];
        }
    }
    return undefined;
}
function find(items,cb,element){
    cb(items,element)
}
console.log(find(items,cb,3))