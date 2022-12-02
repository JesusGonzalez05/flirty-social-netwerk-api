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
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
            },
          ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }

);

// Create a virtual schema `friendCount` that gets the amount of friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
  
// Initialize our User model
const User = model('user', postSchema);

module.exports = User;
