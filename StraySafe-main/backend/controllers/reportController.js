const asyncHandler = require('express-async-handler');
const Report = require('../models/Report');

// @desc    Create new report
// @route   POST /api/reports
// @access  Private
const createReport = asyncHandler(async (req, res) => {
  const { title, description, urgency = 'medium', tags = [], photos, location } = req.body;

  if (!title || !description || !photos || photos.length === 0 || !location) {
    res.status(400);
    throw new Error('Please provide all required fields including photos and location');
  }

  // reportedBy is from logged-in user
  const reportedBy = req.user._id;

  const report = new Report({
    title,
    description,
    urgency,
    tags,
    photos,
    location,
    reportedBy,
  });

  const createdReport = await report.save();
  res.status(201).json(createdReport);
});

// @desc    Get all reports
// @route   GET /api/reports
// @access  Public
const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({}).populate('reportedBy', 'name email');
  res.json(reports);
});

module.exports = { createReport, getReports };
