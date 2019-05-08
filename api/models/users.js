import moment from 'moment';
import uuid from 'uuid';
import db from '../db/Users';

class Users {
    // constructor class
    constructor() {
        this.users = [];
    }
    // users table
    signup(data) {
        const newUsers = {
            id: db.length + 1,
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


export default
    Users;
