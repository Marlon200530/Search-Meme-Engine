import express, {Request, Response} from 'express';
import {searchByText} from '../controllers/searchMemeController'

const router = express.Router();


router.route('/:query').get(searchByText);

router.route('/').get(async (req: Request, res: Response) : Promise<void> => {
    res.send('Welcome into my Meme Search engine API');
});


export default router;