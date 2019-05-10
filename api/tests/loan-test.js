/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../server';

chai.should();
chai.use(chaiHttp);
const token = '';
let userToken = '';
const { expect } = chai;

describe('Test loan endpoints', () => {
    it('Should GET all listed loans', (done) => {
        /**
         * get all listed loans
         */
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'doejohn@gmail.com',
                password: 'secret',
            })
            .end((res, info) => {
                chai.request(app)
                    .get('/api/v1/loans')
                    .send({ email: 'user@banka.com', password: '1234567@Bk' })
                    .then((res) => {
                        userToken = res.body.data.token;
                    })
                    .then(done, done);
            });
    });

    it('should POST and return loans', (done) => {
        /**
         * Post loans after user signin
         */
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'joedoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(app)
                    .post('api/v1/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .send({
                        tenor: '.5',
                        amount: 20000.0,
                        installment: 5000,
                        balance: 15000,
                    })
                    .end((error, info) => {
                        info.should.have.status(200);
                        info.body.should.be.a('object');
                        info.body.should.have.property('data');
                        done();
                    });
            });

    });

    it('return a signle loan ', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'mnpde@yahoo.com',
                password: 'mnpd@123',
            })
            .end((err, res) => {
                chai.request(app)
                    .post('/api/v1/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .send({
                        tenor: '3',
                        amount: 250000.00,
                        installment: 9000.00,
                        balance: 360000,
                    })
                    .end((error, data) => {
                        chai.request(app)
                            .get(`/api/v1/loans/${data.body.data}`)
                            .set({ email: 'admin@quickcredit.com', password: '1234567' })
                            .end((errors, response) => {
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
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'johndoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(app)
                    .get('/api/v1/unpaid/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .query({ status: 'approved', repaid: 'false' })
                    .end((err, info) => {
                        expect(info).should.have.status(200);
                        done();
                    });
            });
    });


    it('Should return fully settled loans', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'johndoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(app)
                    .get('/api/v1/repaid/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .query({ status: 'approved', repaid: 'true' })
                    .end((error, data) => {
                        data.should.have.status(200);
                        done();
                    });
            });
    });

    it('Return 200 after repayment success', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'johndoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(app)
                    .post('/api/v1/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .send({
                        tenor: '3',
                        amount: 250000.00,
                        installment: 9000.00,
                        balance: 360000,
                    })
                    .end((error, data) => {
                        chai.request(app)
                            .post(`/api/v1/loans/${data.body.data}/repayment`)
                            .set({ email: 'admin@quickcredit.com', password: '1234567' })
                            .send({
                                paidAmount: 5000.00,
                            })
                            .end((rerrors, response) => {
                                response.should.have.status(200);
                                done();
                            });
                    });
            });
    });

    it('Should return repayment after user fully repays', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'johndoe@quickcredit.com',
                password: 'secret',
            })
            .end((err, res) => {
                chai.request(app)
                    .post('/api/v1/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .send({
                        tenor: '3',
                        amount: 250000.00,
                        installment: 9000.00,
                        balance: 360000,
                    })
                    .end((error, data) => {
                        chai.request(app)
                            .post(`/api/v1/loans/${data.body.data}/repayment`)
                            .set({ email: 'admin@quickcredit.com', password: '1234567' })
                            .send({
                                paidAmount: 5000.00,
                            })
                            .end((rerrors, response) => {
                                response.should.have.status(200);
                                done();
                            });
                    });
            });
    });

    it('Should return status 200 retrieving loan history', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send({
                email: 'quickcredit@yahoo.com',
                password: '123456',
            })
            .end((err, res) => {
                chai.request(app)
                    .post('/api/v1/loans')
                    .set({ email: 'admin@quickcredit.com', password: '1234567' })
                    .send({
                        tenor: '3',
                        amount: 250000.00,
                        installment: 9000.00,
                        balance: 360000,
                    })
                    .end((error, data) => {
                        chai.request(app)
                            .get(`/api/v1/loans/${data.body.data}/repayment`)
                            .set({ email: 'admin@quickcredit.com', password: '1234567' })
                            .end((rerrors, response) => {
                                response.should.have.status(200);
                                done();
                            });
                    });
            });
    });

});
