const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username : {
            type: String, 
            required: true,
            trim: true,
            unique: true 

        },
        email:{
            type: String, 
            required: true,
            unique: true,
            match: /.+\@.+\..+/


        },
        thoughts: [
            {
                // reference the thought object id 
            }
        ],
        friends: [
            {
                // reference the user object id 
            }
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }

);

// Create a virtual property for friend count
// postSchema.virtual('commentCount').get(function () {
//     return this.comments.length;
//   });

// Initialize our Post model
const User = model('user', userSchema);

module.exports = User;
