import routes from "express";

const router = routes.Router();

router.get("/", (req, res) => {
  res.send("Hello World from test 2 dilshan");
});

export default router;
