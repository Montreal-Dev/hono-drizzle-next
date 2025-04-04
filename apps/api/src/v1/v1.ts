import createV1App from "./createApp";
import { demoRoute } from "./routes/demo.route";

// @ROUTE /v1/..
const v1 = createV1App()
  .basePath("/v1")
  .route("/demo", demoRoute)

export default v1;
