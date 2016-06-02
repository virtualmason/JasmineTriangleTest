  Triangle = {
   triTypes : function(){   	
       if (arguments[0]  === arguments[1] && arguments[1] ===   arguments[2]){
       return "equilateral"; 
           
   } else if 
       (arguments[0] ===arguments[1] || arguments[2] === arguments[1] ||  arguments[0] === arguments[2]) {
       return "isosceles";
}
   else return "scalene";       
   },//Tritypes
   numArgs : function(){
   	return  arguments.length;
   }
   

};