function arrayToList(array){
    let list = null;
    for(let i = array.length-1; i>=0; i--) {
        list = {value: array[i], rest: list}; //variables are declares from right to left,
                                              //first list object created is null
    }
    
    return list;
}

function listToArray(list) {
    let array = [];
    while(list != null) {
        array.push(list.value);
        list = list.rest;
    }
    
    return array;
}

function prepend(element,list) {
    
    let newl = {
        value: element, 
        rest: list
    };
    
    return newl;
}

function nth(list,n) {
    
    
    if(!list) {
        return undefined;
    }
    else if(n == 0) {
        return list.value;
    }
    
    else{
        return nth(list.rest, n-1);
    }
}



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20