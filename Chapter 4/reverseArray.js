function reverseArray(input) {
	let a = [];
  	for(let i = input.length-1; i>=0; i--) {
    	a.push(input[i]);
    }
	return a;
}

function reverseArrayInPlace(input) {
	let front = 0;
  	let back = input.length-1;
  
  	while(front < back) {
      let temp = input[front];
      input[front] = input[back];
      input[back] = temp;
      front++;
      back--;
    }
  	
  	return input;
}
