import express from "express";
const app = express();

app.use(express.json());

// app.post('/login', (req, res) => {
//     res.json(req.body);
// });

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.get('/about', (req, res) => {
//   res.send({page:'About Us'});
// });

// app.get('/users/:id', (req, res) => {
//   res.send({userId: req.params.id});    
// });

// app.get('/search', (req, res) => {
//   res.send(req.query);    
// });

// app.use((req, res, next) => {   
//     console.log(req.method, req.url);
//     next();
// }); 

import router from './routes/userRoutes.js';
app.use('/users', router);

app.use((req, res) => {   
    res.status(404).send({error: 'Not Found'});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});