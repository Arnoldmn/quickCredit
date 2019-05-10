/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';


chai.should();
chai.use(chaiHttp);

describe('Test loan endpoints', () => {
    it('Should GET all listed loans', (done) => {
        /**
         * get all listed loans
         */
        chai.request(server)
            .post('/signin')
            .send({
                email: 'doejohn@gmail.com',
                password: 'secret',
            })
            .end((res, info) => {
                chai.request(server)
                    .get('/loans')
                    .set({ Auth: `User ${res.body.info.token}` })
                    .end((err) => {
                        info.should.have.status(200);
                        done();
                    });
            });
    });

    it('should POST and return loans', (done) => {
        /**
         * Post loans after user signin
         */
        chai.request(server)
            .post('/users')
            .send({
                email: 'joedoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(server)
                    .post('/users')
                    .set({ Auth: `User ${res.body.info.token}` })
                    .send({
                        tenor: '.5',
                        amount: 20000.0,
                        installment: 5000,
                        balance: 15000,
                    })
                    .end((error, info) => {
                        expect(info).to.have.status(200);
                        expect(info).to.be.a(Object);
                        expect(info.body.message).to.equal('User logged in success and loans retrieved');
                        done();
                    });
            });

    });

    it('Should Get a specific loan application based on id', (done) => {
        /**
         * Post loans after user signin
         */
        chai.request('server')
            .post('/api/v1/auth/signup')
            .send({
                email: 'joedoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(server)
                    .post('/api/v1/auth/')
                    .set({ Auth: `User ${res.body.info.token}` })
                    .send({
                        tenor: '.9',
                        amount: 50000.0,
                        installment: 5000,
                        balance: 45000,
                    })
                    .end((error, res) => {
                        chai.request((req, err))
                            .get(`/api/routes/user.js/${res.body.info.loinId}`)
                            .set({ Auth: `User ${res.body.info.token}` })
                            .end((err, response) => {
                                response.should.have.status(200);
                                done();
                            });

                    });
            });
    });

    it('Should GET loans that are not fully paid/repaid', (done) => {
        /**
         * Get unsettled loans 
         */
        chai.request(server)
            .post('/api/routes/user.js')
            .send({
                email: 'johndoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(server)
                    .get('/api/routes/loan.js')
                    .set({ Auth: `User ${res.body.info.token}` })
                    .query({ status: 'appreved', repaid: 'false' })
                    .end((err, info) => {
                        expect(info).should.have.status(200);
                        done();
                    });
            });
    });

});
