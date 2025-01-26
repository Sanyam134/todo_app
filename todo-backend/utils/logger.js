const logger = require("winston");
const winston = require("winston/lib/winston/config");

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: { service: 'user-service'},
    transports: [

      new winston.transports.Console,
      new winston.transports.File({filename: 'combined.log'}),
    ],
})    
  

  new winston.transports.Console(),
  module.exports = logger;
  