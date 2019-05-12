import express from "express";
import usersController from "../controllers/users";
import loansController from "../controllers/loans";

const router = express.Router();

router.get("/api/v1/users", usersController.getAllUsers);
router.get("api/v1/loans/hostory", loansController.loanHistory);
router.post("/api/v1/auth/signup", usersController.signup);
router.post("/api/v1/auth/signin", usersController.signin);
router.put("/api/v1/users/:email/verify", usersController.UserIsVerified);

export default router;
