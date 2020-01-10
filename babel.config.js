module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "env": {
      "development": {
        "plugins": ["@babel/transform-react-jsx-source", "inline-dotenv"]
      }
    },

    "plugins": [["inline-dotenv", {
      unsafe: true
    }]]
  };
};