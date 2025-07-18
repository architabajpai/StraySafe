const express = require('express');
const router = express.Router();
const { createReport, getReports } = require('../controllers/reportController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/')
  .get(getReports)
  .post(protect, createReport);

module.exports = router;
