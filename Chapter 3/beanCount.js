function countBs(input) {
	let count =0;
 	for(let i=0; i<input.length; i++){
    	if(input[i] === "B"){
         count +=1;
        }
    }
  	return count;
}

function countChar(input,letter) {
	let count =0;
 	for(let i=0; i<input.length; i++){
    	if(input[i] === letter){
         count +=1;
        }
    }
  	return count;
}