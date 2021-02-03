module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi-cms'),
        username: env('DATABASE_USERNAME', 'strapi-cms'),
        password: env('DATABASE_PASSWORD', 'strapi-cms'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
