import express from "express";
import http from "node:http";
import associationRoute from "./router/associationRoute.js";
import programmeRouter from "./router/programmeRoute.js";
import responsableRouter from "./router/responsableRoute.js";
import cors from "cors";
import userRoute from "./router/userRoute.js";

const app = express();

// création d'un routeur
const router = express.Router();

// associer l'application au routeur
app.use(router);

router.use(express.json());

// autoriser les serveurs à dialoguer avec l'API
router.use(
	cors({
		origin: ["http://127.0.0.1:5173","http://localhost:5173", "http://localhost:3000"],
	}),
);

router.use("/association", associationRoute);
router.use("/programme", programmeRouter);
router.use("/responsable", responsableRouter);
router.use("/user", userRoute);


// router.get("/", (req, res) => res.send("singore"));


const server = http.createServer(app);

export default server;
