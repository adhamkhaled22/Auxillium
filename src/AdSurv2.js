export const json ={
    "title": "Addmission",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "Phone",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "Age",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "meds_gastrointestinal",
        "title": "Gastrointestinal Medications",
        "isRequired": true,
        "choices": [
         "0",
         "1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10",
         "11",
         "12"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_cardiovascular",
        "title": "Cardiovascular Medications",
        "isRequired": true,
        "choicesFromQuestion": "meds_gastrointestinal",
        "choices": [
         "1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10",
         "11",
         "12"
        ]
       },
       {
        "type": "dropdown",
        "name": "n_admissions",
        "title": "Number of Admissions",
        "isRequired": true,
        "choicesFromQuestion": "meds_cardiovascular",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_psychotherapeuticdrugs",
        "title": "Psychotropic Medication for Depression, Anxiety",
        "choicesFromQuestion": "meds_gastrointestinal",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_vitamins",
        "title": "Vitamins and Supplements",
        "choicesFromQuestion": "meds_cardiovascular",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_analgesics",
        "title": "Analgesics Medications ",
        "choicesFromQuestion": "meds_vitamins",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_antiasthmatics",
        "title": "Antiasthmatic Drugs",
        "choicesFromQuestion": "n_admissions",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_antihyperglycemics",
        "title": "Oral Antihyperglycemic Drugs",
        "choicesFromQuestion": "n_admissions",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_elect/caloric/h2o",
        "title": "Elect/Caloric/H2o",
        "choicesFromQuestion": "n_admissions",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "dep_name",
        "title": "Departments name",
        "choices": [
         "0",
         "1",
         "2"
        ]
       },
       {
        "type": "text",
        "name": "rdw_max",
        "title": "Red Cell Distribution Width",
        "inputType": "number",
        "max": 50
       },
       {
        "type": "text",
        "name": "triage_vital_rr",
        "title": "Triage vital sign for respiratory rate",
        "inputType": "number",
        "max": 50
       },
       {
        "type": "dropdown",
        "name": "meds_cardiacdrugs",
        "title": "Cardic medications",
        "choicesFromQuestion": "n_admissions",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_antiplateletdrugs",
        "title": "Antiplatelet Medications",
        "choicesFromQuestion": "n_admissions",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_diuretics",
        "title": "Diuretics (Water Pills)",
        "choicesFromQuestion": "meds_antiasthmatics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_cnsdrugs",
        "title": "Central Nervous System Depressants",
        "choicesFromQuestion": "meds_analgesics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "text",
        "name": "rdw_median",
        "title": "Red blood cell distribution width (RDW) median value",
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "previousdispo",
        "title": "Previous Dispose",
        "choicesFromQuestion": "meds_antiasthmatics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "text",
        "name": "rdw_min",
        "title": "Red blood cell distribution width (RDW) minimum value",
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "n_surgeries",
        "title": "Number of Surgeries",
        "choicesFromQuestion": "meds_antihyperglycemics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_unclassifieddrugproducts",
        "title": "Unclassified Drugs",
        "choicesFromQuestion": "meds_vitamins",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_eentpreps",
        "title": "Pre-exposure prophylaxis",
        "choicesFromQuestion": "meds_antiasthmatics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_antiarthritics",
        "title": "Antiarthritic Drugs",
        "choicesFromQuestion": "meds_gastrointestinal",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "meds_antibiotics",
        "title": "Antibiotics",
        "choicesFromQuestion": "meds_diuretics",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "text",
        "name": "triage_vital_temp",
        "title": "Triage vital sign for temperature",
        "inputType": "number"
       }
      ]
     }
    ]
   }

   