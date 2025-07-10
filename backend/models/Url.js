import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
<<<<<<< HEAD
    {
    originalUrl: { 
        type: String, 
        required: true 
    },
    shortUrl: { 
        type: String, 
        required: true, 
        unique: true 
    },
    clicks: { 
        type: Number, 
        default: 0 
    },
    // we now need to pass in the user id to the url model
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Password protection fields
    isPasswordProtected: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: false
    },
    passwordAttempts: {
        type: Number,
        default: 0
    },
    // Active/disabled status for the link
    isActive: {
        type: Boolean,
        default: true
    }
}, 
{
    timestamps: true
}
);

export default mongoose.model('Url', urlSchema); 
=======
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model('Url', urlSchema);
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
