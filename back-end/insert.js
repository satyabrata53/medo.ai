const mongoose = require('mongoose');
const { Medicine, Symptom } = require('./models/helthModel'); // Adjust path

const uri = 'mongodb+srv://jena23669:satya1234@helthdb.2mxeh.mongodb.net/helthdb?retryWrites=true&w=majority';

async function seedDatabase() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    // Insert test medicine
    await Symptom.create(
            {
              "name": "Fever",
              "probableDiseases": ["Influenza", "Malaria", "COVID-19", "Typhoid"],
              "type": "symptom"
            },
            {
              "name": "Cough",
              "probableDiseases": ["Common Cold", "Bronchitis", "COVID-19", "Pneumonia"],
              "type": "symptom"
            },
            {
              "name": "Headache",
              "probableDiseases": ["Migraine", "Tension Headache", "Sinusitis", "COVID-19"],
              "type": "symptom"
            },
            {
              "name": "Nausea",
              "probableDiseases": ["Gastroenteritis", "Food Poisoning", "Pregnancy", "Liver Disease"],
              "type": "symptom"
            },
            {
              "name": "Vomiting",
              "probableDiseases": ["Gastroenteritis", "Food Poisoning", "Pregnancy", "Brain Injury"],
              "type": "symptom"
            },
            {
              "name": "Fatigue",
              "probableDiseases": ["Chronic Fatigue Syndrome", "Anemia", "Hypothyroidism", "COVID-19"],
              "type": "symptom"
            },
            {
              "name": "Chest Pain",
              "probableDiseases": ["Angina", "Myocardial Infarction", "Gastroesophageal Reflux Disease (GERD)", "Pneumonia"],
              "type": "symptom"
            },
            {
              "name": "Shortness of Breath",
              "probableDiseases": ["Asthma", "COPD", "COVID-19", "Heart Failure"],
              "type": "symptom"
            },
            {
              "name": "Dizziness",
              "probableDiseases": ["Vertigo", "Low Blood Pressure", "Dehydration", "Anemia"],
              "type": "symptom"
            },
            {
              "name": "Abdominal Pain",
              "probableDiseases": ["Appendicitis", "Gastritis", "Gallstones", "IBS (Irritable Bowel Syndrome)"],
              "type": "symptom"
            },
            {
              "name": "Sore Throat",
              "probableDiseases": ["Pharyngitis", "Tonsillitis", "Common Cold", "COVID-19"],
              "type": "symptom"
            },
            {
              "name": "Rash",
              "probableDiseases": ["Chickenpox", "Measles", "Eczema", "Allergic Reaction"],
              "type": "symptom"
            },
            {
              "name": "Joint Pain",
              "probableDiseases": ["Arthritis", "Rheumatoid Arthritis", "Osteoarthritis", "Gout"],
              "type": "symptom"
            },
            {
              "name": "Sweating",
              "probableDiseases": ["Hyperhidrosis", "Fever", "Thyroid Disorder", "Anxiety"],
              "type": "symptom"
            },
            {
              "name": "Swollen Lymph Nodes",
              "probableDiseases": ["Infection", "Lymphoma", "Tuberculosis", "Mononucleosis"],
              "type": "symptom"
            },
            {
              "name": "Loss of Appetite",
              "probableDiseases": ["Gastrointestinal Disorders", "Depression", "Anorexia Nervosa", "Cancer"],
              "type": "symptom"
            },
            {
              "name": "Weight Loss",
              "probableDiseases": ["Hyperthyroidism", "Diabetes", "Cancer", "Infections"],
              "type": "symptom"
            },
            {
              "name": "Blurred Vision",
              "probableDiseases": ["Diabetes", "Cataracts", "Glaucoma", "Macular Degeneration"],
              "type": "symptom"
            },
            {
              "name": "Back Pain",
              "probableDiseases": ["Muscle Strain", "Herniated Disc", "Osteoarthritis", "Kidney Stones"],
              "type": "symptom"
            },
            {
              "name": "Insomnia",
              "probableDiseases": ["Insomnia", "Anxiety", "Depression", "Sleep Apnea"],
              "type": "symptom"
            },
            {
              "name": "Diarrhea",
              "probableDiseases": ["Gastroenteritis", "Food Poisoning", "IBS", "Irritable Bowel Disease (IBD)"],
              "type": "symptom"
            },
            {
              "name": "Constipation",
              "probableDiseases": ["IBS", "Hypothyroidism", "Colon Cancer", "Dehydration"],
              "type": "symptom"
            },
            {
              "name": "Swelling",
              "probableDiseases": ["Edema", "Kidney Disease", "Heart Failure", "Liver Disease"],
              "type": "symptom"
            },
            {
              "name": "Numbness",
              "probableDiseases": ["Neuropathy", "Multiple Sclerosis", "Stroke", "Vitamin B12 Deficiency"],
              "type": "symptom"
            }
          
    );

    // Insert test symptom
    await Medicine.create([
        {
          "name": "Paracetamol",
          "dosage": "500mg",
          "sideEffects": ["Nausea", "Rash", "Liver damage (in excessive dosage)"],
          "precautions": ["Avoid alcohol", "Do not exceed recommended dosage"],
          "interactions": ["Warfarin", "Chloramphenicol"],
          "type": "medicine"
        },
        {
          "name": "Aspirin",
          "dosage": "75mg",
          "sideEffects": ["Gastric irritation", "Nausea", "Allergic reactions"],
          "precautions": ["Avoid in case of gastric ulcers", "Take with food to avoid stomach upset"],
          "interactions": ["Methotrexate", "Heparin"],
          "type": "medicine"
        },
        {
          "name": "Ibuprofen",
          "dosage": "200mg",
          "sideEffects": ["Headache", "Dizziness", "Stomach pain"],
          "precautions": ["Avoid in case of kidney disease", "Take with food"],
          "interactions": ["Lithium", "Methotrexate"],
          "type": "medicine"
        },
        {
          "name": "Ciprofloxacin",
          "dosage": "500mg",
          "sideEffects": ["Nausea", "Diarrhea", "Dizziness"],
          "precautions": ["Take with plenty of water", "Avoid sun exposure"],
          "interactions": ["Antacids", "Theophylline"],
          "type": "medicine"
        },
        {
          "name": "Amoxicillin",
          "dosage": "500mg",
          "sideEffects": ["Rash", "Nausea", "Vomiting"],
          "precautions": ["Take at regular intervals", "Do not stop the course prematurely"],
          "interactions": ["Methotrexate", "Probenecid"],
          "type": "medicine"
        },
        {
          "name": "Metformin",
          "dosage": "500mg",
          "sideEffects": ["Stomach upset", "Diarrhea", "Lactic acidosis (rare)"],
          "precautions": ["Monitor kidney function", "Take with food to avoid stomach upset"],
          "interactions": ["Insulin", "Cimetidine"],
          "type": "medicine"
        },
        {
          "name": "Losartan",
          "dosage": "50mg",
          "sideEffects": ["Dizziness", "Fatigue", "Elevated potassium levels"],
          "precautions": ["Monitor blood pressure regularly", "Avoid potassium supplements"],
          "interactions": ["Diuretics", "Lithium"],
          "type": "medicine"
        },
        {
          "name": "Loratadine",
          "dosage": "10mg",
          "sideEffects": ["Drowsiness", "Dry mouth", "Headache"],
          "precautions": ["Do not exceed recommended dose", "Avoid alcohol"],
          "interactions": ["Cimetidine", "Erythromycin"],
          "type": "medicine"
        },
        {
          "name": "Cetirizine",
          "dosage": "10mg",
          "sideEffects": ["Drowsiness", "Dry mouth", "Headache"],
          "precautions": ["Avoid alcohol", "Use caution while driving"],
          "interactions": ["Theophylline", "Alcohol"],
          "type": "medicine"
        },
        {
          "name": "Metoprolol",
          "dosage": "50mg",
          "sideEffects": ["Fatigue", "Dizziness", "Cold extremities"],
          "precautions": ["Monitor heart rate and blood pressure", "Do not suddenly stop taking"],
          "interactions": ["Verapamil", "Digoxin"],
          "type": "medicine"
        },
        {
          "name": "Hydrochlorothiazide",
          "dosage": "25mg",
          "sideEffects": ["Dizziness", "Electrolyte imbalance", "Increased urination"],
          "precautions": ["Monitor potassium levels", "Avoid dehydration"],
          "interactions": ["Lithium", "Corticosteroids"],
          "type": "medicine"
        },
        {
          "name": "Furosemide",
          "dosage": "20mg",
          "sideEffects": ["Dizziness", "Dehydration", "Low blood pressure"],
          "precautionPantoprazoles": ["Monitor electrolytes", "Avoid rapid standing"],
          "interactions": ["Aminoglycosides", "Digoxin"],
          "type": "medicine"
        },
        {
          "name": "Diphenhydramine",
          "dosage": "25mg",
          "sideEffects": ["Drowsiness", "Dry mouth", "Dizziness"],
          "precautions": ["Do not operate heavy machinery", "Avoid alcohol"],
          "interactions": ["Alcohol", "Monoamine oxidase inhibitors (MAOIs)"],
          "type": "medicine"
        },
        {
          "name": "Diazepam",
          "dosage": "5mg",
          "sideEffects": ["Drowsiness", "Fatigue", "Memory impairment"],
          "precautions": ["Do not mix with alcohol", "Avoid sudden discontinuation"],
          "interactions": ["Cimetidine", "Opioids"],
          "type": "medicine"
        },
        {
          "name": "Alprazolam",
          "dosage": "0.5mg",
          "sideEffects": ["Drowsiness", "Dizziness", "Memory problems"],
          "precautions": ["Avoid driving", "Do not exceed prescribed dose"],
          "interactions": ["Cimetidine", "Alcohol"],
          "type": "medicine"
        },
        {
          "name": "Prednisolone",
          "dosage": "10mg",
          "sideEffects": ["Increased appetite", "Weight gain", "Mood swings"],
          "precautions": ["Do not stop abruptly", "Monitor blood sugar levels"],
          "interactions": ["Ciclosporin", "Diuretics"],
          "type": "medicine"
        },
        {
          "name": "",
          "dosage": "40mg",
          "sideEffects": ["Headache", "Diarrhea", "Nausea"],
          "precautions": ["Take before meals", "Avoid alcohol"],
          "interactions": ["Warfarin", "Methotrexate"],
          "type": "medicine"
        },
        {
          "name": "Omeprazole",
          "dosage": "20mg",
          "sideEffects": ["Headache", "Diarrhea", "Nausea"],
          "precautions": ["Take before meals", "Avoid alcohol"],
          "interactions": ["Clopidogrel", "Warfarin"],
          "type": "medicine"
        },
        {
          "name": "Vitamin C",
          "dosage": "500mg",
          "sideEffects": ["Nausea", "Stomach cramps", "Diarrhea (high doses)"],
          "precautions": ["Take with food", "Avoid exceeding recommended dose"],
          "interactions": ["Chemotherapy drugs", "Warfarin"],
          "type": "medicine"
        }
      ]
      );

    console.log('Test data inserted');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting test data:', error);
  }
}

seedDatabase();
