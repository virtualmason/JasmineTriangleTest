describe("Triangle",function(){
    it("should have three sides", function(){        
        
        expect(Triangle.numArgs(1,1,1)).toEqual(3);       
    });
    it("If sum of two sides don't equal 3rd return invalid triange", function(){
        expect(Triangle.triTypes(1,2,3)).toEqual("invalid Triangle");
    });
    it("3 equal sides should be equilateral", function(){        
        
        expect(Triangle.triTypes(1,1,1)).toEqual("equilateral");       
    });
    
    it("if only two sides are equal then it's isosceles", function(){
        expect(Triangle.triTypes(2,2,3)).toEqual("isosceles");        
    });    
    
    
    
});
    

