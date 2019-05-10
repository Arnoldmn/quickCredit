import { Server } from 'http';
import express from 'express';
import { json, urlencoded } from 'body-parser';
// import router from './routes/loan';
import router from './routes/user';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use(json());
// app.use(router);
app.use(router);
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on ${PORT}`);
});
export default Server;