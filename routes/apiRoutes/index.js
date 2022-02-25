const router = require('express').Router();

// npm package for giving each note a unique id
// https://www.npmjs.com/package/uuid
const { v4: uuidv4 }  = require('uuid');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/api/notes', (req, res) => {

});

router.delete('/api/notes/:id', (req, res) => {
    
})

module.exports = router;