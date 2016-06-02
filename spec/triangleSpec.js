describe("Triangle",function(){
    it("should have three sides", function(){        
        
        expect(Triangle.numArgs(1,1,1)).toEqual(3);       
    });
    
    it("3 equal sides should be equilateral", function(){        
        
        expect(Triangle.triTypes(1,1,1)).toEqual("equilateral");       
    });
    
    it("if only two sides are equal then it's isosceles", function(){
        expect(Triangle.triTypes(1,1,4)).toEqual("isosceles");        
    });    
    
    it("everything else should be scalene", function(){
        expect(Triangle.triTypes(1,2,3)).toEqual("scalene");
    });
    
});
    


/*
describe("Person", function() {
    it("calls the getName() function", function() {
        var testPerson = new Person();
        spyOn(testPerson, "getName");
        testPerson.toString();
        expect(testPerson.getName).toHaveBeenCalled();
    });
});
*/