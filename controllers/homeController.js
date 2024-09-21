const Home = require('../models/home');

// Controller for handling home page data
const getHomeData = async (req, res) => {
  console.log("home route")
  try {
    // Fetch all documents from the 'homes' collection
    const homeData = await Home.find(); // Using find() to retrieve all documents
    res.json(homeData);
    console.log(res,"response")
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getHomeData };
