const mongoose = require('mongoose');
const Artist = require('../src/models/artist');

describe('/artists', () => {
  afterEach((done) => {
    mongoose.connection.dropDatabase(() => {
      done();
    });
  });

  describe('POST /artists', () => {
    it('creates a new artist in the database', (done) => {
      chai.request(server)
        .post('/artists')
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
