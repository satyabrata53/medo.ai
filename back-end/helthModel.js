const mongoose = require('mongoose');

// Schema for the Medicines collection
const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Should include "medicine"
  dosage: { type: String },
  sideEffects: [String],
  precautions: [String],
  interactions: [String],
});

// Schema for the Symptoms collection
const symptomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Should include "symptom"
  probableDiseases: [String],
});

// Export models for both collections
const Medicine = mongoose.model('Medicine', medicineSchema, 'Medicines');
const Symptom = mongoose.model('Symptom', symptomSchema, 'Symptoms');

module.exports = { Medicine, Symptom };

