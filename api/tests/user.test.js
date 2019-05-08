import chai-http from 'chai-http';
import server from '../server';

describe('User sign up', () => {
    it('Should return a 201 and confirm user a valid input', (done) => {
        /**
         * request new user input
         */
        const newUser = {
            'email': 'johndoe@quicredit.com',
            'firstname': 'john',
            'lastname': 'doe',
            'password': 'secret',
            'addres': 'Gisozi'
        }
        /**
         * send  user request
         */
        chai.request(server).post('/signup')
            .send(newUser)
            .then((res) => {
                expect(res).to.have.status(201);
                expect(res.body.message).to.be.equal('user created successfully');
                expect(res.body.erros).to.be.equal(0);
                done();
            }).catch(err => {
                console.log(err.message)
            })
    })
})
