import express from 'express';
const app = express();

app.use(express.json());

let products = [];

// GET method
app.get('/products', (req, res) => {
    res.json(products);
});

// GET method for single product
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({message: 'Product not found'});
    }
});

// POST method
app.post('/products', (req, res) => {
    const newProduct = {id: products.length + 1, 
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description
    };
    products.push(newProduct);
    res.status(201).json({message: 'Product created', product: newProduct});
});

app.listen(3000, () => {
    console.log('E-Commerce server is running on port 3000');
});

// PUT method
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (product) {
        Object.assign(product, req.body);
        res.json({message: 'Product updated', product: product});
    } else {
        res.status(404).json({message: 'Product not found'});
    }
});