
    Triangle = {
      triTypes : function (sideOne, sideTwo, sideThree) { 
          // make if statements clean
          var sidesEqual = sideOne === sideTwo && sideTwo  === sideThree && sideOne > 0;
          var  greaterThen0 = sideTwo > 0 && sideThree > 0;
          var  twoSidesGreaterThenthirdor = sideOne + sideTwo  > sideThree === false|| sideOne + sideThree > sideTwo  === false;
          var  twoSidesGreaterThenThirdNotEqualTo0 = sideThree + sideTwo  > sideOne === false|| sideOne === 0 || sideTwo  === 0 || sideThree === 0;
          
          if (sidesEqual && greaterThen0) {
              return "equilateral";          
          } 
          
          else if (twoSidesGreaterThenthirdor || twoSidesGreaterThenThirdNotEqualTo0) {
              return "Invalid Triangle"; 
          }
   
          else if (sideOne === sideTwo  || sideOne === sideThree||  sideThree === sideTwo   ) {
              return "isosceles";       
          } 
          
          else if (sideOne !== sideTwo  || sideOne !== sideThree  ||  sideThree !== sideTwo   ) {
             return "scalene";    
          }      
      
        
     }
      
   
   };
          
        
     