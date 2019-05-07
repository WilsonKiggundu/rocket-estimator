export default {
  BASE_URL: 'http://localhost',
  PORT: process.env.PORT || 4000,
  database:
    process.env.ENV === 'Test'
      ? 'mongodb://localhost/estimator_test'
      : 'mongodb://localhost/estimator',
};
