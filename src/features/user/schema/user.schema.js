import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Ensure password is at least 8 characters, contains one uppercase letter, one number, and does not contain the username
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(v);
      },
      message: props => 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and not contain the username!'
    }
  }
}, { timestamps: true });

// Custom validation for password to ensure it does not contain the username
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    if (this.password.includes(this.name)) {
      const err = new Error('Password should not contain the username.');
      return next(err);
    }
  }
  next();
});
