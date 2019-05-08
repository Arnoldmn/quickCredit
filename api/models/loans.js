import moment from 'moment';
import { loans, repayments } from '../db/loans';

class newLoans {
    constructor() {
        this.loans = [];
    }
    // loans table
    applyLoan(data) {
        const newLoan = {
            id: loans.length + 1,
            user: data.user || '',
            createdOn: moment.now(),
            repaid: data.repaid || true || false,
            // eslint-disable-next-line no-undef
            tenor: data.parseInt(tenor, 10),
            // eslint-disable-next-line no-undef
            amount: data.parseFloat(amount, 10.0),
            interest: data.parseFloat((this.amount * this.tenor * 5) / 100, 10),
            paymentInstallment: Math.floor(parseFloat((this.amount + this.interest) / this.tenor,
                10.0)),
            balance: parseFloat((this.amount + this.interest), 10.0),
        };

        this.loans.push(newLoan);
        return newLoan;
    }

}
class repaidLoan {
    constructor() {
        this.repaidLoan = [];
    }
    repaidLoans(data) {
        const loanRepaid = {
            id: repayments.length + 1,
            createdOn: moment.now(),
            // eslint-disable-next-line no-undef
            loanId: data.parseInt(loanId, 10),
            // eslint-disable-next-line no-undef
            amount: data.parseFloat(amount, 10.0),
        };
        this.loanRepaid.push(loanRepaid);
        return loanRepaid;
    }

}
export {
    newLoans,
    repaidLoan,
};