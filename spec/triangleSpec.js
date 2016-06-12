describe("Triangle",function(){
    it("Should take three arguments because triangles have 3 sides", function(){        
    spyOn(Triangle, 'triTypes');

    Triangle.triTypes(1,2,3);
    expect(Triangle.triTypes).toHaveBeenCalledWith(1,2,3);      
    });
    
    it("If sum of two sides are not greater then 3'rd  or 0 is entered for a side return invalid triange", function(){
        expect(Triangle.triTypes(0,2,3)).toEqual("Invalid Triangle");
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
    

