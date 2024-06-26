/**
 * @file This is the entrypoint file for starting up the bot. It is responsible for starting up the express routes,
 * and the mongoDB connection.
 * @author Ava Thorn
 */
/// <reference path="../types/index.d.ts" />

import express, { RequestHandler } from 'express';
import { Handler } from './handler';
import mongoose from 'mongoose';
import { GET } from './secrets';
import { LOGGER } from './logger';

let mongoUri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}`;
mongoUri += `:${GET('mongoPassword')}`;
mongoUri += `@mongo:27017/${process.env.MONGO_INITDB_DATABASE}`;
mongoUri += '?authSource=admin';

mongoose.connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

const APP = express();
// without the "as" expression here, there's a bug which yields the error: error TS2769: No overload matches this call
// https://letscodepare.com/blog/argument-of-type-nexthandlefunction-is-not-assignable-nodejs
APP.use(express.json() as RequestHandler);

const HOST = '0.0.0.0';
const PORT = 3000;
const HANDLER = new Handler();

APP.post('/api/v1/bot/', (request: express.Request, response: express.Response) => {
    LOGGER.http('Received');
    HANDLER.handle(request);
    response.send('OK');
});

APP.get('/api/v1/bot/healthcheck', (_: express.Request, response: express.Response) => {
    response.send('OK');
});

APP.listen(PORT, HOST, () => {
    if (process.env.NODE_ENV === 'production') {
        LOGGER.info('#########################################');
        LOGGER.info('# Server is running in PRODUCTION mode. #');
        LOGGER.info('#########################################');
    } else {
        LOGGER.info('Server is running in DEVELOPMENT mode.');
    }
    LOGGER.info(`server is listening on http://${HOST}:${PORT}`);
});