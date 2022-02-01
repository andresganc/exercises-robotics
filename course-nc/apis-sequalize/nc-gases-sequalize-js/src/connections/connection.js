
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nc-server-db-mariadb-test-02', 'andres', 'M1m2d3a4a5***', {
    host: '10.10.1.15',
    dialect: 'mariadb'
  });