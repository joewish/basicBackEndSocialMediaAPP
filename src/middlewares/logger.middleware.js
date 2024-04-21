// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";
import {customErrorHandler} from "./errorHandler.js";
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log',level: 'error'}),
    new winston.transports.File({ filename: 'combined.log',level:'info' })
  ]
});
export const errorLoggerMiddleware = async (err, req, res, next) => {
  const timestamp = new Date().toString();
    const reqUrl = req.originalUrl;
    const reqBody = JSON.stringify(req.body)
    if(err){
      if(err instanceof customErrorHandler) {
        logger.error(`timestamp: ${timestamp},request Url: ${reqUrl},error message:${err.message}`);
        next();
        }else{
          logger.error(`timestamp: ${timestamp},request Url: ${reqUrl},error message:Oops! Something went wrong... Please try again later!`);
          next();
      }
    }else{
      logger.info(`timestamp: ${timestamp},request Url: ${reqUrl},message:${reqBody}`)
    }
  
};
export const loggerMiddleware = async ( req, res, next) => {
  const timestamp = new Date().toString();
    const reqUrl = req.originalUrl;
    const reqBody = JSON.stringify(req.body)
      logger.info(`timestamp: ${timestamp},request Url: ${reqUrl},message:${reqBody}`)  
      next()
};
