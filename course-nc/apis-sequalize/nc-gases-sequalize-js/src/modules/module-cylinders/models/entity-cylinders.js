

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mariadb::memory:");

const cyl_cylinders = sequelize.define("cyl_cylinders", {
    cylinder_id: {
        type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    update_at: {
        type: DataTypes.DATE,
    },
    serial: {
        type: DataTypes.DATE,
    }
  });


(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();