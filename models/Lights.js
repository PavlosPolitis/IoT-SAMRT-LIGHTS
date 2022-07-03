const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: Object,
    properties: {
      type: {
        type: String
      },
      coordinates: {
        type: Array,
        items: [
          {
            type: Number
          },
          {
            type: Number
          }
        ]
      }
    }
  },
  status: {
    type: String
  },
  illuminancelevel: [{ type: String }]
});

module.exports = mongoose.model('Lights', PostSchema);