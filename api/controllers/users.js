/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import config from '../config/config';
import users from '../db/users';
/**
 * 
 * @param {res} object
 * @param {req} object
 */
class AccountsController {
    getAllUsers(req, res) {
        res.json({
            status: 200,
            data: users,
        });
    }
    signup(req, res) {
        const {
            email,
            firstname,
            lastname,
            password,
            address,
            status,
            isAdmin,
        } = req.body;

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            res.status(400).json({
                status: 400,
                error: 'User already exists',
            });
        }

        const user = {};

        // Increment user id for new user
        user.id = users.length + 1;
        user.email = email;
        user.firstname = firstname;
        user.lastname = lastname;
        user.password = password;
        user.address = address;
        user.status = 'pending';
        user.isAdmin = true || false;

        /* let role = user.status;

        if (user.isAdmin === true) {
            role = 'admin';
        }


        const token = jwt.sign({ id: user.id, role }, config.secret, {
            expiresIn: 86400, // expires in 24 hours
        }); */

        // user.token = token;
        users.push(user);
        jwt.sign({
            userId: users.id,
            email: users.email,
            password: users.password,
        }, 'secretkey', (error, token) => {
            if (error) {
                return res.status(401).json({
                    status: 401,
                    data: 'user already exits',
                });
            }
            user.token = token;
            const resp = {
                status: 200,
                data: {
                    token: user.token,
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    password: user.password,
                    address: user.address,
                    status: user.status,
                    isAdmin: user.isAdmin === true || false,
                },
            };

            res.json(resp);

        });

    }
    signin(req, res) {
        const { email, password } = req.body;

        // find user with provided credentials 
        const user = users.find(user => user.email === email
            && user.password === password);
        if (!user) {
            res.status(401).json({
                status: 401,
                token: null,
                auth: false,
                error: 'invalid username or password',
            });
        }
        /* let role = user.isAdmin;

        if (user.isAdmin === true) {
            role = 'admin';
        }
        const token = jwt.sign({ id: users.id, role }, config.JWT_KEY, {
            expiresIn: 86400, // expires in 24 hours
        }); */
        jwt.sign({
            userId: users.id,
            email: users.email,
            password: users.password,
        }, 'secretkey', (error, token) => {
            if (error) {
                return res.status(401).json({
                    status: 401,
                    data: 'user doesnt exit',
                });
            }
            user.token = token;
            const resp = {
                status: 200,
                data: {
                    token,
                    userId: users.id,
                    firstName: users.firstName,
                    lastname: users.lastName,
                },
            };
            res.json(resp);

        });

    }
    UserIsVerified(req, res) {
        const singleUser = users.find(user => user.email === req.params.email);
        if (!singleUser) {
            return res.json({
                status: 404,
                error: 'User not found',
            });
        }
        singleUser.status = req.body.status;
        const resp = {
            email: singleUser.email,
            firstname: singleUser.firstname,
            lastname: singleUser.lastname,
            address: singleUser.address,
            status: singleUser.status,
        };
        return res.status(200).json({
            status: 200,
            data: resp,
        });
    }

}

const accountsController = new AccountsController();
export default accountsController;