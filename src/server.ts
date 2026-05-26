import express from 'express';
const app = express();
const port = 3000;

app.use(express.text( {type: '*/*'} ));
import { handler } from './handlers/orderHandler.js';

app.post('/orders', async (req,res) => {
    const event = { 
        body: req.body,
        headers: {
            'content-type': 'application/json'
        }
    };
    const response = await handler(event, {});
    res.status(response.statusCode).send(response.body);
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

