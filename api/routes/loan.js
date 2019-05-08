/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import express from 'express';
import { newLoans, repaidLoan } from '../models/loans';
import { loans } from '../db/loans';

const router = express().Router();
/**
 * 
 * loan  application router
 */
router.post('/', (req, res) => {
    if (!req.body.email) {
        return res.status(404).send({
            success: 'false',
            message: 'email is required',
        });
    } if (!req.body.status) {
        return res.status(404).send({
            success: 'false',
            message: 'Pending',
        });
    } if (!req.body.repaid) {
        return res.status(404).send({
            success: 'false',
            message: 0,
        });
    } if (!req.body.tenor) {
        return res.status(404).send({
            success: 'false',
            message: 'should mention tenor',
        });
    } if (!req.body.amount) {
        return res.status(404).send({
            success: 'false',
            message: 'Amount is required',
        });
    } if (!req.body.balance) {
        return res.status(404).send({
            success: 'false',
            // eslint-disable-next-line no-undef
            message: (amount - repaid),
        });
    } if (!req.body.payInstallment) {
        return res.status(404).send({
            success: 'false',
            message: true || false,
        });
    } if (!req.body.interest) {
        return res.status(404).send({
            success: 'false',
            message: 'interest is required',
        });
    }

    const loan = {
        loanId: newLoans.id,
        firstname: req.userData.firstname,
        lastname: req.userData.lastname,
        email: req.userData.email,
        tenor: req.body.tenor,
        amount: req.body.amount,
        status: req.bodyy.status,
        balance: req.body.balance,
        interest: req.body.interest,
    };

    newLoans.push(loan);

    return res.status(200).send({
        success: 'true',
        message: 'user created successfully',
        loan,
    });
});
/**
 * 
 * router of of a specific loan
 */
router.get('/', (req, res) => {
    const firstLoan = loans.findOne(loan => loan.id === parseInt(req.params.id, 10));
    if (!firstLoan) {
        return res.status(404).send({
            message: 'Loan not found',
        });
    }

});
/**
 * 
 * router of not fully repaid loans
 */
router.get('/', (req, res) => {
    const { repaidStat } = req.body;
    const repaidRes = !repaidStat(req.query.repaid);
    const loanData = loans.find(loans => loans.status === repaidStat
        && loans.repaid === repaidRes);
    if (!loanData) {
        res.status(404).send({
            success: 'false',
            message: 'loan not fully repaid',
        });
    }

    res.status(200).send({
        success: 'success',
        message: 'loan status retrieved success',
        loans,
    });
});

/**
 * 
 * router of fully paid loans
 */

router.get('/', (req, res) => {
    const { repaidStat } = req.body;
    const repaidRes = !repaidStat(req.query.repaid);
    const loanData = loans.find(loans => loans.status === repaidStat
        && loans.repaid === repaidRes);
    if (!loanData) {
        res.status(404).send({
            success: 'false',
            message: 'loan not fully repaid',
        });
    }

    res.status(200).send({
        success: 'success',
        message: 'loan status retrieved success',
        loans,
    });
});

/**
 * 
 * loan repayment history
 */

router.get('/', (req, res) => {
    const loanHistory = [];

});