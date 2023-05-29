const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const MainTable = sequelize.define("main", {
  document_No: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
});

const stuffTable = sequelize.define("stuff", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
// create foreign key for stuff table
stuffTable.belongsTo(MainTable);

// creating tables if not existed
// (async () => {
//   await sequelize.sync({ force: true });
//   console.log("Tables created!");
// })();

module.exports ={ MainTable,stuffTable};
