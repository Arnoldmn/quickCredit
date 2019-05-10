import express from 'express';
import { json, urlencoded } from 'body-parser';
import userRoute from './routes/user';
import loanRoute from './routes/loan';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
app.use(userRoute);
app.use(loanRoute);
app.use(json());
// app.use(router)
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on ${PORT}`);
});

export default app;