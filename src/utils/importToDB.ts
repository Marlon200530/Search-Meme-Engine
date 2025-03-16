import fs from 'fs/promises';
import Tesseract from 'tesseract.js';


const importToDB = async () : Promise<void> => {
    try {
        const memeDir = await fs.readdir('../memes');

        console.log(memeDir);


        await recognizeText(`../memes/${memeDir[0]}`)
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



importToDB();