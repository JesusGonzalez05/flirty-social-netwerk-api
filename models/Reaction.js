const { Schema, model } = require('mongoose');


const reactionSchema = new Schema (
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

        },
        reactionBody:{
            type: String, 
            required: true,
            maxlength: 280
   
        },
        username: {
            type: String, 
            required: true,

        },
        createAt: {
            type: Date, 
            default: Date.now
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }

);

module.exports = reactionSchema;