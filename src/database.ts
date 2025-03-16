import {Sequelize} from 'sequelize';
import { dbPath } from './config/dbPath';


console.log(dbPath);


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
});



export default sequelize;