
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import balanceRoutes from "./routes/balanceRoutes.js";
import settlementRoutes from "./routes/settlementRoutes.js";

const app = express();

// Allow both Vite frontend ports
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to SplitEase API"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/balances", balanceRoutes);
app.use("/api/settlements", settlementRoutes);

export default app;
