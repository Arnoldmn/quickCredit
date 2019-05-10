/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

import isAdmin from './check-auth';

exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const adminData = jwt.verify(token, 'superscretkey');
        if (isAdmin(adminData.isAdmin)) return next();
        return res.json({ status: 404, error: 'You are not an admin' });
    } catch (error) {
        res.json({ status: 404, error: `${error}, Athentication fail` });
    }
};