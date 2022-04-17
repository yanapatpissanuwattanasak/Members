import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const PROD_ENV = 'production';

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'members',
};

// FOR GOOGLE CLOUD SQL
if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === PROD_ENV) {
  config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: config.host,
  port: 3306,
  username: config.user,
  password: config.password,
  database: config.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = connectionOptions;
