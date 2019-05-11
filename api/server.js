import express from 'express';
import { json, urlencoded } from 'body-parser';
<<<<<<< HEAD
import userRoute from './routes/user';
import loanRoute from './routes/loan';
||||||| merged common ancestors
import { loans, repayments } from './db/loans';
// import { users } from './db/Users';
import router, { users } from './routes/user';
=======
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316

<<<<<<< HEAD
||||||| merged common ancestors
const app = express();

const PORT = process.env.PORT || 4000;
=======
import userRoute from './routes/user';
import loanRoute from './routes/loan';
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

<<<<<<< HEAD
const PORT = process.env.PORT || 4000;
app.use(userRoute);
app.use(loanRoute);
app.use(json());
// app.use(router)
||||||| merged common ancestors
app.get('/', (res, req) => res.status(200).send({
    message: 'Well done champ your first endpoint is working.',
}));

app.use('/users', users);

app.get('/api/v1/loans', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'loans retrieved successfully',
        loans,
    });
});
app.get('/api/v1/repayments', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'repayments retrieved successfully',
        repayments,
    });
});

=======
const PORT = process.env.PORT || 4000;
app.use(userRoute);
app.use(loanRoute);
app.use(json());
>>>>>>> af93fe7da9c5e6a9df4597233edd31d1f40f7316
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on ${PORT}`);
});

export default app;