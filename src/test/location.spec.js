import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import app from '../app';

dotenv.config();

chai.should();
chai.use(chaiHttp);

let userToken;

const user1 = {
  username: 'Chubby',
  email: 'chubby@gmail.com',
  password: 'pass1111',
  confirmPassword: 'pass1111',
};

const locations = [{
  area: 'Maryland',
  male: 34,
  female: 25,
},
{
  username: 'Rue de Havana',
  male: 18,
  female: 22,
},
{
  username: 'Salt River',
  male: 33,
  female: 41,
},
];

describe('LocationController: User', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/register')
      .send(user1)
      .end((err, res) => {
        const { token } = res.body;
        userToken = token;
        done();
      });
  });
  let location1Id;
  it('should be able to create a location', (done) => {
    chai.request(app)
      .post('/api/v1/locations')
      .set('x-access-token', userToken)
      .send(locations[0])
      .end((err, res) => {
        location1Id = res.body.location._id;
        res.should.have.status(201);
        res.body.message.should.eql('A new location has been created');
        res.body.location.male.should.eql(34);
        done();
      });
  });

  it('should be able to create a sublocation', (done) => {
    chai.request(app)
      .post(`/api/v1/locations/${location1Id}/sublocations`)
      .set('x-access-token', userToken)
      .send(locations[0])
      .end((err, res) => {
        res.should.have.status(201);
        res.body.locations[0].male.should.eql(34);
        done();
      });
  });

  it('should be able to get all locations', (done) => {
    chai.request(app)
      .get('/api/v1/locations')
      .set('x-access-token', userToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.eql('All Locations');
        res.body.locations.length.should.eql(1);
        done();
      });
  });

  it('should be able to get a specific location', (done) => {
    chai.request(app)
      .get(`/api/v1/locations/${location1Id}`)
      .set('x-access-token', userToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.eql('Successfully retreived location');
        done();
      });
  });

  it('should be able to get population summary', (done) => {
    chai.request(app)
      .get('/api/v1/locations/summary')
      .set('x-access-token', userToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.total.should.eql(118);
        res.body.male.should.eql(68);
        res.body.female.should.eql(50);
        done();
      });
  });

  it('should be able to update a location', (done) => {
    const body = { female: 40 };
    chai.request(app)
      .put(`/api/v1/locations/${location1Id}`)
      .set('x-access-token', userToken)
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.eql('Successfully updated location');
        done();
      });
  });

  it('should be able to delete a location', (done) => {
    chai.request(app)
      .delete(`/api/v1/locations/${location1Id}`)
      .set('x-access-token', userToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.eql('Successfully removed');
        done();
      });
  });
});
