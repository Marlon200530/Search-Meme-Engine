import {Request, Response} from 'express';
import Meme from '../models/memeModel';
import {Op} from 'sequelize';

export const searchByText = async (req: Request, res: Response) : Promise<void | any> => {

    const {query} = req.params;
    console.log(query)

    try {
        const memes = await Meme.findAll({
            where: {
                textFile: {
                    [Op.like]: `%${query}%`
                }
            }
        });

        if (!memes) 
            return res.send(404).json({
                message: 'Not found!'
            });
        
        res.status(200).json({
            status: 'sucess',
            data: memes,
            results: memes.length
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'something went wrong'
        });
    }
    
}