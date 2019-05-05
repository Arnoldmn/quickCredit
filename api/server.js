
import express from 'express';
import { json, urlencoded } from 'body-parser';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (res, req) => {
    return res.status(200).send({
        message: 'Well done champ your first endpoint is working.'
    });
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});

export default app;