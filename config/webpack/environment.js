const { environment } = require('@rails/webpacker')

const webpack = require("webpack")

// bootstrap dependencies
environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

module.exports = environment
