const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  lat: Number,
  lng: Number,
  address: String,
});

const reportSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    urgency: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium',
    },
    tags: [String],
    photos: [String],
    location: locationSchema,
    status: {
      type: String,
      enum: ['reported', 'in-progress', 'resolved'],
      default: 'reported',
    },
    reportedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
