module.exports = {
  "app": [
    {
    "name": 'nodeDemo',
    'script': 'server.js',//用来启动的脚本
      // 启动项目所需要的环境变量
    "env": {
      "COMMON_VARIABLE":"true" //设置为true 可以在启动的时传入外部的变量进去
    },
    "env_production": {
      NODE_ENV: 'alpha',
    },
     },
  ],
  // 部署
  deploy: {
  alpha: {
    user: 'wuke',
      host: '120.79.92.83',
      ref: 'origin/master',
      repo: 'git@github.com:Lzumikonata/nodeDemo.git',
      path: '/home/wuke/server/nodeDemo',//要发布到服务器上哪个目录下面
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js --env alpha --name process-api',//发布之后执行的动作 执行开启或更新pm2运行的服务
      },
    },
  }