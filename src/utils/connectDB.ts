import sequelize from "../database";

const connectDB = async () : Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Coneccao estabelicida com sucesso.');

        await sequelize.sync();
        console.log('Base de dados com sucesso');

    } catch (error) {
        console.error('Erro ao connectar a base de dados.');
    }
}

// connectDB();

export default connectDB;