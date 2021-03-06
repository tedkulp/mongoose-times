// Generated by CoffeeScript 1.6.2
(function() {
  var dateJSON, defaults;

  defaults = {
    created: "created",
    lastUpdated: "lastUpdated"
  };

  dateJSON = function(key) {
    var json;

    json = {};
    json[key] = Date;
    return json;
  };

  module.exports = function(schema, options) {
    var created, lastUpdated;

    created = options && options.created ? options.created : defaults.created;
    lastUpdated = options && options.lastUpdated ? options.lastUpdated : defaults.lastUpdated;
    schema.add(dateJSON(created));
    schema.add(dateJSON(lastUpdated));
    return schema.pre("save", function(next) {
      var timestamp;

      timestamp = Date.now();
      if (this[created] == null) {
        this[created] = timestamp;
      }
      this[lastUpdated] = timestamp;
      return next();
    });
  };

}).call(this);
