import express from "express";
import { taskRouter } from "./controller/task.controller";
import { authentication } from "./controller/user.controller";
import { errorHandler } from "./middleware/error-handler";


const app = express();

app.use(express.json());
app.use("/api", authentication);

app.use("/api", taskRouter);

app.use(errorHandler);

export default app