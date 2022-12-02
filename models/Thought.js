const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText : {
            type: String, 
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280

        },
        createAt: {
            type: Date, 
            default: Date.now
        },
        username: {
            type: String, 
            required: true,
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }

);

// Create a virtual schema `reactionCount` that gets the amount of friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.Reaction.length;
});
  
// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
