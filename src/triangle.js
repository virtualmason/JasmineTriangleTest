
    Triangle = {
      triTypes : function(sideOne, sideTwo , sideThree){   	
      if (sideOne === sideTwo && sideTwo  === sideThree && sideOne > 0 
         && sideTwo > 0 && sideThree > 0){
      return "equilateral"; 
           
   }            
          else if 
       (sideOne + sideTwo  > sideThree === false|| sideOne + sideThree > sideTwo  === false||
        sideThree + sideTwo  > sideOne === false|| sideOne === 0 || sideTwo  === 0 || sideThree === 0) {
        return "Invalid Triangle"; 
}
   
       else if(sideOne === sideTwo  || sideOne === sideThree||  sideThree === sideTwo   ) {
       return "isosceles";
       
}      else if(sideOne !== sideTwo  || sideOne !== sideThree  ||  sideThree !== sideTwo   ) {
       return "scalene";
    
}      
      
        
   }
      
   
};
          
        
     