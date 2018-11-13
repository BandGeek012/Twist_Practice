var express = require('express');
var router = express.Router();

// Require controller modules.
var participant_controller = require('../controllers/participantController');



/// Participant ROUTES ///

router.get('/', function(req, res) {
    res.render('admin', {title: 'Admin Page'});
    //res.redirect('/catalog');
});

// GET request for creating participant. NOTE This must come before route for id (i.e. display participant).
router.get('/participant/create', participant_controller.participant_create_get);

// POST request for creating participant.
router.post('/participant/create', participant_controller.participant_create_post);

// GET request to delete participant.
router.get('/participant/:id/delete', participant_controller.participant_delete_get);

// POST request to delete participant.
router.post('/participant/:id/delete', participant_controller.participant_delete_post);

// GET request to update participant.
router.get('/participant/:id/update', participant_controller.participant_update_get);

// POST request to update participant.
router.post('/participant/:id/update', participant_controller.participant_update_post);

// GET request for one participant.
router.get('/participant/:id', participant_controller.participant_detail);

// GET request for list of all participants.
router.get('/participants', participant_controller.participant_list);





module.exports = router;