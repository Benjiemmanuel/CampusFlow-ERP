import app from "./app";
import { env } from "./config/env";
import * as database from "./database/connection";

console.log("Database Module:", database);

const startServer = async () => {
  try {
    await database.connectDB();

    app.listen(env.PORT, () => {
      console.log("=================================");
      console.log("🚀 CampusFlow ERP API Started");
      console.log(`🌍 Server: http://localhost:${env.PORT}`);
      console.log(`📦 Environment: ${env.NODE_ENV}`);
      console.log("=================================");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();