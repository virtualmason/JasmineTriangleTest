    Triangle = {
      triTypes : function(one, two, three){   	
      if (one  === two && two === three){
      return "equilateral"; 
           
   }  else if 
       (one + two > three === false|| one + three > two === false||three + two > one === false ) {
        return "invalid Triangle"; 
}
   
       else if(one === two || one === three||  three === two  ) {
       return "isosceles";
       
}      else if      (one !== two || one !== three  ||  three !== two  ) {
       return "scalene";
}
        
   },
       numArgs : function(){
           if(arguments.length >=3 && arguments[0]+arguments[1]+arguments[2] >=3){
       return  arguments.length;
           } else alert("Enter three sides(arguments) dude!!");
}
   
};
