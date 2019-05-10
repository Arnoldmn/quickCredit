/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

export default (isAdmin = []) => {

    if (typeof roles === 'string') {
        isAdmin = [isAdmin];
    }

    return (req, res, next) => {

        if (isAdmin.length && !isAdmin.includes(req.body.user.role)) {
            // user's role is not authorized
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // authorization successful
        next();
    };

};