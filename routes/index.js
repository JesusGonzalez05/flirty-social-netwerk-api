const router = require('express').Router();
// const appRoutes = require('./appRoutes');
const userRoutes = require('./user-routes');

// router.use('/apps', appRoutes);
router.use('/users', userRoutes);

module.exports = router;