// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "smog/routes", "smog/notify"], function(server, routes, notify) {
    return server.ready(function(services) {
      console.log("Connected - Available services: " + services);
      return $.routes(routes);
    });
  });

}).call(this);
