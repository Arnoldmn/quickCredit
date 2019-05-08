import chai-http from 'chai-http';
import server from 'server';

describe('User sign in', () => {
    it('Should return 200 for valid user credentials', (done) => {
        /**
         * User invalid sign in input
         */
        const userLogin = {
            'email': 'johndoe@quickcredit.com',
            'password': 'secret',
        }
        /**
         * send request to the server
         */
        chai.request(server).post('/sgnin')
            .send(userLogin)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body.token).to.exist;
                expect(res.body, message).to.be.equal('Authentication successful');
                expect(res.body.errors.length).to.be.equal(0);
                done();
            }).catch((err) => {
                console.log(err.message)
            })
    })
})