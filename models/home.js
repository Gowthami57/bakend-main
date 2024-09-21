const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subHeading: { type: String, required: true },
  image: { type: String, required: true }
});

const ClientFeedbackSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  image:{ type: String, required: true },
  feedback:{ type: String, required: true },
})

const HomeSchema = new mongoose.Schema({
  choosePlan: [SectionSchema],
  ourServices: [SectionSchema],
  ourWork: [SectionSchema],
  howItWorks: [SectionSchema],
  ourClients:[ClientFeedbackSchema]
});

module.exports = mongoose.model('Home', HomeSchema);
