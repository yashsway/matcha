import faker from 'faker';
export default {
  login: {
    "email": "team76@gmail.com",
    "pass": "2019"
  },
  buyListings: [
    {
      "title": "Potatoes",
      "rate": "0.56",
      "unit": "lb",
      "stock": "15",
      "expiry": "2 days",
      "supplier": 1,
      "recommended": false
    },
    {
      "title": "Bok Choy",
      "rate": "1.02",
      "unit": "lb",
      "stock": "5",
      "expiry": "3 days",
      "supplier": 2,
      "recommended": false
    },
    {
      "title": "Red Peppers",
      "rate": "0.35",
      "unit": "lb",
      "stock": "30",
      "expiry": "1.5 days",
      "supplier": 1,
      "recommended": false
    },
    {
      "title": "Carrots",
      "rate": "0.25",
      "unit": "lb",
      "stock": "12",
      "expiry": "1.5 days",
      "supplier": 3,
      "recommended": false
    },
    {
      "title": "Broccoli",
      "rate": "0.70",
      "unit": "lb",
      "stock": "4",
      "expiry": "1 day",
      "supplier": 2,
      "recommended": false
    },
  ],
  users: [
    {
      "id": "1",
      "name": "John Doe",
      "businessName": "HoneyField Farms",
      "businessType": "farm",
      "email": "doe@gmail.com",
      "businessEmail": "doe@honeyfarms.com"
    },
    {
      "id": "2",
      "name": "Anna Kent",
      "businessName": "Kentico",
      "businessType": "restaurant",
      "email": "anna@gmail.com",
      "businessEmail": "anna@kentico.rest"
    },
    {
      "id": "3",
      "name": "Caroline Hall",
      "businessName": "Anchor Bar & Patio",
      "businessType": "restaurant",
      "email": "chall@gmail.com",
      "businessEmail": "inquiry@anchorbar.com"
    },
    {
      "id": "4",
      "name": "Sarah Chu",
      "businessName": "No Bowl Unturned",
      "businessType": "charity",
      "email": "schu@gmail.com",
      "businessEmail": "help@nobowl.org"
    },
    {
      "id": "5",
      "name": "Frank Fent",
      "businessName": "Hot Pepper Wings & Fries",
      "businessType": "restaurant",
      "email": "frank.fent@hotmail.com",
      "businessEmail": "sales@hotpepperfrank.com"
    },
  ]
};