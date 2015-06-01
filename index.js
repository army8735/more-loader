var More = require('more-css');
var url = require('url');
var path = require('path');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  var config = url.parse(this.query, true).query;
  if(config.suffix) {
    More.suffix(config.suffix);
  }
  if(config.root) {
    More.root(config.root);
  }
  var more = new More();
  more.path(this.resource);
  if(config.configFile) {
    if(config.configFile.charAt(0) == '/') {
      more.configFile(config.configFile);
    }
    else {
      more.configFile(path.join(process.cwd(), config.configFile));
    }
  }
  if(config.type) {
    return more.parse(source, config.type);
  }
  return more.parse(source);
};