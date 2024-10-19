
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      //let count =0;
      let a= Number.parseInt(getRandomArbitrary(1,10));
      let un=0; 
      
      console.log(un);
      let count =0;
      let score =10;
function work(){
    


   

    
    for(let i = 0;i<10;i++){
      un=Number.parseInt(document.getElementById("unum").value);
      if(un==a){ 
        document.getElementById("res").innerHTML= "RIGHT GUESS YOUR SCORE IS"+ score;
        document.getElementById("res").style.backgroundColor = "green";
        
        
      }
      else{
        document.getElementById("res").innerHTML= "MAGIC NO = "+ a +  " !!  WRONG GUESS , TRY AGAIN ";
        document.getElementById("res").style.backgroundColor = "rgb(209,80,23)";
        
      
      }
      score--;
      count++;
   

    //  if(un!=a){
    
    //     count++
      
    //     document.getElementById("res").innerHTML= "MAGIC NO = "+ a +  " !!  WRONG GUESS , TRY AGAIN ";
    //     document.getElementById("res").style.backgroundColor = "rgb(209,80,23)";

    //  }
    //  else{
    

    // document.getElementById("res").innerHTML= "RIGHT GUESS ";
    // document.getElementById("res").style.backgroundColor = "green";
    
    //  }
     
}
}