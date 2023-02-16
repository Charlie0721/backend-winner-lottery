import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/numbers.routes'
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.listen(3000,()=>{

    console.log('servidor en puerto', 3000);
    
});