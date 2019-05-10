/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';

chai.should();
chai.use(chaiHttp);
const { expect } = chai;

describe('User sign in', () => {
    it('Should return 200 for valid user credentials', (done) => {
        /**
         * User invalid sign in input
         */
        const userLogin = {
            email: 'johndoe@quickcredit.com',
            password: 'secret',
        };
        /**
         * send request to the server
         */
        chai.request(server).post('/signin')
            .send(userLogin)
            .end((res) => {
                expect(res).to.have.status(200);
                // eslint-disable-next-line no-unused-expressions
                expect(res.body.token).to.exist;
                expect(res.body.message).to.be.equal('Authentication successful');
                expect(res.body.errors.length).to.be.equal(0);
                done();
            });
    });
});