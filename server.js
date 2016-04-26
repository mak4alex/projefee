/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();


if (process.env.NODE_ENV === 'production') {
  const publicPath = express.static(path.join(__dirname, './public'));
  app.use('/public', publicPath);
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${port}`);
});
