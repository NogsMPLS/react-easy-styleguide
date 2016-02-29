var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var postcssImport = require('postcss-import');

module.exports = {
  "title": "React Easy Style Guide",
  "files": [
    "//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css",
    "example.css"
  ],
  "babelConfig": {
    "stage": 0
  },
  "webpackConfig": {
    module: {
      loaders: [
        {
          test: /button\.css$/,
          loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=ra_[name]__[local]!postcss'
        }
      ]
    },
    postcss (bundler) {
      return [
        postcssImport({
          addDependencyTo: bundler
        }),
        cssnext,
        autoprefixer
      ];
    }
  }
};