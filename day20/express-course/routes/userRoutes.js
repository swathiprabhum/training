import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(['user1', 'user2'])
});

router.post('/create', (req, res) => {
    res.json({message: 'User created', user: req.body});
});

export default router;