import express from 'express';
const app = express();

app.use(express.json());

let users = [];

// GET method
app.get('/users', (req, res) => {
    res.json(users);
});

// POST method
app.post('/users', (req, res) => {
    const newUser = {id: users.length + 1, ...req.body}; // Simple ID assignment
    users.push(newUser);
    res.status(201).json({message: 'User created', user: newUser});
});

// PUT method
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        Object.assign(user, req.body);
        res.json({message: 'User updated', user: user});
    } else {
        res.status(404).json({message: 'User not found'});
    }
});

// DELETE method
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        users = users.filter(user => user.id !== userId);
        res.json({message: 'User deleted'});
    }
    else {
        res.status(404).json({message: 'User not found'});
    }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
