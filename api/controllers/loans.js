/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable class-methods-use-this */
import userModel from '../db/users';
import loanModel from '../db/loans';

class LoansController {
    getAllLoans(req, res) {
        const { loans } = loanModel;
        res.status(200).json({
            success: 'true',
            message: 'All loans retrieved successfully.',
            loans,
        });
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * loan application 
     */
    applyLoan(req, res) {
        const { users } = userModel;
        const loanApplicant = users.find(_user => _user.userId === req.body.userId);

        const loan = {};

        loan.loanId = loanModel.loans.length + 1;
        loan.loanApplicant = userModel.email;
        loan.createdOn = new Date();
        loan.status = 'pending';
        loan.repaid = loanModel.repaid || true || false;
        loan.tenor = parseFloat(loanModel.tenor);
        loan.amount = parseFloat(loanModel.amount);
        loan.installment = parseFloat(loanModel.installment);
        loan.balance = parseFloat(loanModel.balance);
        loan.interest = (parseFloat(loanModel.balance) * 5) / 100;

        loan.applicant = loanApplicant.loanId;
        loanModel.loan.push(loan);

        const resp = {
            status: 200,
            data: {
                loanId: loan.loanId,
                email: userModel.email,
                createdOn: new Date(),
                status: loanApplicant.status,
                repaid: loan.repaid || true || false,
                tenor: parseFloat(loan.tenor),
                amount: parseFloat(loan.amount),
                installment: parseFloat(loan.installment),
                balance: parseFloat(loan.balance),
                interest: parseFloat(loan.interest),
            },
        };

        res.status(200).json(resp);
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * specific loan 
     */

    singleLoan(loanId) {
        this.find(loan => loan.loanId === loanId);

    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * unsettled loans 
     */

    unSettledLoan(req, res) {
        const statusReq = req.query.status;
        const repaidReq = !repaidReq(req.query.repaid);
        const info = loanModel.find(loan => loan.status === statusReq
            && loan.repaid === repaidReq);
        if (!info) {
            return res.json(404).send({
                status: 404,
                data: 'Loan already settled',
            });
        }

        return res.json({
            status: 200,
            data: 'Unsettled loan info',
            loanModel,
        });
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res
     * fully settled loans 
     */
    fullySettledLoans(req, res) {
        const statusReq = req.query.status;
        const repaidReq = !repaidReq(req.query.repaid);
        const info = loanModel.find(loan => loan.status === statusReq
            && loan.repaid === repaidReq);
        if (!info) {
            return res.json(404).send({
                status: 404,
                data: 'Loan not found',
            });
        }

        return res.json({
            status: 200,
            data: 'loan fully settled',
            loanModel,
        });
    }
    /**
     * 
     * @param {*} res 
     * @param {*} req 
     * Loan repayment endpoint
     */
    loanRepayment(res, req) {
        const { loans } = loanModel;
        const repaidLoan = loans.find(_loan => _loan.loanId === parseInt(req.params.loanId, 10));

        if (!repaidLoan) {
            return res.json({
                status: 404,
                data: 'loan not found',
            });
        }

        const loanRepaid = {};

        loanRepaid.Id = loans.length + 1;
        loanRepaid.createdOn = new Date();
        loanRepaid.amount = repaidLoan.amount;
        loanRepaid.monthlyInstall = parseFloat(repaidLoan.monthlyInstall);
        loanRepaid.amountPaid = parseFloat(repaidLoan.amountPaid);
        loanRepaid.balance = parseFloat(repaidLoan.balance);
        loanRepaid.userDetails = userModel;

        loanRepaid.push(loanRepaid);
        const resp = {
            status: 200,
            data: {
                loanId: loanRepaid.length + 1,
                email: userModel.email,
                amount: parseFloat(loanRepaid.amount),
                installment: parseFloat(loanRepaid.installment),
                balance: parseFloat(loanRepaid.balance),
                interest: parseFloat(loanRepaid.interest),
            },
        };

        res.status(200).json(resp);
    }
    /**
         * 
         * @param {*} res 
         * @param {*} req 
         * Loan history endpoint
         */
    loanHistory(req, res) {
        const loanHistory = {};
        loanRepayment.forEach((loan) => {
            if (loan.loanId === parseInt(req.params.id, 10)) {
                loanHistory.push(loan);
            }
        });
        res.json({
            status: 200,
            data: loanHistory,
        });
    }
    /**
         * 
         * @param {*} res 
         * @param {*} req 
         * Loan can be approved or rejected
         */
    loanStatus(req, res) {
        const { loanApplication } = req.params;
        const { loans } = loanModel;

        let loanIndex = loans.find(loan => loan.loanApplication === loanApplication);
        if (loanIndex < 0) {
            return res.json({
                status: 403,
                data: 'loan is not valid',
            });
        }
        loanIndex = req.body.status;
        res.json({
            status: 200,
            data: loanIndex,
        });
    }
}
const loansController = new LoansController();
export default loansController;