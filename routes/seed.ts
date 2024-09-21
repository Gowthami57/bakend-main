const express = require('express');
const router = express.Router();
import Home from '../models/home';

// POST /api/home/seed (for seeding initial data)
router.post('/seed', async (req, res) => {
  const data = {
    choosePlan: [
        {
            heading: "Expert Design",
            image: "/images/Group 108.svg",
            subHeading: 'Our team of experienced architects ensures that every design is both functional and aesthetically pleasing.'
        },
        {
            heading:"Custom Structures",
            subHeading: "We provide customized structural designs that meet your specific needs and local building codes.",
            image: "/images/Group 110.svg"
        },
        {
            heading:"Smart Budgeting",
            subHeading: "Our budget estimation tool helps you plan your project finances with confidence and transparency.",
            image: "/images/Group 111.svg"
        },
        {
            heading:"Full Project Support",
            subHeading: "From concept to completion, we manage every aspect of your project, ensuring a seamless experience.",
            image: "/images/Group 111.svg"
        },
    ],
    ourServices: [
      { heading: 'Service 1', subHeading: 'Subheading 1', image: 'service1.jpg' },
      { heading: 'Service 2', subHeading: 'Subheading 2', image: 'service2.jpg' }
    ],
    ourWork: [
        {
            heading: "Modern Family Home",
            image: "/images/Group 108.svg",
            subHeading: 'A sleek, contemporary design that maximizes natural light and open space.'
        },
        {
            heading:"Eco-Friendly Villa",
            subHeading: "A sustainable home with innovative green technologies.",
            image: "/images/Group 110.svg"
        },
        {
            heading:"Urban Loft",
            subHeading: "A stylish, industrial space designed for modern city living.",
            image: "/images/Group 111.svg"
        },
    ],
    howItWorks: [
      { heading: 'How it Works 1', subHeading: 'Subheading 1', image: 'how1.jpg' },
      { heading: 'How it Works 2', subHeading: 'Subheading 2', image: 'how2.jpg' }
    ]
  };

  try {
    const home = new Home(data);
    await home.save();
    res.json({ message: 'Home data seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding data' });
  }
});

module.exports = router;
