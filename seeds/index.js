const mongoose = require('mongoose');
const cities=require('./cities')
const Campground = require('../models/campground');
const {places,descriptors}=require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
const sample=(array) => array[Math.floor(Math.random()*array.length)];


const seedDB=async () => {
    await Campground.deleteMany({});
    for(let i=0;i<300;i++){
   const random1000=Math.floor(Math.random() * 1000)
   const price=Math.floor(Math.random()*20)+10;
   const camp=new Campground ({
    author:'6819e47f049397f4e82cb86c',
    location:`${cities[random1000].city} , ${cities[random1000].state}`,
    title:`${sample(descriptors)} , ${sample(places)}`,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa amet accusamus quisquam nisi voluptatem minima velit illum inventore voluptate dolorem odit, repellat magni officia voluptatibus dolorum, mollitia ipsam, explicabo consequuntur.',
     price,
      geometry: {
    type: 'Point',
    coordinates: [cities[random1000].longitude,
      cities[random1000].latitude ]
  },

     images: [
      {
    url: 'https://res.cloudinary.com/duoqi6exy/image/upload/v1747830523/YelpCamp/ql24fedun3mv5ade2gay.jpg',
    filename: 'YelpCamp/ql24fedun3mv5ade2gay',
  },
  {
    url: 'https://res.cloudinary.com/duoqi6exy/image/upload/v1747830523/YelpCamp/qt73impijqyef4xmd6lc.jpg',
    filename: 'YelpCamp/qt73impijqyef4xmd6lc',
  }

      
      ]
    
   })
   await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})
