const Router = function() {
  return {
    bind(url, method, cb) {
      this.url = url;
      this.method = method;
      this.cb = cb;
    },
    runRequest(url, method) {
      if (url === this.url && method === this.method) {
        return this.cb();
      } else {
        return "Error 404: Not Found";
      }
    }
  };
};

module.exports = Router;
