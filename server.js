import express from "express";
import cors from "cors";
import testRoutes1 from "./routes/testRoutes1.js";
import testRoutes2 from "./routes/testRoutes2.js";
import serverless from "serverless-http";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/test/one", testRoutes1);
app.use("/test/two", testRoutes2);

// This exports the handler for Lambda
export const handler = serverless(app);
