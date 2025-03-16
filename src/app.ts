import express, {Request, Response, Express, Router} from "express";
import morgan from "morgan";
import routes from './routes/appRoutes';
import sequelize from "./database";


const app : Express = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/memes', routes);


(async () : Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Coneccao estabelicida com sucesso.');

        await sequelize.sync();
        console.log('Base de dados com sucesso');

    } catch (error) {
        console.error('Erro ao connectar a base de dados.');
    }
}
)();


export default app;