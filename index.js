var More = require('more-css');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  return More.parse(source);
};