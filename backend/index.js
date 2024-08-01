import express from 'express';
import cors from 'cors';

import products from './products.js';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our API");
}
);
app.get("/products", (req, res) => {
    res.send(products);
}
);

app.listen(PORT, console.log(`Srver running on port ${PORT}`));