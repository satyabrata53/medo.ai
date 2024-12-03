const { Medicine, Symptom } = require('./helthModel');

exports.getHealthInfo = async (req, res) => {
  const { query } = req.body;

  try {
    // Search in Medicines collection
    const medicineRecord = await Medicine.findOne({ name: new RegExp(query, 'i') });
    if (medicineRecord) {
      return res.json({
        success: true,
        type: 'medicine',
        data: {
          name: medicineRecord.name,
          dosage: medicineRecord.dosage || '',
          sideEffects: medicineRecord.sideEffects || [],
          precautions: medicineRecord.precautions || [],
          interactions: medicineRecord.interactions || [],
        },
      });
    }

    // Search in Symptoms collection
    const symptomRecord = await Symptom.findOne({ name: new RegExp(query, 'i') });
    if (symptomRecord) {
      return res.json({
        success: true,
        type: 'symptom',
        data: {
          name: symptomRecord.name,
          probableDiseases: symptomRecord.probableDiseases || [],
        },
      });
    }

    // If no match is found
    return res.json({ success: false, message: 'No data found for the given query' });
  } catch (error) {
    console.error('Error processing health query:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


