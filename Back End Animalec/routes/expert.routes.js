const express = require('express');
let router = express.Router();
const ExpertController = require('../controllers/expert.controller');
const AuthController = require('../controllers/auth.controller');

router.route('/')
    .get(AuthController.checkAuth, ExpertController.get)
    .post(AuthController.checkAuth, ExpertController.create);

router.route('/:id')
    .get(AuthController.checkAuth, ExpertController.getOne)
    .put(AuthController.checkAuth, ExpertController.update)
    .delete(AuthController.checkAuth, ExpertController.delete);

module.exports = router;