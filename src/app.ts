
import express, {Application, Request, Response} from 'express';
import {KeyValueTypes} from './kvstorage';

import {StorageUnit} from './server';

const app: Application = express();
const port: number = 3003;

app.listen(port, () =>{
    console.log(`App is running on ${port}`);
});

app.use(express.json());

app.get('/retrievevalue/:key', (req: Request, res: Response) =>{
    if (!req.params.key){
        res.status(400).json({message: 'No such key.'});
    }
    const key = req.params.key
    const object = StorageUnit.retrieve(key);
    const value = object?.value;
    res.status(200).json({message:`The value is ${value}`});
});

app.get('/retrieveitem/:key', (req: Request, res: Response) =>{
    if (!req.params.key){
        res.status(400).json({message: 'No such key.'});
    }
    const key = req.params.key
    const object = StorageUnit.retrieve(key);
    const itemdetails = JSON.stringify(object);
    res.status(200).json({message:`The item details are ${itemdetails}`});
});

app.post('/add/:key', (req: Request, res: Response) => {
    if (!req.params.key){
        res.status(400).json({message: 'Needs a key.'});
    }
    const item: KeyValueTypes = {key: req.params.key, value: req.body.value, metadata:{createdBy: req.body.metadata.createdBy, createdAt: new Date()}}
    StorageUnit.add(item);
    res.status(200).json({message:'Item added'});
});

