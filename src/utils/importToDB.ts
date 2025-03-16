import fs from 'fs/promises';
import Tesseract from 'tesseract.js';


const importToDB = async () => {
    try {
        const memeDir = await fs.readdir('../memes');

        console.log(memeDir);


        await recognizeText(`../memes/${memeDir[0]}`)
    } catch (error) {
        console.error(error);
    }
}


// Função para reconhecer texto de uma imagem
const recognizeText = async (imagePath: string) : Promise<void> => {
    try {
        const result = await Tesseract.recognize(
            imagePath,         // Caminho ou URL da imagem
            'por',             // Idioma (aqui, inglês)
            {
                logger: (m) => console.log(m)  // Aqui você pode ver o progresso do OCR
            }
        );
        
        // Resultado do OCR
        console.log(result.data.text);  // Texto extraído da imagem


    } catch (error) {
        console.error('Erro ao realizar OCR:', error);
    }
};



importToDB();