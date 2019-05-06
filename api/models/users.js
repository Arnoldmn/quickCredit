import moment from 'moment';
import uuid from 'uuid';

class Users {
    // constructor class
    constructor() {
        this.users = [];
    }
    // users table
    signup(data) {
        const newUsers = {
            id: uuid.v4,
            email: data.email || '',
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            password: data.password.password || '',
            address: data.address || '',
            status: data.status || '',
            isAdmin: data.isAdmin || true || false,

        };
        this.users.push(newUsers);
        return newUsers;
    }

}

class Loans {
    constructor() {
        this.loans = [];
    }
    // loans table
    applyLoan(data) {
        const newLoans = {
            id: uuid.v4,
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

        this.loans.push(newLoans);
        return newLoans;
    }

}

class RepaidLoan {
    constructor() {
        this.repaidLoan = [];
    }
    repaidLoans(data) {
        const loanRepaid = {
            id: uuid,
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

module.export = {
    Users,
    Loans,
    RepaidLoan,
};
