const supertest = require('supertest');
var app = require('./server.js').app;

describe("server", () => {
    describe("GET /", () => {
        it("should return hello world response", (done) => {
            supertest(app)
                .get('/')
                .expect("Hello World")
                .end(done)
        });
    });
    describe("GET /user", () => {
        it("should return user object", (done) => {
            supertest(app)
                .get('/user')
                .expect({
                    name: "Mukul Shakya",
                    age: 20,
                    skills: ["Java","Python","Node.js","HTML5","CSS3","JavaScript","jQuery"],
                    location: "Agra"
                })
                .end(done)
        });
    });
});
