const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
        reactions: {
    //  reaction schema 
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }

);