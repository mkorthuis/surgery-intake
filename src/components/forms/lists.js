var states = [{
  "name": "Alabama",
  "value": "AL"
}, {
  "name": "Alaska",
  "value": "AK"
}, {
  "name": "American Samoa",
  "value": "AS"
}, {
  "name": "Arizona",
  "value": "AZ"
}, {
  "name": "Arkansas",
  "value": "AR"
}, {
  "name": "California",
  "value": "CA"
}, {
  "name": "Colorado",
  "value": "CO"
}, {
  "name": "Connecticut",
  "value": "CT"
}, {
  "name": "Delaware",
  "value": "DE"
}, {
  "name": "District Of Columbia",
  "value": "DC"
}, {
  "name": "Federated States Of Micronesia",
  "value": "FM"
}, {
  "name": "Florida",
  "value": "FL"
}, {
  "name": "Georgia",
  "value": "GA"
}, {
  "name": "Guam",
  "value": "GU"
}, {
  "name": "Hawaii",
  "value": "HI"
}, {
  "name": "Idaho",
  "value": "ID"
}, {
  "name": "Illinois",
  "value": "IL"
}, {
  "name": "Indiana",
  "value": "IN"
}, {
  "name": "Iowa",
  "value": "IA"
}, {
  "name": "Kansas",
  "value": "KS"
}, {
  "name": "Kentucky",
  "value": "KY"
}, {
  "name": "Louisiana",
  "value": "LA"
}, {
  "name": "Maine",
  "value": "ME"
}, {
  "name": "Marshall Islands",
  "value": "MH"
}, {
  "name": "Maryland",
  "value": "MD"
}, {
  "name": "Massachusetts",
  "value": "MA"
}, {
  "name": "Michigan",
  "value": "MI"
}, {
  "name": "Minnesota",
  "value": "MN"
}, {
  "name": "Mississippi",
  "value": "MS"
}, {
  "name": "Missouri",
  "value": "MO"
}, {
  "name": "Montana",
  "value": "MT"
}, {
  "name": "Nebraska",
  "value": "NE"
}, {
  "name": "Nevada",
  "value": "NV"
}, {
  "name": "New Hampshire",
  "value": "NH"
}, {
  "name": "New Jersey",
  "value": "NJ"
}, {
  "name": "New Mexico",
  "value": "NM"
}, {
  "name": "New York",
  "value": "NY"
}, {
  "name": "North Carolina",
  "value": "NC"
}, {
  "name": "North Dakota",
  "value": "ND"
}, {
  "name": "Northern Mariana Islands",
  "value": "MP"
}, {
  "name": "Ohio",
  "value": "OH"
}, {
  "name": "Oklahoma",
  "value": "OK"
}, {
  "name": "Oregon",
  "value": "OR"
}, {
  "name": "Palau",
  "value": "PW"
}, {
  "name": "Pennsylvania",
  "value": "PA"
}, {
  "name": "Puerto Rico",
  "value": "PR"
}, {
  "name": "Rhode Island",
  "value": "RI"
}, {
  "name": "South Carolina",
  "value": "SC"
}, {
  "name": "South Dakota",
  "value": "SD"
}, {
  "name": "Tennessee",
  "value": "TN"
}, {
  "name": "Texas",
  "value": "TX"
}, {
  "name": "Utah",
  "value": "UT"
}, {
  "name": "Vermont",
  "value": "VT"
}, {
  "name": "Virgin Islands",
  "value": "VI"
}, {
  "name": "Virginia",
  "value": "VA"
}, {
  "name": "Washington",
  "value": "WA"
}, {
  "name": "West Virginia",
  "value": "WV"
}, {
  "name": "Wisconsin",
  "value": "WI"
}, {
  "name": "Wyoming",
  "value": "WY"
}];


var procedureSites =
  [{
    name: 'Left',
    value: 'left'
  }, {
    name: 'Right',
    value: 'right'
  }, {
    name: 'Both',
    value: 'both'
  }, {
    name: 'Not Applicable',
    value: 'notApplicable'
  }];

var docs = [{
  name: 'Murali Menon',
  value: '1'
}, {
  name: 'Farbod Hagigi',
  value: '2'
}];

var yesNo = [{
  name: 'Yes',
  value: 'yes'
}, {
  name: 'No',
  value: 'no'
}];

var gender = [{
  name: 'Male',
  value: 'male'
}, {
  name: 'Female',
  value: 'female'
}];

var insuranceTypes = [{
  value: 'insuranceCompany',
  name: 'Insurance Company'
}, {
  value: 'medicare',
  name: 'Medicare'
}, {
  value: 'medicaid',
  name: 'Medicaid'
}, {
  value: 'workersComp',
  name: 'Workers Compensation'
}, {
  value: 'medex',
  name: 'Medex'
}, {
  value: 'tricare',
  name: 'Tricare'
}, {
  value: 'selfPay',
  name: 'Self Pay'
}, {
  value: 'other',
  name: 'Other'
}];

var phoneTypes = [{
  name: 'Mobile',
  value: 'mobile'
}, {
  name: 'Home',
  value: 'home'
}, {
  name: 'Work / Other',
  value: 'work'
}];

var relationships = [{
  name: 'Mother',
  value: 'mother'
}, {
  name: 'Father',
  value: 'father'
}, {
  name: 'Son',
  value: 'son'
}, {
  name: 'Daughter',
  value: 'daughter'
}];

var feet = [{
  name: '0',
  value: '0'
}, {
  name: '1',
  value: '1'
}, {
  name: '2',
  value: '2'
}, {
  name: '3',
  value: '3'
}, {
  name: '4',
  value: '4'
}, {
  name: '5',
  value: '5'
}, {
  name: '6',
  value: '6'
}, {
  name: '7',
  value: '7'
}];

var inches = [{
  name: '0',
  value: '0'
}, {
  name: '1',
  value: '1'
}, {
  name: '2',
  value: '2'
}, {
  name: '3',
  value: '3'
}, {
  name: '4',
  value: '4'
}, {
  name: '5',
  value: '5'
}, {
  name: '6',
  value: '6'
}, {
  name: '7',
  value: '7'
}, {
  name: '8',
  value: '8'
}, {
  name: '9',
  value: '9'
}, {
  name: '10',
  value: '10'
}, {
  name: '11',
  value: '11'
}, {
  name: '12',
  value: '12'
}];

var smokerList = [{
  name: 'Never Smoked',
  value: 'never'
}, {
  name: 'Former Smoker',
  value: 'former'
}, {
  name: 'Current Smoker',
  value: 'current'
}];

var activity = [{
  name: 'High',
  value: 'high'
}, {
  name: 'Medium',
  value: 'medium'
}, {
  name: 'Low',
  value: 'low'
}];

function getNeckCircumferenceList() {
  const start = 6;
  const end = 25;
  const step = .25;
  var list = [];
  for (var i = start; i <= end; i = i + step) {
    list.push({
      name: i,
      value: i
    });
  }
  return list;
}

var neckCircumference = getNeckCircumferenceList();

module.exports = {
  states: states,
  procedureSites: procedureSites,
  docs: docs,
  yesNo: yesNo,
  gender: gender,
  insuranceTypes: insuranceTypes,
  phoneTypes: phoneTypes,
  relationships: relationships,
  feet: feet,
  inches: inches,
  smokerList: smokerList,
  activity: activity,
  neckCircumference: neckCircumference
}