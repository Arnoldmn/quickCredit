/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';

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
        chai.request(server).get('/signup')
            .send(newUser)
            .end((res) => {
                expect(res).to.have.status(201);
                expect(res.body.message).to.be.equal('user created successfully');
                expect(res.body.erros).to.be.equal(0);
                done();
            });
    });
});
