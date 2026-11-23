const express = require('express');
let router = express.Router();
const SponsorController = require('../controllers/sponsor.controller');
const AuthController = require('../controllers/auth.controller');

router.route('/')
    .get(AuthController.checkAuth, SponsorController.get)
    .post(AuthController.checkAuth, SponsorController.create);

router.route('/:id')
    .get(AuthController.checkAuth, SponsorController.getOne)
    .put(AuthController.checkAuth, SponsorController.update)
    .delete(AuthController.checkAuth, SponsorController.delete);

module.exports = router;