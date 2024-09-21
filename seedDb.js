const mongoose = require("mongoose");
const Home = require("./models/home"); // Adjust path if necessary

// MongoDB connection URI
const mongoURI = "mongodb+srv://planahome:planahome%40123@cluster0.234hm.mongodb.net/planahome?retryWrites=true&w=majority"
// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    seedDatabase(); // Call the seeding function once connected
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
async function seedDatabase() {
  const data = {
    choosePlan: [
      {
        heading: "Expert Design",
        image: "/images/Group 108.svg",
        subHeading:
          "Our team of experienced architects ensures that every design is both functional and aesthetically pleasing.",
      },
      {
        heading: "Custom Structures",
        subHeading:
          "We provide customized structural designs that meet your specific needs and local building codes.",
        image: "/images/Group 110.svg",
      },
      {
        heading: "Smart Budgeting",
        subHeading:
          "Our budget estimation tool helps you plan your project finances with confidence and transparency.",
        image: "/images/Group 111.svg",
      },
      {
        heading: "Full Project Support",
        subHeading:
          "From concept to completion, we manage every aspect of your project, ensuring a seamless experience.",
        image: "/images/Group 112.svg",
      },
    ],
    ourServices: [
      {
        heading: "Architectural Design",
        subHeading:
          "Innovative and practical designs that reflect your style and needs.",
        image: "images/architecturaldesign.svg",
      },
      {
        heading: "Structural Design",
        subHeading:
          "Tailored structural solutions ensuring safety and durability.",
        image: "images/structuraldesign.svg",
      },
      {
        heading: "Interiors",
        subHeading:
          "Creating beautiful and functional spaces that enhance your lifestyle.",
        image: "images/interiors.svg",
      },
      {
        heading: "Constructions",
        subHeading:
          "Reliable and efficient construction services to bring your vision to life.",
        image: "images/constructions.svg",
      },
    ],
    ourWork: [
      {
        heading: "Modern Family Home",
        image: "/images/FrontView.svg",
        subHeading:
          "A sleek, contemporary design that maximizes natural light and open space.",
      },
      {
        heading: "Eco-Friendly Villa",
        subHeading: "A sustainable home with innovative green technologies.",
        image: "/images/7K.svg",
      },
      {
        heading: "Urban Loft",
        subHeading:
          "A stylish, industrial space designed for modern city living.",
        image: "/images/prasadresidence.svg",
      },
    ],
    howItWorks: [
      {
        heading: "Consultation",
        subHeading:
          "We start by understanding your needs and vision through a detailed consultation.",
        image: "images/consultation.svg",
      },
      {
        heading: "Design",
        subHeading:
          "Our team creates custom architectural and structural designs tailored to your project.",
        image: "images/design.svg",
      },
      {
        heading: "Planning",
        subHeading:
          "We develop a comprehensive plan, including budget estimation and project timelines.",
        image: "images/planning.svg",
      },
      {
        heading: "Execution",
        subHeading:
          "Our team manages the project, ensuring every detail is executed to perfection.",
        image: "images/execution.svg",
      },
      {
        heading: "Handover",
        subHeading:
          "Upon completion, we hand over your dream home, ensuring your satisfaction with every aspect.",
        image: "images/handover.svg",
      },
    ],
    ourClients:[
      {
      name:"John & Sarah Doe",
      image:"/images/prasadresidence.svg",
      feedback:'“Plan a Home made our dream house a reality!The team was professional,attentive, and delivered beyond our expectations.”'
      },
      {
        name:"Emily & Michael Smith",
        image:"/images/prasadresidence.svg",
        feedback:'“Working with Plan a Home was a seamless experience. They understood our vision perfectly and transformed it into a stunning reality. Highly recommend!”'
        },
        {
          name:"David & Laura Johnson",
          image:"/images/prasadresidence.svg",
          feedback:'“The team at Plan a Home exceeded our expectations in every way. Their attention to detail and commitment to quality were evident from start to finish.”'
          }
    ]
  };

  try {
    const home = new Home(data);
    await home.save();
    console.log("Home data seeded successfully");
    mongoose.disconnect(); // Disconnect after seeding is done
  } catch (error) {
    console.error("Error seeding data", error);
    mongoose.disconnect();
  }
}
