[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address
Entities( 1- User, 2- Email Providers)Guessing here- Not sure if the E-mail app would provide access to all E-mail providers or if the app only serves as a window that basically stores the URLs' of the users E-mail providers???? Going to assume it will serve as a window with a Logon Id and password requirement.

let user = {
  id: Number,
  Name:'string',
  eMailUserId: 'string',
  eMailpassword: 'string'
}
let eMailProviders = {
  id: Number,
  providerUrl; 'string',
  eMailUserId: 'string',
  eMailpassword: 'string'
},
let exampleUser = {
  id: 22,
  Name:'Ned Flanders',
  eMailUserId: 'OHolyNight',
  eMailpassword: 'thedevilsucks!',
 eMailProviders: [{
  id: 11, 
  appUserNaame: 'string',
  appUserPassword: 'string',
 }]
}




### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.
Entities(1- Listener, 2- Radio Stations)

let listener = {
 id: Number,
 name: 'string',
 favGenre: 'string'
 favDecade: number,
 podcast: 'string'
},
let Stations = {
  id: Number,
  timeZone: 'string',
  frequency: 'string',
  genre: 'string',
  broadcastSchedule: 'string'
},
let exampleListener = {
  id: 21,
  name: 'Wolfman Jack',
  favGenre: 'Rock-N-Roll',
  favDecade: 1965.1975,
  podcast: 'Whats' that?',
  stations: [{
   id: 12,
   timeZone: 'EST'
   frequency: '106.7',
   genre: 'Classic Rock',
   broadcastSchedule: 'All rock, all the time'
  }]
}

### 3. Rock Concert App
Entities(1- Patron, 2-Bands, 3-Venues)
let patron = {
 id: Number, 
 name: 'string',
 address: 'string',
 genre: 'string',
 favVenue: 'string'
}
let bands = {
  id: Number,
  name: 'string',
  genre; 'string',
  tourSched: 'string',
  openingAct: 'string'
}
let venue = {
  id: Number,
  name: 'string',
  address: 'string',
  phone: number,
  maxCap: number,
  parking: 'string',
  foodDrinks: 'string',
  showSched: 'string'
}
let examplePatron = {
 id: 33, 
 name: 'Ludlow lippowitz',
 address: '123 Oak Street',
 genre: 'Bluegrass',
 favVenue: 'North Dakota's Finest Warm Spot',
 bands: [{
  id: 99, 
  name: 'The Frog Stickers',
  genre; 'Bluegrass/Folk',
  tourSched: 'TBD- Fred's van is broke',
  openingAct: 'Wailin' Wendy',
}]
 venue: [{
  id: 73,
  name: 'Pattie's Heffer House',
  address: '1 Dirt Road',
  phone: 1239874567,
  maxCap: 30,
  parking: 'In the grass',
  foodDrinks: 'Beer and peanuts',
  showSched: 'Nope',
}]
}
 





### 4. Coffee To-Go App
Entities(1-Drinker, 2- Bar, 3-App)
let drinker = {
 id: Number,
 name:'string',
 address: 'string',
 phone: number,
 eMailAddress: 'string',
 creditCard: number,
}
let bar = {
  id: Number,
  name: 'string',
  address: 'string',
  phone: number,
  hoursOfOperation: 'string',
  driveThru: boolean,
  seating: boolean,
  food: 'string',
}
let app = {
  id: Number,
  userName: 'string',
  password: 'string',
  name:'string',
  address: 'string',
  phone: number,
  eMailAddress: 'string',
  creditCard: number,
  coffeePref: 'string'
}
let exampledrinker = {
 id: 61, 
 name:'DeDe Jones',
 address: '154 Walker St',
 phone: 15634527892,
 eMailAddress: 'djones1@email.com',
 creditCard: 37845672098098,
}
 bar: [{
  id: 371,
  name: 'Burn Yo Ass',
  address: '333 Avenue Ave',
  phone: 89374012373,
  hoursOfOperation: '5 to 9, Mon thru Fri',
  driveThru: false,
  seating: true,
  food: 'pasteries',
}],
 app: [{
  id: 78,
  userName: 'jonesD1',
  password: 'dtagumm2!',
  name:'DeDe Jones',
  address: '154 Walker St',
  phone: 15634527892,
  eMailAddress: 'djones1@email.com',
  creditCard: 37845672098098,
  coffeePref: 'Half-caf- Mocha-Latte, hold the ice, wipped cream'
}]
}

### 5. Team Tracker App
Entities(1- Fan, 2-Team)
let fan = {
  id: Number,
  name: 'string',
  address: 'string',
  favTeam: 'string'
}
let team = {
  id: Number,
  name:'string',
  gameDates:'string',
  teamRecord: 'string',
  playerStats: 'string',
  injuries: 'string',
  homeStadium: 'string',
  history: 't=string'
}
let exampleFan = {
  id: 922,
  name: 'Stan Penny',
  address: '8989 Fred St',
  favTeam: 'Da-Bears' 
},
team: [{
  id: 04,
  name:'Bears',
  gameDates:'Sept 4 thru Jan 2',
  teamRecord: '4-0',
  playerStats: 'Tons',
  injuries: 'Floyd Johnson, RB, Groin Pull',
  homeStadium: 'Soldier Field',
  history: 'Tons'
}]
}

### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?
-I had no issue establishing the relationship. I had a larger issue detirmining what parameters would differ between the two.-
-The ERD's we did last week helped some.


### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
