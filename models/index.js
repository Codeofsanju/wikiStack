const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging : true
});

const Page = db.define('pages', {
    title:  {
        type : Sequelize.STRING,
        allowNull : false,
        // validate : {
        //     isString : true
        // }
    },
    slug:  {
        type : Sequelize.STRING,
        allowNull : false,
        // validate : {
        //     isString : true
        // }
    },
    content:  {
        type : Sequelize.STRING,
        allowNull : false,
        // validate : {
        //     isString : true
        // }
    },
    status: Sequelize.BOOLEAN,
});

const User = db.define('users', {
    name:  {
        type : Sequelize.STRING,
        allowNull : false,
        // validate : {
        //     isString : true
        // }
    },
    email: {
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail : true,
        }
    }
});


module.exports = { db, Page, User }