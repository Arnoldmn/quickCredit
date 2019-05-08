import userModel from '../db/Users';
/**
 * 
 * @param {res} object
 * @param {req} object
 */

const Signup = (res, req) => {
    if (!req.body.email
        && !req.body.firstName
        && !req.body.lastName
        && !req.body.password
        && !req.body.address
        && !req.body.status
        && !req.body.isAdmin) {
        return res.status(404).send({
            message: 'All fields are required',
        });
    }

    const signup = userModel.Signup(req.body);
    return res.status(200).send(signup);
};
// sign user in if credentials are correct

const Signin = (res, req) => {
    if (!req.body.email && !req.body.password) {
        return res.status(404).send({
            message: 'Email or password invalid',
        });
    }
    const signin = userModel.Signin(req.body);
    return res.status(200).send(signin);

};

export {
    Signup,
    Signin,
};