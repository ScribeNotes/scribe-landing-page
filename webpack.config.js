module.exports = {
  // ... other webpack configuration ...

  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
