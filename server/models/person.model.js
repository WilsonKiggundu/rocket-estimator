import mongoose from 'mongoose';

module.exports = mongoose.model(
  'Person',
  mongoose.Schema(
    {
      firstname: {
        type: String,
        required: true,
      },

      lastname: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: [true, 'Email address is required'],
        validate: [
          (email) => {
            // eslint-disable-next-line no-useless-escape
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
          },
          'Email address is not valid',
        ],
      },

      role: {
        type: String,
        enum: ['Project Manager', 'Developer', 'Consultant'],
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
