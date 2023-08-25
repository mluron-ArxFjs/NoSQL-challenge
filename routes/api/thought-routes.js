const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    postThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;