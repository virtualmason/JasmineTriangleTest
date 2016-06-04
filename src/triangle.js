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
       return  arguments.length;
}
   
};
