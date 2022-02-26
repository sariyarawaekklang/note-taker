const router = require('express').Router();
// npm package for giving each note a unique id; https://www.npmjs.com/package/uuid
const { v4: uuidv4 }  = require('uuid');
const { createNote } = require('../../lib/notes');
const { note } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(note);
});

/*
router.get('/notes/:id', (req, res) => {
    const result =
    if (req.body) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } else {

    }
})
*/

module.exports = router;