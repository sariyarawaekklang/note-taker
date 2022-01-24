const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/api/notes', (req, res) => {
    
})

module.exports = router;