// require modules
import dotenv from 'dotenv';
import fs from 'fs';

// config env
if (fs.existsSync('.env')) {
  console.log('Use .env file config ');
  dotenv.config({ path: '.env' });
} else {
  console.log('User .env.example file config');
  dotenv.config({ path: '.env.example' });
}

// export url
export const MONGO_URI = process.env['MONGODB_URI_LOCAL'];
