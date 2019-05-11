/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import express from 'express';
import loansController from '../controllers/loans';

const router = express.Router();
/**
 * 
 * loan routes
 */
router.get('/api/v1/loans', loansController.getAllLoans);
router.get('/api/v1/loans/:id', loansController.singleLoan);
router.get('/api/v1/unpaid/loans', loansController.unSettledLoan);
router.get('/api/v1/repaid/loans', loansController.fullySettledLoans);

router.get('/api/v1/loans/repayment', loansController.loanHistory);
router.post('/api/v1/loans/apply', loansController.applyLoan);
router.post('/api/v1/loans/:id/repayment', loansController.loanRepayment);
router.put('/api/v1/loans/:id', loansController.loanStatus);
router.patch('/api/v1/loans/:id', loansController.singleLoan);


<<<<<<< HEAD
export default router;
||||||| merged common ancestors
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
=======

export default router;
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316
