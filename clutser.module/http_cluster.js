import  Express ,  {  Request , Response  } from "express";
import './config/loadingEnv'
import './config/dotenv'
import './db/index'
import authRouter from "./routes/auth/auth";
import middlewares from "./middlewares/middleware.index";
import testRouter from "./routes/test/test.index";
import ownerRouter from "./routes/owner/owner.index";
import adminRouter from "./routes/admin/admin.index";
import masterRouter from "./routes/master/master.index";
import fs from 'fs'
import path from "path";
import customerRouter from "./routes/customer/customer.index";
import driverRouter from "./routes/driver/driver.index";
import { AESSecurtiyEncryption } from "./config/encryption";
import cluster from "cluster";
import os from 'os'
let app = Express()

let port =  process.env.PORT  || 4000  
export let version:String =  process.env.VERSION || "v1" 

middlewares.globalMiddlewares(app)  


if (cluster.isPrimary) {
    const cpuCount = os.cpus().length;
    console.log(`Primary PID: ${process.pid}`);
    console.log(`Starting ${cpuCount} workers...`);

    // Fork workers
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    // Restart worker if crashed
    cluster.on("exit", (worker) => {
        console.log(`❌ Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });

} else {
       // Worker process
    // const app = Express();

    // Apply global middlewares
    middlewares.globalMiddlewares(app);

    // Routes
    app.use(`/${version}/auth`, AESSecurtiyEncryption, authRouter);
    app.use(`/${version}/owner`, AESSecurtiyEncryption, ownerRouter);
    app.use(`/${version}/customer`, AESSecurtiyEncryption, customerRouter);
    app.use(`/${version}/test`, AESSecurtiyEncryption, testRouter);
    app.use(`/${version}/admin`, AESSecurtiyEncryption, adminRouter);
    app.use(`/${version}/master`, AESSecurtiyEncryption, masterRouter);
    app.use(`/${version}/driver`, AESSecurtiyEncryption, driverRouter);

    // Initialize uploads folder
    const uploadDir = path.join(__dirname, './assets/uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    app.listen(port, () => {
        console.log(`Worker PID ${process.pid} started server at port ${port}`);
    });
}


// intialise uploads  folder 
let uploadDir =  path.join(__dirname , './assets/uploads')
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir , {
      recursive:true
    });
  }

// health check : https://swiftcab-api.365itsolution.com/v1/test/status