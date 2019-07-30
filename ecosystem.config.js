module.exports = {
  apps: [{
    name: 'PetIO',
    script: 'electron .',
    args: '--color',
    ignore_watch: ["node_modules"],
    watch: true,
    env: {
      NODE_ENV: 'development'
    }
  }],
};
