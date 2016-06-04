describe("Triangle",function(){
    it("should have three sides", function(){        
        
        expect(Triangle.numArgs(1,1,1)).toEqual(3);       
    });
    it("If sum of two sides are not greater then 3'rd return invalid triange", function(){
        expect(Triangle.triTypes(1,2,3)).toEqual("invalid Triangle");
    });
    it("3 equal sides should be equilateral", function(){        
        
        expect(Triangle.triTypes(1,1,1)).toEqual("equilateral");       
    });
    
    it("If only two sides are equal then it's isosceles", function(){
        expect(Triangle.triTypes(2,2,3)).toEqual("isosceles");        
    });    
    
    it("If triangle as 3 unequal sides that are valid scalene", function(){
        expect(Triangle.triTypes(3,5,4)).toEqual("scalene");        
    });    
    
});
    

