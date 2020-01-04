const User = require('../src/models/user');
const chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    User.deleteMany({}, () => {
      done();
    });
  });

  describe('Post /users', () => {
    it('creates a new user in the database', (done) => {
      chai.request(server)
        .post('/users')
        .send({
          firstName: 'Nadia',
          lastName: 'Amroon',
          email: 'nadia643@gmail.com',
          password: 'nadiapassword',
        })

        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(201);
          User.findById(res.body._id, (err, user) => {
            expect(err).to.equal(null);
            expect(user.firstName).to.equal('Nadia');
            expect(user.lastName).to.equal('Amroon');
            expect(user.email).to.equal('nadia643@gmail.com');
            expect(user.password).not.to.have.property('password');
            expect(user.password.length).to.equal(60);
            done();
          });
        });
    });
  });
});
