const utils = require("./utils.js");
const expect = require("expect");

describe("utils", () => {
    describe("#add", () => {
        it("should add two numbers", () => {
            var res = utils.add(11,19);
        
            expect(res).toBe(30);
        
            // if(res !== 30) {
            //     throw new Error(`Expected 11 + 19 = 30, But Got ${res}`);
            // };
        });
        it("should async add two numbers", (done) => {
            utils.asyncAdd(2, 3, (sum) => {
                expect(sum).toBe(5);
                done();
            });
        });
    });
    describe("#square", () => {
        it("should square a number", () => {
            var res = utils.square(5);
        
            expect(res).toBe(25);
        
            // if(res !== 25) {
            //     throw new Error(`Expected 5^2 = 25, But Got ${res}`);
            // };
        });      
        it("should async square a number", (done) => {
            utils.asyncSquare(5, (result) => {
                expect(result).toBe(25);
                done();
            });
        });
    });  
});

// it("should verify user", () => {
//     var user = {
//         location: 'Agra',
//         Age: '21'
//     };

//     var res = utils.setName(user, 'Mukul Shakya');

//     expect(res).toInclude({
//         firstName: 'Mukul',
//         lastName: 'Shakya'
//     });
// });