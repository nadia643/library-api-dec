const mongoose = require('mongoose');
const Artist = require('../src/models/artist');
const chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/artists', () => {
  afterEach((done) => {
    mongoose.connection.dropDatabase(() => {
      done();
    });
  });

  describe('POST /artists', () => {
    it('creates a new artist in the database', (done) => {
      chai.request(server)
        .post('/artist')
        .send({
          name: 'Tame Impala',
          genre: 'Rock',
        })
        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(201);

          Artist.findById(res.body._id, (err, artist) => {
            expect(err).to.equal(null);
            expect(artist.name).to.equal('Tame Impala');
            expect(artist.genre).to.equal('Rock');
            done();
          });
        });
    });
  });
});
