import express from "express";
import { json, urlencoded } from "body-parser";
import userRoute from "./routes/users";
import loanRoute from "./routes/loan";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 7000;
app.use(userRoute);
app.use(loanRoute);
//app.use(swaggerRoute);
app.use(json());

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

export default app;
