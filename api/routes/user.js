/* eslint-disable consistent-return */
/* eslint-disable no-undef */

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userController from '../models/users';
import userModel from '../db/Users';


const router = express.Router();

/**
 * User can create an account
 */

router.post('/', (req, res) => {
    if (!req.body.email) {
        return res.status(404).send({
            success: 'false',
            message: 'email is required',
        });
    } if (!req.body.firstName) {
        return res.status(400).send({
            success: 'false',
            message: 'firstname is required',
        });
        // eslint-disable-next-line no-else-return
    } else if (!req.body.lastName) {
        return res.status(404).send({
            success: 'false',
            message: 'lastname is required',
        });
    } else if (!req.body.password) {
        return res.status(404).send({
            success: 'false',
            message: 'password is required',
        });
    } else if (!req.body.address) {
        return res.status(404).send({
            success: 'false',
            message: 'address is required',
        });
    } else if (!req.body.status) {
        return res.status(404).send({
            success: 'false',
            message: 'status is required',
        });
    } else if (!req.body.isAdmin) {
        return res.status(404).send({
            success: 'false',
            message: 'role is required',
        });
    }

    const user = {
        id: db.length + 1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hash(req.body.password),
        address: req.body.address,
        status: req.body.status,
        isAdmin: req.body.isAdmin,
    };

    db.push(user);

    return res.status(200).send({
        success: 'true',
        message: 'user created successfully',
        user,
    });
});
/**
 * User can sign in
 */
router.post('/signin', (res, req) => {
    Users.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).send({
                    message: 'Authentication failed.',
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).send({
                        message: 'Authentication failed',
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        // eslint-disable-next-line no-underscore-dangle
                        userId: user[0]._id,

                    }, process.env.JWT_KEy, {
                            expiresIn: '1h',
                        });
                    return res.status(200).send({
                        message: 'Authentication successful',
                        token,
                    });
                }
                res.status(401).send({
                    message: 'Authentication failed',
                });
            });
        })

        .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

export default router;