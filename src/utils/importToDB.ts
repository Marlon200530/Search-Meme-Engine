import fs from 'fs/promises';
import Meme from '../models/memeModel'
import connectDB from './connectDB';
import Tesseract from 'tesseract.js';


const importToDB = async () : Promise<void> => {
    try {

        await connectDB();

        const memeDir : string[] = await fs.readdir('../memes');

        console.log(memeDir);


        

        for (const meme of memeDir) {

            const result : string = await recognizeText(`../memes/${meme}`);
            const textFile : string = result;
            const fileName = meme;

            await Meme.create({
                textFile: textFile,
                fileName: fileName
            });

            console.log("Importado co sucesso...");
        }
    } catch (error) {
        console.error(error);
    }
}



const recognizeText = async (imagePath: string) : Promise<string> => {
    try {
        const result = await Tesseract.recognize(
            imagePath,        
            'por',             // Idioma (aqui, portugues)
            {
                logger: (m) => console.log(m)  // Aqui você pode ver o progresso do OCR
            }
        );
        
        // Resultado do OCR
        console.log(result.data.text);  
        const textFile : string = result.data.text;

        return textFile;
    } catch (error) {
        console.error('Erro ao realizar OCR:', error);
        throw new Error('Erro em processar a imagem');
    }

};

const findAll = async () : Promise<void> => {
    try {
        const memes = await Meme.findAll();
        console.log(memes);
    } catch (e) {
        console.log(e);
    }
}



findAll();

// importToDB();