<<<<<<< HEAD
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
||||||| merged common ancestors
=======
/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../server';

chai.should();
chai.use(chaiHttp);
const { expect } = chai;

describe('User sign up', () => {
    it('Should return a 201 and confirm user a valid input', (done) => {
        /**
         * request new user input
         */
        const newUser = {
            email: 'johndoe@quicredit.com',
            firstname: 'john',
            lastname: 'doe',
            password: 'secret',
            addres: 'Gisozi',
        };
        /**
         * send  user request
         */
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(newUser)
            .end((error, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
})
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316
