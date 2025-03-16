import sequelize from '../database';
import { DataTypes, Model } from 'sequelize';
import { Meme as MemeInterface } from '../interfaces/memeInterface';

class Meme extends Model<MemeInterface> implements MemeInterface {
    public id!: number;
    public fileName!: string;
    public textFile!: string;
}

Meme.init(
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        textFile: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: 'Meme',
        tableName: 'memes',
        timestamps: false
    }
);


export default Meme;