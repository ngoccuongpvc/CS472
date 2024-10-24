import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import dictionaryRouter from './routes/dictionary.js';
import { specs, swaggerUi } from './swagger/swagger.js';
import './db/mongodb.js';

const app = express();
app.use(cors());

app.use('/dictionary', dictionaryRouter);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(config.port, () => {
    console.log(`Server is up and running on port ${config.port}`);
})
