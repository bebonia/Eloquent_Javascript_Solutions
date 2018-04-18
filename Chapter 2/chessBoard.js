// prints N*N chess grid

function chessGrid(n) { 

    var string = "" // 
    
    for(let i=0; i<n; i++){
      for(let j=0; j<n; j++) {
        
        if((i+j) % 2 === 0){
       		string +=" ";   
      	}
        else{
          string +="#";
        }
      } 
      
      string += "\n";     
    }
    
    console.log(string);
    
    }
