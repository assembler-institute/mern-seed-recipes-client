module.exports = {
  "src/**/*.js": [
    "npm run lint:js",
    "npm run lint:format",
    "npm run test:related",
  ],
  "*.{css,scss,html,md,json}": ["npm run lint:format"],
};
