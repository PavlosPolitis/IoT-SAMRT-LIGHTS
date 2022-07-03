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
    controlledProperty: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          }
        ]
      },
      value: {
        type: String
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
    }
});

module.exports = mongoose.model('Motions', PostSchema);