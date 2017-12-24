import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
}));

app.get('/', (req, res, next) => {
  res.status(200).send({ success: true });
  next();
});

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
}));

app.listen(PORT, () => {
  console.log('Server is listening...');
});