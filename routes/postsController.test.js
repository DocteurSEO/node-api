const request = require("supertest");
const app = require("../index");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });



  test("It should response 404 in wf3 route", done => {
  request(app)
  .get('/api/wf3')
  .then(response => {
    
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe( 'Erreur Centre de formation introuvable');
   
    done();
  });
  

})


test("", done => {
  request(app)
  .get('/api/user')
  .then(response => {
    
    expect(response.statusCode).toBe(200);
   expect(response._body).toEqual({name:'john'});
    done();
  });
  

})


});