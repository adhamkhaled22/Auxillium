export const json={
    "title": "ESI Form",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "name",
        "title": "Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "Phone",
        "title": "Phone",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "dep_name",
        "title": "Department Name",
        "isRequired": true,
        "choices": [
         "0",
         "1",
         "2"
        ]
       },
       {
        "type": "text",
        "name": "age",
        "title": "Age",
        "isRequired": true,
        "inputType": "number",
        "min": 18,
        "max": 108
       },
       {
        "type": "dropdown",
        "name": "insurance_status",
        "isRequired": true,
        "title": "Patient’s Insurance",
        
        "choices": [
         "0",
         "1",
         "2",
         "3",
         "4"
        ]
        
       },
       {
        "type": "dropdown",
        "name": "'arrivalmode'",
        "isRequired": true,
        "title": "Arrival Mode",
        "choices": [
         "0",
         "1",
         "2",
         "3",
         "4",
         "5",
         "6"
        ]
       },
       {
        "type": "dropdown",
        "name": "'previousdispo'",
        "isRequired": true,
        "title": "Previous disposer",
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
         "9"
        ]
       },
       {
        "type": "dropdown",
        "name": "'n_admissions'",
        "isRequired": true,
        "title": "Number of Admissions",
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
        "type": "text",
        "name": "'rbc_min'",
        "title": "Red blood cell minimum",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'rbc_median'",
        "title": "Red blood cell median",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'rdw_median'",
        "title": "Red blood cell distribution width (RDW) median value",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'triage_vital_hr'",
        "title": "Triage vital sign for heart rate",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'triage_vital_sbp'",
        "title": "Triage vital sign for systolic blood pressure",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'triage_vital_o2_device'",
        "title": "Smart Vital Signs Monitoring System for Patient Triage",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'spo2_min'",
        "title": "Minimum Oxygen saturation",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'resp_max'",
        "title": "Respiration maximum (Rapid breathing)",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'o2_device_max'",
        "title": "Vital Signs Monitoring System maximum",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "'meds_analgesics'",
        "title": "Analgesics Medications (painkillers)",
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "'meds_cardiacdrugs'",
        "title": "Cardic medications",
        "choicesFromQuestion": "'n_admissions'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "'meds_cardiovascular'",
        "title": " Cardiovascular Medications",
        "choicesFromQuestion": "'n_admissions'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "'meds_diuretics'",
        "title": "Diuretics (Water Pills)",
        "choicesFromQuestion": "'meds_cardiacdrugs'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "'meds_elect/caloric/h2o'",
        "title": "Elect/Caloric/H2o",
        "choicesFromQuestion": "'meds_diuretics'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "text",
        "name": "'meds_gastrointestinal'",
        "title": "Gastrointestinal Medications"
       },
       {
        "type": "dropdown",
        "name": "'meds_vitamins'",
        "title": "Vitamins and Supplements",
        "choicesFromQuestion": "'meds_elect/caloric/h2o'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "'cc_abdominalpain'",
        "title": "Abdominal Pain",
        "choices": [
         "0",
         "1",
         "2"
        ]
       },
       {
        "type": "dropdown",
        "name": "'cc_shortnessofbreath'",
        "title": " Shortness of Breath",
        "choicesFromQuestion": "'cc_abdominalpain'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        "type": "dropdown",
        "name": "'cc_suicidal'",
        "title": "Suicidal ",
        "choicesFromQuestion": "'cc_abdominalpain'",
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       }
      ]
     }
    ]
   }
