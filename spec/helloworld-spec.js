describe("Hello World", function () {
    beforeEach(function () {

        //Custom matcher sample
        
        jasmine.addMatchers({
            toBeLargerThan: function () {

                return {
                    compare: function (actual, expected) {

                        var result = {};

                        result.pass = actual > expected;

                        if (result.pass) {
                            result.message = actual + " is greater than " + expected;
                        } else {
                            result.message = actual + " is not greater than " + expected;
                        }

                        return result;

                    }
                };
            }
        });
        
        //Adding another matcher
        jasmine.addMatchers(
        
            //A custom matcher object
            {
                //Matcher function name
                toContainHello : function() {
                
                    //Matcher function should return an object containing 'compare' method
                    
                    return { //return object of matcher function
                        compare : function(actual, expected) {
                        
                            //'compare' function should return an object containing 'pass'
                            
                            var result = {};
                            result.pass = true;
                            
                            result.pass = (actual.indexOf("Hello") > -1 );
                            
                            if(!result.pass) {
                                result.message = actual + " does not contain a Hello..!!";
                            }
                            return result;
                        }
                    }; 
                    
                } //End of matcher function
                
            }//End of custom matcher object
        );
        
    });

    it("should return hello world", function () {
        expect(helloworld()).toEqual("Hello World");
    });

    it("should contain a hello", function () {
        expect(helloworld()).toContain("Hello");
    });

    it("should return hello <user> when passed a <user>", function () {
        expect(helloworld("Nirmal Davis")).toEqual("Hello Nirmal Davis");
    });

    it("should match a hello", function () {
        expect(helloworld()).toContainHello();
    });

    it("should be a large number", function () {
        expect(102).toBeLargerThan(5);
    });
});