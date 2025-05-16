import app from './app';
import dotenv from 'dotenv';
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 2010;
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});
