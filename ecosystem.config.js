module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'process-0',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
    
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'wuke',
      host : '120.79.92.83',
      ref  : 'origin/master',
      repo : 'git@github.com:Lzumikonata/nodeDemo.git',
      path : '/home/wuke/server/nodeDemo',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
