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
        },
    },
    dateObserved: {
      type: String
    },
    illuminance: {
      type: String
    },
    temperature: {
      type: String
    },
    refDevice: {
      type: String
    }
});

module.exports = mongoose.model('Weatherobs', PostSchema);