"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("./server");
const app = (0, express_1.default)();
const port = 3003;
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});
app.use(express_1.default.json());
app.get('/retrievevalue/:key', (req, res) => {
    if (!req.params.key) {
        res.status(400).json({ message: 'No such key.' });
    }
    const key = req.params.key;
    const object = server_1.StorageUnit.retrieve(key);
    const value = object === null || object === void 0 ? void 0 : object.value;
    res.status(200).json({ message: `The value is ${value}` });
});
app.get('/retrieveitem/:key', (req, res) => {
    if (!req.params.key) {
        res.status(400).json({ message: 'No such key.' });
    }
    const key = req.params.key;
    const object = server_1.StorageUnit.retrieve(key);
    const itemdetails = JSON.stringify(object);
    res.status(200).json({ message: `The item details are ${itemdetails}` });
});
app.post('/add/:key', (req, res) => {
    if (!req.params.key) {
        res.status(400).json({ message: 'Needs a key.' });
    }
    const item = { key: req.params.key, value: req.body.value, metadata: { createdBy: req.body.metadata.createdBy, createdAt: new Date() } };
    server_1.StorageUnit.add(item);
    res.status(200).json({ message: 'Item added' });
});
