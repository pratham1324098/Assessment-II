const items=[1,2,3,4,5,6];

function cb(newArray,element){
    newArray.push(element);
}

function map(items,cb){
    const newArray =[];
    for(let i=0;i<items.length;i++){
        cb(newArray,items[i]);
    }
    console.log(newArray);
    
}
map(items,cb);