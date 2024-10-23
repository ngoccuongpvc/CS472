import dotenv from 'dotenv';

const configFound = dotenv.config();
if (configFound.error) {
    throw configFound.error;
}

export default {
    port: parseInt(process.env.PORT) || 3000,
    mongodb_uri: process.env.MONGODB_URI,
}