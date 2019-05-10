/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../server';

chai.should();
chai.use(chaiHttp);
const { expect } = chai;

describe('User registration', () => {

    it('User signup endpoint should return 200', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send({
                email: 'eukigali@gmail.com',
                firstname: 'Kigali',
                lastname: 'munya',
                password: '123456',
                address: 'Gisozi',
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('data');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('token');
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('firstname');
                res.body.data.should.have.property('lastname');
                done();
            });
    });

});