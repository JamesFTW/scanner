
//Profile
{
  "first_name": "James",
  "last_name": "Andrews",
  "userId": "324423",
  "email": "bdaddyja@gmail.com",
  "password": "somehash",
  "profilePhoto": "link_to_photo"
}
//In order to query database, table name has to be surrounded by double quotes. "users"

//Invoice
{
  "partyId"(fk): "324423",
  "itemId"(fk): [
    "4324324234",
    "4324324234",
    "43243243242"
  ],
}

//Item
{
  "itemId": "4324324234",
  "userId"(fk): "324423"
  "price": 20.00,
  "tip": 2,
  "tax": .35,
  "quantity": 2,
  "username": "jamesftw"
}
