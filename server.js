import server from "./index.js";
import { connectToDb } from "./src/config/db.js";
const port = 8000
server.listen(port, async () => {
  await connectToDb();
  console.log(`server is running at port ${port}`);
});
