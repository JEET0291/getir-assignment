const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach((done) => {
  mongoose.connect("mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done())
//   });
// });


test("POST /service/fetch-data", async () => {
    let payload = {
        "startDate": "2010-01-27",
        "endDate": "2017-01-29",
        "minCount": "2700",
        "maxCount": "3000"
    }
  
    await supertest(app).post("/service/fetch-data")
      .send(payload)
      .expect(200)
      .then(async (response) => {
        
        // TO BE DEFINED //
        expect(response.body.code).toBeDefined();
        expect(response.body.msg).toBeDefined();
        expect(response.body.records).toBeDefined();

        // VALIDATE TYPE OF DATA
        expect(typeof response.body.code).toBe("number");
        expect(typeof response.body.msg).toBe("string");
        expect(Array.isArray(response.body.records)).toBeTruthy();
        // VALIDATE PROPERTIES //

        for (let i = 0; i < response.body.records.length; i += 1){
          expect(response.body.records[i]).toHaveProperty('_id');
          expect(response.body.records[i]).toHaveProperty('key');
          expect(response.body.records[i]).toHaveProperty('createdAt');
          expect(response.body.records[i]).toHaveProperty('totalCount');
        }
      });
  });