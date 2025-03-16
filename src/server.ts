import app from './app';


const PORT : string | number = process.env.PORT || 3000;

app.listen(PORT, async () :Promise<void> => {
    console.log(`App running at Port ${PORT}`);
});