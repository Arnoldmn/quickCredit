const credit = {
    users: [
        {
            id: 1,
            email: 'user@quickcredit',
            firstname: 'John',
            lastname: 'Doe',
            password: '123456',
            address: 'Kigali 7',
            status: 'pending',
            isAdmin: false,
        },
        {
            id: 2,
            email: 'user@quickcredit.com',
            firstname: 'Red',
            lastname: 'Amiir',
            password: '123456',
            address: 'Kigali 7',
            status: 'pending',
            isAdmin: true,
        },
        {
            id: 1,
            email: 'user2@quickcreditcom',
            firstname: 'Jane',
            lastname: 'Doe',
            password: '123456',
            address: 'Kigali 7',
            status: 'pending',
            isAdmin: false,
        },
    ],

    loans: [
        {
            id: 1,
            email: 'user1@quickcredit.com',
            createdOn: '12-05-2018',
            status: 'pending',
            repaid: false,
            tenor: '3000',
            amount: '20000',
            paymentInstallment: '2000',
            balance: '18000',
            interest: '5%',
        },
        {
            id: 1,
            email: 'user2@quickcredit.com',
            createdOn: '12-05-2018',
            status: 'approved',
            repaid: true,
            tenor: '3000',
            amount: '20000',
            paymentInstallment: '2',
            balance: '0',
            interest: '5%',
        },
    ],

    repayments: [
        {
            id: 1,
            createdOn: '12-05-2018',
            loanId: 1,
            amount: '20000',
        },
        {
            id: 2,
            createdOn: '12-05-2018',
            loanId: 3,
            amount: '20000',
        },
    ],
};

export default credit;