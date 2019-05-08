import express from 'express';
import { json, urlencoded } from 'body-parser';
import { loans, repayments } from './db/loans';
// import { users } from './db/Users';
import router, { users } from './routes/user';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(json());
app.use(urlencoded({ extended: true }));

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

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});

export default app;